import { ethers, upgrades } from "hardhat";
import { Greeter } from "../../typechain";

// Install OZ Upgradeable Package and inherit proper calls within the contract to enable proxy deployments
const deployFunc = async () => {
  const [deployer] = await ethers.getSigners();

  const GreeterFactory = await ethers.getContractFactory("Greeter", deployer);

  const Greeter = (await upgrades.deployProxy(GreeterFactory, ["Greetings!"])) as Greeter;

  await Greeter.deployed();
};

export default deployFunc;
deployFunc.tags = ["GreeterProxy"];
