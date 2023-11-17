import { HexEncodedString } from '../utils';
import { AliasId, NftId } from './id';
/**
 * An address prepended by its network type.
 */
type Bech32Address = string;
/**
 * Address type variants.
 */
declare enum AddressType {
    /** An Ed25519 address. */
    Ed25519 = 0,
    /** An Alias address. */
    Alias = 8,
    /** An NFT address. */
    Nft = 16
}
/**
 * The base class for addresses.
 */
declare abstract class Address {
    readonly type: AddressType;
    /**
     * @param type The type of the address.
     */
    constructor(type: AddressType);
    /**
     * Get the type of address.
     */
    getType(): AddressType;
    abstract toString(): string;
    /**
     * Parse an address from a JSON string.
     */
    static parse(data: any): Address;
}
/**
 * An Ed25519 Address.
 */
declare class Ed25519Address extends Address {
    readonly pubKeyHash: HexEncodedString;
    /**
     * @param address An Ed25519 address as hex-encoded string.
     */
    constructor(address: HexEncodedString);
    /**
     * Get the public key hash.
     */
    getPubKeyHash(): HexEncodedString;
    toString(): string;
}
/**
 * An Alias address.
 */
declare class AliasAddress extends Address {
    readonly aliasId: AliasId;
    /**
     * @param address An Alias address as Alias ID.
     */
    constructor(address: AliasId);
    /**
     * Get the alias ID.
     */
    getAliasId(): AliasId;
    toString(): string;
}
/**
 * An NFT address.
 */
declare class NftAddress extends Address {
    readonly nftId: NftId;
    /**
     * @param address An NFT address as NFT ID.
     */
    constructor(address: NftId);
    /**
     * Get the NFT ID.
     */
    getNftId(): NftId;
    toString(): string;
}
declare const AddressDiscriminator: {
    property: string;
    subTypes: ({
        value: typeof Ed25519Address;
        name: any;
    } | {
        value: typeof AliasAddress;
        name: any;
    } | {
        value: typeof NftAddress;
        name: any;
    })[];
};
export { AddressDiscriminator, Bech32Address, Address, AddressType, Ed25519Address, AliasAddress, NftAddress, };
