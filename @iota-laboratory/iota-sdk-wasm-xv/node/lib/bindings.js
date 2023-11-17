"use strict";
// Copyright 2023 IOTA Stiftung
// SPDX-License-Identifier: Apache-2.0
Object.defineProperty(exports, "__esModule", { value: true });
exports.migrateDbChrysalisToStardust = exports.migrateStrongholdSnapshotV2ToV3 = exports.listenMqtt = exports.getSecretManagerFromWallet = exports.getClientFromWallet = exports.destroyClient = exports.destroyWallet = exports.listenWalletAsync = exports.callWalletMethodAsync = exports.callUtilsMethod2 = exports.callUtilsMethod = exports.callSecretManagerMethodAsync = exports.callClientMethodAsync = exports.createSecretManager = exports.createWallet = exports.createClient = exports.initLogger = void 0;
// Import needs to be in a single line, otherwise it breaks
// prettier-ignore
// @ts-ignore: path is set to match runtime transpiled js path when bundled.
const iota_sdk_wasm_1 = require("../wasm/iota_sdk_wasm");
Object.defineProperty(exports, "initLogger", { enumerable: true, get: function () { return iota_sdk_wasm_1.initLogger; } });
const createClient = function (...args) { throw "Unsupported"; };
exports.createClient = createClient;
const createWallet = function (...args) { throw "Unsupported"; };
exports.createWallet = createWallet;
const createSecretManager = function (...args) { throw "Unsupported"; };
exports.createSecretManager = createSecretManager;
const callClientMethodAsync = function (...args) { throw "Unsupported"; };
exports.callClientMethodAsync = callClientMethodAsync;
const callSecretManagerMethodAsync = function (...args) { throw "Unsupported"; };
exports.callSecretManagerMethodAsync = callSecretManagerMethodAsync;
const callUtilsMethod = function (...args) { throw "Unsupported"; };
exports.callUtilsMethod = callUtilsMethod;
const callWalletMethodAsync = function (...args) { throw "Unsupported"; };
exports.callWalletMethodAsync = callWalletMethodAsync;
const listenWalletAsync = function (...args) { throw "Unsupported"; };
exports.listenWalletAsync = listenWalletAsync;
const destroyWallet = function (...args) { throw "Unsupported"; };
exports.destroyWallet = destroyWallet;
const destroyClient = function (...args) { throw "Unsupported"; };
exports.destroyClient = destroyClient;
const getClientFromWallet = function (...args) { throw "Unsupported"; };
exports.getClientFromWallet = getClientFromWallet;
const getSecretManagerFromWallet = function (...args) { throw "Unsupported"; };
exports.getSecretManagerFromWallet = getSecretManagerFromWallet;
const listenMqtt = function (...args) { throw "Unsupported"; };
exports.listenMqtt = listenMqtt;
const migrateStrongholdSnapshotV2ToV3 = function (...args) { throw "Unsupported"; };
exports.migrateStrongholdSnapshotV2ToV3 = migrateStrongholdSnapshotV2ToV3;
const migrateDbChrysalisToStardust = function (...args) { throw "Unsupported"; };
exports.migrateDbChrysalisToStardust = migrateDbChrysalisToStardust;
const callUtilsMethod2 = (method) => {
    const response = JSON.parse((0, iota_sdk_wasm_1.callUtilsMethod2Rust)(JSON.stringify(method)));
    if (response.type == 'error' || response.type == 'panic') {
        throw response;
    }
    else {
        return response.payload;
    }
};
exports.callUtilsMethod2 = callUtilsMethod2;
//# sourceMappingURL=bindings.js.map