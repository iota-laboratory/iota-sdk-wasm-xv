import { SecretManagerMethodHandler } from './secret-manager-method-handler';
import type { IGenerateAddressesOptions, PreparedTransactionData, LedgerNanoStatus } from '../types/client';
import { Bip44, Secp256k1EcdsaSignature, SecretManagerType } from '../types/secret_manager';
import { Ed25519Signature, HexEncodedString, TransactionPayload, Unlock } from '../types';
/** The SecretManager to interact with nodes. */
export declare class SecretManager {
    private methodHandler;
    /**
     * @param options A secret manager type or a secret manager method handler.
     */
    constructor(options: SecretManagerType | SecretManagerMethodHandler);
    /**
     * Generate Ed25519 addresses.
     *
     * @param generateAddressesOptions Options to generate addresses.
     * @returns An array of generated addresses.
     */
    generateEd25519Addresses(generateAddressesOptions: IGenerateAddressesOptions): Promise<string[]>;
    /**
     * Generate EVM addresses.
     *
     * @param generateAddressesOptions Options to generate addresses.
     * @returns An array of generated addresses.
     */
    generateEvmAddresses(generateAddressesOptions: IGenerateAddressesOptions): Promise<HexEncodedString[]>;
    /**
     * Store a mnemonic in the Stronghold vault.
     *
     * @param mnemonic The mnemonic to store.
     */
    storeMnemonic(mnemonic: string): Promise<void>;
    /**
     * Sign a transaction.
     *
     * @param preparedTransactionData An instance of `PreparedTransactionData`.
     * @returns The corresponding transaction payload.
     */
    signTransaction(preparedTransactionData: PreparedTransactionData): Promise<TransactionPayload>;
    /**
     * Create a signature unlock using the provided `secretManager`.
     *
     * @param transactionEssenceHash The hash of the transaction essence.
     * @param chain A BIP44 chain.
     * @returns The corresponding unlock.
     */
    signatureUnlock(transactionEssenceHash: HexEncodedString, chain: Bip44): Promise<Unlock>;
    /**
     * Signs a message with an Ed25519 private key.
     *
     * @param message The message to sign.
     * @param chain A BIP44 chain.
     * @returns The corresponding signature.
     */
    signEd25519(message: HexEncodedString, chain: Bip44): Promise<Ed25519Signature>;
    /**
     * Signs a message with an Secp256k1Ecdsa private key.
     *
     * @param message The message to sign.
     * @param chain A BIP44 chain.
     * @returns The corresponding signature.
     */
    signSecp256k1Ecdsa(message: HexEncodedString, chain: Bip44): Promise<Secp256k1EcdsaSignature>;
    /**
     * Get the status of a Ledger Nano.
     */
    getLedgerNanoStatus(): Promise<LedgerNanoStatus>;
}
