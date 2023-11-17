import type { IClientOptions, __ClientMethods__ } from '../types/client';
/**
 * The MethodHandler which sends the commands to the Rust side.
 */
export declare class ClientMethodHandler {
    methodHandler: ClientMethodHandler;
    /**
     * @param options client options or a client method handler.
     */
    constructor(options: IClientOptions | ClientMethodHandler);
    destroy(): Promise<any>;
    /**
     * Call a client method.
     *
     * @param method The client method.
     * @returns A promise that resolves to a JSON string response holding the result of the client method.
     */
    callMethod(method: __ClientMethods__): Promise<string>;
    /**
     * Listen to MQTT events.
     *
     * @param topics The topics to listen to.
     * @param callback The callback to be called when an MQTT event is received.
     */
    listen(topics: string[], callback: (error: Error, result: string) => void): Promise<void>;
}
