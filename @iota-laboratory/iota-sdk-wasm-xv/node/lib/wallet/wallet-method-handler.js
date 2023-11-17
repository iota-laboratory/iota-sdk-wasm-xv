"use strict";
// Copyright 2023 IOTA Stiftung
// SPDX-License-Identifier: Apache-2.0
Object.defineProperty(exports, "__esModule", { value: true });
exports.WalletMethodHandler = void 0;
const bindings_1 = require("../bindings");
const client_1 = require("../client");
const secret_manager_1 = require("../secret_manager");
// The WalletMethodHandler class interacts with methods with the rust bindings.
class WalletMethodHandler {
    /**
     * @param options The wallet options.
     */
    constructor(options) {
        const walletOptions = {
            storagePath: options?.storagePath,
            clientOptions: options?.clientOptions,
            coinType: options?.coinType,
            secretManager: options?.secretManager,
        };
        this.methodHandler = (0, bindings_1.createWallet)(JSON.stringify(walletOptions));
    }
    /**
     * Call a wallet method on the Rust backend.
     *
     * @param method The wallet method to call.
     */
    async callMethod(method) {
        return (0, bindings_1.callWalletMethodAsync)(
        // mapToObject is required to convert maps to array since they otherwise get serialized as `[{}]` even if not empty
        JSON.stringify(method, function mapToObject(_key, value) {
            if (value instanceof Map) {
                return Object.fromEntries(value);
            }
            else {
                return value;
            }
        }), this.methodHandler).catch((error) => {
            try {
                if (error.message !== undefined) {
                    error = JSON.parse(error.message).payload;
                }
                else {
                    error = JSON.parse(error.toString()).payload;
                }
            }
            catch (e) {
                console.error(e);
            }
            return Promise.reject(error);
        });
    }
    /**
     * Call an account method on the Rust backend.
     *
     * @param accountIndex The account index.
     * @param method The account method to call.
     */
    async callAccountMethod(accountIndex, method) {
        return this.callMethod({
            name: 'callAccountMethod',
            data: {
                accountId: accountIndex,
                method,
            },
        });
    }
    /**
     * Listen to wallet events.
     *
     * @param eventTypes The wallet event types to listen for.
     * @param callback The callback function to call when an event is received.
     */
    async listen(eventTypes, callback) {
        return (0, bindings_1.listenWalletAsync)(eventTypes, callback, this.methodHandler);
    }
    async destroy() {
        return (0, bindings_1.destroyWallet)(this.methodHandler);
    }
    /**
     * Get the client associated with the wallet.
     */
    async getClient() {
        return new Promise((resolve, reject) => {
            (0, bindings_1.getClientFromWallet)(this.methodHandler).then((result) => {
                if (result.message !== undefined) {
                    reject(JSON.parse(result.message).payload);
                }
                else {
                    resolve(new client_1.Client(result));
                }
            });
        });
    }
    /**
     * Get the secret manager associated with the wallet.
     */
    async getSecretManager() {
        return new Promise((resolve, reject) => {
            (0, bindings_1.getSecretManagerFromWallet)(this.methodHandler).then((result) => {
                if (result.message !== undefined) {
                    reject(JSON.parse(result.message).payload);
                }
                else {
                    resolve(new secret_manager_1.SecretManager(result));
                }
            });
        });
    }
}
exports.WalletMethodHandler = WalletMethodHandler;
//# sourceMappingURL=wallet-method-handler.js.map