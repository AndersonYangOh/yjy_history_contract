# yjy_history_contract
基于以太坊的研究院大事迹智能合约
## 使用说明
该部分是区快链大事记的智能合约部分，用web3脚本编译合约，并部署到区块链环境中，供大事记系统调用和呈现。
UnicomHistory.sol			研究院区块链大事记合约文件，solidity编写。
init/compile.js				用web3编译智能合约。
init/compileDeploy.js		将合约部署到区块链中。
call/exportABI.js 			导出合约的接口二进制，这是调用合约的必要条件。
call/callContract.js 		调用合约测试。
web3.js-1.0.0-beta.36/dist/ web3.min.js		web3.js类库
## 实现功能
UnicomHistory.sol合约，以及编译、部署、和测试该合约。
