import type { WalletMethodHandler } from './wallet-method-handler';
import { Balance, AccountMetadata, SyncOptions, AccountMeta, AccountAddress, SendParams, SendNativeTokensParams, SendNftParams, AddressWithUnspentOutputs, AliasOutputParams, FilterOptions, GenerateAddressOptions, CreateNativeTokenParams, MintNftParams, OutputData, OutputParams, OutputsToClaim, Transaction, TransactionOptions, ParticipationOverview, ParticipationEventId, ParticipationEventStatus, ParticipationEventType, ParticipationEventWithNodes, ParticipationEventRegistrationOptions, ParticipationEventMap, BuildAliasOutputData, BuildBasicOutputData, BuildFoundryOutputData, BuildNftOutputData, SignedTransactionEssence, PreparedTransaction, ConsolidationParams } from '../types/wallet';
import { INode, Burn, PreparedTransactionData } from '../client';
import { AliasOutput, NftOutput, Output, BasicOutput, FoundryOutput, PreparedCreateNativeTokenTransaction, NftId, TokenId, OutputId, AliasId, FoundryId, TransactionId, NumericString, Bech32Address } from '../types';
/** The Account class. */
export declare class Account {
    private meta;
    private methodHandler;
    /**
     * @param accountMeta An instance of `AccountMeta`.
     * @param methodHandler A instance of `WalletMethodHandler`.
     */
    constructor(accountMeta: AccountMeta, methodHandler: WalletMethodHandler);
    /** @deprecated use Client::buildAliasOutput() instead. */
    buildAliasOutput(data: BuildAliasOutputData): Promise<AliasOutput>;
    /** @deprecated use Client::buildBasicOutput() instead. */
    buildBasicOutput(data: BuildBasicOutputData): Promise<BasicOutput>;
    /** @deprecated use Client::buildFoundryOutput() instead. */
    buildFoundryOutput(data: BuildFoundryOutputData): Promise<FoundryOutput>;
    /** @deprecated use Client::buildNftOutput() instead. */
    buildNftOutput(data: BuildNftOutputData): Promise<NftOutput>;
    /**
     * A generic function that can be used to burn native tokens, nfts, foundries and aliases.
     * @param burn The outputs or native tokens to burn
     * @param transactionOptions Additional transaction options
     * or custom inputs.
     * @returns The transaction.
     */
    burn(burn: Burn, transactionOptions?: TransactionOptions): Promise<Transaction>;
    /**
     * A generic function that can be used to prepare to burn native tokens, nfts, foundries and aliases.
     * @param burn The outputs or native tokens to burn
     * @param transactionOptions Additional transaction options
     * @returns The prepared transaction.
     */
    prepareBurn(burn: Burn, transactionOptions?: TransactionOptions): Promise<PreparedTransaction>;
    /**
     * Burn native tokens. This doesn't require the foundry output which minted them, but will not increase
     * the foundries `melted_tokens` field, which makes it impossible to destroy the foundry output. Therefore it's
     * recommended to use melting, if the foundry output is available.
     * @param tokenId The native token id.
     * @param burnAmount The to be burned amount.
     * @param transactionOptions Additional transaction options
     * or custom inputs.
     * @returns The prepared transaction.
     */
    prepareBurnNativeToken(tokenId: TokenId, burnAmount: bigint, transactionOptions?: TransactionOptions): Promise<PreparedTransaction>;
    /**
     * Burn an nft output.
     * @param nftId The NftId.
     * @param transactionOptions Additional transaction options
     * or custom inputs.
     * @returns The prepared transaction.
     */
    prepareBurnNft(nftId: NftId, transactionOptions?: TransactionOptions): Promise<PreparedTransaction>;
    /**
     * Claim basic or nft outputs that have additional unlock conditions
     * to their `AddressUnlockCondition` from the account.
     * @param outputIds The outputs to claim.
     * @returns The resulting transaction.
     */
    claimOutputs(outputIds: OutputId[]): Promise<Transaction>;
    /**
     * Consolidate basic outputs with only an `AddressUnlockCondition` from an account
     * by sending them to an own address again if the output amount is greater or
     * equal to the output consolidation threshold.
     * @param params Consolidation options.
     * @returns The consolidation transaction.
     */
    consolidateOutputs(params: ConsolidationParams): Promise<Transaction>;
    /**
     * Consolidate basic outputs with only an `AddressUnlockCondition` from an account
     * by sending them to an own address again if the output amount is greater or
     * equal to the output consolidation threshold.
     * @param params Consolidation options.
     * @returns The prepared consolidation transaction.
     */
    prepareConsolidateOutputs(params: ConsolidationParams): Promise<PreparedTransaction>;
    /**
     * Creates an alias output.
     * @param params The alias output options.
     * @param transactionOptions Additional transaction options
     * or custom inputs.
     * @returns The transaction.
     */
    createAliasOutput(params?: AliasOutputParams, transactionOptions?: TransactionOptions): Promise<Transaction>;
    /**
     * `createAliasOutput` creates an alias output
     * @param params The alias output options.
     * @param transactionOptions Additional transaction options
     * or custom inputs.
     * @returns The prepared transaction.
     */
    prepareCreateAliasOutput(params?: AliasOutputParams, transactionOptions?: TransactionOptions): Promise<PreparedTransaction>;
    /**
     * Melt native tokens. This happens with the foundry output which minted them, by increasing its
     * `melted_tokens` field.
     * @param tokenId The native token id.
     * @param meltAmount To be melted amount.
     * @param transactionOptions Additional transaction options
     * or custom inputs.
     * @returns The transaction.
     */
    meltNativeToken(tokenId: TokenId, meltAmount: bigint, transactionOptions?: TransactionOptions): Promise<Transaction>;
    /**
     * Melt native tokens. This happens with the foundry output which minted them, by increasing its
     * `melted_tokens` field.
     * @param tokenId The native token id.
     * @param meltAmount To be melted amount.
     * @param transactionOptions Additional transaction options
     * or custom inputs.
     * @returns The prepared transaction.
     */
    prepareMeltNativeToken(tokenId: TokenId, meltAmount: bigint, transactionOptions?: TransactionOptions): Promise<PreparedTransaction>;
    /**
     * Deregister a participation event.
     *
     * @param eventId The id of the participation event to deregister.
     */
    deregisterParticipationEvent(eventId: ParticipationEventId): Promise<void>;
    /**
     * Destroy an alias output.
     *
     * @param aliasId The AliasId.
     * @param transactionOptions Additional transaction options
     * or custom inputs.
     * @returns The prepared transaction.
     */
    prepareDestroyAlias(aliasId: AliasId, transactionOptions?: TransactionOptions): Promise<PreparedTransaction>;
    /**
     * Function to destroy a foundry output with a circulating supply of 0.
     * Native tokens in the foundry (minted by other foundries) will be transacted to the controlling alias.
     *
     * @param foundryId The FoundryId.
     * @param transactionOptions Additional transaction options
     * or custom inputs.
     * @returns The prepared transaction.
     */
    prepareDestroyFoundry(foundryId: FoundryId, transactionOptions?: TransactionOptions): Promise<PreparedTransaction>;
    /**
     * Generate new unused Ed25519 addresses.
     *
     * @param amount The amount of addresses to generate.
     * @param options Options for address generation.
     * @returns The addresses.
     */
    generateEd25519Addresses(amount: number, options?: GenerateAddressOptions): Promise<AccountAddress[]>;
    /**
     * Get the account balance.
     *
     * @returns The account balance.
     */
    getBalance(): Promise<Balance>;
    /**
     * Converts hex encoded or decimal strings of amounts to `bigint`
     * for the balance payload.
     */
    private adjustBalancePayload;
    /**
     * Get the data for an output.
     * @param outputId The output to get.
     * @returns The `OutputData`.
     */
    getOutput(outputId: OutputId): Promise<OutputData>;
    /**
     * Get a participation event.
     *
     * @param eventId The ID of the event to get.
     */
    getParticipationEvent(eventId: ParticipationEventId): Promise<ParticipationEventWithNodes>;
    /**
     * Get IDs of participation events of a certain type.
     *
     * @param node The node to get events from.
     * @param eventType The type of events to get.
     */
    getParticipationEventIds(node: INode, eventType?: ParticipationEventType): Promise<ParticipationEventId[]>;
    /**
     * Get all participation events.
     */
    getParticipationEvents(): Promise<ParticipationEventMap>;
    /**
     * Get the participation event status by its ID.
     *
     * @param eventId The ID of the event status to get.
     */
    getParticipationEventStatus(eventId: ParticipationEventId): Promise<ParticipationEventStatus>;
    /**
     * Get a `FoundryOutput` by native token ID. It will try to get the foundry from
     * the account, if it isn't in the account it will try to get it from the node.
     *
     * @param tokenId The native token ID to get the foundry for.
     * @returns The `FoundryOutput` that minted the token.
     */
    getFoundryOutput(tokenId: TokenId): Promise<FoundryOutput>;
    /**
     * Get outputs with additional unlock conditions.
     *
     * @param outputs The type of outputs to claim.
     * @returns The output IDs of the unlockable outputs.
     */
    claimableOutputs(outputs: OutputsToClaim): Promise<OutputId[]>;
    /**
     * Get a transaction stored in the account.
     *
     * @param transactionId The ID of the transaction to get.
     * @returns The transaction.
     */
    getTransaction(transactionId: TransactionId): Promise<Transaction>;
    /**
     * Get the transaction with inputs of an incoming transaction stored in the account
     * List might not be complete, if the node pruned the data already
     *
     * @param transactionId The ID of the transaction to get.
     * @returns The transaction.
     */
    getIncomingTransaction(transactionId: TransactionId): Promise<Transaction>;
    /**
     * List all the addresses of the account.
     *
     * @returns The addresses.
     */
    addresses(): Promise<AccountAddress[]>;
    /**
     * List the addresses of the account with unspent outputs.
     *
     * @returns The addresses.
     */
    addressesWithUnspentOutputs(): Promise<AddressWithUnspentOutputs[]>;
    /**
     * List all outputs of the account.
     *
     * @param filterOptions Options to filter the to be returned outputs.
     * @returns The outputs with metadata.
     */
    outputs(filterOptions?: FilterOptions): Promise<OutputData[]>;
    /**
     * List all the pending transactions of the account.
     *
     * @returns The transactions.
     */
    pendingTransactions(): Promise<Transaction[]>;
    /**
     * List all incoming transactions of the account.
     *
     * @returns The incoming transactions with their inputs.
     */
    incomingTransactions(): Promise<Transaction[]>;
    /**
     * List all the transactions of the account.
     *
     * @returns The transactions.
     */
    transactions(): Promise<Transaction[]>;
    /**
     * List all the unspent outputs of the account.
     *
     * @param filterOptions Options to filter the to be returned outputs.
     * @returns The outputs with metadata.
     */
    unspentOutputs(filterOptions?: FilterOptions): Promise<OutputData[]>;
    /**
     * Get the accounts metadata.
     *
     * @returns The accounts metadata.
     */
    getMetadata(): AccountMetadata;
    /**
     * Mint additional native tokens.
     *
     * @param tokenId The native token id.
     * @param mintAmount To be minted amount.
     * @param transactionOptions Additional transaction options
     * or custom inputs.
     * @returns The minting transaction.
     */
    mintNativeToken(tokenId: TokenId, mintAmount: bigint, transactionOptions?: TransactionOptions): Promise<Transaction>;
    /**
     * Mint additional native tokens.
     *
     * @param tokenId The native token id.
     * @param mintAmount To be minted amount.
     * @param transactionOptions Additional transaction options
     * or custom inputs.
     * @returns The prepared minting transaction.
     */
    prepareMintNativeToken(tokenId: TokenId, mintAmount: bigint, transactionOptions?: TransactionOptions): Promise<PreparedTransaction>;
    /**
     * Create a native token.
     *
     * @param params The options for creating a native token.
     * @param transactionOptions Additional transaction options
     * or custom inputs.
     * @returns The created transaction.
     */
    createNativeToken(params: CreateNativeTokenParams, transactionOptions?: TransactionOptions): Promise<Transaction>;
    /**
     * Create a native token.
     *
     * @param params The options for creating a native token.
     * @param transactionOptions Additional transaction options
     * or custom inputs.
     * @returns The created transaction and the token ID.
     */
    prepareCreateNativeToken(params: CreateNativeTokenParams, transactionOptions?: TransactionOptions): Promise<PreparedCreateNativeTokenTransaction>;
    /**
     * Mint NFTs.
     *
     * @param params The options for minting nfts.
     * @param transactionOptions Additional transaction options
     * or custom inputs.
     * @returns The minting transaction.
     */
    mintNfts(params: MintNftParams[], transactionOptions?: TransactionOptions): Promise<Transaction>;
    /**
     * Mint NFTs.
     *
     * @param params The options for minting nfts.
     * @param transactionOptions Additional transaction options
     * or custom inputs.
     * @returns The prepared minting transaction.
     */
    prepareMintNfts(params: MintNftParams[], transactionOptions?: TransactionOptions): Promise<PreparedTransaction>;
    /**
     * Prepare an output for sending, useful for offline signing.
     *
     * @param options The options for preparing an output. If the amount is
     * below the minimum required storage deposit, by default the remaining
     * amount will automatically be added with a `StorageDepositReturn` `UnlockCondition`,
     * when setting the `ReturnStrategy` to `gift`, the full minimum required
     * storage deposit will be sent to the recipient. When the assets contain
     * an nft id, the data from the existing `NftOutput` will be used, just with
     * the address unlock conditions replaced.
     * @param transactionOptions Additional transaction options
     * or custom inputs.
     * @returns The prepared output.
     */
    prepareOutput(params: OutputParams, transactionOptions?: TransactionOptions): Promise<Output>;
    /**
     * Prepare to send base coins, useful for offline signing.
     *
     * @param params Address with amounts to send.
     * @param options Additional transaction options
     * or custom inputs.
     * @returns The prepared transaction data.
     */
    prepareSend(params: SendParams[], options?: TransactionOptions): Promise<PreparedTransaction>;
    /**
     * Send a transaction.
     *
     * @param outputs Outputs to use in the transaction.
     * @param options Additional transaction options
     * or custom inputs.
     * @returns The transaction data.
     */
    sendTransaction(outputs: Output[], options?: TransactionOptions): Promise<Transaction>;
    /**
     * Prepare a transaction, useful for offline signing.
     *
     * @param outputs Outputs to use in the transaction.
     * @param options Additional transaction options
     * or custom inputs.
     * @returns The prepared transaction data.
     */
    prepareTransaction(outputs: Output[], options?: TransactionOptions): Promise<PreparedTransaction>;
    /**
     * Register participation events.
     *
     * @param options Options to register participation events.
     * @returns A mapping between event IDs and their corresponding event data.
     */
    registerParticipationEvents(options: ParticipationEventRegistrationOptions): Promise<ParticipationEventMap>;
    /**
     * Retries (promotes or reattaches) a transaction sent from the account for a provided transaction id until it's
     * included (referenced by a milestone). Returns the included block id.
     */
    retryTransactionUntilIncluded(transactionId: string, interval?: number, maxAttempts?: number): Promise<string>;
    /**
     * Send base coins to an address.
     *
     * @param amount Amount of coins.
     * @param address Receiving address.
     * @param transactionOptions Additional transaction options
     * or custom inputs.
     * @returns The sent transaction.
     */
    send(amount: bigint | NumericString, address: Bech32Address, transactionOptions?: TransactionOptions): Promise<Transaction>;
    /**
     * Send base coins with amounts from input addresses.
     *
     * @param params Addresses with amounts.
     * @param transactionOptions Additional transaction options
     * or custom inputs.
     * @returns The sent transaction.
     */
    sendWithParams(params: SendParams[], transactionOptions?: TransactionOptions): Promise<Transaction>;
    /**
     * Send native tokens.
     *
     * @param params Addresses amounts and native tokens.
     * @param transactionOptions Additional transaction options
     * or custom inputs.
     * @returns The transaction.
     */
    sendNativeTokens(params: SendNativeTokensParams[], transactionOptions?: TransactionOptions): Promise<Transaction>;
    /**
     * Send native tokens.
     *
     * @param params Addresses amounts and native tokens.
     * @param transactionOptions Additional transaction options
     * or custom inputs.
     * @returns The prepared transaction.
     */
    prepareSendNativeTokens(params: SendNativeTokensParams[], transactionOptions?: TransactionOptions): Promise<PreparedTransaction>;
    /**
     * Send NFT.
     *
     * @param params Addresses and nft ids.
     * @param transactionOptions Additional transaction options
     * or custom inputs.
     * @returns The transaction.
     */
    sendNft(params: SendNftParams[], transactionOptions?: TransactionOptions): Promise<Transaction>;
    /**
     * Send NFT.
     *
     * @param params Addresses and nft ids.
     * @param transactionOptions Additional transaction options
     * or custom inputs.
     * @returns The prepared transaction.
     */
    prepareSendNft(params: SendNftParams[], transactionOptions?: TransactionOptions): Promise<PreparedTransaction>;
    /**
     * Send outputs in a transaction.
     *
     * @param outputs The outputs to send.
     * @param transactionOptions Additional transaction options
     * or custom inputs.
     * @returns The sent transaction.
     */
    sendOutputs(outputs: Output[], transactionOptions?: TransactionOptions): Promise<Transaction>;
    /**
     * Set the alias for the account
     *
     * @param alias The account alias to set.
     */
    setAlias(alias: string): Promise<void>;
    /**
     * Set the fallback SyncOptions for account syncing.
     * If storage is enabled, will persist during restarts.
     *
     * @param options The sync options to set.
     */
    setDefaultSyncOptions(options: SyncOptions): Promise<void>;
    /**
     * Sign a prepared transaction, useful for offline signing.
     *
     * @param preparedTransactionData The prepared transaction data to sign.
     * @returns The signed transaction essence.
     */
    signTransactionEssence(preparedTransactionData: PreparedTransactionData): Promise<SignedTransactionEssence>;
    /**
     * Sign a prepared transaction, and send it.
     *
     * @param preparedTransactionData The prepared transaction data to sign and submit.
     * @returns The transaction.
     */
    signAndSubmitTransaction(preparedTransactionData: PreparedTransactionData): Promise<Transaction>;
    /**
     * Validate the transaction, submit it to a node and store it in the account.
     *
     * @param signedTransactionData A signed transaction to submit and store.
     * @returns The sent transaction.
     */
    submitAndStoreTransaction(signedTransactionData: SignedTransactionEssence): Promise<Transaction>;
    /**
     * Sync the account by fetching new information from the nodes.
     * Will also retry pending transactions if necessary.
     * A custom default can be set using setDefaultSyncOptions.
     *
     * @param options Optional synchronization options.
     * @returns The account balance.
     */
    sync(options?: SyncOptions): Promise<Balance>;
    /**
     * Prepare a vote.
     *
     * @param eventId The participation event ID.
     * @param answers Answers for a voting event, can be empty.
     * @returns An instance of `PreparedTransaction`.
     */
    prepareVote(eventId?: ParticipationEventId, answers?: number[]): Promise<PreparedTransaction>;
    /**
     * Prepare stop participating in an event.
     *
     * @param eventId The event ID to stop participating in.
     * @returns An instance of `PreparedTransaction`.
     */
    prepareStopParticipating(eventId: ParticipationEventId): Promise<PreparedTransaction>;
    /**
     * Calculates the voting overview of an account.
     *
     * @param eventIds Optional, filters participations only for provided events.
     * @returns An instance of `ParticipationOverview`
     */
    getParticipationOverview(eventIds?: ParticipationEventId[]): Promise<ParticipationOverview>;
    /** @deprecated use prepareIncreaseVotingPower() instead. */
    prepareVotingPower(amount: string): Promise<PreparedTransaction>;
    /**
     * Prepare to increase the voting power.
     *
     * @param amount The amount to increase the voting power by.
     * @returns An instance of `PreparedTransaction`.
     */
    prepareIncreaseVotingPower(amount: NumericString): Promise<PreparedTransaction>;
    /**
     * Prepare to decrease the voting power.
     *
     * @param amount The amount to decrease the voting power by.
     * @returns An instance of `PreparedTransaction`.
     */
    prepareDecreaseVotingPower(amount: NumericString): Promise<PreparedTransaction>;
}
