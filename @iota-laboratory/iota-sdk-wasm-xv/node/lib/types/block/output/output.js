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
exports.FoundryOutput = exports.NftOutput = exports.AliasOutput = exports.BasicOutput = exports.TreasuryOutput = exports.CommonOutput = exports.OutputType = exports.Output = exports.OutputDiscriminator = void 0;
const unlock_condition_1 = require("./unlock-condition");
const feature_1 = require("./feature");
// Temp solution for not double parsing JSON
const class_transformer_1 = require("class-transformer");
const utils_1 = require("../../utils");
const token_scheme_1 = require("./token-scheme");
/**
 * All of the output types.
 */
var OutputType;
(function (OutputType) {
    /** A Treasury output. */
    OutputType[OutputType["Treasury"] = 2] = "Treasury";
    /** A Basic output. */
    OutputType[OutputType["Basic"] = 3] = "Basic";
    /** An Alias output. */
    OutputType[OutputType["Alias"] = 4] = "Alias";
    /** A Foundry output. */
    OutputType[OutputType["Foundry"] = 5] = "Foundry";
    /** An NFT output. */
    OutputType[OutputType["Nft"] = 6] = "Nft";
})(OutputType || (OutputType = {}));
exports.OutputType = OutputType;
/**
 * The base class for outputs.
 */
class Output /*implements ICommonOutput*/ {
    /**
     * @param type The type of output.
     * @param amount The amount of the output as big-integer or string.
     */
    constructor(type, amount) {
        this.type = type;
        if (typeof amount == 'bigint') {
            this.amount = amount.toString(10);
        }
        else {
            this.amount = amount;
        }
    }
    /**
     * Get the type of output.
     */
    getType() {
        return this.type;
    }
    /**
     * Get the amount of the output.
     */
    getAmount() {
        return BigInt(this.amount);
    }
    /**
     * Parse an output from a plain JS JSON object.
     */
    static parse(data) {
        if (data.type == OutputType.Treasury) {
            return (0, class_transformer_1.plainToInstance)(TreasuryOutput, data);
        }
        else if (data.type == OutputType.Basic) {
            return (0, class_transformer_1.plainToInstance)(BasicOutput, data);
        }
        else if (data.type == OutputType.Alias) {
            return (0, class_transformer_1.plainToInstance)(AliasOutput, data);
        }
        else if (data.type == OutputType.Foundry) {
            return (0, class_transformer_1.plainToInstance)(FoundryOutput, data);
        }
        else if (data.type == OutputType.Nft) {
            return (0, class_transformer_1.plainToInstance)(NftOutput, data);
        }
        throw new Error('Invalid JSON');
    }
}
exports.Output = Output;
/**
 * The base class for common outputs.
 */
class CommonOutput extends Output /*implements ICommonOutput*/ {
    /**
     * @param type The type of output.
     * @param amount The amount of the output.
     * @param unlockConditions Conditions to unlock the output.
     */
    constructor(type, amount, unlockConditions) {
        super(type, amount);
        this.unlockConditions = unlockConditions;
    }
    /**
     * The unlock conditions for the output.
     */
    getUnlockConditions() {
        return this.unlockConditions;
    }
    /**
     * The native tokens held by the output.
     */
    getNativeTokens() {
        if (!this.nativeTokens) {
            return this.nativeTokens;
        }
        // Make sure the amount of native tokens are of bigint type.
        for (let i = 0; i < this.nativeTokens.length; i++) {
            const token = this.nativeTokens[i];
            if (typeof token.amount === 'string') {
                this.nativeTokens[i].amount = (0, utils_1.hexToBigInt)(token.amount);
            }
        }
        return this.nativeTokens;
    }
    /**
     * Get the features contained by the output.
     */
    getFeatures() {
        return this.features;
    }
}
__decorate([
    (0, class_transformer_1.Type)(() => unlock_condition_1.UnlockCondition, {
        discriminator: unlock_condition_1.UnlockConditionDiscriminator,
    })
], CommonOutput.prototype, "unlockConditions", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => feature_1.Feature, {
        discriminator: feature_1.FeatureDiscriminator,
    })
], CommonOutput.prototype, "features", void 0);
exports.CommonOutput = CommonOutput;
/**
 * A Treasury output.
 */
class TreasuryOutput extends Output /*implements ITreasuryOutput */ {
    /**
     * @param amount The amount of the output.
     */
    constructor(amount) {
        super(OutputType.Treasury, amount);
    }
}
exports.TreasuryOutput = TreasuryOutput;
/**
 * A Basic output.
 */
class BasicOutput extends CommonOutput /*implements IBasicOutput*/ {
    /**
     * @param amount The amount of the output.
     * @param unlockConditions The unlock conditions for the output.
     */
    constructor(amount, unlockConditions) {
        super(OutputType.Basic, amount, unlockConditions);
    }
}
exports.BasicOutput = BasicOutput;
/**
 * Base class for immutable feature outputs.
 */
