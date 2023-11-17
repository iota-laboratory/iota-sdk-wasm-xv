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
exports.TagFeature = exports.MetadataFeature = exports.IssuerFeature = exports.SenderFeature = exports.FeatureType = exports.Feature = exports.FeatureDiscriminator = void 0;
const class_transformer_1 = require("class-transformer");
const address_1 = require("../address");
/**
 * All of the feature block types.
 */
var FeatureType;
(function (FeatureType) {
    /** A Sender feature. */
    FeatureType[FeatureType["Sender"] = 0] = "Sender";
    /** An Issuer feature. */
    FeatureType[FeatureType["Issuer"] = 1] = "Issuer";
    /** A Metadata feature. */
    FeatureType[FeatureType["Metadata"] = 2] = "Metadata";
    /** A Tag feature. */
    FeatureType[FeatureType["Tag"] = 3] = "Tag";
})(FeatureType || (FeatureType = {}));
exports.FeatureType = FeatureType;
/** The base class for features. */
class Feature {
    /**
     * @param type The type of feature.
     */
    constructor(type) {
        this.type = type;
    }
    /**
     * Get the type of feature.
     */
    getType() {
        return this.type;
    }
}
exports.Feature = Feature;
/**
 * A Sender feature.
 */
class SenderFeature extends Feature {
    /**
     * @param sender The Sender address stored with the feature.
     */
    constructor(sender) {
        super(FeatureType.Sender);
        this.address = sender;
    }
    /**
     * Get the sender address.
     */
    getSender() {
        return this.address;
    }
}
__decorate([
    (0, class_transformer_1.Type)(() => address_1.Address, {
        discriminator: address_1.AddressDiscriminator,
    })
], SenderFeature.prototype, "address", void 0);
exports.SenderFeature = SenderFeature;
/**
 * An Issuer feature.
 */
class IssuerFeature extends Feature {
    /**
     * @param issuer The Issuer address stored with the feature.
     */
    constructor(issuer) {
        super(FeatureType.Issuer);
        this.address = issuer;
    }
    /**
     * Get the Issuer address.
     */
    getIssuer() {
        return this.address;
    }
}
__decorate([
    (0, class_transformer_1.Type)(() => address_1.Address, {
        discriminator: address_1.AddressDiscriminator,
    })
], IssuerFeature.prototype, "address", void 0);
exports.IssuerFeature = IssuerFeature;
/**
 * A Metadata feature.
 */
class MetadataFeature extends Feature {
    /**
     * @param data The metadata stored with the feature.
     */
    constructor(data) {
        super(FeatureType.Metadata);
        this.data = data;
    }
    /**
     * Get the metadata.
     */
    getData() {
        return this.data;
    }
}
exports.MetadataFeature = MetadataFeature;
/**
 * A Tag feature.
 */
class TagFeature extends Feature {
    /**
     * @param tag The tag stored with the feature.
     */
    constructor(tag) {
        super(FeatureType.Tag);
        this.tag = tag;
    }
    /**
     * Get the tag.
     */
    getTag() {
        return this.tag;
    }
}
exports.TagFeature = TagFeature;
const FeatureDiscriminator = {
    property: 'type',
    subTypes: [
        { value: SenderFeature, name: FeatureType.Sender },
        { value: IssuerFeature, name: FeatureType.Issuer },
        { value: MetadataFeature, name: FeatureType.Metadata },
        { value: TagFeature, name: FeatureType.Tag },
    ],
};
exports.FeatureDiscriminator = FeatureDiscriminator;
//# sourceMappingURL=feature.js.map