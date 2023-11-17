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
exports.Block = void 0;
const payload_1 = require("./payload");
const class_transformer_1 = require("class-transformer");
/**
 * Block layout.
 */
class Block {
}
__decorate([
    (0, class_transformer_1.Type)(() => payload_1.Payload, {
        discriminator: payload_1.PayloadDiscriminator,
    })
], Block.prototype, "payload", void 0);
exports.Block = Block;
//# sourceMappingURL=block.js.map