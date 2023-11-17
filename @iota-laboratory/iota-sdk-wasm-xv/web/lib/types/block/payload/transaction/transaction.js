// Copyright 2023 IOTA Stiftung
// SPDX-License-Identifier: Apache-2.0
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Type } from 'class-transformer';
import { TransactionEssence, TransactionEssenceDiscriminator, Unlock, UnlockDiscriminator, } from '.';
import { Payload, PayloadType } from '../payload';
/**
 * Transaction payload.
 */
var TransactionPayload = /** @class */ (function (_super) {
    __extends(TransactionPayload, _super);
    /**
     * @param essence The transaction essence.
     * @param unlocks The unlocks of the transaction.
     */
    function TransactionPayload(essence, unlocks) {
        var _this = _super.call(this, PayloadType.Transaction) || this;
        _this.essence = essence;
        _this.unlocks = unlocks;
        return _this;
    }
    __decorate([
        Type(function () { return TransactionEssence; }, {
            discriminator: TransactionEssenceDiscriminator
        })
    ], TransactionPayload.prototype, "essence");
    __decorate([
        Type(function () { return Unlock; }, {
            discriminator: UnlockDiscriminator
        })
    ], TransactionPayload.prototype, "unlocks");
    return TransactionPayload;
}(Payload));
export { TransactionPayload };
//# sourceMappingURL=transaction.js.map