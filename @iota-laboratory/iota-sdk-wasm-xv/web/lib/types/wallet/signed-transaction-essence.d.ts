import { TransactionPayload } from '../block/payload/transaction';
import { InputSigningData } from '../client';
/** The signed transaction with inputs data */
export declare class SignedTransactionEssence {
    /** A transaction payload. */
    transactionPayload: TransactionPayload;
    /** Signed inputs data. */
    inputsData: InputSigningData;
}
