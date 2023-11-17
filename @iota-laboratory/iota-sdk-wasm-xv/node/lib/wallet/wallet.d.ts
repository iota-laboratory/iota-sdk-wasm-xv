import { Account } from './account';
import type { AccountId, WalletOptions, CreateAccountPayload, WalletEventType, GenerateAddressOptions, SyncOptions, WalletEvent, Event } from '../types/wallet';
import { IAuth, IClientOptions, LedgerNanoStatus } from '../types/client';
import { Client } from '../client';
import { SecretManager } from '../secret_manager';
/** The Wallet class. */
export declare class Wallet {
    private methodHandler;
    /**
     * @param options Wallet options.
     */
    constructor(options: WalletOptions);
    /**
     * Backup the data to a Stronghold snapshot.
     */
    backup(destination: string, password: string): Promise<void>;
    /**
     * Change the Stronghold password.
     */
    changeStrongholdPassword(currentPassword: string, newPassword: string): Promise<void>;
    /**
     * Clear the Stronghold password from memory.
     */
    clearStrongholdPassword(): Promise<void>;
    /**
     * Create a new account.
     */
    createAccount(data: CreateAccountPayload): Promise<Account>;
    /**
     * Destroy the Wallet and drop its database connection.
     */
    destroy(): Promise<void>;
    /**
     * Emit a provided event for testing of the event system.
     */
    emitTestEvent(event: WalletEvent): Promise<void>;
    /**
     * Get an account by its alias or index.
     */
    getAccount(accountId: AccountId): Promise<Account>;
    /**
     * Get all account indexes.
     */
    getAccountIndexes(): Promise<number[]>;
    /**
     * Get all accounts.
     */
    getAccounts(): Promise<Account[]>;
    /**
     * Get client.
     */
    getClient(): Promise<Client>;
    /**
     * Get chrysalis data.
     */
    getChrysalisData(): Promise<Record<string, string>>;
    /**
     * Get secret manager.
     */
    getSecretManager(): Promise<SecretManager>;
    /**
     * Generate an address without storing it.
     */
    generateEd25519Address(accountIndex: number, addressIndex: number, options?: GenerateAddressOptions, bech32Hrp?: string): Promise<string>;
    /**
     * Get the status for a Ledger Nano.
     */
    getLedgerNanoStatus(): Promise<LedgerNanoStatus>;
    /**
     * Check if the Stronghold password has been set.
     */
    isStrongholdPasswordAvailable(): Promise<boolean>;
    /**
     * Listen to wallet events with a callback. An empty array will listen to all possible events.
     */
    listen(eventTypes: WalletEventType[], callback: (error: Error, event: Event) => void): Promise<void>;
    /**
     * Clear the callbacks for provided events. An empty array will clear all listeners.
     */
    clearListeners(eventTypes: WalletEventType[]): Promise<void>;
    /**
     * Find accounts with unspent outputs.
     */
    recoverAccounts(accountStartIndex: number, accountGapLimit: number, addressGapLimit: number, syncOptions: SyncOptions): Promise<Account[]>;
    /**
     * Delete the latest account.
     */
    removeLatestAccount(): Promise<void>;
    /**
     * Restore a backup from a Stronghold file
     * Replaces client_options, coin_type, secret_manager and accounts. Returns an error if accounts were already created
     * If Stronghold is used as secret_manager, the existing Stronghold file will be overwritten. If a mnemonic was
     * stored, it will be gone.
     * if ignore_if_coin_type_mismatch is provided client options will not be restored
     * if ignore_if_coin_type_mismatch == true, client options coin type and accounts will not be restored if the cointype doesn't match
     * if ignore_if_bech32_hrp_mismatch == Some("rms"), but addresses have something different like "smr", no accounts
     * will be restored.
     */
    restoreBackup(source: string, password: string, ignoreIfCoinTypeMismatch?: boolean, ignoreIfBech32Mismatch?: string): Promise<void>;
    /**
     * Set ClientOptions.
     */
    setClientOptions(clientOptions: IClientOptions): Promise<void>;
    /**
     * Set the Stronghold password.
     */
    setStrongholdPassword(password: string): Promise<void>;
    /**
     * Set the interval after which the Stronghold password gets cleared from memory.
     */
    setStrongholdPasswordClearInterval(intervalInMilliseconds?: number): Promise<void>;
    /**
     * Start the background syncing process for all accounts.
     */
    startBackgroundSync(options?: SyncOptions, intervalInMilliseconds?: number): Promise<void>;
    /**
     * Stop the background syncing process for all accounts.
     */
    stopBackgroundSync(): Promise<void>;
    /**
     * Store a mnemonic in the Stronghold snapshot.
     */
    storeMnemonic(mnemonic: string): Promise<void>;
    /**
     * Update the authentication for the provided node.
     */
    updateNodeAuth(url: string, auth?: IAuth): Promise<void>;
}
