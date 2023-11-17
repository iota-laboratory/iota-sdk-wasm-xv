import { HexEncodedString } from '../../../utils';
import { Input } from '../../input';
import { Output } from '../../output';
import { Payload } from '../payload';
/**
 * All of the essence types.
 */
declare enum TransactionEssenceType {
    /**
     * A regular transaction essence.
     */
    Regular = 1
}
/**
 * The base class for transaction essences.
 */
declare abstract class TransactionEssence {
    readonly type: TransactionEssenceType;
    /**
     * @param type The type of transaction essence.
     */
    constructor(type: TransactionEssenceType);
    /**
     * Get the type of essence.
     */
    getType(): TransactionEssenceType;
}
/**
 * RegularTransactionEssence transaction essence.
 */
declare class RegularTransactionEssence extends TransactionEssence {
    networkId: string;
    inputsCommitment: HexEncodedString;
    inputs: Input[];
    outputs: Output[];
    payload: Payload | undefined;
    /**
     * @param networkId The ID of the network the transaction was issued to.
     * @param inputsCommitment The hash of all inputs.
     * @param inputs The inputs of the transaction.
     * @param outputs The outputs of the transaction.
     * @param payload An optional Tagged Data payload.
     *
     */
    constructor(networkId: string, inputsCommitment: HexEncodedString, inputs: Input[], outputs: Output[], payload: Payload | undefined);
}
declare const TransactionEssenceDiscriminator: {
    property: string;
    subTypes: {
        value: typeof RegularTransactionEssence;
        name: any;
    }[];
};
export { TransactionEssenceDiscriminator, TransactionEssence, TransactionEssenceType, RegularTransactionEssence, };
