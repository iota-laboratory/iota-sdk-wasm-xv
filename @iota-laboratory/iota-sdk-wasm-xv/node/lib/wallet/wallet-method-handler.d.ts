import type { WalletEventType, WalletOptions, __Method__, __AccountMethod__, AccountId, Event } from '../types/wallet';
import { Client } from '../client';
import { SecretManager } from '../secret_manager';
export declare class WalletMethodHandler {
    methodHandler: any;
    /**
     * @param options The wallet options.
     */
    constructor(options?: WalletOptions);
    /**
     * Call a wallet method on the Rust backend.
     *
     * @param method The wallet method to call.
     */
    callMethod(method: __Method__): Promise<string>;
    /**
     * Call an account method on the Rust backend.
     *
     * @param accountIndex The account index.
     * @param method The account method to call.
     */
    callAccountMethod(accountIndex: AccountId, method: __AccountMethod__): Promise<string>;
    /**
     * Listen to wallet events.
     *
     * @param eventTypes The wallet event types to listen for.
     * @param callback The callback function to call when an event is received.
     */
    listen(eventTypes: WalletEventType[], callback: (error: Error, event: Event) => void): Promise<void>;
    destroy(): Promise<void>;
    /**
     * Get the client associated with the wallet.
     */
    getClient(): Promise<Client>;
    /**
     * Get the secret manager associated with the wallet.
     */
    getSecretManager(): Promise<SecretManager>;
}
