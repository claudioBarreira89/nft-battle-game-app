import React, { useCallback, useEffect, useState } from "react";

import LoadingIndicator from "./Components/LoadingIndicator";
import SelectCharacter from "./Components/SelectCharacter";

import "./App.css";
import { getContract, transformCharacterData } from "./utils";
import Arena from "./Components/Arena";

const App = () => {
  const [currentAccount, setCurrentAccount] = useState(null);
  const [characterNFT, setCharacterNFT] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const checkIfWalletIsConnected = useCallback(async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        console.log("Make sure you have MetaMask!");
        setIsLoading(false);
        return;
      }

      console.log("We have the ethereum object", ethereum);

      /** Check if we're authorized to access the user's wallet */
      const accounts = await ethereum.request({ method: "eth_accounts" });

      /** User can have multiple authorized accounts, we grab the first one if its there! */
      if (accounts.length !== 0) {
        const account = accounts[0];
        console.log("Found an authorized account:", account);
        setCurrentAccount(account);
      } else {
        console.log("No authorized account found");
      }
    } catch (error) {
      console.log(error);
    }

    setIsLoading(false);
  }, []);

  const renderContent = () => {
    if (isLoading) {
      return <LoadingIndicator />;
    }

    if (!currentAccount) {
      return (
        <div className="connect-wallet-container">
          <img
            src="https://64.media.tumblr.com/tumblr_mbia5vdmRd1r1mkubo1_500.gifv"
            alt="Monty Python Gif"
          />
          <button
            className="cta-button connect-wallet-button"
            onClick={connectWalletAction}
          >
            Connect Wallet To Get Started
          </button>
        </div>
      );
    } else if (currentAccount && !characterNFT) {
      return <SelectCharacter setCharacterNFT={setCharacterNFT} />;
    } else if (currentAccount && characterNFT) {
      return (
        <Arena
          characterNFT={characterNFT}
          setCharacterNFT={setCharacterNFT}
          currentAccount={currentAccount}
        />
      );
    }
  };

  const connectWalletAction = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        alert("Get MetaMask!");
        return;
      }

      if (!(await isCorrectNetwork())) return;

      /** Request access to account */
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });

      console.log("Connected", accounts[0]);
      setCurrentAccount(accounts[0]);
    } catch (error) {
      console.log(error);
    }
  };

  const isCorrectNetwork = async () => {
    try {
      if (window.ethereum.networkVersion !== "5") {
        alert("Please connect to Goerli!");
        return false;
      }
    } catch (error) {
      console.log(error);
      return false;
    }

    return true;
  };

  const fetchNFTMetadata = useCallback(async () => {
    console.log("Checking for Character NFT on address:", currentAccount);

    const gameContract = getContract();
    const characterNFT = await gameContract.checkIfUserHasNFT();

    if (characterNFT.name) {
      console.log("User has character NFT");
      setCharacterNFT(transformCharacterData(characterNFT));
    } else {
      console.log("No character NFT found");
    }

    setIsLoading(false);
  }, [currentAccount]);

  useEffect(() => {
    setIsLoading(true);
    checkIfWalletIsConnected();
  }, [checkIfWalletIsConnected]);

  useEffect(() => {
    if (currentAccount) {
      console.log("CurrentAccount:", currentAccount);
      fetchNFTMetadata();
    }
  }, [currentAccount, fetchNFTMetadata]);

  return (
    <div className="App">
      <div className="container">
        <div className="header-container">
          <p className="header gradient-text">⚔️ Metaverse Slayer ⚔️</p>
          <p className="sub-text">Team up to protect the Metaverse!</p>
          {renderContent()}
        </div>
        <div className="footer-container" />
      </div>
    </div>
  );
};

export default App;
