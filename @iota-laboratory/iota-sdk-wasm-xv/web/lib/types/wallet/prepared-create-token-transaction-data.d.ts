import { Transaction } from './transaction';
import { PreparedTransactionData } from '../client/prepared-transaction-data';
/** The result of preparing an operation to create a native token. */
export declare class PreparedCreateNativeTokenTransactionData {
    /** The token id of the minted token */
    tokenId: string;
    /** The prepared transaction which will mint the token */
    transaction: PreparedTransactionData;
}
/** The result of an operation to create a native token. */
export declare class CreateNativeTokenTransaction {
    /** The token id of the minted token */
    tokenId: string;
    /** The transaction which minted the token */
    transaction: Transaction;
}
