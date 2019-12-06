//FILE: callContract.js
//调用合约测试
console.log('Setting up...');
const solc = require ('solc');
const Web3 = require ('web3');
const fs = require ('fs');
console.log('Reading abi');
const HelloWorldABI = fs.readFileSync("./HelloWorldABI.JSON");
console.log('Connecting');
const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
console.log('Creating contract instance');
const helloWorldContract = web3.eth.contract(JSON.parse(HelloWorldABI));
var helloWorldContractInstance = helloWorldContract.at("0x6406fbd7ebe94dccf40b52fb8e71555a91f282bf");  //此处0x6406fbd7ebe94dccf40b52fb8e71555a91f282bf 为部署合约的输出Contract address: 0x6406fbd7ebe94dccf40b52fb8e71555a91f282bf
console.log ('calling the contract locally');
console.log(helloWorldContractInstance.sayHi.call());
