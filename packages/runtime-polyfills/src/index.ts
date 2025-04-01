import { BinduPolyfills } from "./BinduPolyfills"
import './RawData'
import './RequestManager'
import './SourceStateManager'

// @ts-ignore
globalThis.App = new Proxy(BinduPolyfills, {
	get(target, p) {
		// @ts-ignore
		if(target[p]) {
			// @ts-ignore
			return target[p]
		}

		if(typeof p === 'string' && p.startsWith('create')) {
			return (anyProps: any) => anyProps
		}

		return undefined
	}
})