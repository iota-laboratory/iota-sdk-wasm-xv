import { NumericString } from '../../utils';
import { Address, AliasAddress } from '../address';
/**
 * All of the unlock condition types.
 */
declare enum UnlockConditionType {
    /** An address unlock condition. */
    Address = 0,
    /** A storage deposit return unlock condition. */
    StorageDepositReturn = 1,
    /** A timelock unlock condition. */
    Timelock = 2,
    /** An expiration unlock condition. */
    Expiration = 3,
    /** A state controller address unlock condition. */
    StateControllerAddress = 4,
    /** A governor address unlock condition. */
    GovernorAddress = 5,
    /** An immutable alias address unlock condition. */
    ImmutableAliasAddress = 6
}
declare abstract class UnlockCondition {
    readonly type: UnlockConditionType;
    /**
     * @param type The type of the unlock condition.
     */
    constructor(type: UnlockConditionType);
    /**
     * Get the type of unlock condition.
     */
    getType(): UnlockConditionType;
    /**
     * Parse an unlock condition from a plain JS JSON object.
     */
    static parse(data: any): UnlockCondition;
}
/**
 * An address unlock condition.
 */
declare class AddressUnlockCondition extends UnlockCondition {
    /**
     * An address unlocked with a private key.
     */
    readonly address: Address;
    /**
     * @param address The address that needs to be unlocked with a private key.
     */
    constructor(address: Address);
    /**
     * Get the address.
     */
    getAddress(): Address;
}
/**
 * A Storage Deposit Return Unlock Condition.
 */
declare class StorageDepositReturnUnlockCondition extends UnlockCondition {
    /**
     * The amount the consuming transaction must deposit to `returnAddress`.
     */
    readonly amount: NumericString;
    /**
     * The address to return the amount to.
     */
    readonly returnAddress: Address;
    /**
     * @param returnAddress The address to return the amount to.
     * @param amount The amount the consuming transaction must deposit to `returnAddress`.
     */
    constructor(returnAddress: Address, amount: bigint | NumericString);
    /**
     * Get the amount.
     */
    getAmount(): bigint;
    /**
     * Get the return address.
     */
    getReturnAddress(): Address;
}
/**
 * A Timelock Unlock Condition.
 */
declare class TimelockUnlockCondition extends UnlockCondition {
    /**
     * The Unix time (seconds since Unix epoch) starting from which the output can be consumed.
     */
    readonly unixTime: number;
    /**
     * @param unixTime The Unix timestamp marking the end of the timelock.
     */
    constructor(unixTime: number);
    /**
     * Get the end of the timelock as Unix time.
     */
    getUnixTime(): number;
}
/**
 * An Expiration Unlock Condition.
 */
declare class ExpirationUnlockCondition extends UnlockCondition {
    /**
     * The return address if the output was not claimed in time.
     */
    readonly returnAddress: Address;
    /**
     * Before this timestamp, the condition is allowed to unlock the output,
     * after that only the address defined in return address.
     */
    readonly unixTime: number;
    /**
     * @param returnAddress The address that can unlock the expired output.
     * @param unixTime The Unix timestamp marking the end of the claim period.
     */
    constructor(returnAddress: Address, unixTime: number);
    /**
     * Get the end of the expiration period as Unix time.
     */
    getUnixTime(): number;
    /**
     * Get the return address.
     */
    getReturnAddress(): Address;
}
/**
 * A State Controller Address Unlock Condition.
 */
declare class StateControllerAddressUnlockCondition extends UnlockCondition {
    readonly address: Address;
    /**
     * @param address The State Controller address that is allowed to do state transitions.
     */
    constructor(address: Address);
    /**
     * Get the State Controller address.
     */
    getAddress(): Address;
}
/**
 * A Governor Address Unlock Condition.
 */
declare class GovernorAddressUnlockCondition extends UnlockCondition {
    readonly address: Address;
    /**
     * @param address The governor address that is allowed to do governance transitions.
     */
    constructor(address: Address);
    /**
     * Get the Governor address.
     */
    getAddress(): Address;
}
/**
 * An Immutable Alias Address Unlock Condition.
 */
declare class ImmutableAliasAddressUnlockCondition extends UnlockCondition {
    readonly address: Address;
    /**
     * @param address The Immutable Alias address that owns the output.
     */
    constructor(address: AliasAddress);
    /**
     * Get the Immutable Alias address.
     */
    getAddress(): Address;
}
declare const UnlockConditionDiscriminator: {
    property: string;
    subTypes: ({
        value: typeof AddressUnlockCondition;
        name: any;
    } | {
        value: typeof StorageDepositReturnUnlockCondition;
        name: any;
    } | {
        value: typeof TimelockUnlockCondition;
        name: any;
    } | {
        value: typeof ExpirationUnlockCondition;
        name: any;
    })[];
};
export { UnlockConditionDiscriminator, UnlockCondition, UnlockConditionType, AddressUnlockCondition, StorageDepositReturnUnlockCondition, TimelockUnlockCondition, ExpirationUnlockCondition, StateControllerAddressUnlockCondition, GovernorAddressUnlockCondition, ImmutableAliasAddressUnlockCondition, };
