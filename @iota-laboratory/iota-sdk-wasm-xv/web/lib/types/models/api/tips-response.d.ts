import type { HexEncodedString } from '../../utils/hex-encoding';
/**
 * Response from the tips endpoint.
 */
export interface ITipsResponse {
    /**
     * The block ids of the tip.
     */
    tips: HexEncodedString[];
}
