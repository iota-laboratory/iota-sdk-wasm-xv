import { Output } from '../../block/output';
import type { IOutputMetadataResponse } from './output-metadata-response';
/**
 * Details of an output.
 */
export declare class OutputResponse {
    /**
     * The metadata about the output.
     */
    metadata: IOutputMetadataResponse;
    /**
     * The output.
     */
    output: Output;
}
