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
exports.ReceiptMilestoneOption = void 0;
const class_transformer_1 = require("class-transformer");
const treasury_1 = require("../../block/payload/treasury/treasury");
const migrated_funds_1 = require("../migrated-funds");
const milestone_options_1 = require("./milestone-options");
/**
 * A Receipt milestone option.
 */
class ReceiptMilestoneOption extends milestone_options_1.MilestoneOption {
    /**
     * @param migratedAt The milestone index at which the funds were migrated in the legacy network.
     * @param final Whether this Receipt is the final one for a given migrated at index.
     * @param funds The funds which were migrated.
     * @param transaction The Treasury Transaction used to provide the funds.
     */
    constructor(migratedAt, final, funds, transaction) {
        super(milestone_options_1.MilestoneOptionType.Receipt);
        this.migratedAt = migratedAt;
        this.final = final;
        this.funds = funds;
        this.transaction = transaction;
    }
}
__decorate([
    (0, class_transformer_1.Type)(() => migrated_funds_1.MigratedFunds)
], ReceiptMilestoneOption.prototype, "funds", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => treasury_1.TreasuryTransactionPayload)
], ReceiptMilestoneOption.prototype, "transaction", void 0);
exports.ReceiptMilestoneOption = ReceiptMilestoneOption;
//# sourceMappingURL=receipt-milestone-option.js.map