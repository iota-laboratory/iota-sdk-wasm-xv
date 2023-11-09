// Copyright 2023 IOTA Stiftung
// SPDX-License-Identifier: Apache-2.0

const console = require('console');
const { Client, initLogger, Utils } = require('../node/lib');

async function run() {
    try {
        // await initLogger();

        // const client = new Client({
        //     nodes: ['https://api.testnet.shimmer.network/'],
        // });
        //const testMnemonic = 'occur advice raven make job state learn park under prefer spread ugly pony shield human agree employ trophy tiny fox east animal slot churn'
        // const inputAddress =
        //     'rms1qrqke9fztfjq0gnwrg0304wz7gahmm9xylsrlwf6w6th29upkdg4g4ujw40';
        // const address =
        //     'rms1qqv5avetndkxzgr3jtrswdtz5ze6mag20s0jdqvzk4fwezve8q9vkpnqlqe';
        // const amount = BigInt(1000000);
        // const inputs = await client.findInputs([inputAddress], amount);
        // let preparedTransaction = await client.prepareTransaction(
        //     undefined,
        //     {
        //         inputs,
        //         output: { address, amount: amount.toString() },
        //     },
        // );
        // console.log(`Prepared transaction sending ${amount} to ${address}.`);
        let preparedTransaction = { "essence": { "type": 1, "networkId": "7784367046153662236", "inputsCommitment": "0xe992ee3cfa0d6fdb617ae4f02ee1e27933c01b001004d943730609964e231238", "inputs": [{ "type": 0, "transactionId": "0xe91014b760dc9145c2e91985effd631932a1a994b78b44624fb4c57ec5363abb", "transactionOutputIndex": 0 }], "outputs": [{ "type": 3, "amount": "1000000", "unlockConditions": [{ "type": 0, "address": { "type": 0, "pubKeyHash": "0x194eb32b9b6c61207192c7073562a0b3adf50a7c1f268182b552ec8999380acb" } }] }, { "type": 3, "amount": "999000000", "unlockConditions": [{ "type": 0, "address": { "type": 0, "pubKeyHash": "0xc16c95225a6407a26e1a1f17d5c2f23b7deca627e03fb93a7697751781b35154" } }] }] }, "inputsData": [{ "output": { "type": 3, "amount": "1000000000", "unlockConditions": [{ "type": 0, "address": { "type": 0, "pubKeyHash": "0xc16c95225a6407a26e1a1f17d5c2f23b7deca627e03fb93a7697751781b35154" } }] }, "outputMetadata": { "blockId": "0x0fcb69fe12b69d3767c502c0edd4562b19a69e9d2e88435387d3ed0d3f67c5d4", "transactionId": "0xe91014b760dc9145c2e91985effd631932a1a994b78b44624fb4c57ec5363abb", "outputIndex": 0, "isSpent": false, "milestoneIndexBooked": 380324, "milestoneTimestampBooked": 1699532323, "ledgerIndex": 380436 }, "chain": { "coinType": 4219, "account": 0, "change": 0, "addressIndex": 0 } }], "remainder": { "output": { "type": 3, "amount": "999000000", "unlockConditions": [{ "type": 0, "address": { "type": 0, "pubKeyHash": "0xc16c95225a6407a26e1a1f17d5c2f23b7deca627e03fb93a7697751781b35154" } }] }, "chain": { "coinType": 4219, "account": 0, "change": 0, "addressIndex": 0 }, "address": { "type": 0, "pubKeyHash": "0xc16c95225a6407a26e1a1f17d5c2f23b7deca627e03fb93a7697751781b35154" } } };

        // Prints `None`
        console.log(Utils.verifySemanticWithoutUnlocks(preparedTransaction.inputsData, preparedTransaction.essence, 1699532757))

        // After modifying the output amount, we get `CreatedConsumedAmountMismatch`
        preparedTransaction.essence.outputs[0].amount = "2000000";
        console.log(Utils.verifySemanticWithoutUnlocks(preparedTransaction.inputsData, preparedTransaction.essence, 1699532757))
    } catch (e) {
        console.error(e)
    }
}

run();
