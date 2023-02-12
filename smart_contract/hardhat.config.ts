import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: "0.8.0",
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/VGbcpIKIiGAw__Sxpkzv83y3YW7R90R9',
      accounts: ["58c1a629e2df42829595e959a77a1ad365d9b58eae5867b7add62ca374e07906"]
    }
  }
};

export default config;
