// Copyright 2023 IOTA Stiftung
// SPDX-License-Identifier: Apache-2.0
// Import needs to be in a single line, otherwise it breaks
// prettier-ignore
// @ts-ignore: path is set to match runtime transpiled js path when bundled.
import { initLogger, callUtilsMethod2Rust } from '../wasm/iota_sdk_wasm';
var createClient = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    throw "Unsupported";
};
var createWallet = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    throw "Unsupported";
};
var createSecretManager = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    throw "Unsupported";
};
var callClientMethodAsync = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    throw "Unsupported";
};
var callSecretManagerMethodAsync = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    throw "Unsupported";
};
var callUtilsMethod = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    throw "Unsupported";
};
var callWalletMethodAsync = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    throw "Unsupported";
};
var listenWalletAsync = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    throw "Unsupported";
};
var destroyWallet = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    throw "Unsupported";
};
var destroyClient = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    throw "Unsupported";
};
var getClientFromWallet = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    throw "Unsupported";
};
var getSecretManagerFromWallet = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    throw "Unsupported";
};
var listenMqtt = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    throw "Unsupported";
};
var migrateStrongholdSnapshotV2ToV3 = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    throw "Unsupported";
};
var migrateDbChrysalisToStardust = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    throw "Unsupported";
};
var callUtilsMethod2 = function (method) {
    var response = JSON.parse(callUtilsMethod2Rust(JSON.stringify(method)));
    if (response.type == 'error' || response.type == 'panic') {
        throw response;
    }
    else {
        return response.payload;
    }
};
export { initLogger, createClient, createWallet, createSecretManager, callClientMethodAsync, callSecretManagerMethodAsync, callUtilsMethod, callUtilsMethod2, callWalletMethodAsync, listenWalletAsync, destroyWallet, destroyClient, getClientFromWallet, getSecretManagerFromWallet, listenMqtt, migrateStrongholdSnapshotV2ToV3, migrateDbChrysalisToStardust, };
//# sourceMappingURL=bindings.js.map