// Copyright 2023 IOTA Stiftung
// SPDX-License-Identifier: Apache-2.0
import { callUtilsMethod, callUtilsMethod2 } from '../bindings';
import { Address, } from '../types';
/** Utils class for utils. */
var Utils = /** @class */ (function () {
    function Utils() {
    }
    /**
     * Generate a new mnemonic.
     */
    Utils.generateMnemonic = function () {
        return callUtilsMethod({
            name: 'generateMnemonic'
        });
    };
    /**
     * Convert a mnemonic to a hex encoded seed.
     *
     * @param mnemonic A mnemonic string.
     * @returns The seed as hex-encoded string.
     */
    Utils.mnemonicToHexSeed = function (mnemonic) {
        return callUtilsMethod({
            name: 'mnemonicToHexSeed',
            data: {
                mnemonic: mnemonic
            }
        });
    };
    /**
     * Compute the alias ID from a given Alias output ID.
     *
     * @param outputId The output ID as hex-encoded string.
     * @returns The Alias ID.
     */
    Utils.computeAliasId = function (outputId) {
        return callUtilsMethod({
            name: 'computeAliasId',
            data: {
                outputId: outputId
            }
        });
    };
    /**
     * Compute the Foundry ID.
     *
     * @param aliasId The Alias ID associated with the Foundry.
     * @param serialNumber The serial number of the Foundry.
     * @param tokenSchemeType The Token scheme type. Currently only a simple scheme is supported.
     * @returns The Foundry ID.
     */
    Utils.computeFoundryId = function (aliasId, serialNumber, tokenSchemeType) {
        return callUtilsMethod({
            name: 'computeFoundryId',
            data: {
                aliasId: aliasId,
                serialNumber: serialNumber,
                tokenSchemeType: tokenSchemeType
            }
        });
    };
    /**
     * Compute the NFT ID from the given NFT output ID.
     *
     * @param outputId The output ID as hex-encoded string.
     * @returns The NFT ID.
     */
    Utils.computeNftId = function (outputId) {
        return callUtilsMethod({
            name: 'computeNftId',
            data: {
                outputId: outputId
            }
        });
    };
    /**
     * Compute the input commitment from the output objects that are used as inputs to fund the transaction.
     *
     * @param inputs The output objects used as inputs for the transaction.
     * @returns The inputs commitment hash as hex-encoded string.
     */
    Utils.computeInputsCommitment = function (inputs) {
        return callUtilsMethod({
            name: 'computeInputsCommitment',
            data: {
                inputs: inputs
            }
        });
    };
    /**
     * Compute the output ID from transaction ID and output index.
     *
     * @param transactionId The ID of the transaction.
     * @param outputIndex The index of the output.
     * @returns The output ID.
     */
    Utils.computeOutputId = function (id, index) {
        return callUtilsMethod({
            name: 'computeOutputId',
            data: {
                id: id,
                index: index
            }
        });
    };
    /**
     * Compute the required storage deposit of an output.
     *
     * @param output The output.
     * @param rent Rent cost of objects which take node resources.
     * @returns The required storage deposit.
     */
    Utils.computeStorageDeposit = function (output, rent) {
        var minStorageDepositAmount = callUtilsMethod({
            name: 'computeStorageDeposit',
            data: {
                output: output,
                rent: rent
            }
        });
        return BigInt(minStorageDepositAmount);
    };
    /**
     * Compute a Token iD from the aliasId, serial number and token scheme type.
     *
     * @param aliasId The alias that controls the foundry.
     * @param serialNumber The serial number of the foundry.
     * @param tokenSchemeType The tokenSchemeType of the foundry.
     * @returns The tokenId.
     */
    Utils.computeTokenId = function (aliasId, serialNumber, tokenSchemeType) {
        return callUtilsMethod({
            name: 'computeTokenId',
            data: {
                aliasId: aliasId,
                serialNumber: serialNumber,
                tokenSchemeType: tokenSchemeType
            }
        });
    };
    /**
     * Parse a Bech32 address from a string.
     *
     * @param address A Bech32 address as string.
     * @returns A Bech32 address.
     */
    Utils.parseBech32Address = function (address) {
        var addr = callUtilsMethod({
            name: 'parseBech32Address',
            data: {
                address: address
            }
        });
        return Address.parse(addr);
    };
    /**
     * Compute the block ID (Blake2b256 hash of the block bytes) of a block.
     *
     * @param block A block.
     * @returns The corresponding block ID.
     */
    Utils.blockId = function (block) {
        return callUtilsMethod({
            name: 'blockId',
            data: {
                block: block
            }
        });
    };
    /**
     * Compute the milestone ID (Blake2b256 hash of the milestone essence) of a milestone payload.
     *
     * @param payload A milestone payload.
     * @returns The milestone ID.
     */
    Utils.milestoneId = function (payload) {
        return callUtilsMethod({
            name: 'milestoneId',
            data: {
                payload: payload
            }
        });
    };
    /**
     * Compute the transaction ID (Blake2b256 hash of the provided transaction payload) of a transaction payload.
     *
     * @param payload A transaction payload.
     * @returns The transaction ID.
     */
    Utils.transactionId = function (payload) {
        return callUtilsMethod({
            name: 'transactionId',
            data: {
                payload: payload
            }
        });
    };
    /**
     * Convert a Bech32 address to a hex-encoded string.
     *
     * @param bech32 A Bech32 address.
     * @returns The hex-encoded string.
     */
    Utils.bech32ToHex = function (bech32) {
        return callUtilsMethod({
            name: 'bech32ToHex',
            data: {
                bech32: bech32
            }
        });
    };
    /**
     * Convert a hex-encoded address string to a Bech32-encoded address string.
     *
     * @param hex A hex-encoded address string.
     * @param bech32Hrp The Bech32 HRP (human readable part) to use.
     * @returns The Bech32-encoded address string.
     */
    Utils.hexToBech32 = function (hex, bech32Hrp) {
        return callUtilsMethod({
            name: 'hexToBech32',
            data: {
                hex: hex,
                bech32Hrp: bech32Hrp
            }
        });
    };
    /**
     * Convert an Alias ID to a Bech32-encoded address string.
     *
     * @param aliasId An Alias ID.
     * @param bech32Hrp The Bech32 HRP (human readable part) to use.
     * @returns The Bech32-encoded address string.
     */
    Utils.aliasIdToBech32 = function (aliasId, bech32Hrp) {
        return callUtilsMethod({
            name: 'aliasIdToBech32',
            data: {
                aliasId: aliasId,
                bech32Hrp: bech32Hrp
            }
        });
    };
    /**
     * Convert an NFT ID to a Bech32-encoded address string.
     *
     * @param nftId An NFT ID.
     * @param bech32Hrp The Bech32 HRP (human readable part) to use.
     * @returns The Bech32-encoded address string.
     */
    Utils.nftIdToBech32 = function (nftId, bech32Hrp) {
        return callUtilsMethod({
            name: 'nftIdToBech32',
            data: {
                nftId: nftId,
                bech32Hrp: bech32Hrp
            }
        });
    };
    /**
     * Convert a hex-encoded public key to a Bech32-encoded address string.
     *
     * @param hex A hex-encoded public key.
     * @param bech32Hrp The Bech32 HRP (human readable part) to use.
     * @returns The Bech32-encoded address string.
     */
    Utils.hexPublicKeyToBech32Address = function (hex, bech32Hrp) {
        return callUtilsMethod({
            name: 'hexPublicKeyToBech32Address',
            data: {
                hex: hex,
                bech32Hrp: bech32Hrp
            }
        });
    };
    /**
     * Checks whether an address string is a valid Bech32-encoded address.
     *
     * @param address An address string.
     */
    Utils.isAddressValid = function (address) {
        return callUtilsMethod({
            name: 'isAddressValid',
            data: {
                address: address
            }
        });
    };
    /**
     * Compute the hash of a transaction essence.
     *
     * @param essence A transaction essence.
     * @returns The hash of the transaction essence as a hex-encoded string.
     */
    Utils.hashTransactionEssence = function (essence) {
        return callUtilsMethod({
            name: 'hashTransactionEssence',
            data: {
                essence: essence
            }
        });
    };
    /**
     * Verify an Ed25519 signature against a message.
     *
     * @param signature An Ed25519 signature.
     * @param message A hex-encoded message.
     */
    Utils.verifyEd25519Signature = function (signature, message) {
        return callUtilsMethod({
            name: 'verifyEd25519Signature',
            data: {
                signature: signature,
                message: message
            }
        });
    };
    /**
     * Verify a Secp256k1Ecdsa signature against a message.
     * @param publicKey A hex-encoded public key.
     * @param signature A hex-encoded signature.
     * @param message A hex-encoded message.
     */
    Utils.verifySecp256k1EcdsaSignature = function (publicKey, signature, message) {
        return callUtilsMethod({
            name: 'verifySecp256k1EcdsaSignature',
            data: {
                publicKey: publicKey,
                signature: signature,
                message: message
            }
        });
    };
    /**
     * Verify if a mnemonic is a valid BIP39 mnemonic.
     *
     * @param mnemonic A mnemonic string.
     */
    Utils.verifyMnemonic = function (mnemonic) {
        return callUtilsMethod({
            name: 'verifyMnemonic',
            data: { mnemonic: mnemonic }
        });
    };
    /**
     * Returns the hex representation of the serialized output bytes.
     *
     * @param output The output.
     * @returns The hex representation of the serialized output bytes.
     */
    Utils.outputHexBytes = function (output) {
        var hexBytes = callUtilsMethod({
            name: 'outputHexBytes',
            data: {
                output: output
            }
        });
        return hexBytes;
    };
    /**
     * Verify semantic without unlocks.
     *
     * @param inputs The inputs data.
     * @param essence The transaction essence.
     * @param time The unix time for which to do the validation, should be roughly the one of the milestone that will reference the transaction.
     * @returns The conflict reason.
     */
    Utils.verifySemanticWithoutUnlocks = function (inputs, essence, time) {
        var conflictReason = callUtilsMethod2({
            name: 'verifySemanticWithoutUnlocks',
            data: {
                inputs: inputs,
                essence: essence,
                time: time
            }
        });
        return conflictReason;
    };
    return Utils;
}());
export { Utils };
//# sourceMappingURL=utils.js.map