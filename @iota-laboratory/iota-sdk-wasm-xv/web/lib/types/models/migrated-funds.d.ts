import { Address } from '../block/address';
import type { HexEncodedString } from '../utils/hex-encoding';
/**
 * The migrated funds for receipts.
 */
export declare class MigratedFunds {
    /**
     * The tail transaction hash of the migration bundle.
     */
    tailTransactionHash: HexEncodedString;
    /**
     * The target address of the migrated funds.
     */
    address: Address;
    /**
     * The amount of the deposit.
     */
    deposit: string;
}
