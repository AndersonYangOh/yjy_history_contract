//FILE:compileDeploy.js
//部署智能合约
console.log('Setting up ...');
const fs = require('fs');
const solc = require('solc');
const Web3 = require('web3');
const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
console.log('Reading Contract...');
const input = fs.readFileSync('HelloWorldContract.sol');
console.log('Compiling Contract...');
const output = solc.compile(input.toString(),1);
const bytecode = output.contracts[':HelloWorldContract'].bytecode;
const abi = output.contracts[':HelloWorldContract'].interface;

//Contract Object

const helloWorldContract = web3.eth.contract(JSON.parse(abi));

var account = web3.eth.accounts[0];

console.log("Deploying the contract");

const helloWorldContractInstance = helloWorldContract.new({
    data: '0x' + bytecode,
    from: account,
    gas: 1000000
}, (err, res) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(res.transactionHash);
    // If we have an address property, the contract was deployed
    if (res.address) {
        console.log('Contract address: ' + res.address);
    }
});
