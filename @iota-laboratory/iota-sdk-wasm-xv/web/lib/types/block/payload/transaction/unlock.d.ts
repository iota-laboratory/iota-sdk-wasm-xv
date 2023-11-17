import { Ed25519Signature } from '../../signature';
/**
 * All of the unlock types.
 */
declare enum UnlockType {
    /**
     * A signature unlock.
     */
    Signature = 0,
    /**
     * A reference unlock.
     */
    Reference = 1,
    /**
     * An Alias unlock.
     */
    Alias = 2,
    /**
     * An NFT unlock.
     */
    Nft = 3
}
/**
 * The base class for unlocks.
 */
declare abstract class Unlock {
    readonly type: UnlockType;
    /**
     * @param type The type of unlock.
     */
    constructor(type: UnlockType);
    /**
     * Get the type of unlock.
     */
    getType(): UnlockType;
}
/**
 * An unlock holding one or more signatures unlocking one or more inputs..
 */
declare class SignatureUnlock extends Unlock {
    /**
     * The signature.
     */
    signature: Ed25519Signature;
    /**
     * @param signature An Ed25519 signature.
     */
    constructor(signature: Ed25519Signature);
}
/**
 * An unlock which must reference a previous unlock which unlocks
 * also the input at the same index as this Reference Unlock.
 */
declare class ReferenceUnlock extends Unlock {
    /**
     * The reference.
     */
    reference: number;
    /**
     * @param reference An index referencing a previous unlock.
     */
    constructor(reference: number);
}
/**
 * An unlock which must reference a previous unlock which unlocks the alias that the input is locked to.
 */
declare class AliasUnlock extends Unlock {
    /**
     * The reference.
     */
    reference: number;
    /**
     * @param reference An index referencing a previous unlock.
     */
    constructor(reference: number);
}
/**
 * An unlock which must reference a previous unlock which unlocks the NFT that the input is locked to.
 */
declare class NftUnlock extends Unlock {
    /**
     * The reference.
     */
    reference: number;
    /**
     * @param reference An index referencing a previous unlock.
     */
    constructor(reference: number);
}
declare const UnlockDiscriminator: {
    property: string;
    subTypes: ({
        value: typeof SignatureUnlock;
        name: any;
    } | {
        value: typeof ReferenceUnlock;
        name: any;
    })[];
};
export { UnlockType, Unlock, SignatureUnlock, ReferenceUnlock, AliasUnlock, NftUnlock, UnlockDiscriminator, };
