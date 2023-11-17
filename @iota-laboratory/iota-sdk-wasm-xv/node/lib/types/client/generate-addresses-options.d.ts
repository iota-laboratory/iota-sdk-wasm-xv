import type { CoinType } from './constants';
import type { IRange } from './range';
/**
 * Input options for GenerateAddresses
 */
export interface IGenerateAddressesOptions {
    coinType?: CoinType;
    accountIndex?: number;
    range?: IRange;
    /**
     * Bech32 human readable part
     */
    bech32Hrp?: string;
    options?: IGenerateAddressOptions;
}
/**
 * Options provided to Generate Address
 */
export interface IGenerateAddressOptions {
    /**
     * Internal addresses
     */
    internal?: boolean;
    /**
     * Display the address on ledger devices.
     */
    ledgerNanoPrompt?: boolean;
}
