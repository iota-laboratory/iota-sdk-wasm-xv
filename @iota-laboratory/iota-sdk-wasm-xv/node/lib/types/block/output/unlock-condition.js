"use strict";
// Copyright 2023 IOTA Stiftung
// SPDX-License-Identifier: Apache-2.0
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImmutableAliasAddressUnlockCondition = exports.GovernorAddressUnlockCondition = exports.StateControllerAddressUnlockCondition = exports.ExpirationUnlockCondition = exports.TimelockUnlockCondition = exports.StorageDepositReturnUnlockCondition = exports.AddressUnlockCondition = exports.UnlockConditionType = exports.UnlockCondition = exports.UnlockConditionDiscriminator = void 0;
const class_transformer_1 = require("class-transformer");
const address_1 = require("../address");
/**
 * All of the unlock condition types.
 */
var UnlockConditionType;
(function (UnlockConditionType) {
    /** An address unlock condition. */
    UnlockConditionType[UnlockConditionType["Address"] = 0] = "Address";
    /** A storage deposit return unlock condition. */
    UnlockConditionType[UnlockConditionType["StorageDepositReturn"] = 1] = "StorageDepositReturn";
    /** A timelock unlock condition. */
    UnlockConditionType[UnlockConditionType["Timelock"] = 2] = "Timelock";
    /** An expiration unlock condition. */
    UnlockConditionType[UnlockConditionType["Expiration"] = 3] = "Expiration";
    /** A state controller address unlock condition. */
    UnlockConditionType[UnlockConditionType["StateControllerAddress"] = 4] = "StateControllerAddress";
    /** A governor address unlock condition. */
    UnlockConditionType[UnlockConditionType["GovernorAddress"] = 5] = "GovernorAddress";
    /** An immutable alias address unlock condition. */
    UnlockConditionType[UnlockConditionType["ImmutableAliasAddress"] = 6] = "ImmutableAliasAddress";
})(UnlockConditionType || (UnlockConditionType = {}));
exports.UnlockConditionType = UnlockConditionType;
class UnlockCondition {
    /**
     * @param type The type of the unlock condition.
     */
    constructor(type) {
        this.type = type;
    }
    /**
     * Get the type of unlock condition.
     */
    getType() {
        return this.type;
    }
    /**
     * Parse an unlock condition from a plain JS JSON object.
     */
    static parse(data) {
        if (data.type == UnlockConditionType.Address) {
            return (0, class_transformer_1.plainToInstance)(AddressUnlockCondition, data);
        }
        else if (data.type == UnlockConditionType.StorageDepositReturn) {
            return (0, class_transformer_1.plainToInstance)(StorageDepositReturnUnlockCondition, data);
        }
        else if (data.type == UnlockConditionType.Timelock) {
            return (0, class_transformer_1.plainToInstance)(TimelockUnlockCondition, data);
        }
        else if (data.type == UnlockConditionType.Expiration) {
            return (0, class_transformer_1.plainToInstance)(ExpirationUnlockCondition, data);
        }
        else if (data.type == UnlockConditionType.StateControllerAddress) {
            return (0, class_transformer_1.plainToInstance)(StateControllerAddressUnlockCondition, data);
        }
        else if (data.type == UnlockConditionType.GovernorAddress) {
            return (0, class_transformer_1.plainToInstance)(GovernorAddressUnlockCondition, data);
        }
        else if (data.type == UnlockConditionType.ImmutableAliasAddress) {
            return (0, class_transformer_1.plainToInstance)(ImmutableAliasAddressUnlockCondition, data);
        }
        throw new Error('Invalid JSON');
    }
}
exports.UnlockCondition = UnlockCondition;
/**
 * An address unlock condition.
 */
class AddressUnlockCondition extends UnlockCondition /*implements IAddressUnlockCondition*/ {
    /**
     * @param address The address that needs to be unlocked with a private key.
     */
    constructor(address) {
        super(UnlockConditionType.Address);
        this.address = address;
    }
    /**
     * Get the address.
     */
    getAddress() {
        return this.address;
    }
}
__decorate([
    (0, class_transformer_1.Type)(() => address_1.Address, {
        discriminator: address_1.AddressDiscriminator,
    })
], AddressUnlockCondition.prototype, "address", void 0);
exports.AddressUnlockCondition = AddressUnlockCondition;
/**
 * A Storage Deposit Return Unlock Condition.
 */
class StorageDepositReturnUnlockCondition extends UnlockCondition /*implements IStorageDepositReturnUnlockCondition*/ {
    /**
     * @param returnAddress The address to return the amount to.
     * @param amount The amount the consuming transaction must deposit to `returnAddress`.
     */
    constructor(returnAddress, amount) {
        super(UnlockConditionType.StorageDepositReturn);
        if (typeof amount == 'bigint') {
            this.amount = amount.toString(10);
        }
        else {
            this.amount = amount;
        }
        this.returnAddress = returnAddress;
    }
    /**
     * Get the amount.
     */
    getAmount() {
        return BigInt(this.amount);
    }
    /**
     * Get the return address.
     */
    getReturnAddress() {
        return this.returnAddress;
    }
}
__decorate([
    (0, class_transformer_1.Type)(() => address_1.Address, {
        discriminator: address_1.AddressDiscriminator,
    })
], StorageDepositReturnUnlockCondition.prototype, "returnAddress", void 0);
exports.StorageDepositReturnUnlockCondition = StorageDepositReturnUnlockCondition;
/**
 * A Timelock Unlock Condition.
 */
