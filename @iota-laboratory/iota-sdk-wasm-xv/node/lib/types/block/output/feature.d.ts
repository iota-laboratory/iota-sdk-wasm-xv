import { Address } from '../address';
/**
 * All of the feature block types.
 */
declare enum FeatureType {
    /** A Sender feature. */
    Sender = 0,
    /** An Issuer feature. */
    Issuer = 1,
    /** A Metadata feature. */
    Metadata = 2,
    /** A Tag feature. */
    Tag = 3
}
/** The base class for features. */
declare abstract class Feature {
    readonly type: FeatureType;
    /**
     * @param type The type of feature.
     */
    constructor(type: FeatureType);
    /**
     * Get the type of feature.
     */
    getType(): FeatureType;
}
/**
 * A Sender feature.
 */
declare class SenderFeature extends Feature {
    readonly address: Address;
    /**
     * @param sender The Sender address stored with the feature.
     */
    constructor(sender: Address);
    /**
     * Get the sender address.
     */
    getSender(): Address;
}
/**
 * An Issuer feature.
 */
declare class IssuerFeature extends Feature {
    readonly address: Address;
    /**
     * @param issuer The Issuer address stored with the feature.
     */
    constructor(issuer: Address);
    /**
     * Get the Issuer address.
     */
    getIssuer(): Address;
}
/**
 * A Metadata feature.
 */
declare class MetadataFeature extends Feature {
    /** Defines metadata (arbitrary binary data) that will be stored in the output. */
    readonly data: string;
    /**
     * @param data The metadata stored with the feature.
     */
    constructor(data: string);
    /**
     * Get the metadata.
     */
    getData(): string;
}
/**
 * A Tag feature.
 */
declare class TagFeature extends Feature {
    /** Defines a tag for the data. */
    readonly tag: string;
    /**
     * @param tag The tag stored with the feature.
     */
    constructor(tag: string);
    /**
     * Get the tag.
     */
    getTag(): string;
}
declare const FeatureDiscriminator: {
    property: string;
    subTypes: ({
        value: typeof SenderFeature;
        name: any;
    } | {
        value: typeof IssuerFeature;
        name: any;
    } | {
        value: typeof MetadataFeature;
        name: any;
    } | {
        value: typeof TagFeature;
        name: any;
    })[];
};
export { FeatureDiscriminator, Feature, FeatureType, SenderFeature, IssuerFeature, MetadataFeature, TagFeature, };
