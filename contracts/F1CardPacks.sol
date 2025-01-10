// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Strings.sol";

contract F1CardPacks is ERC1155, Ownable {
    uint256 public packPrice = 0.001 ether;
    uint256 public totalCards = 3; // Total unique cards
    uint256 public totalSupply;

    // Card probabilities
    uint256[] public cardWeights;
    uint256 public weightSum;

    constructor(string memory _uri)
        ERC1155(_uri)
        Ownable(msg.sender)
    {
        // Initialize card weights (equal probabilities)
        for (uint256 i = 1; i <= totalCards; i++) {
            cardWeights.push(1);
        }
        weightSum = totalCards;
    }

    // Users buy a pack
    function buyPack() public payable {
        require(msg.value == packPrice, "Incorrect payment amount");

        // Generate randomness
        uint256 randomNumber = generateRandomNumber();

        // Determine the card using weighted randomness
        uint256 cardId = getRandomCardId(randomNumber);

        // Mint the card to the user
        _mint(msg.sender, cardId, 1, "");

        totalSupply++;
    }

    // Generate a pseudo-random number
    function generateRandomNumber() internal view returns (uint256) {
        return uint256(keccak256(abi.encodePacked(
            blockhash(block.number - 1), 
            msg.sender, 
            block.timestamp
        )));
    }

    // Weighted random card selection
    function getRandomCardId(uint256 randomness) internal view returns (uint256) {
        uint256 rand = randomness % weightSum;
        uint256 cumulativeWeight = 0;

        for (uint256 i = 0; i < cardWeights.length; i++) {
            cumulativeWeight += cardWeights[i];
            if (rand < cumulativeWeight) {
                return i + 1; // Card IDs start from 1
            }
        }

        return totalCards; // Fallback to the last card
    }

    function uri(uint256 _tokenId) override public view returns (string memory) {
        return string(abi.encodePacked(super.uri(_tokenId), Strings.toString(_tokenId), ".json"));
    }

    function contractURI() public view returns (string memory) {
        return string(abi.encodePacked(super.uri(0), "contract.json"));
    }

    // Adjust pack price
    function setPackPrice(uint256 _price) public onlyOwner {
        packPrice = _price;
    }

    // Withdraw funds (owner only)
    function withdrawFunds() public onlyOwner {
        payable(owner()).transfer(address(this).balance);
    }

    // Set metadata URI
    function setURI(string memory _uri) public onlyOwner {
        _setURI(_uri);
    }
}
