/**
 * Hex encoded bytes.
 */
export declare type HexEncodedString = string;
/**
 * Hex encoded U256.
 */
export declare type HexEncodedAmount = string;
/**
 * Converts `bigint` value to hexadecimal string representation prefixed with "0x".
 */
export declare function bigIntToHex(value: bigint): string;
/**
 * Converts hex encoded string to `bigint` value.
 */
export declare function hexToBigInt(value: HexEncodedAmount | HexEncodedString): bigint;
