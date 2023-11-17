/**
 * All of the block payload types.
 */
declare enum PayloadType {
    /** A milestone payload. */
    Milestone = 7,
    /** A tagged data payload. */
    TaggedData = 5,
    /** A transaction payload. */
    Transaction = 6,
    /** A treasury transaction payload. */
    TreasuryTransaction = 4
}
/**
 * The base class for block payloads.
 */
declare abstract class Payload {
    readonly type: PayloadType;
    /**
     * @param type The type of payload.
     */
    constructor(type: PayloadType);
    /**
     * Get the type of payload.
     */
    getType(): PayloadType;
}
export { PayloadType, Payload };
