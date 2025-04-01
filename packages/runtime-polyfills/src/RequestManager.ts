import { RequestManager, Request, Response, SourceInterceptor } from "@bindu-moe/types"
import { BinduPolyfills } from "./BinduPolyfills"
import axios, { Method } from 'axios'

class MockRequestManager implements RequestManager {
    requestTimeout: number
    requestsPerSecond: number

    constructor(
        public interceptor?: SourceInterceptor,
        requestsPerSecond?: number,
        requestTimeout?: number
    ) {
        this.requestTimeout = requestTimeout ?? 20_000
        this.requestsPerSecond = requestsPerSecond ?? 2.5
    }

    async getDefaultUserAgent() {
        return ''
    }

    async schedule(request: Request, retryCount?: number): Promise<Response> {
        let res = (await axios({
            method: request.method as Method,
            url: request.url,
            data: request.data,
            headers: request.headers,
            timeout: this.requestTimeout
        }))

        return createResponse(request, res)
    }

    async schedule_bulk(requestArray: Request[], retryCount?: number): Promise<Response[]> {
        return await Promise.all(requestArray.map(x => this.schedule(x, retryCount)))
    }

    async scheduleWithTimeout(timeout: number, request: Request, retryCount?: number): Promise<Response> {
        return await this.schedule(request, retryCount)
    }
}

function createResponse(request: Request, axios_response: any): Response {
    const buffer = axios_response.data instanceof Buffer
    if (axios_response.headers["content-type"]?.includes("image/") && !buffer) {
        // Convert response data to buffer if we're getting an image
        return {
            status: axios_response.status,
            headers: axios_response.headers,
            request,
            data: Buffer.from(axios_response.data, 'binary').toString('binary')
        }
    }

    if (buffer) {
        return {
            status: axios_response.status,
            headers: axios_response.headers,
            request,
            rawData: BinduPolyfills.createRawData?.({byteArray: (axios_response.data as Buffer)}) ?? axios_response.data,
            data: undefined
        }
    }

    return {
        status: axios_response.status,
        headers: axios_response.headers,
        request,
        data: axios_response.data
    }
}

BinduPolyfills.createRequestManager = function (info: Record<string, any>): RequestManager {
    return new MockRequestManager(info?.interceptor, info?.requestsPerSecond, info?.requestTimeout)
}