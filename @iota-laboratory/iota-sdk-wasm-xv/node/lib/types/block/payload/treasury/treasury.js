"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TreasuryTransactionPayload = void 0;
const class_transformer_1 = require("class-transformer");
const input_1 = require("../../input");
const output_1 = require("../../output");
const payload_1 = require("../payload");
/**
 * A treasury transaction payload.
 */
class TreasuryTransactionPayload extends payload_1.Payload {
    /**
     * @param input A Treasury input.
     * @param output A Treasury output.
     */
    constructor(input, output) {
        super(payload_1.PayloadType.Transaction);
        this.input = input;
        this.output = output;
    }
}
__decorate([
    (0, class_transformer_1.Type)(() => input_1.TreasuryInput)
], TreasuryTransactionPayload.prototype, "input", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => output_1.TreasuryOutput)
], TreasuryTransactionPayload.prototype, "output", void 0);
exports.TreasuryTransactionPayload = TreasuryTransactionPayload;
//# sourceMappingURL=treasury.js.map