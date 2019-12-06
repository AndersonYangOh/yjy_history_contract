//FILE:compile.js
//用web3编译智能合约
const fs = require ('fs');
const solc = require ('solc');
const input = fs.readFileSync('HelloWorldContract.sol');
const output = solc.compile(input.toString(), 1);
for (var contractName in output.contracts){
	console.log(contractName + ': ' + output.contracts[contractName].bytecode)
}
