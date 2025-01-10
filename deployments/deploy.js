require('dotenv').config();

const { BASE_URL } = process.env;

async function main() {
  const factory = await ethers.getContractFactory("F1CardPacks");
  const contract = await factory.deploy(BASE_URL);

  await contract.deployed();
  console.log("Contract deployed to: ", contract.address);
}
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