class ImmutableFeaturesOutput extends CommonOutput {
    /**
     * @param type The type of output.
     * @param amount The amount of the output.
     * @param unlockConditions The unlock conditions for the output.
     */
    constructor(type, amount, unlockConditions) {
        super(type, amount, unlockConditions);
    }
    /**
     * Immutable features contained by the output.
     */
    getImmutableFeatures() {
        return this.immutableFeatures;
    }
}
__decorate([
    (0, class_transformer_1.Type)(() => feature_1.Feature, {
        discriminator: feature_1.FeatureDiscriminator,
    })
], ImmutableFeaturesOutput.prototype, "immutableFeatures", void 0);
/**
 * Base class for state metadata outputs.
 */
class StateMetadataOutput extends ImmutableFeaturesOutput /*implements IBasicOutput*/ {
    /**
     * @param type The type of output.
     * @param amount The amount of the output.
     * @param unlockConditions The unlock conditions for the output.
     * @param stateMetadata Metadata that can only be changed by the state controller.
     */
    constructor(type, amount, unlockConditions, stateMetadata) {
        super(type, amount, unlockConditions);
        this.stateMetadata = stateMetadata;
    }
    /**
     * Metadata that can only be changed by the state controller.
     */
    getStateMetadata() {
        return this.stateMetadata;
    }
}
/**
 * An Alias output.
 */
class AliasOutput extends StateMetadataOutput /*implements IAliasOutput*/ {
    /**
     * @param unlockConditions The unlock conditions of the output.
     * @param amount The amount of the output.
     * @param aliasId The Alias ID as hex-encoded string.
     * @param stateIndex A counter that must increase by 1 every time the alias is state transitioned.
     * @param foundryCounter A counter that denotes the number of foundries created by this alias account.
     * @param stateMetadata Metadata that can only be changed by the state controller.
     */
    constructor(unlockConditions, amount, aliasId, stateIndex, foundryCounter, stateMetadata) {
        super(OutputType.Alias, amount, unlockConditions, stateMetadata);
        this.aliasId = aliasId;
        this.stateIndex = stateIndex;
        this.foundryCounter = foundryCounter;
    }
    /**
     * Get the Alias ID of the output.
     */
    getAliasId() {
        return this.aliasId;
    }
    /**
     * Get the state index of the output.
     */
    getStateIndex() {
        return this.stateIndex;
    }
    /**
     * Get the Foundry counter of the output.
     */
    getFoundryCounter() {
        return this.foundryCounter;
    }
}
exports.AliasOutput = AliasOutput;
/**
 * An NFT output.
 */
class NftOutput extends ImmutableFeaturesOutput /*implements INftOutput*/ {
    /**
     * @param amount The amount of the output.
     * @param nftId The NFT ID as hex-encoded string.
     * @param unlockConditions The unlock conditions of the output.
     */
    constructor(amount, nftId, unlockConditions) {
        super(OutputType.Nft, amount, unlockConditions);
        this.nftId = nftId;
    }
    /**
     * Get the NFT ID of the output.
     */
    getNftId() {
        return this.nftId;
    }
}
exports.NftOutput = NftOutput;
/**
 * A Foundry output.
 */
class FoundryOutput extends ImmutableFeaturesOutput /*implements IFoundryOutput*/ {
    /**
     * @param amount The amount of the output.
     * @param serialNumber The serial number of the Foundry with respect to the controlling alias.
     * @param unlockConditions The unlock conditions of the output.
     * @param tokenScheme The token scheme for the Foundry.
     */
    constructor(amount, serialNumber, unlockConditions, tokenScheme) {
        super(OutputType.Foundry, amount, unlockConditions);
        this.serialNumber = serialNumber;
        this.tokenScheme = tokenScheme;
    }
    /**
     * Get the serial number of the Foundry.
     */
    getSerialNumber() {
        return this.serialNumber;
    }
    /**
     * Get the token scheme for the Foundry.
     */
    getTokenScheme() {
        return this.tokenScheme;
    }
}
__decorate([
    (0, class_transformer_1.Type)(() => token_scheme_1.TokenScheme, {
        discriminator: token_scheme_1.TokenSchemeDiscriminator,
    })
], FoundryOutput.prototype, "tokenScheme", void 0);
exports.FoundryOutput = FoundryOutput;
const OutputDiscriminator = {
    property: 'type',
    subTypes: [
        { value: TreasuryOutput, name: OutputType.Treasury },
        { value: BasicOutput, name: OutputType.Basic },
        { value: AliasOutput, name: OutputType.Alias },
        { value: NftOutput, name: OutputType.Nft },
        { value: FoundryOutput, name: OutputType.Foundry },
    ],
};
exports.OutputDiscriminator = OutputDiscriminator;
//# sourceMappingURL=output.js.map