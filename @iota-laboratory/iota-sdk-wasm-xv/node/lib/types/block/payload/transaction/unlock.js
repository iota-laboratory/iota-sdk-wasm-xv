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
exports.UnlockDiscriminator = exports.NftUnlock = exports.AliasUnlock = exports.ReferenceUnlock = exports.SignatureUnlock = exports.Unlock = exports.UnlockType = void 0;
const class_transformer_1 = require("class-transformer");
const signature_1 = require("../../signature");
/**
 * All of the unlock types.
 */
var UnlockType;
(function (UnlockType) {
    /**
     * A signature unlock.
     */
    UnlockType[UnlockType["Signature"] = 0] = "Signature";
    /**
     * A reference unlock.
     */
    UnlockType[UnlockType["Reference"] = 1] = "Reference";
    /**
     * An Alias unlock.
     */
    UnlockType[UnlockType["Alias"] = 2] = "Alias";
    /**
     * An NFT unlock.
     */
    UnlockType[UnlockType["Nft"] = 3] = "Nft";
})(UnlockType || (UnlockType = {}));
exports.UnlockType = UnlockType;
/**
 * The base class for unlocks.
 */
class Unlock {
    /**
     * @param type The type of unlock.
     */
    constructor(type) {
        this.type = type;
    }
    /**
     * Get the type of unlock.
     */
    getType() {
        return this.type;
    }
}
exports.Unlock = Unlock;
/**
 * An unlock holding one or more signatures unlocking one or more inputs..
 */
class SignatureUnlock extends Unlock {
    /**
     * @param signature An Ed25519 signature.
     */
    constructor(signature) {
        super(UnlockType.Signature);
        this.signature = signature;
    }
}
__decorate([
    (0, class_transformer_1.Type)(() => signature_1.Ed25519Signature)
], SignatureUnlock.prototype, "signature", void 0);
exports.SignatureUnlock = SignatureUnlock;
/**
 * An unlock which must reference a previous unlock which unlocks
 * also the input at the same index as this Reference Unlock.
 */
class ReferenceUnlock extends Unlock {
    /**
     * @param reference An index referencing a previous unlock.
     */
    constructor(reference) {
        super(UnlockType.Reference);
        this.reference = reference;
    }
}
exports.ReferenceUnlock = ReferenceUnlock;
/**
 * An unlock which must reference a previous unlock which unlocks the alias that the input is locked to.
 */
class AliasUnlock extends Unlock {
    /**
     * @param reference An index referencing a previous unlock.
     */
    constructor(reference) {
        super(UnlockType.Alias);
        this.reference = reference;
    }
}
exports.AliasUnlock = AliasUnlock;
/**
 * An unlock which must reference a previous unlock which unlocks the NFT that the input is locked to.
 */
class NftUnlock extends Unlock {
    /**
     * @param reference An index referencing a previous unlock.
     */
    constructor(reference) {
        super(UnlockType.Nft);
        this.reference = reference;
    }
}
exports.NftUnlock = NftUnlock;
const UnlockDiscriminator = {
    property: 'type',
    subTypes: [
        {
            value: SignatureUnlock,
            name: UnlockType.Signature,
        },
        {
            value: ReferenceUnlock,
            name: UnlockType.Reference,
        },
        {
            value: AliasUnlock,
            name: UnlockType.Alias,
        },
        {
            value: NftUnlock,
            name: UnlockType.Nft,
        },
    ],
};
exports.UnlockDiscriminator = UnlockDiscriminator;
//# sourceMappingURL=unlock.js.map