"use strict";
// Copyright 2021-2023 IOTA Stiftung
// SPDX-License-Identifier: Apache-2.0
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SignedTransactionEssence = void 0;
const class_transformer_1 = require("class-transformer");
const transaction_1 = require("../block/payload/transaction");
const client_1 = require("../client");
/** The signed transaction with inputs data */
class SignedTransactionEssence {
}
__decorate([
    (0, class_transformer_1.Type)(() => transaction_1.TransactionPayload)
], SignedTransactionEssence.prototype, "transactionPayload", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => client_1.InputSigningData)
], SignedTransactionEssence.prototype, "inputsData", void 0);
exports.SignedTransactionEssence = SignedTransactionEssence;
//# sourceMappingURL=signed-transaction-essence.js.map