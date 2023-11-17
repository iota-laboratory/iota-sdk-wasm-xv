"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OutputResponse = void 0;
// Copyright 2023 IOTA Stiftung
// SPDX-License-Identifier: Apache-2.0
const output_1 = require("../../block/output");
const class_transformer_1 = require("class-transformer");
/**
 * Details of an output.
 */
class OutputResponse {
}
__decorate([
    (0, class_transformer_1.Type)(() => output_1.Output, {
        discriminator: output_1.OutputDiscriminator,
    })
], OutputResponse.prototype, "output", void 0);
exports.OutputResponse = OutputResponse;
//# sourceMappingURL=output-response.js.map