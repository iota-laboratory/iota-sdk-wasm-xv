import { HexEncodedString } from '../../utils';
import { OutputId } from '../output';
/**
 * All of the transaction input types.
 */
declare enum InputType {
    /** A UTXO input. */
    UTXO = 0,
    /** The treasury input. */
    Treasury = 1
}
/**
 * The base class for transaction inputs.
 */
declare abstract class Input {
    readonly type: InputType;
    /**
     * @param type The type of input.
     */
    constructor(type: InputType);
    /**
     * Get the type of input.
     */
    getType(): InputType;
}
/**
 * A Treasury input.
 */
declare class TreasuryInput extends Input {
    /**
     * The milestone id of the input.
     */
    milestoneId: HexEncodedString;
    /**
     * @param milestoneId The milestone id of the input.
     */
    constructor(milestoneId: HexEncodedString);
}
/**
 * A UTXO transaction input.
 */
declare class UTXOInput extends Input {
    /**
     * The transaction ID.
     */
    transactionId: HexEncodedString;
    /**
     * The output index.
     */
    transactionOutputIndex: number;
    /**
     * @param transactionId The ID of the transaction it is an input of.
     * @param transactionOutputIndex The index of the input within the transaction.
     */
    constructor(transactionId: HexEncodedString, transactionOutputIndex: number);
    /**
     * Create a `UTXOInput` from a given output ID.
     */
    static fromOutputId(outputId: OutputId): UTXOInput;
}
declare const InputDiscriminator: {
    property: string;
    subTypes: ({
        value: typeof TreasuryInput;
        name: any;
    } | {
        value: typeof UTXOInput;
        name: any;
    })[];
};
export { InputDiscriminator, InputType, Input, TreasuryInput, UTXOInput };
