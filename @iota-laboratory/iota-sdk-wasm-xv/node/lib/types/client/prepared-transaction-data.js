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
exports.Remainder = exports.InputSigningData = exports.PreparedTransactionData = void 0;
const class_transformer_1 = require("class-transformer");
const address_1 = require("../block/address");
const output_1 = require("../block/output/output");
const essence_1 = require("../block/payload/transaction/essence");
/**
 * Helper struct for offline signing.
 */
class PreparedTransactionData {
}
__decorate([
    (0, class_transformer_1.Type)(() => essence_1.TransactionEssence, {
        discriminator: essence_1.TransactionEssenceDiscriminator,
    })
], PreparedTransactionData.prototype, "essence", void 0);
exports.PreparedTransactionData = PreparedTransactionData;
/**
 * Data for transaction inputs for signing and ordering of unlock blocks.
 */
class InputSigningData {
}
__decorate([
    (0, class_transformer_1.Type)(() => output_1.Output, {
        discriminator: output_1.OutputDiscriminator,
    })
], InputSigningData.prototype, "output", void 0);
exports.InputSigningData = InputSigningData;
/**
 * Data for a remainder output, used for Ledger Nano.
 */
class Remainder {
}
__decorate([
    (0, class_transformer_1.Type)(() => output_1.Output, {
        discriminator: output_1.OutputDiscriminator,
    })
], Remainder.prototype, "output", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => address_1.Address, {
        discriminator: address_1.AddressDiscriminator,
    })
], Remainder.prototype, "address", void 0);
exports.Remainder = Remainder;
//# sourceMappingURL=prepared-transaction-data.js.map