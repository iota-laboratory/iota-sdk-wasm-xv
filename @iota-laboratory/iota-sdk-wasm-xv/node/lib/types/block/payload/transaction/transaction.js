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
exports.TransactionPayload = void 0;
const class_transformer_1 = require("class-transformer");
const _1 = require(".");
const payload_1 = require("../payload");
/**
 * Transaction payload.
 */
class TransactionPayload extends payload_1.Payload {
    /**
     * @param essence The transaction essence.
     * @param unlocks The unlocks of the transaction.
     */
    constructor(essence, unlocks) {
        super(payload_1.PayloadType.Transaction);
        this.essence = essence;
        this.unlocks = unlocks;
    }
}
__decorate([
    (0, class_transformer_1.Type)(() => _1.TransactionEssence, {
        discriminator: _1.TransactionEssenceDiscriminator,
    })
], TransactionPayload.prototype, "essence", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => _1.Unlock, {
        discriminator: _1.UnlockDiscriminator,
    })
], TransactionPayload.prototype, "unlocks", void 0);
exports.TransactionPayload = TransactionPayload;
//# sourceMappingURL=transaction.js.map