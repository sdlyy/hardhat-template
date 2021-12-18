import { ethers, upgrades } from "hardhat";
import { Greeter } from "../../typechain";

const CONTRACT_ADDRESS = "0x0";

// Install OZ Upgradeable Package and inherit proper calls within the contract to enable proxy deployments
const deployFunc = async () => {
  const [deployer] = await ethers.getSigners();

  const GreeterFactory = await ethers.getContractFactory("Greeter", deployer);

  const Greeter = (await upgrades.upgradeProxy(CONTRACT_ADDRESS, GreeterFactory)) as Greeter;

  await Greeter.deployed();
};

export default deployFunc;
deployFunc.tags = ["GreeterProxyUpgrade"];
