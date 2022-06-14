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
    "https://imgur.com/a/TSpMDyr", // Boss image
    10000, // Boss hp
    50 // Boss attack damage
    );
  await gameContract.deployed();
  let txn;
  txn = await gameContract.mintCharacterNFT(2);
  await txn.wait();
  let txn2;
  txn2 = await gameContract.attackBoss();
  await txn2.wait();
  txn2 = await gameContract.attackBoss();
  await txn2.wait();

  // We only have three characters.
  // an NFT w/ the character at index 2 of our array.
  // let txn3;
  // txn3 = await gameContract.mintCharacterNFT(2);
  // await txn3.wait();

  // Get the value of the NFT's URI.
  // let returnedTokenUri = await gameContract.tokenURI(1);
  // console.log("Token URI:", returnedTokenUri);
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