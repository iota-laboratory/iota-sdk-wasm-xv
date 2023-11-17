import { migrateStrongholdSnapshotV2ToV3 } from '../bindings';
import { SecretManagerType, __SecretManagerMethods__ } from '../types/secret_manager';
/** The MethodHandler which sends the commands to the Rust backend. */
export declare class SecretManagerMethodHandler {
    methodHandler: SecretManagerMethodHandler;
    /**
     * @param options A secret manager type or a secret manager method handler.
     */
    constructor(options: SecretManagerType | SecretManagerMethodHandler);
    /**
     * Call a secret manager method.
     *
     * @param method One of the supported secret manager methods.
     * @returns The JSON response of the method.
     */
    callMethod(method: __SecretManagerMethods__): Promise<string>;
}
export { migrateStrongholdSnapshotV2ToV3 };
