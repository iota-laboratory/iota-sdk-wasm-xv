// Copyright 2021-2023 IOTA Stiftung
// SPDX-License-Identifier: Apache-2.0

import { Client, initLogger, RegularTransactionEssence, TransactionPayload, Utils, UTXOInput } from '@iota/sdk';
require('dotenv').config({ path: '.env' });

// Run with command:
// yarn run-example ./how_tos/client/test-validation.ts

// In this example we will verify the semantic of a transaction
async function run() {
    initLogger();
    if (!process.env.NODE_URL) {
        throw new Error('.env NODE_URL is undefined, see .env.example');
    }

    const client = new Client({
        // Insert your node URL in the .env.
        nodes: [process.env.NODE_URL],
        localPow: true,
    });

    try {
        let blockid = '0x9a9d883f81cc594799cd9a424327c73a24e01ab9f18ecfae6d6acb906bbfb380'
        console.log(blockid);

        let block = await client.getBlock(blockid);
        let blockmeta = await client.getBlockMetadata(blockid);

        let milestone = await client.getMilestoneByIndex(blockmeta.referencedByMilestoneIndex as number);
        let timestamp = milestone.timestamp;
        let utxoInputsData = [];
        if (typeof block.payload == 'undefined') {
            return
        }
        if (!(block.payload instanceof TransactionPayload)) {
            return
        }
        if (!(block.payload.essence instanceof RegularTransactionEssence)) {
            return
        }
        for (let input of block.payload.essence.inputs) {
            if (input instanceof UTXOInput) {
                let output = await client.getOutput(Utils.computeOutputId(input.transactionId, input.transactionOutputIndex));
                utxoInputsData.push({ output: output.output, outputMetadata: output.metadata });
            }
        }
        let reason = Utils.verifySemanticWithoutUnlocks(utxoInputsData, block.payload.essence, timestamp);
        console.log(blockid, reason);
    } catch (error) {
        console.error('Error: ', error);
    }
}

run().then(() => process.exit());
