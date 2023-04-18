require("@nomiclabs/hardhat-waffle");

const fs = require('fs')
const privateKey = fs.readFileSync(".secret").toString();

module.exports = {
  solidity: "0.8.4",
  paths: {
    artifacts: "./src/backend/artifacts",
    sources: "./src/backend/contracts",
    cache: "./src/backend/cache",
    tests: "./src/backend/test"
  },
  //defaultNetwork: "ganache",
  networks: {
    ganache: {
      url: "http://127.0.0.1:7545"
    },
    polygon: {
      url: "https://rpc-mumbai.maticvigil.com/v1/413f0dbc1431e2cdb2df00bb4132bf4abc90a05e",
      accounts: [privateKey]
    },
    hardhat: {
    },
  },
};