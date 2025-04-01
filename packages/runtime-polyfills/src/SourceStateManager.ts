import { SecureStateManager, SourceStateManager } from "@bindu-moe/types"
import { BinduPolyfills } from "./BinduPolyfills"

class MockSecureStateManager implements SecureStateManager {
    private objectStore: Record<string, any> = {}

    async store(key: string, value: any) {
        this.objectStore[key] = value
    }

    async retrieve(key: string) {
        return this.objectStore[key]
    }
}

class MockSourceStateManager implements SourceStateManager {
    readonly keychain: SecureStateManager = new MockSecureStateManager()
    private objectStore: Record<string, any> = {}

    async store(key: string, value: any) {
        this.objectStore[key] = value
    }

    async retrieve(key: string) {
        return this.objectStore[key]
    }
}

BinduPolyfills.createSourceStateManager = function (): SourceStateManager {
    return new MockSourceStateManager()
}