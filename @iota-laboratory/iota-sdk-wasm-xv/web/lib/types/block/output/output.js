// Copyright 2023 IOTA Stiftung
// SPDX-License-Identifier: Apache-2.0
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { UnlockCondition, UnlockConditionDiscriminator, } from './unlock-condition';
import { Feature, FeatureDiscriminator } from './feature';
// Temp solution for not double parsing JSON
import { plainToInstance, Type } from 'class-transformer';
import { hexToBigInt } from '../../utils';
import { TokenScheme, TokenSchemeDiscriminator } from './token-scheme';
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
/**
 * The base class for outputs.
 */
var Output /*implements ICommonOutput*/ = /** @class */ (function () {
    /**
     * @param type The type of output.
     * @param amount The amount of the output as big-integer or string.
     */
    function Output(type, amount) {
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
    Output.prototype.getType = function () {
        return this.type;
    };
    /**
     * Get the amount of the output.
     */
    Output.prototype.getAmount = function () {
        return BigInt(this.amount);
    };
    /**
     * Parse an output from a plain JS JSON object.
     */
    Output.parse = function (data) {
        if (data.type == OutputType.Treasury) {
            return plainToInstance(TreasuryOutput, data);
        }
        else if (data.type == OutputType.Basic) {
            return plainToInstance(BasicOutput, data);
        }
        else if (data.type == OutputType.Alias) {
            return plainToInstance(AliasOutput, data);
        }
        else if (data.type == OutputType.Foundry) {
            return plainToInstance(FoundryOutput, data);
        }
        else if (data.type == OutputType.Nft) {
            return plainToInstance(NftOutput, data);
        }
        throw new Error('Invalid JSON');
    };
    return Output;
}());
/**
 * The base class for common outputs.
 */
var CommonOutput = /** @class */ (function (_super) {
    __extends(CommonOutput, _super); /*implements ICommonOutput*/
    /**
     * @param type The type of output.
     * @param amount The amount of the output.
     * @param unlockConditions Conditions to unlock the output.
     */
    function CommonOutput(type, amount, unlockConditions) {
        var _this = _super.call(this, type, amount) || this;
        _this.unlockConditions = unlockConditions;
        return _this;
    }
    /**
     * The unlock conditions for the output.
     */
    CommonOutput.prototype.getUnlockConditions = function () {
        return this.unlockConditions;
    };
    /**
     * The native tokens held by the output.
     */
    CommonOutput.prototype.getNativeTokens = function () {
        if (!this.nativeTokens) {
            return this.nativeTokens;
        }
        // Make sure the amount of native tokens are of bigint type.
        for (var i = 0; i < this.nativeTokens.length; i++) {
            var token = this.nativeTokens[i];
            if (typeof token.amount === 'string') {
                this.nativeTokens[i].amount = hexToBigInt(token.amount);
            }
        }
        return this.nativeTokens;
    };
    /**
     * Get the features contained by the output.
     */
    CommonOutput.prototype.getFeatures = function () {
        return this.features;
    };
    __decorate([
        Type(function () { return UnlockCondition; }, {
            discriminator: UnlockConditionDiscriminator
        })
    ], CommonOutput.prototype, "unlockConditions");
    __decorate([
        Type(function () { return Feature; }, {
            discriminator: FeatureDiscriminator
        })
    ], CommonOutput.prototype, "features");
    return CommonOutput;
}(Output /*implements ICommonOutput*/));
/**
 * A Treasury output.
 */
var TreasuryOutput = /** @class */ (function (_super) {
    __extends(TreasuryOutput, _super); /*implements ITreasuryOutput */
    /**
     * @param amount The amount of the output.
     */
    function TreasuryOutput(amount) {
        return _super.call(this, OutputType.Treasury, amount) || this;
    }
    return TreasuryOutput;
}(Output /*implements ITreasuryOutput */));
/**
 * A Basic output.
 */
var BasicOutput = /** @class */ (function (_super) {
    __extends(BasicOutput, _super); /*implements IBasicOutput*/
    /**
     * @param amount The amount of the output.
     * @param unlockConditions The unlock conditions for the output.
     */
    function BasicOutput(amount, unlockConditions) {
        return _super.call(this, OutputType.Basic, amount, unlockConditions) || this;
    }
    return BasicOutput;
}(CommonOutput /*implements IBasicOutput*/));
/**
 * Base class for immutable feature outputs.
 */
var ImmutableFeaturesOutput = /** @class */ (function (_super) {
    __extends(ImmutableFeaturesOutput, _super);
    /**
     * @param type The type of output.
     * @param amount The amount of the output.
     * @param unlockConditions The unlock conditions for the output.
     */
    function ImmutableFeaturesOutput(type, amount, unlockConditions) {
        return _super.call(this, type, amount, unlockConditions) || this;
    }
    /**
     * Immutable features contained by the output.
     */
    ImmutableFeaturesOutput.prototype.getImmutableFeatures = function () {
        return this.immutableFeatures;
    };
    __decorate([
        Type(function () { return Feature; }, {
            discriminator: FeatureDiscriminator
        })
    ], ImmutableFeaturesOutput.prototype, "immutableFeatures");
    return ImmutableFeaturesOutput;
}(CommonOutput));
/**
 * Base class for state metadata outputs.
 */
var StateMetadataOutput = /** @class */ (function (_super) {
    __extends(StateMetadataOutput, _super); /*implements IBasicOutput*/
    /**
     * @param type The type of output.
     * @param amount The amount of the output.
     * @param unlockConditions The unlock conditions for the output.
     * @param stateMetadata Metadata that can only be changed by the state controller.
     */
    function StateMetadataOutput(type, amount, unlockConditions, stateMetadata) {
        var _this = _super.call(this, type, amount, unlockConditions) || this;
        _this.stateMetadata = stateMetadata;
        return _this;
    }
    /**
     * Metadata that can only be changed by the state controller.
     */
    StateMetadataOutput.prototype.getStateMetadata = function () {
        return this.stateMetadata;
    };
    return StateMetadataOutput;
}(ImmutableFeaturesOutput /*implements IBasicOutput*/));
/**
 * An Alias output.
 */
var AliasOutput = /** @class */ (function (_super) {
    __extends(AliasOutput, _super); /*implements IAliasOutput*/
    /**
     * @param unlockConditions The unlock conditions of the output.
     * @param amount The amount of the output.
     * @param aliasId The Alias ID as hex-encoded string.
     * @param stateIndex A counter that must increase by 1 every time the alias is state transitioned.
     * @param foundryCounter A counter that denotes the number of foundries created by this alias account.
     * @param stateMetadata Metadata that can only be changed by the state controller.
     */
    function AliasOutput(unlockConditions, amount, aliasId, stateIndex, foundryCounter, stateMetadata) {
        var _this = _super.call(this, OutputType.Alias, amount, unlockConditions, stateMetadata) || this;
        _this.aliasId = aliasId;
        _this.stateIndex = stateIndex;
        _this.foundryCounter = foundryCounter;
        return _this;
    }
    /**
     * Get the Alias ID of the output.
     */
    AliasOutput.prototype.getAliasId = function () {
        return this.aliasId;
    };
    /**
     * Get the state index of the output.
     */
    AliasOutput.prototype.getStateIndex = function () {
        return this.stateIndex;
    };
    /**
     * Get the Foundry counter of the output.
     */
    AliasOutput.prototype.getFoundryCounter = function () {
        return this.foundryCounter;
    };
    return AliasOutput;
}(StateMetadataOutput /*implements IAliasOutput*/));
/**
 * An NFT output.
 */
var NftOutput = /** @class */ (function (_super) {
    __extends(NftOutput, _super); /*implements INftOutput*/
    /**
     * @param amount The amount of the output.
     * @param nftId The NFT ID as hex-encoded string.
     * @param unlockConditions The unlock conditions of the output.
     */
    function NftOutput(amount, nftId, unlockConditions) {
        var _this = _super.call(this, OutputType.Nft, amount, unlockConditions) || this;
        _this.nftId = nftId;
        return _this;
    }
    /**
     * Get the NFT ID of the output.
     */
    NftOutput.prototype.getNftId = function () {
        return this.nftId;
    };
    return NftOutput;
}(ImmutableFeaturesOutput /*implements INftOutput*/));
/**
 * A Foundry output.
 */
var FoundryOutput = /** @class */ (function (_super) {
    __extends(FoundryOutput, _super); /*implements IFoundryOutput*/
    /**
     * @param amount The amount of the output.
     * @param serialNumber The serial number of the Foundry with respect to the controlling alias.
     * @param unlockConditions The unlock conditions of the output.
     * @param tokenScheme The token scheme for the Foundry.
     */
    function FoundryOutput(amount, serialNumber, unlockConditions, tokenScheme) {
        var _this = _super.call(this, OutputType.Foundry, amount, unlockConditions) || this;
        _this.serialNumber = serialNumber;
        _this.tokenScheme = tokenScheme;
        return _this;
    }
    /**
     * Get the serial number of the Foundry.
     */
    FoundryOutput.prototype.getSerialNumber = function () {
        return this.serialNumber;
    };
    /**
     * Get the token scheme for the Foundry.
     */
    FoundryOutput.prototype.getTokenScheme = function () {
        return this.tokenScheme;
    };
    __decorate([
        Type(function () { return TokenScheme; }, {
            discriminator: TokenSchemeDiscriminator
        })
    ], FoundryOutput.prototype, "tokenScheme");
    return FoundryOutput;
}(ImmutableFeaturesOutput /*implements IFoundryOutput*/));
var OutputDiscriminator = {
    property: 'type',
    subTypes: [
        { value: TreasuryOutput, name: OutputType.Treasury },
        { value: BasicOutput, name: OutputType.Basic },
        { value: AliasOutput, name: OutputType.Alias },
        { value: NftOutput, name: OutputType.Nft },
        { value: FoundryOutput, name: OutputType.Foundry },
    ]
};
export { OutputDiscriminator, Output, OutputType, CommonOutput, TreasuryOutput, BasicOutput, AliasOutput, NftOutput, FoundryOutput, };
//# sourceMappingURL=output.js.map