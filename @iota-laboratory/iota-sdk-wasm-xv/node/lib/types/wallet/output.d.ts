import { Address } from '../block/address';
import { Output, OutputId } from '../block/output';
import { IOutputMetadataResponse } from '../models/api';
/** Output to claim */
export declare enum OutputsToClaim {
    MicroTransactions = "MicroTransactions",
    NativeTokens = "NativeTokens",
    Nfts = "Nfts",
    Amount = "Amount",
    All = "All"
}
/** An output with metadata */
export declare class OutputData {
    /** The identifier of an Output */
    outputId: OutputId;
    /** The metadata of the output */
    metadata: IOutputMetadataResponse;
    /** The actual Output */
    output: Output;
    /** If an output is spent */
    isSpent: boolean;
    /** Associated account address */
    address: Address;
    /** Network ID */
    networkId: string;
    /** Remainder */
    remainder: boolean;
    /** BIP32 path */
    chain?: Segment[];
}
/** A Segment of the BIP32 path*/
export interface Segment {
    /** Whether the segment is hardened. */
    hardened: boolean;
    /** The bytes of the segment. */
    bs: Uint8Array;
}
