import type { HexEncodedString } from '../../utils/hex-encoding';
/**
 * The milestone info.
 */
export interface INodeInfoMilestone {
    /**
     * The milestone index.
     */
    index: number;
    /**
     * The milestone timestamp.
     */
    timestamp?: number;
    /**
     * The milestone id.
     */
    milestoneId?: HexEncodedString;
}
