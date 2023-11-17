export * from './utf8';
export * from './utils';
export * from '../types/utils';
/**
 * Converts a byte array to a hexadecimal string.
 *
 * @param {Uint8Array} byteArray - The bytes to encode.
 * @param {boolean} [prefix=false] - Whether to include the '0x' prefix in the resulting hexadecimal string.
 * @returns {string} The hexadecimal representation of the input byte array.
 */
export declare const bytesToHex: (bytes: ArrayLike<number>, prefix?: boolean) => string;
/**
 * Converts a hexadecimal string to a Uint8Array byte array.
 *
 * @param {string} hexString - The hexadecimal string to be converted.
 * @returns {Uint8Array} The Uint8Array byte array representation of the input hexadecimal string.
 * @throws {Error} Will throw an error if the input string is not a valid hexadecimal string.
 */
export declare const hexToBytes: (hexString: string) => Uint8Array;
