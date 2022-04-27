const { ethers } = require("hardhat");

const main = async () => {
  const FactoryContract = await ethers.getContractFactory("UniswapV2Factory");
  const factory = await FactoryContract.deploy("0xa4FF4DBb11F3186a1e96d3e8DD232E31159Ded9B");

  await factory.deployed();

  console.log("Factory deployed:", factory.address);

  const initCodeHash = await factory.INIT_CODE_HASH();
  console.log('initCodeHash', initCodeHash);
};

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });