const hre = require("hardhat");

async function main() {
  const PlatziHealth = await hre.ethers.getContractFactory("PlatziHealth");
  const platziHealthContract = await PlatziHealth.deploy();

  await platziHealthContract.deployed();

  console.log(
    `Platzi Health deployed to ${platziHealthContract.address}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
