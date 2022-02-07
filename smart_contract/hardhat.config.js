// https://eth-mainnet.alchemyapi.io/v2/lHEuhrAoGzpsPiIWf7GhZ44eSeMmWXJv

require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    ropsten: {
      url: "https://eth-ropsten.alchemyapi.io/v2/lHEuhrAoGzpsPiIWf7GhZ44eSeMmWXJv",
      accounts: ["960a43c6cafa2f817953fb0864b02fead75abbb55adb5a198956806befe97927"],
    },
  },
};