if (!globalThis.fetch) {
    const fetch = require('node-fetch')
    globalThis.Headers = fetch.Headers
    globalThis.Request = fetch.Request
    globalThis.Response = fetch.Response
    globalThis.fetch = fetch
}
let imports = {};
imports['__wbindgen_placeholder__'] = module.exports;
let wasm;
const { TextDecoder, TextEncoder } = require(`util`);

let cachedTextDecoder = new TextDecoder('utf-8', { ignoreBOM: true, fatal: true });

cachedTextDecoder.decode();

let cachedUint8Memory0 = null;

function getUint8Memory0() {
    if (cachedUint8Memory0 === null || cachedUint8Memory0.byteLength === 0) {
        cachedUint8Memory0 = new Uint8Array(wasm.memory.buffer);
    }
    return cachedUint8Memory0;
}

function getStringFromWasm0(ptr, len) {
    ptr = ptr >>> 0;
    return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));
}

const heap = new Array(128).fill(undefined);

heap.push(undefined, null, true, false);

let heap_next = heap.length;

function addHeapObject(obj) {
    if (heap_next === heap.length) heap.push(heap.length + 1);
    const idx = heap_next;
    heap_next = heap[idx];

    heap[idx] = obj;
    return idx;
}

function getObject(idx) { return heap[idx]; }

function dropObject(idx) {
    if (idx < 132) return;
    heap[idx] = heap_next;
    heap_next = idx;
}

function takeObject(idx) {
    const ret = getObject(idx);
    dropObject(idx);
    return ret;
}

const CLOSURE_DTORS = new FinalizationRegistry(state => {
    wasm.__wbindgen_export_0.get(state.dtor)(state.a, state.b)
});

function makeMutClosure(arg0, arg1, dtor, f) {
    const state = { a: arg0, b: arg1, cnt: 1, dtor };
    const real = (...args) => {
        // First up with a closure we increment the internal reference
        // count. This ensures that the Rust closure environment won't
        // be deallocated while we're invoking it.
        state.cnt++;
        const a = state.a;
        state.a = 0;
        try {
            return f(a, state.b, ...args);
        } finally {
            if (--state.cnt === 0) {
                wasm.__wbindgen_export_0.get(state.dtor)(a, state.b);
                CLOSURE_DTORS.unregister(state)
            } else {
                state.a = a;
            }
        }
    };
    real.original = state;
    CLOSURE_DTORS.register(real, state, state);
    return real;
}
function __wbg_adapter_10(arg0, arg1, arg2) {
    wasm.__wbindgen_export_1(arg0, arg1, addHeapObject(arg2));
}

let WASM_VECTOR_LEN = 0;

let cachedTextEncoder = new TextEncoder('utf-8');

const encodeString = (typeof cachedTextEncoder.encodeInto === 'function'
    ? function (arg, view) {
    return cachedTextEncoder.encodeInto(arg, view);
}
    : function (arg, view) {
    const buf = cachedTextEncoder.encode(arg);
    view.set(buf);
    return {
        read: arg.length,
        written: buf.length
    };
});

function passStringToWasm0(arg, malloc, realloc) {

    if (realloc === undefined) {
        const buf = cachedTextEncoder.encode(arg);
        const ptr = malloc(buf.length, 1) >>> 0;
        getUint8Memory0().subarray(ptr, ptr + buf.length).set(buf);
        WASM_VECTOR_LEN = buf.length;
        return ptr;
    }

    let len = arg.length;
    let ptr = malloc(len, 1) >>> 0;

    const mem = getUint8Memory0();

    let offset = 0;

    for (; offset < len; offset++) {
        const code = arg.charCodeAt(offset);
        if (code > 0x7F) break;
        mem[ptr + offset] = code;
    }

    if (offset !== len) {
        if (offset !== 0) {
            arg = arg.slice(offset);
        }
        ptr = realloc(ptr, len, len = offset + arg.length * 3, 1) >>> 0;
        const view = getUint8Memory0().subarray(ptr + offset, ptr + len);
        const ret = encodeString(arg, view);

        offset += ret.written;
    }

    WASM_VECTOR_LEN = offset;
    return ptr;
}

let cachedInt32Memory0 = null;

function getInt32Memory0() {
    if (cachedInt32Memory0 === null || cachedInt32Memory0.byteLength === 0) {
        cachedInt32Memory0 = new Int32Array(wasm.memory.buffer);
    }
    return cachedInt32Memory0;
}
/**
* Handles a method, returns the response as a JSON-encoded string.
*
* Returns an error if the response itself is an error or panic.
* @param {string} method
* @returns {any}
*/
module.exports.callUtilsMethod2Rust = function(method) {
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        const ptr0 = passStringToWasm0(method, wasm.__wbindgen_export_2, wasm.__wbindgen_export_3);
        const len0 = WASM_VECTOR_LEN;
        wasm.callUtilsMethod2Rust(retptr, ptr0, len0);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var r2 = getInt32Memory0()[retptr / 4 + 2];
        if (r2) {
            throw takeObject(r1);
        }
        return takeObject(r0);
    } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
    }
};

/**
* Initializes the console error panic hook for better panic messages.
* Gets automatically called when using wasm
*/
module.exports.start = function() {
    wasm.start();
};

