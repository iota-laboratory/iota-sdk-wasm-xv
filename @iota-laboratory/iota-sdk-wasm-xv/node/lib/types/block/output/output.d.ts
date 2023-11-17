import { UnlockCondition } from './unlock-condition';
import { Feature } from './feature';
import { HexEncodedString, NumericString } from '../../utils';
import { TokenScheme } from './token-scheme';
import { INativeToken } from '../../models';
export type OutputId = HexEncodedString;
/**
 * All of the output types.
 */
declare enum OutputType {
    /** A Treasury output. */
    Treasury = 2,
    /** A Basic output. */
    Basic = 3,
    /** An Alias output. */
    Alias = 4,
    /** A Foundry output. */
    Foundry = 5,
    /** An NFT output. */
    Nft = 6
}
/**
 * The base class for outputs.
 */
declare abstract class Output {
    readonly amount: NumericString;
    readonly type: OutputType;
    /**
     * @param type The type of output.
     * @param amount The amount of the output as big-integer or string.
     */
    constructor(type: OutputType, amount: bigint | NumericString);
    /**
     * Get the type of output.
     */
    getType(): OutputType;
    /**
     * Get the amount of the output.
     */
    getAmount(): bigint;
    /**
     * Parse an output from a plain JS JSON object.
     */
    static parse(data: any): Output;
}
/**
 * The base class for common outputs.
 */
declare abstract class CommonOutput extends Output {
    readonly unlockConditions: UnlockCondition[];
    readonly nativeTokens?: INativeToken[];
    readonly features?: Feature[];
    /**
     * @param type The type of output.
     * @param amount The amount of the output.
     * @param unlockConditions Conditions to unlock the output.
     */
    constructor(type: OutputType, amount: bigint, unlockConditions: UnlockCondition[]);
    /**
     * The unlock conditions for the output.
     */
    getUnlockConditions(): UnlockCondition[];
    /**
     * The native tokens held by the output.
     */
    getNativeTokens(): INativeToken[] | undefined;
    /**
     * Get the features contained by the output.
     */
    getFeatures(): Feature[] | undefined;
}
/**
 * A Treasury output.
 */
declare class TreasuryOutput extends Output {
    /**
     * @param amount The amount of the output.
     */
    constructor(amount: bigint);
}
/**
 * A Basic output.
 */
declare class BasicOutput extends CommonOutput {
    /**
     * @param amount The amount of the output.
     * @param unlockConditions The unlock conditions for the output.
     */
    constructor(amount: bigint, unlockConditions: UnlockCondition[]);
}
/**
 * Base class for immutable feature outputs.
 */
declare abstract class ImmutableFeaturesOutput extends CommonOutput {
    readonly immutableFeatures?: Feature[];
    /**
     * @param type The type of output.
     * @param amount The amount of the output.
     * @param unlockConditions The unlock conditions for the output.
     */
    constructor(type: OutputType, amount: bigint, unlockConditions: UnlockCondition[]);
    /**
     * Immutable features contained by the output.
     */
    getImmutableFeatures(): Feature[] | undefined;
}
/**
 * Base class for state metadata outputs.
 */
declare abstract class StateMetadataOutput extends ImmutableFeaturesOutput {
    /**
     * Metadata that can only be changed by the state controller.
     */
    readonly stateMetadata?: HexEncodedString;
    /**
     * @param type The type of output.
     * @param amount The amount of the output.
     * @param unlockConditions The unlock conditions for the output.
     * @param stateMetadata Metadata that can only be changed by the state controller.
     */
    constructor(type: OutputType, amount: bigint, unlockConditions: UnlockCondition[], stateMetadata?: HexEncodedString);
    /**
     * Metadata that can only be changed by the state controller.
     */
    getStateMetadata(): HexEncodedString | undefined;
}
/**
 * An Alias output.
 */
declare class AliasOutput extends StateMetadataOutput {
    /**
     * Unique identifier of the alias, which is the BLAKE2b-256 hash of the Output ID that created it.
     * Unless its a newly created alias, then the id is zeroed.
     */
    readonly aliasId: HexEncodedString;
    /**
     * A counter that must increase by 1 every time the alias is state transitioned.
     */
    readonly stateIndex: number;
    /**
     * A counter that denotes the number of foundries created by this alias account.
     */
    readonly foundryCounter: number;
    /**
     * @param unlockConditions The unlock conditions of the output.
     * @param amount The amount of the output.
     * @param aliasId The Alias ID as hex-encoded string.
     * @param stateIndex A counter that must increase by 1 every time the alias is state transitioned.
     * @param foundryCounter A counter that denotes the number of foundries created by this alias account.
     * @param stateMetadata Metadata that can only be changed by the state controller.
     */
    constructor(unlockConditions: UnlockCondition[], amount: bigint, aliasId: HexEncodedString, stateIndex: number, foundryCounter: number, stateMetadata?: HexEncodedString);
    /**
     * Get the Alias ID of the output.
     */
    getAliasId(): HexEncodedString;
    /**
     * Get the state index of the output.
     */
    getStateIndex(): number;
    /**
     * Get the Foundry counter of the output.
     */
    getFoundryCounter(): number;
}
/**
 * An NFT output.
 */
declare class NftOutput extends ImmutableFeaturesOutput {
    /**
     * Unique identifier of the NFT, which is the BLAKE2b-256 hash of the Output ID that created it.
     * Unless its newly minted, then the id is zeroed.
     */
    readonly nftId: HexEncodedString;
    /**
     * @param amount The amount of the output.
     * @param nftId The NFT ID as hex-encoded string.
     * @param unlockConditions The unlock conditions of the output.
     */
    constructor(amount: bigint, nftId: HexEncodedString, unlockConditions: UnlockCondition[]);
    /**
     * Get the NFT ID of the output.
     */
    getNftId(): HexEncodedString;
}
/**
 * A Foundry output.
 */
declare class FoundryOutput extends ImmutableFeaturesOutput {
    /**
     * The serial number of the Foundry with respect to the controlling alias.
     */
    readonly serialNumber: number;
    /**
     * The token scheme for the Foundry.
     */
    readonly tokenScheme: TokenScheme;
    /**
     * @param amount The amount of the output.
     * @param serialNumber The serial number of the Foundry with respect to the controlling alias.
     * @param unlockConditions The unlock conditions of the output.
     * @param tokenScheme The token scheme for the Foundry.
     */
    constructor(amount: bigint, serialNumber: number, unlockConditions: UnlockCondition[], tokenScheme: TokenScheme);
    /**
     * Get the serial number of the Foundry.
     */
    getSerialNumber(): number;
    /**
     * Get the token scheme for the Foundry.
     */
    getTokenScheme(): TokenScheme;
}
declare const OutputDiscriminator: {
    property: string;
    subTypes: ({
        value: typeof TreasuryOutput;
        name: any;
    } | {
        value: typeof BasicOutput;
        name: any;
    } | {
        value: typeof AliasOutput;
        name: any;
    } | {
        value: typeof NftOutput;
        name: any;
    } | {
        value: typeof FoundryOutput;
        name: any;
    })[];
};
export { OutputDiscriminator, Output, OutputType, CommonOutput, TreasuryOutput, BasicOutput, AliasOutput, NftOutput, FoundryOutput, };
