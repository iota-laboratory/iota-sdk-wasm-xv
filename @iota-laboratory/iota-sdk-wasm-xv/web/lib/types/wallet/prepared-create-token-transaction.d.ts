import { Account, PreparedCreateNativeTokenTransactionData } from '../..';
import { PreparedTransaction } from './prepared-transaction';
export declare class PreparedCreateNativeTokenTransaction extends PreparedTransaction {
    readonly _tokenId: string;
    /**
     * @param preparedData Prepared data to create a Native Token.
     * @param account A wallet account.
     */
    constructor(preparedData: PreparedCreateNativeTokenTransactionData, account: Account);
    /**
     * The function returns the tokenId as a string.
     *
     * Returns:
     *
     * The token id of the CreateNativeTokenTransaction.
     */
    tokenId(): string;
}
