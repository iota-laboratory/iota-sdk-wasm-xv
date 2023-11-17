import { ClientMethodHandler } from './client-method-handler';
import { IClientOptions, IGenerateAddressesOptions, IBuildBlockOptions, QueryParameter, PreparedTransactionData, INetworkInfo, INode, IAuth, BasicOutputBuilderParams, AliasOutputBuilderParams, FoundryOutputBuilderParams, NftOutputBuilderParams, FoundryQueryParameter, NftQueryParameter, AliasQueryParameter, GenericQueryParameter } from '../types/client';
import type { INodeInfoWrapper } from '../types/client/nodeInfo';
import { Bip44, SecretManagerType } from '../types/secret_manager/secret-manager';
import { AliasOutput, BasicOutput, FoundryOutput, NftOutput, Block, BlockId, UnlockCondition, Payload, TransactionPayload, MilestonePayload, TreasuryOutput, Output, MilestoneId, AliasId, NftId, FoundryId } from '../types/block';
import { HexEncodedString, NumericString } from '../utils';
import { IBlockMetadata, INodeInfo, INodeInfoProtocol, IPeer, UTXOInput, OutputId, TransactionId, Bech32Address } from '../types';
import { IMilestoneUtxoChangesResponse, OutputResponse, ReceiptsResponse, IOutputsResponse } from '../types/models/api';
/** The Client to interact with nodes. */
export declare class Client {
    private methodHandler;
    /**
     * @param options client options or a client method handler.
     */
    constructor(options: IClientOptions | ClientMethodHandler);
    destroy(): Promise<any>;
    /**
     * Get the node information together with the url of the used node.
     */
    getInfo(): Promise<INodeInfoWrapper>;
    /**
     * Get network related information such as protocol parameters and minimum pow score.
     */
    getNetworkInfo(): Promise<INetworkInfo>;
    /**
     * Fetch alias/basic/NFT/foundry output IDs based on the given query parameters.
     */
    outputIds(queryParameters: GenericQueryParameter[]): Promise<IOutputsResponse>;
    /**
     * Fetch basic output IDs based on the given query parameters.
     */
    basicOutputIds(queryParameters: QueryParameter[]): Promise<IOutputsResponse>;
    /**
     * Get output from a given output ID.
     */
    getOutput(outputId: OutputId): Promise<OutputResponse>;
    /**
     * Fetch OutputResponse from given output IDs. Requests are sent in parallel.
     */
    getOutputs(outputIds: OutputId[]): Promise<OutputResponse[]>;
    /**
     * Build and post a block.
     *
     * @param secretManager One of the supported secret managers.
     * @param options Options on how to build a block.
     * @returns The block ID and the posted block itself.
     */
    buildAndPostBlock(secretManager?: SecretManagerType, options?: IBuildBlockOptions): Promise<[BlockId, Block]>;
    /**
     * Request tips from the node.
     * The tips can be considered as non-lazy and are therefore ideal for attaching a block to the Tangle.
     * @returns An array of tips represented by their block IDs.
     */
    getTips(): Promise<BlockId[]>;
    /**
     * Post a block in JSON format.
     *
     * @param block The block to post.
     * @returns The block ID once the block has been posted.
     */
    postBlock(block: Block): Promise<BlockId>;
    /**
     * Get a block in JSON format.
     *
     * @param blockId The corresponding block ID of the requested block.
     * @returns The requested block.
     */
    getBlock(blockId: BlockId): Promise<Block>;
    /**
     * Get the metadata of a block.
     *
     * @param blockId The corresponding block ID of the requested block metadata.
     * @returns The requested block metadata.
     */
    getBlockMetadata(blockId: BlockId): Promise<IBlockMetadata>;
    /**
     * Find inputs from addresses for a given amount (useful for offline signing).
     *
     * @param addresses A list of included addresses.
     * @param amount The amount to find inputs for.
     * @returns An array of UTXO inputs.
     */
    findInputs(addresses: string[], amount: bigint): Promise<UTXOInput[]>;
    /**
     * Prepare a transaction for signing.
     *
     * @param secretManager One of the supported secret managers.
     * @param options Options to build a block.
     * @returns An instance of `PreparedTransactionData`.
     */
    prepareTransaction(secretManager?: SecretManagerType, options?: IBuildBlockOptions): Promise<PreparedTransactionData>;
    /**
     * Sign a transaction.
     *
     * @param secretManager One of the supported secret managers.
     * @param preparedTransactionData An instance of `PreparedTransactionData`.
     * @returns The corresponding transaction payload.
     */
    signTransaction(secretManager: SecretManagerType, preparedTransactionData: PreparedTransactionData): Promise<TransactionPayload>;
    /**
     * Create a signature unlock using the given secret manager.
     *
     * @param secretManager One of the supported secret managers.
     * @param transactionEssenceHash The hash of the transaction essence.
     * @param chain A BIP44 chain
     * @returns The corresponding unlock condition.
     */
    signatureUnlock(secretManager: SecretManagerType, transactionEssenceHash: HexEncodedString, chain: Bip44): Promise<UnlockCondition>;
    /**
     * Submit a payload in a block.
     *
     * @param payload The payload to post.
     * @returns The block ID followed by the block containing the payload.
     */
    postBlockPayload(payload: Payload): Promise<[BlockId, Block]>;
    /**
     * Get a node candidate from the healthy node pool.
     */
    getNode(): Promise<INode>;
    /**
     * Get the ID of the network the node is connected to.
     */
    getNetworkId(): Promise<string>;
    /**
     * Get the Bech32 HRP (human readable part) of the network the node is connected to.
     */
    getBech32Hrp(): Promise<string>;
    /**
     * Get the minimum PoW score.
     */
    getMinPowScore(): Promise<number>;
    /**
     * Get the tips interval.
     */
    getTipsInterval(): Promise<number>;
    /**
     * Get the token supply.
     */
    getTokenSupply(): Promise<NumericString>;
    /**
     * Get the protocol parameters.
     */
    getProtocolParameters(): Promise<INodeInfoProtocol>;
    /**
     * Check whether local pow should be used or not.
     */
    getLocalPow(): Promise<boolean>;
    /**
     * Check whether to fallback to local proof of work in case the node doesn't support remote PoW.
     */
    getFallbackToLocalPow(): Promise<boolean>;
    /**
     * Get the health of a node.
     *
     * @param url The URL of the node.
     */
    getHealth(url: string): Promise<boolean>;
    /**
     * Get the info about the node.
     *
     * @param url The URL of the node.
     * @param auth An authentication object (e.g. JWT).
     */
    getNodeInfo(url: string, auth?: IAuth): Promise<INodeInfo>;
    /**
     * Get the peers of the node.
     */
    getPeers(): Promise<IPeer[]>;
    /**
     * Post block as raw bytes, returns the block ID.
     *
     * @param block The block.
     * @returns The ID of the posted block.
     */
    postBlockRaw(block: Block): Promise<BlockId>;
    /**
     * Get block as raw bytes.
     *
     * @param blockId The block ID of the requested block.
     * @returns The raw bytes of the requested block.
     */
    getBlockRaw(blockId: BlockId): Promise<Uint8Array>;
    /**
     * Get a milestone payload by its ID.
     *
     * @param milestoneId The ID of the requested milestone.
     * @returns The corresponding milestone payload.
     */
    getMilestoneById(milestoneId: string): Promise<MilestonePayload>;
    /**
     * Get all UTXO changes of a milestone by its ID.
     *
     * @param milestoneId The ID of the milestone that applied the UTXO changes.
     * @returns A milestone UTXO changes response.
     */
    getUtxoChangesById(milestoneId: MilestoneId): Promise<IMilestoneUtxoChangesResponse>;
    /**
     * Get a milestone payload by its index.
     *
     * @param index The index of the requested milestone.
     * @returns The corresponding milestone payload.
     */
    getMilestoneByIndex(index: number): Promise<MilestonePayload>;
    /**
     * Get all UTXO changes of a milestone by its index.
     *
     * @param index The index of the milestone that applied the UTXO changes.
     * @returns A milestone UTXO changes response.
     */
    getUtxoChangesByIndex(index: number): Promise<IMilestoneUtxoChangesResponse>;
    /**
     * Get all receipts.
     */
    getReceipts(): Promise<ReceiptsResponse>;
    /**
     * Get the receipts at a given milestone index.
     *
     * @param milestoneIndex The index of the milestone that migrated funds to the new network.
     */
    getReceiptsMigratedAt(milestoneIndex: number): Promise<ReceiptsResponse[]>;
    /**
     * Get the treasury output.
     */
    getTreasury(): Promise<TreasuryOutput>;
    /**
     * Get the included block of a given transaction.
     *
     * @param transactionId The ID of the transaction.
     * @returns The included block that contained the transaction.
     */
    getIncludedBlock(transactionId: TransactionId): Promise<Block>;
    /**
     * Get the metadata of the included block of a given transaction.
     *
     * @param transactionId The ID of the transaction.
     * @returns The included block that contained the transaction.
     */
    getIncludedBlockMetadata(transactionId: TransactionId): Promise<Block>;
    /**
     * Convert a hex encoded address to a Bech32 encoded address.
     *
     * @param hex The hexadecimal string representation of an address.
     * @param bech32Hrp The Bech32 HRP (human readable part) to be used.
     * @returns The corresponding Bech32 address.
     */
    hexToBech32(hex: HexEncodedString, bech32Hrp?: string): Promise<Bech32Address>;
    /**
     * Convert an Alias ID to a Bech32 encoded address.
     *
     * @param aliasId An Alias ID.
     * @param bech32Hrp The Bech32 HRP (human readable part) to be used.
     * @returns The corresponding Bech32 address.
     */
    aliasIdToBech32(aliasId: AliasId, bech32Hrp?: string): Promise<Bech32Address>;
    /**
     * Convert an NFT ID to a Bech32 encoded address.
     *
     * @param nftId An NFT ID.
     * @param bech32Hrp The Bech32 HRP (human readable part) to be used.
     * @returns The corresponding Bech32 address.
     */
    nftIdToBech32(nftId: NftId, bech32Hrp?: string): Promise<Bech32Address>;
    /**
     * Convert a hex encoded public key to a Bech32 encoded address.
     *
     * @param hex The hexadecimal string representation of a public key.
     * @param bech32Hrp The Bech32 HRP (human readable part) to be used.
     * @returns The corresponding Bech32 address.
     */
    hexPublicKeyToBech32Address(hex: HexEncodedString, bech32Hrp?: string): Promise<Bech32Address>;
    /**
     * Get the corresponding output IDs given a list of Alias query parameters.
     *
     * @param queryParameters An array of `AliasQueryParameter`s.
     * @returns A paginated query response of corresponding output IDs.
     */
    aliasOutputIds(queryParameters: AliasQueryParameter[]): Promise<IOutputsResponse>;
    /**
     * Get the corresponding output ID from an Alias ID.
     *
     * @param aliasId An Alias ID.
     * @returns The corresponding output ID.
     */
    aliasOutputId(aliasId: AliasId): Promise<OutputId>;
    /**
     * Get the corresponding output IDs given a list of NFT query parameters.
     *
     * @param queryParameters An array of `NftQueryParameter`s.
     * @returns A paginated query response of corresponding output IDs.
     */
    nftOutputIds(queryParameters: NftQueryParameter[]): Promise<IOutputsResponse>;
    /**
     * Get the corresponding output ID from an NFT ID.
     *
     * @param nftId An NFT ID.
     * @returns The corresponding output ID.
     */
    nftOutputId(nftId: NftId): Promise<OutputId>;
    /**
     * Get the corresponding output IDs given a list of Foundry query parameters.
     *
     * @param queryParameters An array of `FoundryQueryParameter`s.
     * @returns A paginated query response of corresponding output IDs.
     */
    foundryOutputIds(queryParameters: FoundryQueryParameter[]): Promise<IOutputsResponse>;
    /**
     * Get the corresponding output ID from a Foundry ID.
     *
     * @param foundryId A Foundry ID.
     * @returns The corresponding output ID.
     */
    foundryOutputId(foundryId: FoundryId): Promise<OutputId>;
    /**
     * Get outputs from provided output IDs (requests are sent
     * in parallel and errors are ignored, can be useful for spent outputs)
     *
     * @param outputIds An array of output IDs.
     * @returns An array of corresponding output responses.
     */
    getOutputsIgnoreErrors(outputIds: OutputId[]): Promise<OutputResponse[]>;
    /**
     * Find blocks by their IDs.
     *
     * @param blockIds An array of `BlockId`s.
     * @returns An array of corresponding blocks.
     */
    findBlocks(blockIds: BlockId[]): Promise<Block[]>;
    /**
     * Retry (promote or reattach) a block given its block ID.
     *
     * **Note**: Blocks should be retried only if they are valid and haven't been confirmed for some time.
     *
     * @param blockId The ID of the block to retry.
     * @returns The included block.
     */
    retry(blockId: BlockId): Promise<[BlockId, Block]>;
    /**
     * Retry (promote or reattach) a block given its block ID until it's included
     * (i.e. referenced by a milestone).
     *
     * @param blockId The ID of the block to retry.
     * @param interval A retry interval in seconds. Defaults to 5.
     * @param maxAttempts A maximum number of retries. Defaults to 40.
     * @returns The included block at first position and additional reattached blocks.
     */
    retryUntilIncluded(blockId: BlockId, interval?: number, maxAttempts?: number): Promise<[BlockId, Block][]>;
    /**
     * Consolidate all funds from a range of addresses to the address with the lowest index in that range.
     *
     * @param secretManager One of supported secret managers.
     * @param generateAddressesOptions Options for generating addresses.
     * @returns The address to which the funds got consolidated, if any were available.
     */
    consolidateFunds(secretManager: SecretManagerType, generateAddressesOptions: IGenerateAddressesOptions): Promise<string>;
    /**
     * Reattach a block.
     *
     * **Note**: Blocks can be reattached only if they are valid and haven't been confirmed for some time.
     *
     * @param blockId The ID of the block to reattach.
     * @returns The included block.
     */
    reattach(blockId: BlockId): Promise<[BlockId, Block]>;
    /**
     * Reattach a block without checking whether it should be reattached.
     *
     * @param blockId The ID of the block to reattach.
     * @returns The included block.
     */
    reattachUnchecked(blockId: BlockId): Promise<[BlockId, Block]>;
    /**
     * Promote a block.
     *
     * **NOTE**: The method validates whether a promotion is necessary through `get_block`. If not, the
     * method will error out and will not do unnecessary promotions.
     *
     * @param blockId The ID of the block to promote.
     * @returns The included block.
     */
    promote(blockId: BlockId): Promise<[BlockId, Block]>;
    /**
     * Promote a block without checking if it should be promoted.
     *
     * @param blockId The ID of the block to promote.
     * @returns The included block.
     */
    promoteUnchecked(blockId: BlockId): Promise<[BlockId, Block]>;
    /**
     * Return the unhealthy nodes.
     */
    unhealthyNodes(): Promise<Set<INode>>;
    /**
     * Build a basic output.
     *
     * @param params An instance of `BasicOutputBuilderParams`.
     */
    buildBasicOutput(params: BasicOutputBuilderParams): Promise<BasicOutput>;
    /**
     * Build an alias output.
     *
     * @param params An instance of `AliasOutputBuilderParams`.
     */
    buildAliasOutput(params: AliasOutputBuilderParams): Promise<AliasOutput>;
    /**
     * Build a foundry output.
     *
     * @param params An instance of `FoundryOutputBuilderParams`.
     */
    buildFoundryOutput(params: FoundryOutputBuilderParams): Promise<FoundryOutput>;
    /**
     * Build an NFT output.
     *
     * @param params An instance of `NftOutputBuilderParams`.
     */
    buildNftOutput(params: NftOutputBuilderParams): Promise<NftOutput>;
    /**
     * Listen to MQTT events.
     *
     * @param topics An array of MQTT topics to listen to.
     */
    listenMqtt(topics: string[], callback: (error: Error, result: string) => void): Promise<void>;
    /**
     * Stop listening to certain MQTT events.
     *
     * @param topics An array of MQTT topics to stop listening to.
     */
    clearMqttListeners(topics: string[]): Promise<void>;
    /**
     * Calculate the minimum required storage deposit for an output.
     *
     * @param output The output to calculate the minimum deposit amount for.
     * @returns The minimum required amount.
     */
    minimumRequiredStorageDeposit(output: Output): Promise<number>;
    /**
     * Request funds from a faucet.
     *
     * Example URLs: `https://faucet.testnet.shimmer.network/api/enqueue` or `http://localhost:8091/api/enqueue`.
     *
     * @param url The URL of the faucet.
     * @param address The address to send the funds to.
     * @returns The faucet response.
     */
    requestFundsFromFaucet(url: string, address: Bech32Address): Promise<string>;
    /**
     * Extension method which provides request methods for plugins.
     *
     * @param basePluginPath The base path for the plugin eg indexer/v1/ .
     * @param method The http method.
     * @param endpoint The path for the plugin request.
     * @param queryParams Additional query params for the request.
     * @param request The request object.
     * @returns The response json.
     */
    callPluginRoute(basePluginPath: string, method: 'GET' | 'POST', endpoint: string, queryParams?: string[], request?: string): Promise<string>;
}
