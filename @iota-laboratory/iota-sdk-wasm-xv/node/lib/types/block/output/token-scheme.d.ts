/**
 * All of the token scheme types.
 */
declare enum TokenSchemeType {
    /** A simple token scheme. */
    Simple = 0
}
/**
 * The base class for token schemes.
 */
declare abstract class TokenScheme {
    readonly type: TokenSchemeType;
    /**
     * @param type The type of token scheme.
     */
    constructor(type: TokenSchemeType);
    /**
     * Get the type of token scheme.
     */
    getType(): TokenSchemeType;
}
/**
 * A simple token scheme.
 */
declare class SimpleTokenScheme extends TokenScheme {
    readonly mintedTokens: bigint;
    readonly meltedTokens: bigint;
    readonly maximumSupply: bigint;
    /**
     * @param mintedTokens The number of tokens that were minted.
     * @param meltedTokens The number of tokens that were melted.
     * @param maximumSupply The maximum supply of the token.
     */
    constructor(mintedTokens: bigint, meltedTokens: bigint, maximumSupply: bigint);
    /**
     * Get the amount of tokens minted.
     */
    getMintedTokens(): bigint;
    /**
     * Get the amount of tokens melted.
     */
    getMeltedTokens(): bigint;
    /**
     * Get the maximum supply of tokens.
     */
    getMaximumSupply(): bigint;
}
declare const TokenSchemeDiscriminator: {
    property: string;
    subTypes: {
        value: typeof SimpleTokenScheme;
        name: any;
    }[];
};
export { TokenSchemeDiscriminator, TokenScheme, TokenSchemeType, SimpleTokenScheme, };
