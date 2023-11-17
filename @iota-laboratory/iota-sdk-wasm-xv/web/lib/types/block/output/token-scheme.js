// Copyright 2023 IOTA Stiftung
// SPDX-License-Identifier: Apache-2.0
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { hexToBigInt } from '../../utils/hex-encoding';
/**
 * All of the token scheme types.
 */
var TokenSchemeType;
(function (TokenSchemeType) {
    /** A simple token scheme. */
    TokenSchemeType[TokenSchemeType["Simple"] = 0] = "Simple";
})(TokenSchemeType || (TokenSchemeType = {}));
/**
 * The base class for token schemes.
 */
var TokenScheme = /** @class */ (function () {
    /**
     * @param type The type of token scheme.
     */
    function TokenScheme(type) {
        this.type = type;
    }
    /**
     * Get the type of token scheme.
     */
    TokenScheme.prototype.getType = function () {
        return this.type;
    };
    return TokenScheme;
}());
/**
 * A simple token scheme.
 */
var SimpleTokenScheme = /** @class */ (function (_super) {
    __extends(SimpleTokenScheme, _super);
    /**
     * @param mintedTokens The number of tokens that were minted.
     * @param meltedTokens The number of tokens that were melted.
     * @param maximumSupply The maximum supply of the token.
     */
    function SimpleTokenScheme(mintedTokens, meltedTokens, maximumSupply) {
        var _this = _super.call(this, TokenSchemeType.Simple) || this;
        if (typeof mintedTokens === 'bigint') {
            _this.mintedTokens = mintedTokens;
        }
        else if (mintedTokens) {
            _this.mintedTokens = hexToBigInt(mintedTokens);
        }
        else {
            _this.mintedTokens = BigInt(0);
        }
        if (typeof meltedTokens === 'bigint') {
            _this.meltedTokens = meltedTokens;
        }
        else if (meltedTokens) {
            _this.meltedTokens = hexToBigInt(meltedTokens);
        }
        else {
            _this.meltedTokens = BigInt(0);
        }
        if (typeof maximumSupply === 'bigint') {
            _this.maximumSupply = maximumSupply;
        }
        else if (maximumSupply) {
            _this.maximumSupply = hexToBigInt(maximumSupply);
        }
        else {
            _this.maximumSupply = BigInt(0);
        }
        return _this;
    }
    /**
     * Get the amount of tokens minted.
     */
    SimpleTokenScheme.prototype.getMintedTokens = function () {
        return this.mintedTokens;
    };
    /**
     * Get the amount of tokens melted.
     */
    SimpleTokenScheme.prototype.getMeltedTokens = function () {
        return this.meltedTokens;
    };
    /**
     * Get the maximum supply of tokens.
     */
    SimpleTokenScheme.prototype.getMaximumSupply = function () {
        return this.maximumSupply;
    };
    return SimpleTokenScheme;
}(TokenScheme));
var TokenSchemeDiscriminator = {
    property: 'type',
    subTypes: [
        { value: SimpleTokenScheme, name: TokenSchemeType.Simple },
    ]
};
export { TokenSchemeDiscriminator, TokenScheme, TokenSchemeType, SimpleTokenScheme, };
//# sourceMappingURL=token-scheme.js.map