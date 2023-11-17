import { MetadataFeature } from './feature';
/**
 * The IRC30 native token metadata standard schema.
 */
declare class Irc30Metadata {
    /** The IRC standard */
    readonly standard: string;
    /** The human-readable name of the native token. */
    name: string;
    /** The symbol/ticker of the token. */
    symbol: string;
    /** Number of decimals the token uses (divide the token amount by `10^decimals` to get its user representation). */
    decimals: number;
    /** The human-readable description of the token. */
    description?: string;
    /** URL pointing to more resources about the token. */
    url?: string;
    /** URL pointing to an image resource of the token logo. */
    logoUrl?: string;
    /** The svg logo of the token encoded as a byte string. */
    logo?: string;
    /**
     * @param name The human-readable name of the native token.
     * @param symbol The symbol/ticker of the token.
     * @param decimals Number of decimals the token uses.
     */
    constructor(name: string, symbol: string, decimals: number);
    withDescription(description: string): Irc30Metadata;
    withUrl(url: string): Irc30Metadata;
    withLogoUrl(logoUrl: string): Irc30Metadata;
    withLogo(logo: string): Irc30Metadata;
    asHex(): string;
    asFeature(): MetadataFeature;
}
export { Irc30Metadata };
