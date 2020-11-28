const { ethers } = require('ethers');

(async () => {
    try {
        testEthersWallet();
    } catch (error) {
        console.log("Error: ", error);
    }
})();

async function testEthersWallet(){
    const wallet = ethers.Wallet.createRandom()
    console.log(wallet.address)
    console.log(wallet.privateKey)
}