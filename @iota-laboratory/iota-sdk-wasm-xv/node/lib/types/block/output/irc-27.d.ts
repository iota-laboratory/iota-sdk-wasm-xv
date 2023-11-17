import { MetadataFeature } from './feature';
/**
 * The IRC27 NFT standard schema.
 */
declare class Irc27Metadata {
    /** The IRC standard */
    readonly standard: string;
    /** The current version. */
    readonly version: string;
    /** The media type (MIME) of the asset.
     *
     * ## Examples
     * - Image files: `image/jpeg`, `image/png`, `image/gif`, etc.
     * - Video files: `video/x-msvideo` (avi), `video/mp4`, `video/mpeg`, etc.
     * - Audio files: `audio/mpeg`, `audio/wav`, etc.
     * - 3D Assets: `model/obj`, `model/u3d`, etc.
     * - Documents: `application/pdf`, `text/plain`, etc.
     */
    type: string;
    /** URL pointing to the NFT file location. */
    uri: string;
    /** The human-readable name of the native token. */
    name: string;
    /** The human-readable collection name of the native token. */
    collectionName?: string;
    /** Royalty payment addresses mapped to the payout percentage. */
    royalties: Map<string, number>;
    /** The human-readable name of the native token creator. */
    issuerName?: string;
    /** The human-readable description of the token. */
    description?: string;
    /** Additional attributes which follow [OpenSea Metadata standards](https://docs.opensea.io/docs/metadata-standards). */
    attributes: Attribute[];
    /**
     * @param type The media type (MIME) of the asset.
     * @param uri URL pointing to the NFT file location.
     * @param name The human-readable name of the native token.
     */
    constructor(type: string, uri: string, name: string);
    withCollectionName(collectionName: string): Irc27Metadata;
    addRoyalty(address: string, percentage: number): Irc27Metadata;
    withRoyalties(royalties: Map<string, number>): Irc27Metadata;
    withIssuerName(issuerName: string): Irc27Metadata;
    withDescription(description: string): Irc27Metadata;
    addAttribute(attribute: Attribute): Irc27Metadata;
    withAttributes(attributes: Attribute[]): Irc27Metadata;
    asHex(): string;
    asFeature(): MetadataFeature;
}
declare class Attribute {
    trait_type: string;
    value: any;
    display_type?: string;
    constructor(trait_type: string, value: any);
    withDisplayType(display_type: string): Attribute;
}
export { Irc27Metadata, Attribute };
