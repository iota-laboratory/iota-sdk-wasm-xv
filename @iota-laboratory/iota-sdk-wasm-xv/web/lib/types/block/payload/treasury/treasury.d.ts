import { TreasuryInput } from '../../input';
import { TreasuryOutput } from '../../output';
import { Payload } from '../payload';
/**
 * A treasury transaction payload.
 */
declare class TreasuryTransactionPayload extends Payload {
    /**
     * The input of this transaction.
     */
    input: TreasuryInput;
    /**
     * The output of this transaction.
     */
    output: TreasuryOutput;
    /**
     * @param input A Treasury input.
     * @param output A Treasury output.
     */
    constructor(input: TreasuryInput, output: TreasuryOutput);
}
export { TreasuryTransactionPayload };
