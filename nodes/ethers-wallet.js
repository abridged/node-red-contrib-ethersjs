const { ethers } = require('ethers');

module.exports = function (RED) {
    function EthersWalletNode(config) {
        RED.nodes.createNode(this, config);
        var node = this;
        var node = this;
        node.on("input", data => {
            input(RED, node, data, config);
        });
    }
    RED.nodes.registerType("node-ethers-wallet", EthersWalletNode);
}

async function input(RED, node, data, config) {
    try {
        const wallet = ethers.Wallet.createRandom()
        data.payload.wallet = {
            address: wallet.address,
            privateKey: wallet.privateKey
        }
        return node.send([data, null]);
    } catch (error) {
        console.log('Error: ', error)
        data.payload.error = error;
        return node.send([null, data]);
    }
}