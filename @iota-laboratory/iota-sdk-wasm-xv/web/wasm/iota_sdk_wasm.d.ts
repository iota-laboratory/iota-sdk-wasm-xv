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

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly callUtilsMethod2Rust: (a: number, b: number, c: number) => void;
  readonly start: () => void;
  readonly initLogger: (a: number, b: number) => number;
  readonly __wbindgen_export_0: WebAssembly.Table;
  readonly __wbindgen_export_1: (a: number, b: number, c: number) => void;
  readonly __wbindgen_add_to_stack_pointer: (a: number) => number;
  readonly __wbindgen_export_2: (a: number, b: number) => number;
  readonly __wbindgen_export_3: (a: number, b: number, c: number, d: number) => number;
  readonly __wbindgen_export_4: (a: number, b: number, c: number) => void;
  readonly __wbindgen_export_5: (a: number) => void;
  readonly __wbindgen_export_6: (a: number, b: number, c: number, d: number) => void;
  readonly __wbindgen_start: () => void;
}

export type SyncInitInput = BufferSource | WebAssembly.Module;
/**
* Instantiates the given `module`, which can either be bytes or
* a precompiled `WebAssembly.Module`.
*
* @param {SyncInitInput} module
*
* @returns {InitOutput}
*/
export function initSync(module: SyncInitInput): InitOutput;

/**
* If `module_or_path` is {RequestInfo} or {URL}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {InitInput | Promise<InitInput>} module_or_path
*
* @returns {Promise<InitOutput>}
*/
export default function __wbg_init (module_or_path?: InitInput | Promise<InitInput>): Promise<InitOutput>;

/**
* Loads the Wasm file so the lib can be used, relative path to Wasm file
*
* @param {string | undefined} path
*/
export function init(path?: string): Promise<void>;