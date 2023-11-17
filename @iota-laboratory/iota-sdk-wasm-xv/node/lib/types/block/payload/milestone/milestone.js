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
exports.MilestonePayload = void 0;
const class_transformer_1 = require("class-transformer");
const milestone_options_1 = require("../../../models/milestone_options");
const signature_1 = require("../../signature");
const payload_1 = require("../payload");
/**
 * A milestone payload.
 */
class MilestonePayload extends payload_1.Payload {
    constructor() {
        super(payload_1.PayloadType.Milestone);
    }
}
__decorate([
    (0, class_transformer_1.Type)(() => milestone_options_1.MilestoneOption, {
        discriminator: milestone_options_1.MilestoneOptionDiscriminator,
    })
], MilestonePayload.prototype, "options", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => signature_1.Ed25519Signature)
], MilestonePayload.prototype, "signatures", void 0);
exports.MilestonePayload = MilestonePayload;
//# sourceMappingURL=milestone.js.map