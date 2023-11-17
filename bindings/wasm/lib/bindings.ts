// Copyright 2023 IOTA Stiftung
// SPDX-License-Identifier: Apache-2.0

// This file overwrites the `bindings.ts` file from `bindings/nodejs/lib`, to link the Wasm `MethodHandler` interface.
// The rest of the TypeScript definitions are copied as-is to the `out` directory before being compiled.

import { __UtilsMethods__,__UtilsMethods2__ } from './utils';

// Import needs to be in a single line, otherwise it breaks
// prettier-ignore
// @ts-ignore: path is set to match runtime transpiled js path when bundled.
import { initLogger, callUtilsMethod2Rust } from '../wasm/iota_sdk_wasm';

const createClient = function(...args: any[]): any { throw "Unsupported";}
const createWallet = function(...args: any[]): any { throw "Unsupported";}
const createSecretManager = function(...args: any[]): any { throw "Unsupported";}
const callClientMethodAsync = function(...args: any[]): any { throw "Unsupported";}
const callSecretManagerMethodAsync = function(...args: any[]): any { throw "Unsupported";}
const callUtilsMethod = function(...args: any[]): any { throw "Unsupported";}
const callWalletMethodAsync = function(...args: any[]): any { throw "Unsupported";}
const listenWalletAsync = function(...args: any[]): any { throw "Unsupported";}
const destroyWallet = function(...args: any[]): any { throw "Unsupported";}
const destroyClient = function(...args: any[]): any { throw "Unsupported";}
const getClientFromWallet = function(...args: any[]): any { throw "Unsupported";}
const getSecretManagerFromWallet = function(...args: any[]): any { throw "Unsupported";}
const listenMqtt = function(...args: any[]): any { throw "Unsupported";}
const migrateStrongholdSnapshotV2ToV3 = function(...args: any[]): any { throw "Unsupported";}
const migrateDbChrysalisToStardust = function(...args: any[]): any { throw "Unsupported";}

const callUtilsMethod2 = (method: __UtilsMethods2__): any => {
    const response = JSON.parse(callUtilsMethod2Rust(JSON.stringify(method)));
    if (response.type == 'error' || response.type == 'panic') {
        throw response;
    } else {
        return response.payload;
    }
};

export {
    initLogger,
    createClient,
    createWallet,
    createSecretManager,
    callClientMethodAsync,
    callSecretManagerMethodAsync,
    callUtilsMethod,
	callUtilsMethod2,
    callWalletMethodAsync,
    listenWalletAsync,
    destroyWallet,
    destroyClient,
    getClientFromWallet,
    getSecretManagerFromWallet,
    listenMqtt,
    migrateStrongholdSnapshotV2ToV3,
    migrateDbChrysalisToStardust,
};
