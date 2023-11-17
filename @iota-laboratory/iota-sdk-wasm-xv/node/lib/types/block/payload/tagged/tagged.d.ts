import { HexEncodedString } from '../../../utils/hex-encoding';
import { Payload } from '../payload';
/**
 * A Tagged Data payload.
 */
declare class TaggedDataPayload extends Payload {
    /**
     * The tag to use to categorize the data.
     */
    tag: HexEncodedString;
    /**
     * The index data.
     */
    data: HexEncodedString;
    /**
     * @param tag A tag as hex-encoded string.
     * @param data Index data as hex-encoded string.
     */
    constructor(tag: HexEncodedString, data: HexEncodedString);
}
export { TaggedDataPayload };
