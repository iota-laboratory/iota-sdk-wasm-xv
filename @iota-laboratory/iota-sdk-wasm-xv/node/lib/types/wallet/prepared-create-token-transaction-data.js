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
exports.CreateNativeTokenTransaction = exports.PreparedCreateNativeTokenTransactionData = void 0;
const class_transformer_1 = require("class-transformer");
const transaction_1 = require("./transaction");
const prepared_transaction_data_1 = require("../client/prepared-transaction-data");
/** The result of preparing an operation to create a native token. */
class PreparedCreateNativeTokenTransactionData {
}
__decorate([
    (0, class_transformer_1.Type)(() => prepared_transaction_data_1.PreparedTransactionData)
], PreparedCreateNativeTokenTransactionData.prototype, "transaction", void 0);
exports.PreparedCreateNativeTokenTransactionData = PreparedCreateNativeTokenTransactionData;
/** The result of an operation to create a native token. */
class CreateNativeTokenTransaction {
}
__decorate([
    (0, class_transformer_1.Type)(() => transaction_1.Transaction)
], CreateNativeTokenTransaction.prototype, "transaction", void 0);
exports.CreateNativeTokenTransaction = CreateNativeTokenTransaction;
//# sourceMappingURL=prepared-create-token-transaction-data.js.map