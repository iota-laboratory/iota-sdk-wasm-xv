import type { OutputData } from './output';
import { InclusionState } from './transaction';
import { InputSigningData, Remainder } from '../client';
import { TransactionEssence, TransactionPayload } from '../block';
import { OutputResponse } from '../models';
/**
 * A Transaction ID represented as hex-encoded string.
 */
export type TransactionId = string;
/**
 * An wallet account event.
 */
declare class Event {
    /**
     * The account index for which the event was emitted.
     */
    accountIndex: number;
    /**
     * The wallet event.
     */
    event: WalletEvent;
    /**
     * @param accountIndex The account index.
     * @param event The wallet event.
     */
    constructor(accountIndex: number, event: WalletEvent);
}
/**
 * All of the wallet event types.
 */
declare enum WalletEventType {
    /** Consolidation is required. */
    ConsolidationRequired = 0,
    /** Nano Ledger has generated an address. */
    LedgerAddressGeneration = 1,
    /** A new output was created. */
    NewOutput = 2,
    /** An output was spent. */
    SpentOutput = 3,
    /** A transaction was included into the ledger. */
    TransactionInclusion = 4,
    /** A progress update while submitting a transaction. */
    TransactionProgress = 5
}
/**
 * The base class for wallet events.
 */
declare abstract class WalletEvent {
    type: WalletEventType;
    /**
     * @param type The type of wallet event.
     */
    constructor(type: WalletEventType);
}
/**
 * A 'consolidation required' wallet event.
 */
declare class ConsolidationRequiredWalletEvent extends WalletEvent {
    constructor();
}
/**
 * A 'ledger address generation' wallet event.
 */
declare class LedgerAddressGenerationWalletEvent extends WalletEvent {
    address: string;
    /**
     * @param address The generated address.
     */
    constructor(address: string);
}
/**
 * A 'new output' wallet event.
 */
declare class NewOutputWalletEvent extends WalletEvent {
    output: OutputData;
    transaction?: TransactionPayload;
    transactionInputs?: OutputResponse[];
    /**
     * @param output The new output.
     * @param transaction The transaction that created the output. Might be pruned and not available.
     * @param transactionInputs The inputs for the transaction that created the output. Might be pruned and not available.
     */
    constructor(output: OutputData, transaction?: TransactionPayload, transactionInputs?: OutputResponse[]);
}
/**
 * A 'spent output' wallet event.
 */
declare class SpentOutputWalletEvent extends WalletEvent {
    output: OutputData;
    /**
     * @param output The spent output.
     */
    constructor(output: OutputData);
}
/**
 * A 'transaction inclusion' wallet event.
 */
declare class TransactionInclusionWalletEvent extends WalletEvent {
    transactionId: TransactionId;
    inclusionState: InclusionState;
    /**
     * @param transactionId The transaction ID.
     * @param inclusionState The inclusion state of the transaction.
     */
    constructor(transactionId: TransactionId, inclusionState: InclusionState);
}
/**
 * All of the transaction progress types.
 */
declare enum TransactionProgressType {
    /** Performing input selection. */
    SelectingInputs = 0,
    /** Generating remainder value deposit address. */
    GeneratingRemainderDepositAddress = 1,
    /** Prepared transaction. */
    PreparedTransaction = 2,
    /** Prepared transaction essence hash hex encoded, required for blindsigning with a Ledger Nano. */
    PreparedTransactionEssenceHash = 3,
    /** Signing the transaction. */
    SigningTransaction = 4,
    /** Performing PoW. */
    PerformingPow = 5,
    /** Broadcasting. */
    Broadcasting = 6
}
/**
 * A 'transaction progress' wallet event.
 */
declare class TransactionProgressWalletEvent extends WalletEvent {
    progress: TransactionProgress;
    /**
     * @param progress The progress of the transaction.
     */
    constructor(progress: TransactionProgress);
}
/**
 * The base class for transaction progresses.
 */
declare abstract class TransactionProgress {
    type: TransactionProgressType;
    /**
     * @param type The type of transaction progress.
     */
    constructor(type: TransactionProgressType);
}
/**
 * A 'selecting inputs' progress.
 */
declare class SelectingInputsProgress extends TransactionProgress {
    constructor();
}
/**
 * A 'generating remainder deposit address' progress.
 */
declare class GeneratingRemainderDepositAddressProgress extends TransactionProgress {
    address: string;
    /**
     * @param address The generated remainder deposit address.
     */
    constructor(address: string);
}
/**
 * A 'prepared transaction' progress.
 */
declare class PreparedTransactionProgress extends TransactionProgress {
    essence: TransactionEssence;
    inputsData: InputSigningData[];
    remainder?: Remainder;
    /**
     * @param essence The essence of the prepared transaction.
     * @param inputsData Input signing parameters.
     * @param remainder Remainder output parameters.
     */
    constructor(essence: TransactionEssence, inputsData: InputSigningData[], remainder?: Remainder);
}
/**
 * A 'prepared transaction essence hash' progress.
 */
declare class PreparedTransactionEssenceHashProgress extends TransactionProgress {
    hash: string;
    /**
     * @param hash The hash of the transaction essence.
     */
    constructor(hash: string);
}
/**
 * A 'signing transaction' progress.
 */
declare class SigningTransactionProgress extends TransactionProgress {
    constructor();
}
/**
 * A 'performing PoW' progress.
 */
declare class PerformingPowProgress extends TransactionProgress {
    constructor();
}
/**
 * A 'broadcasting' progress.
 */
declare class BroadcastingProgress extends TransactionProgress {
    constructor();
}
export { Event, WalletEventType, WalletEvent, ConsolidationRequiredWalletEvent, LedgerAddressGenerationWalletEvent, NewOutputWalletEvent, SpentOutputWalletEvent, TransactionInclusionWalletEvent, TransactionProgressWalletEvent, TransactionProgress, SelectingInputsProgress, GeneratingRemainderDepositAddressProgress, PreparedTransactionProgress, PreparedTransactionEssenceHashProgress, SigningTransactionProgress, PerformingPowProgress, BroadcastingProgress, TransactionProgressType, };
