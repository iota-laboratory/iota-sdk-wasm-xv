import type { HexEncodedString } from '../utils/hex-encoding';
/**
 * Native token.
 */
export interface INativeToken {
    /**
     * Identifier of the native token.
     */
    id: HexEncodedString;
    /**
     * Amount of native tokens of the given Token ID.
     */
    amount: bigint;
}