/**
* The Wasm bindings do not support internal logging configuration yet.
*
* Calling this will enable all rust logs to be show
* @param {string} _config
* @returns {Promise<void>}
*/
module.exports.initLogger = function(_config) {
    const ptr0 = passStringToWasm0(_config, wasm.__wbindgen_export_2, wasm.__wbindgen_export_3);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.initLogger(ptr0, len0);
    return takeObject(ret);
};

function handleError(f, args) {
    try {
        return f.apply(this, args);
    } catch (e) {
        wasm.__wbindgen_export_5(addHeapObject(e));
    }
}
function __wbg_adapter_22(arg0, arg1, arg2, arg3) {
    wasm.__wbindgen_export_6(arg0, arg1, addHeapObject(arg2), addHeapObject(arg3));
}

module.exports.__wbindgen_string_new = function(arg0, arg1) {
    const ret = getStringFromWasm0(arg0, arg1);
    return addHeapObject(ret);
};

module.exports.__wbg_error_788ae33f81d3b84b = function(arg0) {
    console.error(getObject(arg0));
};

module.exports.__wbindgen_object_drop_ref = function(arg0) {
    takeObject(arg0);
};

module.exports.__wbg_call_01734de55d61e11d = function() { return handleError(function (arg0, arg1, arg2) {
    const ret = getObject(arg0).call(getObject(arg1), getObject(arg2));
    return addHeapObject(ret);
}, arguments) };

module.exports.__wbg_new_43f1b47c28813cbd = function(arg0, arg1) {
    try {
        var state0 = {a: arg0, b: arg1};
        var cb0 = (arg0, arg1) => {
            const a = state0.a;
            state0.a = 0;
            try {
                return __wbg_adapter_22(a, state0.b, arg0, arg1);
            } finally {
                state0.a = a;
            }
        };
        const ret = new Promise(cb0);
        return addHeapObject(ret);
    } finally {
        state0.a = state0.b = 0;
    }
};

module.exports.__wbg_new_abda76e883ba8a5f = function() {
    const ret = new Error();
    return addHeapObject(ret);
};

module.exports.__wbg_stack_658279fe44541cf6 = function(arg0, arg1) {
    const ret = getObject(arg1).stack;
    const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_export_2, wasm.__wbindgen_export_3);
    const len1 = WASM_VECTOR_LEN;
    getInt32Memory0()[arg0 / 4 + 1] = len1;
    getInt32Memory0()[arg0 / 4 + 0] = ptr1;
};

module.exports.__wbg_error_f851667af71bcfc6 = function(arg0, arg1) {
    let deferred0_0;
    let deferred0_1;
    try {
        deferred0_0 = arg0;
        deferred0_1 = arg1;
        console.error(getStringFromWasm0(arg0, arg1));
    } finally {
        wasm.__wbindgen_export_4(deferred0_0, deferred0_1, 1);
    }
};

module.exports.__wbindgen_throw = function(arg0, arg1) {
    throw new Error(getStringFromWasm0(arg0, arg1));
};

module.exports.__wbg_resolve_53698b95aaf7fcf8 = function(arg0) {
    const ret = Promise.resolve(getObject(arg0));
    return addHeapObject(ret);
};

module.exports.__wbindgen_cb_drop = function(arg0) {
    const obj = takeObject(arg0).original;
    if (obj.cnt-- == 1) {
        obj.a = 0;
        return true;
    }
    const ret = false;
    return ret;
};

module.exports.__wbg_then_f7e06ee3c11698eb = function(arg0, arg1) {
    const ret = getObject(arg0).then(getObject(arg1));
    return addHeapObject(ret);
};

module.exports.__wbg_error_d9bce418caafb712 = function(arg0, arg1, arg2, arg3) {
    console.error(getObject(arg0), getObject(arg1), getObject(arg2), getObject(arg3));
};

module.exports.__wbg_warn_dfc0e0cf544a13bd = function(arg0, arg1, arg2, arg3) {
    console.warn(getObject(arg0), getObject(arg1), getObject(arg2), getObject(arg3));
};

module.exports.__wbg_info_bb52f40b06f679de = function(arg0, arg1, arg2, arg3) {
    console.info(getObject(arg0), getObject(arg1), getObject(arg2), getObject(arg3));
};

module.exports.__wbg_log_ea7093e35e3efd07 = function(arg0, arg1, arg2, arg3) {
    console.log(getObject(arg0), getObject(arg1), getObject(arg2), getObject(arg3));
};

module.exports.__wbg_debug_9b8701f894da9929 = function(arg0, arg1, arg2, arg3) {
    console.debug(getObject(arg0), getObject(arg1), getObject(arg2), getObject(arg3));
};

module.exports.__wbindgen_closure_wrapper1661 = function(arg0, arg1, arg2) {
    const ret = makeMutClosure(arg0, arg1, 152, __wbg_adapter_10);
    return addHeapObject(ret);
};

const path = require('path').join(__dirname, 'iota_sdk_wasm_bg.wasm');
const bytes = require('fs').readFileSync(path);

const wasmModule = new WebAssembly.Module(bytes);
const wasmInstance = new WebAssembly.Instance(wasmModule, imports);
wasm = wasmInstance.exports;
module.exports.__wasm = wasm;

wasm.__wbindgen_start();

