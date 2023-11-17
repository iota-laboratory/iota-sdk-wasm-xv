import { TreasuryTransactionPayload } from '../../block/payload/treasury/treasury';
import { MigratedFunds } from '../migrated-funds';
import { MilestoneOption } from './milestone-options';
/**
 * A Receipt milestone option.
 */
export declare class ReceiptMilestoneOption extends MilestoneOption {
    /**
     * The milestone index at which the funds were migrated in the legacy network.
     */
    migratedAt: number;
    /**
     * Whether this Receipt is the final one for a given migrated at index.
     */
    final: boolean;
    /**
     * The funds which were migrated.
     */
    funds: MigratedFunds[];
    /**
     * The Treasury Transaction used to provide the funds.
     */
    transaction: TreasuryTransactionPayload;
    /**
     * @param migratedAt The milestone index at which the funds were migrated in the legacy network.
     * @param final Whether this Receipt is the final one for a given migrated at index.
     * @param funds The funds which were migrated.
     * @param transaction The Treasury Transaction used to provide the funds.
     */
    constructor(migratedAt: number, final: boolean, funds: MigratedFunds[], transaction: TreasuryTransactionPayload);
}
