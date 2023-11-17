import type { HexEncodedString } from '../utils/hex-encoding';
import { Payload } from './payload';
import { NumericString } from '../utils/numeric';
/**
 * Block layout.
 */
export declare class Block {
    /**
     * The protocol version under which this block operates.
     */
    protocolVersion: number;
    /**
     * The parent block ids.
     */
    parents: HexEncodedString[];
    /**
     * The payload contents.
     */
    payload?: Payload;
    /**
     * The nonce for the block.
     */
    nonce: NumericString;
}
