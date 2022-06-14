const main = async () => {
  const gameContractFactory = await hre.ethers.getContractFactory('MyEpicGame');
  const gameContract = await gameContractFactory.deploy(
    ["Joker", "Thanos", "Venom"],       // Names
    ["https://i.imgur.com/ngy8IIk.jpg", // Images
    "https://i.imgur.com/9XVdDkM.jpg", 
    "https://i.imgur.com/KQQ2Ik6.jpg"],
    [149, 249, 349],                    // HP values
    [99, 49, 79],                       // Attack damage values
    "Elon Musk", // Boss name
    "https://i.imgur.com/AksR0tt.png", // Boss image
    10000, // Boss hp
    50 // Boss attack damage
    );
  await gameContract.deployed();
  console.log("Contract deployed to:", gameContract.address);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();