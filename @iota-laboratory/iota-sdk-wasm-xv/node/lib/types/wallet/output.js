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
exports.OutputData = exports.OutputsToClaim = void 0;
const class_transformer_1 = require("class-transformer");
const address_1 = require("../block/address");
const output_1 = require("../block/output");
/** Output to claim */
var OutputsToClaim;
(function (OutputsToClaim) {
    OutputsToClaim["MicroTransactions"] = "MicroTransactions";
    OutputsToClaim["NativeTokens"] = "NativeTokens";
    OutputsToClaim["Nfts"] = "Nfts";
    OutputsToClaim["Amount"] = "Amount";
    OutputsToClaim["All"] = "All";
})(OutputsToClaim = exports.OutputsToClaim || (exports.OutputsToClaim = {}));
/** An output with metadata */
class OutputData {
}
__decorate([
    (0, class_transformer_1.Type)(() => output_1.Output, {
        discriminator: output_1.OutputDiscriminator,
    })
], OutputData.prototype, "output", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => address_1.Address, {
        discriminator: address_1.AddressDiscriminator,
    })
], OutputData.prototype, "address", void 0);
exports.OutputData = OutputData;
//# sourceMappingURL=output.js.map