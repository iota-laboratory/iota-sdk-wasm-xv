// Copyright 2023 IOTA Stiftung
// SPDX-License-Identifier: Apache-2.0

const console = require('console');
const { Client, Utils, UTXOInput } = require('../node/lib');

async function run() {
    try {
		Utils.verifySemanticWithoutUnlocks([],{},0);
		/*
		let apiClient = new Client({ nodes: [process.argv[2] || "https://api.testnet.shimmer.network/"] });
		let blockidqueue = [];
		let milestoneTimestamps = {};
		let seenBlocks = {};
		let info = await apiClient.getInfo();
		let milestone = await apiClient.getMilestoneByIndex(info.nodeInfo.status.latestMilestone.index);
		milestoneTimestamps["x" + milestone.index] = milestone.timestamp;
		blockidqueue.push(...milestone.parents);
		while(blockidqueue.length > 0) {
			let blockid = blockidqueue.shift();
			if (seenBlocks[blockid] !== undefined) continue;
			console.log(blockid);
			seenBlocks[blockid] = true;
			let [block, blockmeta] = await Promise.all([apiClient.getBlock(blockid), apiClient.getBlockMetadata(blockid)]);
			blockidqueue.push(...block.parents);
			if (blockmeta.ledgerInclusionState != 'included') continue;
			let timestamp = milestoneTimestamps["x"+blockmeta.referencedByMilestoneIndex];
			if (timestamp === undefined) {
				milestone = await apiClient.getMilestoneByIndex(blockmeta.referencedByMilestoneIndex);
				timestamp = milestone.timestamp;
				milestoneTimestamps["x" + milestone.index] = timestamp;
			}
			let utxoInputsData = [];
			for(let input of block.payload.essence.inputs) {
				if (input instanceof UTXOInput) {
					let output = await apiClient.getOutput(Utils.computeOutputId(input.transactionId, input.transactionOutputIndex));
					utxoInputsData.push({output: output.output, outputMetadata: output.metadata});
				}
			}
			let reason = Utils.verifySemanticWithoutUnlocks(utxoInputsData, block.payload.essence, timestamp);
			console.log(blockid, reason);
		}
		*/
    } catch (e) {
        console.error(e)
    }
}

run();
