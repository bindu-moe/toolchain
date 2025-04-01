// Interface für die App-API
export interface AppInterface {
  createByteArray?: (rawData: any) => Uint8Array;
  createRawData?: (params: { byteArray: Uint8Array }) => any;
  createRequestManager?: (info: any) => any;
  createSourceStateManager?: () => any;
  [key: string]: any;
}

export const BinduPolyfills: AppInterface = {}