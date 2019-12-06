// FILE: exportABI.js
//导出ABI文件
console.log('Setting up...');
const fs = require ('fs');
const solc = require ('solc');
const Web3 = require ('web3');
console.log('Reading Contract...');
const input = fs.readFileSync('HelloWorldContract.sol');
console.log('Compiling Contract...');
const output = solc.compile(input.toString(), 1);
const bytecode = output.contracts[':HelloWorldContract'].bytecode;
console.log('Generating ABI...');
const abi = output.contracts[':HelloWorldContract'].interface;
fs.writeFile("./HelloWorldABI.JSON", abi, function(err) {
    if(err) {
        return console.log(err);
    }
console.log("ABI Saved");
});
