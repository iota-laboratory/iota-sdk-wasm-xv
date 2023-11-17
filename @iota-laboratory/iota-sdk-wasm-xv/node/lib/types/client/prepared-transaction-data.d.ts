import { Address } from '../block/address';
import { Output } from '../block/output/output';
import { TransactionEssence } from '../block/payload/transaction/essence';
import { IOutputMetadataResponse } from '../models/api';
import { Bip44 } from '../secret_manager';
/**
 * Helper struct for offline signing.
 */
export declare class PreparedTransactionData {
    /**
     * Transaction essence
     */
    essence: TransactionEssence;
    /**
     * Required address information for signing
     */
    inputsData: InputSigningData[];
    /**
     * Optional remainder output information
     */
    remainder?: Remainder;
}
/**
 * Data for transaction inputs for signing and ordering of unlock blocks.
 */
export declare class InputSigningData {
    /**
     * The output
     */
    output: Output;
    /**
     * The output metadata
     */
    outputMetadata: IOutputMetadataResponse;
    /**
     * The chain derived from seed, only for ed25519 addresses
     */
    chain?: Bip44;
}
/**
 * Data for a remainder output, used for Ledger Nano.
 */
export declare class Remainder {
    /**
     * The remainder output.
     */
    output: Output;
    /**
     * The chain derived from seed, for the remainder addresses.
     */
    chain?: Bip44;
    /**
     * The remainder address.
     */
    address: Address;
}
