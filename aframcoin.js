const CryptoJS = require("crypto-js");

class Block {
    constructor(index, txHash, previousHash) {
        this.index = index   // this also known as 'block height'
        this.timestamp = Date.now();
        this.txHash = txHash  // hypothetical transactions
        this.previousHash = CryptoJS.SHA256(previousHash).toString(CryptoJS.enc.Hex)
    }
}

function nextBlock(block) {
    const txHash = CryptoJS.SHA256("hypothetical tx data " + block.index).toString(CryptoJS.enc.Hex)
    return new Block(block.index + 1, txHash, block.hash)
}

// Create the blockchain and add the genesis block
let blockchain = []
blockchain[0] = new Block(0, "Genesis Block - No transactions needed.", "0")
let currentBlock = blockchain[0]

for(i=0;i<100;i++) {
    currentBlock = nextBlock(currentBlock)
    blockchain.push(currentBlock)
    console.log("Block Height: " + currentBlock.index +" has been added to the blockchain")
    console.log("Transaction Hash Root: " + currentBlock.txHash)
    console.log("Block Hash: " + CryptoJS.SHA256(currentBlock).toString(CryptoJS.enc.Hex))
    console.log("Timestamp: " + currentBlock.timestamp)
    console.log("----------------------------------")

}
