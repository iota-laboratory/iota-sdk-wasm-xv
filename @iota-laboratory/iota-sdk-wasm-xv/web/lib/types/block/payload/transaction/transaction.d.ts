import { TransactionEssence, Unlock } from '.';
import { Payload } from '../payload';
/**
 * Transaction payload.
 */
declare class TransactionPayload extends Payload {
    /**
     * The index name.
     */
    essence: TransactionEssence;
    /**
     * The unlocks.
     */
    unlocks: Unlock[];
    /**
     * @param essence The transaction essence.
     * @param unlocks The unlocks of the transaction.
     */
    constructor(essence: TransactionEssence, unlocks: Unlock[]);
}
export { TransactionPayload };
