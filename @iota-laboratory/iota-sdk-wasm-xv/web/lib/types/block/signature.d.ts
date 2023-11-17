import { HexEncodedString } from '../utils';
/**
 * All of the signature types.
 */
declare enum SignatureType {
    /**
     * An Ed25519 signature.
     */
    Ed25519 = 0
}
/**
 * The base class for signatures.
 */
declare abstract class Signature {
    readonly type: SignatureType;
    /**
     * @param type The type of signature.
     */
    constructor(type: SignatureType);
    /**
     * Get the type of signature.
     */
    getType(): SignatureType;
}
/**
 * An Ed25519 signature.
 */
declare class Ed25519Signature extends Signature {
    /**
     * The public key.
     */
    publicKey: HexEncodedString;
    /**
     * The signature.
     */
    signature: HexEncodedString;
    /**
     * @param publicKey A Ed25519 public key as hex-encoded string.
     * @param signature A Ed25519 signature as hex-encoded string.
     */
    constructor(publicKey: HexEncodedString, signature: HexEncodedString);
}
export { SignatureType, Ed25519Signature, Signature };
