/* tslint:disable */
/* eslint-disable */
/**
* Handles a method, returns the response as a JSON-encoded string.
*
* Returns an error if the response itself is an error or panic.
* @param {string} method
* @returns {any}
*/
export function callUtilsMethod2Rust(method: string): any;
/**
* Initializes the console error panic hook for better panic messages.
* Gets automatically called when using wasm
*/
export function start(): void;
/**
* The Wasm bindings do not support internal logging configuration yet.
*
* Calling this will enable all rust logs to be show
* @param {string} _config
* @returns {Promise<void>}
*/
export function initLogger(_config: string): Promise<void>;