class TimelockUnlockCondition extends UnlockCondition /*implements ITimelockUnlockCondition*/ {
    /**
     * @param unixTime The Unix timestamp marking the end of the timelock.
     */
    constructor(unixTime) {
        super(UnlockConditionType.Timelock);
        this.unixTime = unixTime;
    }
    /**
     * Get the end of the timelock as Unix time.
     */
    getUnixTime() {
        return this.unixTime;
    }
}
exports.TimelockUnlockCondition = TimelockUnlockCondition;
/**
 * An Expiration Unlock Condition.
 */
class ExpirationUnlockCondition extends UnlockCondition /*implements IExpirationUnlockCondition*/ {
    /**
     * @param returnAddress The address that can unlock the expired output.
     * @param unixTime The Unix timestamp marking the end of the claim period.
     */
    constructor(returnAddress, unixTime) {
        super(UnlockConditionType.Expiration);
        this.returnAddress = returnAddress;
        this.unixTime = unixTime;
    }
    /**
     * Get the end of the expiration period as Unix time.
     */
    getUnixTime() {
        return this.unixTime;
    }
    /**
     * Get the return address.
     */
    getReturnAddress() {
        return this.returnAddress;
    }
}
__decorate([
    (0, class_transformer_1.Type)(() => address_1.Address, {
        discriminator: address_1.AddressDiscriminator,
    })
], ExpirationUnlockCondition.prototype, "returnAddress", void 0);
exports.ExpirationUnlockCondition = ExpirationUnlockCondition;
/**
 * A State Controller Address Unlock Condition.
 */
class StateControllerAddressUnlockCondition extends UnlockCondition /*implements IStateControllerAddressUnlockCondition*/ {
    /**
     * @param address The State Controller address that is allowed to do state transitions.
     */
    constructor(address) {
        super(UnlockConditionType.StateControllerAddress);
        this.address = address;
    }
    /**
     * Get the State Controller address.
     */
    getAddress() {
        return this.address;
    }
}
__decorate([
    (0, class_transformer_1.Type)(() => address_1.Address, {
        discriminator: address_1.AddressDiscriminator,
    })
], StateControllerAddressUnlockCondition.prototype, "address", void 0);
exports.StateControllerAddressUnlockCondition = StateControllerAddressUnlockCondition;
/**
 * A Governor Address Unlock Condition.
 */
class GovernorAddressUnlockCondition extends UnlockCondition /*implements IGovernorAddressUnlockCondition*/ {
    /**
     * @param address The governor address that is allowed to do governance transitions.
     */
    constructor(address) {
        super(UnlockConditionType.GovernorAddress);
        this.address = address;
    }
    /**
     * Get the Governor address.
     */
    getAddress() {
        return this.address;
    }
}
__decorate([
    (0, class_transformer_1.Type)(() => address_1.Address, {
        discriminator: address_1.AddressDiscriminator,
    })
], GovernorAddressUnlockCondition.prototype, "address", void 0);
exports.GovernorAddressUnlockCondition = GovernorAddressUnlockCondition;
/**
 * An Immutable Alias Address Unlock Condition.
 */
class ImmutableAliasAddressUnlockCondition extends UnlockCondition /*implements IImmutableAliasAddressUnlockCondition*/ {
    /**
     * @param address The Immutable Alias address that owns the output.
     */
    constructor(address) {
        super(UnlockConditionType.ImmutableAliasAddress);
        this.address = address;
    }
    /**
     * Get the Immutable Alias address.
     */
    getAddress() {
        return this.address;
    }
}
__decorate([
    (0, class_transformer_1.Type)(() => address_1.Address, {
        discriminator: address_1.AddressDiscriminator,
    })
], ImmutableAliasAddressUnlockCondition.prototype, "address", void 0);
exports.ImmutableAliasAddressUnlockCondition = ImmutableAliasAddressUnlockCondition;
const UnlockConditionDiscriminator = {
    property: 'type',
    subTypes: [
        {
            value: AddressUnlockCondition,
            name: UnlockConditionType.Address,
        },
        {
            value: StorageDepositReturnUnlockCondition,
            name: UnlockConditionType.StorageDepositReturn,
        },
        {
            value: TimelockUnlockCondition,
            name: UnlockConditionType.Timelock,
        },
        {
            value: ExpirationUnlockCondition,
            name: UnlockConditionType.Expiration,
        },
        {
            value: StateControllerAddressUnlockCondition,
            name: UnlockConditionType.StateControllerAddress,
        },
        {
            value: GovernorAddressUnlockCondition,
            name: UnlockConditionType.GovernorAddress,
        },
        {
            value: ImmutableAliasAddressUnlockCondition,
            name: UnlockConditionType.ImmutableAliasAddress,
        },
    ],
};
exports.UnlockConditionDiscriminator = UnlockConditionDiscriminator;
//# sourceMappingURL=unlock-condition.js.map