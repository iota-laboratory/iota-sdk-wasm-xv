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
exports.RegularTransactionEssence = exports.TransactionEssenceType = exports.TransactionEssence = exports.TransactionEssenceDiscriminator = void 0;
const class_transformer_1 = require("class-transformer");
const input_1 = require("../../input");
const output_1 = require("../../output");
const payload_1 = require("../payload");
const tagged_1 = require("../tagged/tagged");
/**
 * All of the essence types.
 */
var TransactionEssenceType;
(function (TransactionEssenceType) {
    /**
     * A regular transaction essence.
     */
    TransactionEssenceType[TransactionEssenceType["Regular"] = 1] = "Regular";
})(TransactionEssenceType || (TransactionEssenceType = {}));
exports.TransactionEssenceType = TransactionEssenceType;
/**
 * The base class for transaction essences.
 */
class TransactionEssence {
    /**
     * @param type The type of transaction essence.
     */
    constructor(type) {
        this.type = type;
    }
    /**
     * Get the type of essence.
     */
    getType() {
        return this.type;
    }
}
exports.TransactionEssence = TransactionEssence;
/**
 * PayloadDiscriminator for payloads inside of a TransactionEssence.
 */
const PayloadDiscriminator = {
    property: 'type',
    subTypes: [
        { value: tagged_1.TaggedDataPayload, name: payload_1.PayloadType.TaggedData },
    ],
};
/**
 * RegularTransactionEssence transaction essence.
 */
class RegularTransactionEssence extends TransactionEssence {
    /**
     * @param networkId The ID of the network the transaction was issued to.
     * @param inputsCommitment The hash of all inputs.
     * @param inputs The inputs of the transaction.
     * @param outputs The outputs of the transaction.
     * @param payload An optional Tagged Data payload.
     *
     */
    constructor(networkId, inputsCommitment, inputs, outputs, payload) {
        super(TransactionEssenceType.Regular);
        this.networkId = networkId;
        this.inputsCommitment = inputsCommitment;
        this.inputs = inputs;
        this.outputs = outputs;
        this.payload = payload;
    }
}
__decorate([
    (0, class_transformer_1.Type)(() => input_1.Input, {
        discriminator: input_1.InputDiscriminator,
    })
], RegularTransactionEssence.prototype, "inputs", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => output_1.Output, {
        discriminator: output_1.OutputDiscriminator,
    })
], RegularTransactionEssence.prototype, "outputs", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => payload_1.Payload, {
        discriminator: PayloadDiscriminator,
    })
], RegularTransactionEssence.prototype, "payload", void 0);
exports.RegularTransactionEssence = RegularTransactionEssence;
const TransactionEssenceDiscriminator = {
    property: 'type',
    subTypes: [
        {
            value: RegularTransactionEssence,
            name: TransactionEssenceType.Regular,
        },
    ],
};
exports.TransactionEssenceDiscriminator = TransactionEssenceDiscriminator;
//# sourceMappingURL=essence.js.map