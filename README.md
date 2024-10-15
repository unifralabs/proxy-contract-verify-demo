# Proxy Contract Deployment & Verification Demo

This project demonstrates how to use hardhat or foundry to deploy a proxy contract in a rollup network.


## Deploy with Hardhat

1. If you haven't already, install [nodejs](https://nodejs.org/en/download/) and [yarn](https://classic.yarnpkg.com/lang/en/docs/install).
2. Run `yarn install` to install dependencies.
3. Create a `.env` file following the example `.env.example` in the root directory. Change `PRIVATE_KEY` to your own account private key in the `.env`.
4. Run `yarn compile` to compile the contract.
5. Run `yarn deploy:merlinTestnet` to deploy the contract on the Merlin Testnet.
6. Run `yarn test` for hardhat tests.

## Verify

```sh
npx hardhat verify --network merlinTestnet {contract-address} {contract-args}
```

## Verify API Sample

```sh
# Verify contract source code
curl -X POST 'https://testnet-scan.merlinchain.io/api' -d 'apikey=no-need-apikey&module=contract&action=verifysourcecode&contractaddress=0x1577a2B1FCF7141B562655831A30c4B2f40D83fD&sourceCode=%7B%22language%22%3A%22Solidity%22%2C%22sources%22%3A%7B%22contracts%2FLock.sol%22%3A%7B%22content%22%3A%22%2F%2F+SPDX-License-Identifier%3A+UNLICENSED%5Cnpragma+solidity+%5E0.8.9%3B%5Cn%5Cncontract+Lock+%7B%5Cn++++uint+public+unlockTime%3B%5Cn++++address+payable+public+owner%3B%5Cn%5Cn++++event+Withdrawal%28uint+amount%2C+uint+when%29%3B%5Cn%5Cn++++constructor%28uint+_unlockTime%29+payable+%7B%5Cn++++++++require%28%5Cn++++++++++++block.timestamp+%3C+_unlockTime%2C%5Cn++++++++++++%5C%22Unlock+time+should+be+in+the+future%5C%22%5Cn++++++++%29%3B%5Cn%5Cn++++++++unlockTime+%3D+_unlockTime%3B%5Cn++++++++owner+%3D+payable%28msg.sender%29%3B%5Cn++++%7D%5Cn%5Cn++++function+withdraw%28%29+public+%7B%5Cn++++++++require%28block.timestamp+%3E%3D+unlockTime%2C+%5C%22You+can%27t+withdraw+yet%5C%22%29%3B%5Cn++++++++require%28msg.sender+%3D%3D+owner%2C+%5C%22You+aren%27t+the+owner%5C%22%29%3B%5Cn%5Cn++++++++emit+Withdrawal%28address%28this%29.balance%2C+block.timestamp%29%3B%5Cn%5Cn++++++++owner.transfer%28address%28this%29.balance%29%3B%5Cn++++%7D%5Cn%7D%5Cn%22%7D%7D%2C%22settings%22%3A%7B%22optimizer%22%3A%7B%22enabled%22%3Atrue%2C%22runs%22%3A200%7D%2C%22outputSelection%22%3A%7B%22*%22%3A%7B%22*%22%3A%5B%22abi%22%2C%22evm.bytecode%22%2C%22evm.deployedBytecode%22%2C%22evm.methodIdentifiers%22%2C%22metadata%22%5D%2C%22%22%3A%5B%22ast%22%5D%7D%7D%2C%22libraries%22%3A%7B%7D%7D%7D&codeformat=solidity-standard-json-input&contractname=contracts%2FLock.sol%3ALock&compilerversion=v0.8.9%2Bcommit.e5eed63a&constructorArguements=0000000000000000000000000000000000000000000000000000000000000001' \
-H 'Content-Type: application/x-www-form-urlencoded'
```

```sh
# Check contract verification status
curl 'https://testnet-scan.merlinchain.io/api?guid=0x1577a2B1FCF7141B562655831A30c4B2f40D83fD667255f9&module=contract&action=checkverifystatus'
```