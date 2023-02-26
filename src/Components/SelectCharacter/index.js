import React, { useCallback, useEffect, useState } from "react";

import { getContract, transformCharacterData } from "../../utils";
import LoadingIndicator from "../LoadingIndicator";

import "./SelectCharacter.css";

const SelectCharacter = ({ setCharacterNFT }) => {
  const [characters, setCharacters] = useState([]);
  const [gameContract, setGameContract] = useState(null);
  const [mintingCharacter, setMintingCharacter] = useState(false);

  const mintCharacterNFTAction = async (characterId) => {
    try {
      if (gameContract) {
        setMintingCharacter(true);

        console.log("Minting character in progress...");
        const mintTxn = await gameContract.mintCharacterNFT(characterId);
        await mintTxn.wait();
        console.log("mintTxn:", mintTxn);

        setMintingCharacter(false);
      }
    } catch (error) {
      console.warn("MintCharacterAction Error:", error);
      setMintingCharacter(false);
    }
  };

  const getCharacters = useCallback(async () => {
    try {
      console.log("Getting contract characters to mint");

      /** Call contract to get all mint-able characters */
      const charactersTxn = await gameContract.getAllDefaultCharacters();
      console.log("charactersTxn:", charactersTxn);

      /** Go through all of our characters and transform the data */
      const characters = charactersTxn.map((characterData) =>
        transformCharacterData(characterData)
      );

      /** Set all mint-able characters in state */
      setCharacters(characters);
    } catch (error) {
      console.error("Something went wrong fetching characters:", error);
    }
  }, [gameContract]);

  const onCharacterMint = useCallback(
    async (sender, tokenId, characterIndex) => {
      console.log(
        `CharacterNFTMinted - sender: ${sender} tokenId: ${tokenId.toNumber()} characterIndex: ${characterIndex.toNumber()}`
      );

      /**
       * Once our character NFT is minted we can fetch the metadata from our contract
       * and set it in state to move onto the Arena
       */
      if (gameContract) {
        const characterNFT = await gameContract.checkIfUserHasNFT();
        console.log("CharacterNFT: ", characterNFT);
        setCharacterNFT(transformCharacterData(characterNFT));
      }
    },
    [gameContract, setCharacterNFT]
  );

  const renderCharacters = () =>
    characters.map((character, index) => (
      <div className="character-item" key={character.name}>
        <div className="name-container">
          <p>{character.name}</p>
        </div>
        <img src={character.imageURI} alt={character.name} />
        {!mintingCharacter && (
          <button
            type="button"
            className="character-mint-button"
            onClick={() => mintCharacterNFTAction(index)}
          >{`Mint ${character.name}`}</button>
        )}
      </div>
    ));

  useEffect(() => {
    const gameContract = getContract();
    setGameContract(gameContract);
  }, []);

  useEffect(() => {
    if (gameContract) {
      getCharacters();

      /** Setup NFT Minted Listener*/
      gameContract.on("CharacterNFTMinted", onCharacterMint);
    }

    return () => {
      if (gameContract) {
        gameContract.off("CharacterNFTMinted", onCharacterMint);
      }
    };
  }, [gameContract, getCharacters, onCharacterMint]);

  return (
    <div className="select-character-container">
      <h2>Mint Your Hero. Choose wisely.</h2>
      {characters.length > 0 && (
        <div className="character-grid">{renderCharacters()}</div>
      )}

      {mintingCharacter && (
        <div className="loading">
          <div className="indicator">
            <LoadingIndicator />
            <p>Minting In Progress...</p>
          </div>
          <img
            src="https://media2.giphy.com/media/61tYloUgq1eOk/giphy.gif?cid=ecf05e47dg95zbpabxhmhaksvoy8h526f96k4em0ndvx078s&rid=giphy.gif&ct=g"
            alt="Minting loading indicator"
          />
        </div>
      )}
    </div>
  );
};

export default SelectCharacter;
