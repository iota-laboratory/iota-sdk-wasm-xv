// Copyright 2023 IOTA Stiftung
// SPDX-License-Identifier: Apache-2.0
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { OutputData, Transaction, SignedTransactionEssence, PreparedTransaction, PreparedCreateNativeTokenTransactionData, } from '../types/wallet';
import { PreparedTransactionData } from '../client';
import { Output, PreparedCreateNativeTokenTransaction, } from '../types';
import { plainToInstance } from 'class-transformer';
import { bigIntToHex, hexToBigInt } from '../types/utils/hex-encoding';
/** The Account class. */
var Account = /** @class */ (function () {
    /**
     * @param accountMeta An instance of `AccountMeta`.
     * @param methodHandler A instance of `WalletMethodHandler`.
     */
    function Account(accountMeta, methodHandler) {
        this.meta = accountMeta;
        this.methodHandler = methodHandler;
    }
    /** @deprecated use Client::buildAliasOutput() instead. */
    Account.prototype.buildAliasOutput = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.methodHandler.callAccountMethod(this.meta.index, {
                            name: 'buildAliasOutput',
                            data: data
                        })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, JSON.parse(response).payload];
                }
            });
        });
    };
    /** @deprecated use Client::buildBasicOutput() instead. */
    Account.prototype.buildBasicOutput = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.methodHandler.callAccountMethod(this.meta.index, {
                            name: 'buildBasicOutput',
                            data: data
                        })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, Output.parse(JSON.parse(response).payload)];
                }
            });
        });
    };
    /** @deprecated use Client::buildFoundryOutput() instead. */
    Account.prototype.buildFoundryOutput = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.methodHandler.callAccountMethod(this.meta.index, {
                            name: 'buildFoundryOutput',
                            data: data
                        })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, Output.parse(JSON.parse(response).payload)];
                }
            });
        });
    };
    /** @deprecated use Client::buildNftOutput() instead. */
    Account.prototype.buildNftOutput = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.methodHandler.callAccountMethod(this.meta.index, {
                            name: 'buildNftOutput',
                            data: data
                        })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, Output.parse(JSON.parse(response).payload)];
                }
            });
        });
    };
    /**
     * A generic function that can be used to burn native tokens, nfts, foundries and aliases.
     * @param burn The outputs or native tokens to burn
     * @param transactionOptions Additional transaction options
     * or custom inputs.
     * @returns The transaction.
     */
    Account.prototype.burn = function (burn, transactionOptions) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.prepareBurn(burn, transactionOptions)];
                    case 1: return [2 /*return*/, (_a.sent()).send()];
                }
            });
        });
    };
    /**
     * A generic function that can be used to prepare to burn native tokens, nfts, foundries and aliases.
     * @param burn The outputs or native tokens to burn
     * @param transactionOptions Additional transaction options
     * @returns The prepared transaction.
     */
    Account.prototype.prepareBurn = function (burn, transactionOptions) {
        return __awaiter(this, void 0, void 0, function () {
            var response, parsed;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.methodHandler.callAccountMethod(this.meta.index, {
                            name: 'prepareBurn',
                            data: {
                                burn: burn,
                                options: transactionOptions
                            }
                        })];
                    case 1:
                        response = _a.sent();
                        parsed = JSON.parse(response);
                        return [2 /*return*/, new PreparedTransaction(plainToInstance(PreparedTransactionData, parsed.payload), this)];
                }
            });
        });
    };
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
    Account.prototype.prepareBurnNativeToken = function (tokenId, burnAmount, transactionOptions) {
        return __awaiter(this, void 0, void 0, function () {
            var response, parsed;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.methodHandler.callAccountMethod(this.meta.index, {
                            name: 'prepareBurn',
                            data: {
                                burn: {
                                    nativeTokens: new Map([[tokenId, burnAmount]])
                                },
                                options: transactionOptions
                            }
                        })];
                    case 1:
                        response = _a.sent();
                        parsed = JSON.parse(response);
                        return [2 /*return*/, new PreparedTransaction(plainToInstance(PreparedTransactionData, parsed.payload), this)];
                }
            });
        });
    };
    /**
     * Burn an nft output.
     * @param nftId The NftId.
     * @param transactionOptions Additional transaction options
     * or custom inputs.
     * @returns The prepared transaction.
     */
    Account.prototype.prepareBurnNft = function (nftId, transactionOptions) {
        return __awaiter(this, void 0, void 0, function () {
            var response, parsed;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.methodHandler.callAccountMethod(this.meta.index, {
                            name: 'prepareBurn',
                            data: {
                                burn: {
                                    nfts: [nftId]
                                },
                                options: transactionOptions
                            }
                        })];
                    case 1:
                        response = _a.sent();
                        parsed = JSON.parse(response);
                        return [2 /*return*/, new PreparedTransaction(plainToInstance(PreparedTransactionData, parsed.payload), this)];
                }
            });
        });
    };
    /**
     * Claim basic or nft outputs that have additional unlock conditions
     * to their `AddressUnlockCondition` from the account.
     * @param outputIds The outputs to claim.
     * @returns The resulting transaction.
     */
    Account.prototype.claimOutputs = function (outputIds) {
        return __awaiter(this, void 0, void 0, function () {
            var response, parsed;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.methodHandler.callAccountMethod(this.meta.index, {
                            name: 'claimOutputs',
                            data: {
                                outputIdsToClaim: outputIds
                            }
                        })];
                    case 1:
                        response = _a.sent();
                        parsed = JSON.parse(response);
                        return [2 /*return*/, plainToInstance(Transaction, parsed.payload)];
                }
            });
        });
    };
    /**
     * Consolidate basic outputs with only an `AddressUnlockCondition` from an account
     * by sending them to an own address again if the output amount is greater or
     * equal to the output consolidation threshold.
     * @param params Consolidation options.
     * @returns The consolidation transaction.
     */
    Account.prototype.consolidateOutputs = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.prepareConsolidateOutputs(params)];
                    case 1: return [2 /*return*/, (_a.sent()).send()];
                }
            });
        });
    };
    /**
     * Consolidate basic outputs with only an `AddressUnlockCondition` from an account
     * by sending them to an own address again if the output amount is greater or
     * equal to the output consolidation threshold.
     * @param params Consolidation options.
     * @returns The prepared consolidation transaction.
     */
    Account.prototype.prepareConsolidateOutputs = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var response, parsed;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.methodHandler.callAccountMethod(this.meta.index, {
                            name: 'prepareConsolidateOutputs',
                            data: {
                                params: params
                            }
                        })];
                    case 1:
                        response = _a.sent();
                        parsed = JSON.parse(response);
                        return [2 /*return*/, new PreparedTransaction(plainToInstance(PreparedTransactionData, parsed.payload), this)];
                }
            });
        });
    };
    /**
     * Creates an alias output.
     * @param params The alias output options.
     * @param transactionOptions Additional transaction options
     * or custom inputs.
     * @returns The transaction.
     */
    Account.prototype.createAliasOutput = function (params, transactionOptions) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.prepareCreateAliasOutput(params, transactionOptions)];
                    case 1: return [2 /*return*/, (_a.sent()).send()];
                }
            });
        });
    };
    /**
     * `createAliasOutput` creates an alias output
     * @param params The alias output options.
     * @param transactionOptions Additional transaction options
     * or custom inputs.
     * @returns The prepared transaction.
     */
    Account.prototype.prepareCreateAliasOutput = function (params, transactionOptions) {
        return __awaiter(this, void 0, void 0, function () {
            var response, parsed;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.methodHandler.callAccountMethod(this.meta.index, {
                            name: 'prepareCreateAliasOutput',
                            data: {
                                params: params,
                                options: transactionOptions
                            }
                        })];
                    case 1:
                        response = _a.sent();
                        parsed = JSON.parse(response);
                        return [2 /*return*/, new PreparedTransaction(plainToInstance(PreparedTransactionData, parsed.payload), this)];
                }
            });
        });
    };
    /**
     * Melt native tokens. This happens with the foundry output which minted them, by increasing its
     * `melted_tokens` field.
     * @param tokenId The native token id.
     * @param meltAmount To be melted amount.
     * @param transactionOptions Additional transaction options
     * or custom inputs.
     * @returns The transaction.
     */
    Account.prototype.meltNativeToken = function (tokenId, meltAmount, transactionOptions) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.prepareMeltNativeToken(tokenId, meltAmount, transactionOptions)];
                    case 1: return [2 /*return*/, (_a.sent()).send()];
                }
            });
        });
    };
    /**
     * Melt native tokens. This happens with the foundry output which minted them, by increasing its
     * `melted_tokens` field.
     * @param tokenId The native token id.
     * @param meltAmount To be melted amount.
     * @param transactionOptions Additional transaction options
     * or custom inputs.
     * @returns The prepared transaction.
     */
    Account.prototype.prepareMeltNativeToken = function (tokenId, meltAmount, transactionOptions) {
        return __awaiter(this, void 0, void 0, function () {
            var response, parsed;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.methodHandler.callAccountMethod(this.meta.index, {
                            name: 'prepareMeltNativeToken',
                            data: {
                                tokenId: tokenId,
                                meltAmount: bigIntToHex(meltAmount),
                                options: transactionOptions
                            }
                        })];
                    case 1:
                        response = _a.sent();
                        parsed = JSON.parse(response);
                        return [2 /*return*/, new PreparedTransaction(plainToInstance(PreparedTransactionData, parsed.payload), this)];
                }
            });
        });
    };
    /**
     * Deregister a participation event.
     *
     * @param eventId The id of the participation event to deregister.
     */
    Account.prototype.deregisterParticipationEvent = function (eventId) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.methodHandler.callAccountMethod(this.meta.index, {
                            name: 'deregisterParticipationEvent',
                            data: {
                                eventId: eventId
                            }
                        })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, JSON.parse(response).payload];
                }
            });
        });
    };
    /**
     * Destroy an alias output.
     *
     * @param aliasId The AliasId.
     * @param transactionOptions Additional transaction options
     * or custom inputs.
     * @returns The prepared transaction.
     */
    Account.prototype.prepareDestroyAlias = function (aliasId, transactionOptions) {
        return __awaiter(this, void 0, void 0, function () {
            var response, parsed;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.methodHandler.callAccountMethod(this.meta.index, {
                            name: 'prepareBurn',
                            data: {
                                burn: {
                                    aliases: [aliasId]
                                },
                                options: transactionOptions
                            }
                        })];
                    case 1:
                        response = _a.sent();
                        parsed = JSON.parse(response);
                        return [2 /*return*/, new PreparedTransaction(plainToInstance(PreparedTransactionData, parsed.payload), this)];
                }
            });
        });
    };
    /**
     * Function to destroy a foundry output with a circulating supply of 0.
     * Native tokens in the foundry (minted by other foundries) will be transacted to the controlling alias.
     *
     * @param foundryId The FoundryId.
     * @param transactionOptions Additional transaction options
     * or custom inputs.
     * @returns The prepared transaction.
     */
    Account.prototype.prepareDestroyFoundry = function (foundryId, transactionOptions) {
        return __awaiter(this, void 0, void 0, function () {
            var response, parsed;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.methodHandler.callAccountMethod(this.meta.index, {
                            name: 'prepareBurn',
                            data: {
                                burn: {
                                    foundries: [foundryId]
                                },
                                options: transactionOptions
                            }
                        })];
                    case 1:
                        response = _a.sent();
                        parsed = JSON.parse(response);
                        return [2 /*return*/, new PreparedTransaction(plainToInstance(PreparedTransactionData, parsed.payload), this)];
                }
            });
        });
    };
    /**
     * Generate new unused Ed25519 addresses.
     *
     * @param amount The amount of addresses to generate.
     * @param options Options for address generation.
     * @returns The addresses.
     */
    Account.prototype.generateEd25519Addresses = function (amount, options) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.methodHandler.callAccountMethod(this.meta.index, {
                            name: 'generateEd25519Addresses',
                            data: {
                                amount: amount,
                                options: options
                            }
                        })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, JSON.parse(response).payload];
                }
            });
        });
    };
    /**
     * Get the account balance.
     *
     * @returns The account balance.
     */
    Account.prototype.getBalance = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response, payload;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.methodHandler.callAccountMethod(this.meta.index, {
                            name: 'getBalance'
                        })];
                    case 1:
                        response = _a.sent();
                        payload = JSON.parse(response).payload;
                        return [2 /*return*/, this.adjustBalancePayload(payload)];
                }
            });
        });
    };
    /**
     * Converts hex encoded or decimal strings of amounts to `bigint`
     * for the balance payload.
     */
    Account.prototype.adjustBalancePayload = function (payload) {
        for (var i = 0; i < payload.nativeTokens.length; i++) {
            payload.nativeTokens[i].total = hexToBigInt(payload.nativeTokens[i].total);
            payload.nativeTokens[i].available = hexToBigInt(payload.nativeTokens[i].available);
        }
        payload.baseCoin.total = BigInt(payload.baseCoin.total);
        payload.baseCoin.available = BigInt(payload.baseCoin.available);
        payload.requiredStorageDeposit.alias = BigInt(payload.requiredStorageDeposit.alias);
        payload.requiredStorageDeposit.basic = BigInt(payload.requiredStorageDeposit.basic);
        payload.requiredStorageDeposit.foundry = BigInt(payload.requiredStorageDeposit.foundry);
        payload.requiredStorageDeposit.nft = BigInt(payload.requiredStorageDeposit.nft);
        return payload;
    };
    /**
     * Get the data for an output.
     * @param outputId The output to get.
     * @returns The `OutputData`.
     */
    Account.prototype.getOutput = function (outputId) {
        return __awaiter(this, void 0, void 0, function () {
            var response, parsed;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.methodHandler.callAccountMethod(this.meta.index, {
                            name: 'getOutput',
                            data: {
                                outputId: outputId
                            }
                        })];
                    case 1:
                        response = _a.sent();
                        parsed = JSON.parse(response);
                        return [2 /*return*/, plainToInstance(OutputData, parsed.payload)];
                }
            });
        });
    };
    /**
     * Get a participation event.
     *
     * @param eventId The ID of the event to get.
     */
    Account.prototype.getParticipationEvent = function (eventId) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.methodHandler.callAccountMethod(this.meta.index, {
                            name: 'getParticipationEvent',
                            data: {
                                eventId: eventId
                            }
                        })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, JSON.parse(response).payload];
                }
            });
        });
    };
    /**
     * Get IDs of participation events of a certain type.
     *
     * @param node The node to get events from.
     * @param eventType The type of events to get.
     */
    Account.prototype.getParticipationEventIds = function (node, eventType) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.methodHandler.callAccountMethod(this.meta.index, {
                            name: 'getParticipationEventIds',
                            data: {
                                node: node,
                                eventType: eventType
                            }
                        })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, JSON.parse(response).payload];
                }
            });
        });
    };
    /**
     * Get all participation events.
     */
    Account.prototype.getParticipationEvents = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.methodHandler.callAccountMethod(this.meta.index, {
                            name: 'getParticipationEvents'
                        })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, JSON.parse(response).payload];
                }
            });
        });
    };
    /**
     * Get the participation event status by its ID.
     *
     * @param eventId The ID of the event status to get.
     */
    Account.prototype.getParticipationEventStatus = function (eventId) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.methodHandler.callAccountMethod(this.meta.index, {
                            name: 'getParticipationEventStatus',
                            data: {
                                eventId: eventId
                            }
                        })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, JSON.parse(response).payload];
                }
            });
        });
    };
    /**
     * Get a `FoundryOutput` by native token ID. It will try to get the foundry from
     * the account, if it isn't in the account it will try to get it from the node.
     *
     * @param tokenId The native token ID to get the foundry for.
     * @returns The `FoundryOutput` that minted the token.
     */
    Account.prototype.getFoundryOutput = function (tokenId) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.methodHandler.callAccountMethod(this.meta.index, {
                            name: 'getFoundryOutput',
                            data: {
                                tokenId: tokenId
                            }
                        })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, Output.parse(JSON.parse(response).payload)];
                }
            });
        });
    };
    /**
     * Get outputs with additional unlock conditions.
     *
     * @param outputs The type of outputs to claim.
     * @returns The output IDs of the unlockable outputs.
     */
    Account.prototype.claimableOutputs = function (outputs) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.methodHandler.callAccountMethod(this.meta.index, {
                            name: 'claimableOutputs',
                            data: {
                                outputsToClaim: outputs
                            }
                        })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, JSON.parse(response).payload];
                }
            });
        });
    };
    /**
     * Get a transaction stored in the account.
     *
     * @param transactionId The ID of the transaction to get.
     * @returns The transaction.
     */
    Account.prototype.getTransaction = function (transactionId) {
        return __awaiter(this, void 0, void 0, function () {
            var response, parsed;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.methodHandler.callAccountMethod(this.meta.index, {
                            name: 'getTransaction',
                            data: {
                                transactionId: transactionId
                            }
                        })];
                    case 1:
                        response = _a.sent();
                        parsed = JSON.parse(response);
                        return [2 /*return*/, plainToInstance(Transaction, parsed.payload)];
                }
            });
        });
    };
    /**
     * Get the transaction with inputs of an incoming transaction stored in the account
     * List might not be complete, if the node pruned the data already
     *
     * @param transactionId The ID of the transaction to get.
     * @returns The transaction.
     */
    Account.prototype.getIncomingTransaction = function (transactionId) {
        return __awaiter(this, void 0, void 0, function () {
            var response, parsed;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.methodHandler.callAccountMethod(this.meta.index, {
                            name: 'getIncomingTransaction',
                            data: {
                                transactionId: transactionId
                            }
                        })];
                    case 1:
                        response = _a.sent();
                        parsed = JSON.parse(response);
                        return [2 /*return*/, plainToInstance(Transaction, parsed.payload)];
                }
            });
        });
    };
    /**
     * List all the addresses of the account.
     *
     * @returns The addresses.
     */
    Account.prototype.addresses = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.methodHandler.callAccountMethod(this.meta.index, {
                            name: 'addresses'
                        })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, JSON.parse(response).payload];
                }
            });
        });
    };
    /**
     * List the addresses of the account with unspent outputs.
     *
     * @returns The addresses.
     */
    Account.prototype.addressesWithUnspentOutputs = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.methodHandler.callAccountMethod(this.meta.index, {
                            name: 'addressesWithUnspentOutputs'
                        })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, JSON.parse(response).payload];
                }
            });
        });
    };
    /**
     * List all outputs of the account.
     *
     * @param filterOptions Options to filter the to be returned outputs.
     * @returns The outputs with metadata.
     */
    Account.prototype.outputs = function (filterOptions) {
        return __awaiter(this, void 0, void 0, function () {
            var response, parsed;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.methodHandler.callAccountMethod(this.meta.index, {
                            name: 'outputs',
                            data: { filterOptions: filterOptions }
                        })];
                    case 1:
                        response = _a.sent();
                        parsed = JSON.parse(response);
                        return [2 /*return*/, plainToInstance(OutputData, parsed.payload)];
                }
            });
        });
    };
    /**
     * List all the pending transactions of the account.
     *
     * @returns The transactions.
     */
    Account.prototype.pendingTransactions = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response, parsed;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.methodHandler.callAccountMethod(this.meta.index, {
                            name: 'pendingTransactions'
                        })];
                    case 1:
                        response = _a.sent();
                        parsed = JSON.parse(response);
                        return [2 /*return*/, plainToInstance(Transaction, parsed.payload)];
                }
            });
        });
    };
    /**
     * List all incoming transactions of the account.
     *
     * @returns The incoming transactions with their inputs.
     */
    Account.prototype.incomingTransactions = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response, parsed;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.methodHandler.callAccountMethod(this.meta.index, {
                            name: 'incomingTransactions'
                        })];
                    case 1:
                        response = _a.sent();
                        parsed = JSON.parse(response);
                        return [2 /*return*/, plainToInstance(Transaction, parsed.payload)];
                }
            });
        });
    };
    /**
     * List all the transactions of the account.
     *
     * @returns The transactions.
     */
    Account.prototype.transactions = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response, parsed;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.methodHandler.callAccountMethod(this.meta.index, {
                            name: 'transactions'
                        })];
                    case 1:
                        response = _a.sent();
                        parsed = JSON.parse(response);
                        return [2 /*return*/, plainToInstance(Transaction, parsed.payload)];
                }
            });
        });
    };
    /**
     * List all the unspent outputs of the account.
     *
     * @param filterOptions Options to filter the to be returned outputs.
     * @returns The outputs with metadata.
     */
    Account.prototype.unspentOutputs = function (filterOptions) {
        return __awaiter(this, void 0, void 0, function () {
            var response, parsed;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.methodHandler.callAccountMethod(this.meta.index, {
                            name: 'unspentOutputs',
                            data: { filterOptions: filterOptions }
                        })];
                    case 1:
                        response = _a.sent();
                        parsed = JSON.parse(response);
                        return [2 /*return*/, plainToInstance(OutputData, parsed.payload)];
                }
            });
        });
    };
    /**
     * Get the accounts metadata.
     *
     * @returns The accounts metadata.
     */
    Account.prototype.getMetadata = function () {
        return {
            alias: this.meta.alias,
            coinType: this.meta.coinType,
            index: this.meta.index
        };
    };
    /**
     * Mint additional native tokens.
     *
     * @param tokenId The native token id.
     * @param mintAmount To be minted amount.
     * @param transactionOptions Additional transaction options
     * or custom inputs.
     * @returns The minting transaction.
     */
    Account.prototype.mintNativeToken = function (tokenId, mintAmount, transactionOptions) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.prepareMintNativeToken(tokenId, mintAmount, transactionOptions)];
                    case 1: return [2 /*return*/, (_a.sent()).send()];
                }
            });
        });
    };
    /**
     * Mint additional native tokens.
     *
     * @param tokenId The native token id.
     * @param mintAmount To be minted amount.
     * @param transactionOptions Additional transaction options
     * or custom inputs.
     * @returns The prepared minting transaction.
     */
    Account.prototype.prepareMintNativeToken = function (tokenId, mintAmount, transactionOptions) {
        return __awaiter(this, void 0, void 0, function () {
            var response, parsed;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.methodHandler.callAccountMethod(this.meta.index, {
                            name: 'prepareMintNativeToken',
                            data: {
                                tokenId: tokenId,
                                mintAmount: bigIntToHex(mintAmount),
                                options: transactionOptions
                            }
                        })];
                    case 1:
                        response = _a.sent();
                        parsed = JSON.parse(response);
                        return [2 /*return*/, new PreparedTransaction(plainToInstance(PreparedTransactionData, parsed.payload), this)];
                }
            });
        });
    };
    /**
     * Create a native token.
     *
     * @param params The options for creating a native token.
     * @param transactionOptions Additional transaction options
     * or custom inputs.
     * @returns The created transaction.
     */
    Account.prototype.createNativeToken = function (params, transactionOptions) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.prepareCreateNativeToken(params, transactionOptions)];
                    case 1: return [2 /*return*/, (_a.sent()).send()];
                }
            });
        });
    };
    /**
     * Create a native token.
     *
     * @param params The options for creating a native token.
     * @param transactionOptions Additional transaction options
     * or custom inputs.
     * @returns The created transaction and the token ID.
     */
    Account.prototype.prepareCreateNativeToken = function (params, transactionOptions) {
        return __awaiter(this, void 0, void 0, function () {
            var adjustedParams, response, parsed;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        adjustedParams = params;
                        adjustedParams.circulatingSupply = bigIntToHex(params.circulatingSupply);
                        adjustedParams.maximumSupply = bigIntToHex(params.maximumSupply);
                        return [4 /*yield*/, this.methodHandler.callAccountMethod(this.meta.index, {
                                name: 'prepareCreateNativeToken',
                                data: {
                                    params: adjustedParams,
                                    options: transactionOptions
                                }
                            })];
                    case 1:
                        response = _a.sent();
                        parsed = JSON.parse(response);
                        return [2 /*return*/, new PreparedCreateNativeTokenTransaction(plainToInstance(PreparedCreateNativeTokenTransactionData, parsed.payload), this)];
                }
            });
        });
    };
    /**
     * Mint NFTs.
     *
     * @param params The options for minting nfts.
     * @param transactionOptions Additional transaction options
     * or custom inputs.
     * @returns The minting transaction.
     */
    Account.prototype.mintNfts = function (params, transactionOptions) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.prepareMintNfts(params, transactionOptions)];
                    case 1: return [2 /*return*/, (_a.sent()).send()];
                }
            });
        });
    };
    /**
     * Mint NFTs.
     *
     * @param params The options for minting nfts.
     * @param transactionOptions Additional transaction options
     * or custom inputs.
     * @returns The prepared minting transaction.
     */
    Account.prototype.prepareMintNfts = function (params, transactionOptions) {
        return __awaiter(this, void 0, void 0, function () {
            var response, parsed;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.methodHandler.callAccountMethod(this.meta.index, {
                            name: 'prepareMintNfts',
                            data: {
                                params: params,
                                options: transactionOptions
                            }
                        })];
                    case 1:
                        response = _a.sent();
                        parsed = JSON.parse(response);
                        return [2 /*return*/, new PreparedTransaction(plainToInstance(PreparedTransactionData, parsed.payload), this)];
                }
            });
        });
    };
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
    Account.prototype.prepareOutput = function (params, transactionOptions) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (typeof params.amount === 'bigint') {
                            params.amount = params.amount.toString(10);
                        }
                        return [4 /*yield*/, this.methodHandler.callAccountMethod(this.meta.index, {
                                name: 'prepareOutput',
                                data: {
                                    params: params,
                                    transactionOptions: transactionOptions
                                }
                            })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, Output.parse(JSON.parse(response).payload)];
                }
            });
        });
    };
    /**
     * Prepare to send base coins, useful for offline signing.
     *
     * @param params Address with amounts to send.
     * @param options Additional transaction options
     * or custom inputs.
     * @returns The prepared transaction data.
     */
    Account.prototype.prepareSend = function (params, options) {
        return __awaiter(this, void 0, void 0, function () {
            var i, response, parsed;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        for (i = 0; i < params.length; i++) {
                            if (typeof params[i].amount === 'bigint') {
                                params[i].amount = params[i].amount.toString(10);
                            }
                        }
                        return [4 /*yield*/, this.methodHandler.callAccountMethod(this.meta.index, {
                                name: 'prepareSend',
                                data: {
                                    params: params,
                                    options: options
                                }
                            })];
                    case 1:
                        response = _a.sent();
                        parsed = JSON.parse(response);
                        return [2 /*return*/, new PreparedTransaction(plainToInstance(PreparedTransactionData, parsed.payload), this)];
                }
            });
        });
    };
    /**
     * Send a transaction.
     *
     * @param outputs Outputs to use in the transaction.
     * @param options Additional transaction options
     * or custom inputs.
     * @returns The transaction data.
     */
    Account.prototype.sendTransaction = function (outputs, options) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.prepareTransaction(outputs, options)];
                    case 1: return [2 /*return*/, (_a.sent()).send()];
                }
            });
        });
    };
    /**
     * Prepare a transaction, useful for offline signing.
     *
     * @param outputs Outputs to use in the transaction.
     * @param options Additional transaction options
     * or custom inputs.
     * @returns The prepared transaction data.
     */
    Account.prototype.prepareTransaction = function (outputs, options) {
        return __awaiter(this, void 0, void 0, function () {
            var response, parsed;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.methodHandler.callAccountMethod(this.meta.index, {
                            name: 'prepareTransaction',
                            data: {
                                outputs: outputs,
                                options: options
                            }
                        })];
                    case 1:
                        response = _a.sent();
                        parsed = JSON.parse(response);
                        return [2 /*return*/, new PreparedTransaction(plainToInstance(PreparedTransactionData, parsed.payload), this)];
                }
            });
        });
    };
    /**
     * Register participation events.
     *
     * @param options Options to register participation events.
     * @returns A mapping between event IDs and their corresponding event data.
     */
    Account.prototype.registerParticipationEvents = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.methodHandler.callAccountMethod(this.meta.index, {
                            name: 'registerParticipationEvents',
                            data: {
                                options: options
                            }
                        })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, JSON.parse(response).payload];
                }
            });
        });
    };
    /**
     * Retries (promotes or reattaches) a transaction sent from the account for a provided transaction id until it's
     * included (referenced by a milestone). Returns the included block id.
     */
    Account.prototype.retryTransactionUntilIncluded = function (transactionId, interval, maxAttempts) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.methodHandler.callAccountMethod(this.meta.index, {
                            name: 'retryTransactionUntilIncluded',
                            data: {
                                transactionId: transactionId,
                                interval: interval,
                                maxAttempts: maxAttempts
                            }
                        })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, JSON.parse(response).payload];
                }
            });
        });
    };
    /**
     * Send base coins to an address.
     *
     * @param amount Amount of coins.
     * @param address Receiving address.
     * @param transactionOptions Additional transaction options
     * or custom inputs.
     * @returns The sent transaction.
     */
    Account.prototype.send = function (amount, address, transactionOptions) {
        return __awaiter(this, void 0, void 0, function () {
            var response, parsed;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (typeof amount === 'bigint') {
                            amount = amount.toString(10);
                        }
                        return [4 /*yield*/, this.methodHandler.callAccountMethod(this.meta.index, {
                                name: 'send',
                                data: {
                                    amount: amount,
                                    address: address,
                                    options: transactionOptions
                                }
                            })];
                    case 1:
                        response = _a.sent();
                        parsed = JSON.parse(response);
                        return [2 /*return*/, plainToInstance(Transaction, parsed.payload)];
                }
            });
        });
    };
    /**
     * Send base coins with amounts from input addresses.
     *
     * @param params Addresses with amounts.
     * @param transactionOptions Additional transaction options
     * or custom inputs.
     * @returns The sent transaction.
     */
    Account.prototype.sendWithParams = function (params, transactionOptions) {
        return __awaiter(this, void 0, void 0, function () {
            var i, response, parsed;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        for (i = 0; i < params.length; i++) {
                            if (typeof params[i].amount === 'bigint') {
                                params[i].amount = params[i].amount.toString(10);
                            }
                        }
                        return [4 /*yield*/, this.methodHandler.callAccountMethod(this.meta.index, {
                                name: 'sendWithParams',
                                data: {
                                    params: params,
                                    options: transactionOptions
                                }
                            })];
                    case 1:
                        response = _a.sent();
                        parsed = JSON.parse(response);
                        return [2 /*return*/, plainToInstance(Transaction, parsed.payload)];
                }
            });
        });
    };
    /**
     * Send native tokens.
     *
     * @param params Addresses amounts and native tokens.
     * @param transactionOptions Additional transaction options
     * or custom inputs.
     * @returns The transaction.
     */
    Account.prototype.sendNativeTokens = function (params, transactionOptions) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.prepareSendNativeTokens(params, transactionOptions)];
                    case 1: return [2 /*return*/, (_a.sent()).send()];
                }
            });
        });
    };
    /**
     * Send native tokens.
     *
     * @param params Addresses amounts and native tokens.
     * @param transactionOptions Additional transaction options
     * or custom inputs.
     * @returns The prepared transaction.
     */
    Account.prototype.prepareSendNativeTokens = function (params, transactionOptions) {
        return __awaiter(this, void 0, void 0, function () {
            var response, parsed;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.methodHandler.callAccountMethod(this.meta.index, {
                            name: 'prepareSendNativeTokens',
                            data: {
                                params: params,
                                options: transactionOptions
                            }
                        })];
                    case 1:
                        response = _a.sent();
                        parsed = JSON.parse(response);
                        return [2 /*return*/, new PreparedTransaction(plainToInstance(PreparedTransactionData, parsed.payload), this)];
                }
            });
        });
    };
    /**
     * Send NFT.
     *
     * @param params Addresses and nft ids.
     * @param transactionOptions Additional transaction options
     * or custom inputs.
     * @returns The transaction.
     */
    Account.prototype.sendNft = function (params, transactionOptions) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.prepareSendNft(params, transactionOptions)];
                    case 1: return [2 /*return*/, (_a.sent()).send()];
                }
            });
        });
    };
    /**
     * Send NFT.
     *
     * @param params Addresses and nft ids.
     * @param transactionOptions Additional transaction options
     * or custom inputs.
     * @returns The prepared transaction.
     */
    Account.prototype.prepareSendNft = function (params, transactionOptions) {
        return __awaiter(this, void 0, void 0, function () {
            var response, parsed;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.methodHandler.callAccountMethod(this.meta.index, {
                            name: 'prepareSendNft',
                            data: {
                                params: params,
                                options: transactionOptions
                            }
                        })];
                    case 1:
                        response = _a.sent();
                        parsed = JSON.parse(response);
                        return [2 /*return*/, new PreparedTransaction(plainToInstance(PreparedTransactionData, parsed.payload), this)];
                }
            });
        });
    };
    /**
     * Send outputs in a transaction.
     *
     * @param outputs The outputs to send.
     * @param transactionOptions Additional transaction options
     * or custom inputs.
     * @returns The sent transaction.
     */
    Account.prototype.sendOutputs = function (outputs, transactionOptions) {
        return __awaiter(this, void 0, void 0, function () {
            var response, parsed;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.methodHandler.callAccountMethod(this.meta.index, {
                            name: 'sendOutputs',
                            data: {
                                outputs: outputs,
                                options: transactionOptions
                            }
                        })];
                    case 1:
                        response = _a.sent();
                        parsed = JSON.parse(response);
                        return [2 /*return*/, plainToInstance(Transaction, parsed.payload)];
                }
            });
        });
    };
    /**
     * Set the alias for the account
     *
     * @param alias The account alias to set.
     */
    Account.prototype.setAlias = function (alias) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.methodHandler.callAccountMethod(this.meta.index, {
                            name: 'setAlias',
                            data: {
                                alias: alias
                            }
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Set the fallback SyncOptions for account syncing.
     * If storage is enabled, will persist during restarts.
     *
     * @param options The sync options to set.
     */
    Account.prototype.setDefaultSyncOptions = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.methodHandler.callAccountMethod(this.meta.index, {
                            name: 'setDefaultSyncOptions',
                            data: {
                                options: options
                            }
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Sign a prepared transaction, useful for offline signing.
     *
     * @param preparedTransactionData The prepared transaction data to sign.
     * @returns The signed transaction essence.
     */
    Account.prototype.signTransactionEssence = function (preparedTransactionData) {
        return __awaiter(this, void 0, void 0, function () {
            var response, parsed;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.methodHandler.callAccountMethod(this.meta.index, {
                            name: 'signTransactionEssence',
                            data: {
                                preparedTransactionData: preparedTransactionData
                            }
                        })];
                    case 1:
                        response = _a.sent();
                        parsed = JSON.parse(response);
                        return [2 /*return*/, plainToInstance(SignedTransactionEssence, parsed.payload)];
                }
            });
        });
    };
    /**
     * Sign a prepared transaction, and send it.
     *
     * @param preparedTransactionData The prepared transaction data to sign and submit.
     * @returns The transaction.
     */
    Account.prototype.signAndSubmitTransaction = function (preparedTransactionData) {
        return __awaiter(this, void 0, void 0, function () {
            var response, parsed;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.methodHandler.callAccountMethod(this.meta.index, {
                            name: 'signAndSubmitTransaction',
                            data: {
                                preparedTransactionData: preparedTransactionData
                            }
                        })];
                    case 1:
                        response = _a.sent();
                        parsed = JSON.parse(response);
                        return [2 /*return*/, plainToInstance(Transaction, parsed.payload)];
                }
            });
        });
    };
    /**
     * Validate the transaction, submit it to a node and store it in the account.
     *
     * @param signedTransactionData A signed transaction to submit and store.
     * @returns The sent transaction.
     */
    Account.prototype.submitAndStoreTransaction = function (signedTransactionData) {
        return __awaiter(this, void 0, void 0, function () {
            var response, parsed;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.methodHandler.callAccountMethod(this.meta.index, {
                            name: 'submitAndStoreTransaction',
                            data: {
                                signedTransactionData: signedTransactionData
                            }
                        })];
                    case 1:
                        response = _a.sent();
                        parsed = JSON.parse(response);
                        return [2 /*return*/, plainToInstance(Transaction, parsed.payload)];
                }
            });
        });
    };
    /**
     * Sync the account by fetching new information from the nodes.
     * Will also retry pending transactions if necessary.
     * A custom default can be set using setDefaultSyncOptions.
     *
     * @param options Optional synchronization options.
     * @returns The account balance.
     */
    Account.prototype.sync = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            var response, payload;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.methodHandler.callAccountMethod(this.meta.index, {
                            name: 'sync',
                            data: {
                                options: options
                            }
                        })];
                    case 1:
                        response = _a.sent();
                        payload = JSON.parse(response).payload;
                        return [2 /*return*/, this.adjustBalancePayload(payload)];
                }
            });
        });
    };
    /**
     * Prepare a vote.
     *
     * @param eventId The participation event ID.
     * @param answers Answers for a voting event, can be empty.
     * @returns An instance of `PreparedTransaction`.
     */
    Account.prototype.prepareVote = function (eventId, answers) {
        return __awaiter(this, void 0, void 0, function () {
            var response, parsed;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.methodHandler.callAccountMethod(this.meta.index, {
                            name: 'prepareVote',
                            data: {
                                eventId: eventId,
                                answers: answers
                            }
                        })];
                    case 1:
                        response = _a.sent();
                        parsed = JSON.parse(response);
                        return [2 /*return*/, new PreparedTransaction(plainToInstance(PreparedTransactionData, parsed.payload), this)];
                }
            });
        });
    };
    /**
     * Prepare stop participating in an event.
     *
     * @param eventId The event ID to stop participating in.
     * @returns An instance of `PreparedTransaction`.
     */
    Account.prototype.prepareStopParticipating = function (eventId) {
        return __awaiter(this, void 0, void 0, function () {
            var response, parsed;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.methodHandler.callAccountMethod(this.meta.index, {
                            name: 'prepareStopParticipating',
                            data: {
                                eventId: eventId
                            }
                        })];
                    case 1:
                        response = _a.sent();
                        parsed = JSON.parse(response);
                        return [2 /*return*/, new PreparedTransaction(plainToInstance(PreparedTransactionData, parsed.payload), this)];
                }
            });
        });
    };
    /**
     * Calculates the voting overview of an account.
     *
     * @param eventIds Optional, filters participations only for provided events.
     * @returns An instance of `ParticipationOverview`
     */
    Account.prototype.getParticipationOverview = function (eventIds) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.methodHandler.callAccountMethod(this.meta.index, {
                            name: 'getParticipationOverview',
                            data: {
                                eventIds: eventIds
                            }
                        })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, JSON.parse(response).payload];
                }
            });
        });
    };
    /** @deprecated use prepareIncreaseVotingPower() instead. */
    Account.prototype.prepareVotingPower = function (amount) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.prepareIncreaseVotingPower(amount)];
            });
        });
    };
    /**
     * Prepare to increase the voting power.
     *
     * @param amount The amount to increase the voting power by.
     * @returns An instance of `PreparedTransaction`.
     */
    Account.prototype.prepareIncreaseVotingPower = function (amount) {
        return __awaiter(this, void 0, void 0, function () {
            var response, parsed;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.methodHandler.callAccountMethod(this.meta.index, {
                            name: 'prepareIncreaseVotingPower',
                            data: {
                                amount: amount
                            }
                        })];
                    case 1:
                        response = _a.sent();
                        parsed = JSON.parse(response);
                        return [2 /*return*/, new PreparedTransaction(plainToInstance(PreparedTransactionData, parsed.payload), this)];
                }
            });
        });
    };
    /**
     * Prepare to decrease the voting power.
     *
     * @param amount The amount to decrease the voting power by.
     * @returns An instance of `PreparedTransaction`.
     */
    Account.prototype.prepareDecreaseVotingPower = function (amount) {
        return __awaiter(this, void 0, void 0, function () {
            var response, parsed;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.methodHandler.callAccountMethod(this.meta.index, {
                            name: 'prepareDecreaseVotingPower',
                            data: {
                                amount: amount
                            }
                        })];
                    case 1:
                        response = _a.sent();
                        parsed = JSON.parse(response);
                        return [2 /*return*/, new PreparedTransaction(plainToInstance(PreparedTransactionData, parsed.payload), this)];
                }
            });
        });
    };
    return Account;
}());
export { Account };
//# sourceMappingURL=account.js.map