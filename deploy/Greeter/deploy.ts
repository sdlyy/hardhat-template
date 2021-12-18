import { ethers } from "hardhat";

const deployFunc = async () => {
  const [deployer] = await ethers.getSigners();

  const GreeterFactory = await ethers.getContractFactory("Greeter", deployer);

  await GreeterFactory.deploy("Greetings!");
};

export default deployFunc;
deployFunc.tags = ["Greeter"];
