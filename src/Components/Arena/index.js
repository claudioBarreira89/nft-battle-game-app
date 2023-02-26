import React, { useCallback, useEffect, useState } from "react";

import "./Arena.css";
import { getContract, transformCharacterData } from "../../utils";
import LoadingIndicator from "../LoadingIndicator";

const Arena = ({ characterNFT, setCharacterNFT, currentAccount }) => {
  const [gameContract, setGameContract] = useState(null);
  const [boss, setBoss] = useState(null);
  const [attackState, setAttackState] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [toastText, setToastText] = useState("");

  const fetchBoss = useCallback(async () => {
    const bossTxn = await gameContract.getBigBoss();
    console.log("Boss:", bossTxn);
    setBoss(transformCharacterData(bossTxn));
  }, [gameContract]);

  const runAttackAction = async () => {
    try {
      if (gameContract) {
        setAttackState("attacking");
        console.log("Attacking boss...");
        const attackTxn = await gameContract.attackBoss();
        await attackTxn.wait();
        console.log("attackTxn:", attackTxn);
        setAttackState("hit");

        if (boss.prevHp !== boss.hp) {
          setToastText(
            `💥 ${boss.name} was hit for ${characterNFT.attackDamage}!`
          );
        } else setToastText(`😱 ${characterNFT.name} missed ${boss.name}!`);

        setShowToast(true);
        setTimeout(() => {
          setShowToast(false);
        }, 5000);
      }
    } catch (error) {
      console.error("Error attacking boss:", error);
      setAttackState("");
    }
  };

  const onAttackComplete = useCallback(
    (from, newBossHp, newPlayerHp) => {
      const bossHp = newBossHp.toNumber();
      const playerHp = newPlayerHp.toNumber();
      const sender = from.toString();

      console.log(`AttackComplete: Boss Hp: ${bossHp} Player Hp: ${playerHp}`);

      /** If player is our own, update both player and boss Hp */
      if (currentAccount === sender.toLowerCase()) {
        setBoss((prevState) => {
          return { ...prevState, hp: bossHp, prevHp: prevState.hp };
        });
        setCharacterNFT((prevState) => {
          return { ...prevState, hp: playerHp };
        });
      } else {
        /** If player isn't ours, update boss Hp only */
        setBoss((prevState) => {
          return { ...prevState, hp: bossHp };
        });
      }
    },
    [currentAccount, setCharacterNFT]
  );

  useEffect(() => {
    setGameContract(getContract());
  }, []);

  useEffect(() => {
    if (gameContract) {
      fetchBoss();
      gameContract.on("AttackComplete", onAttackComplete);
    }

    return () => {
      if (gameContract) gameContract.off("AttackComplete", onAttackComplete);
    };
  }, [gameContract, fetchBoss, onAttackComplete]);

  return (
    <div className="arena-container">
      {/* Add your toast HTML right here */}
      {boss && characterNFT && (
        <div id="toast" className={showToast ? "show" : ""}>
          <div id="desc">{toastText}</div>
        </div>
      )}

      {boss && (
        <div className="boss-container">
          <div className={`boss-content ${attackState}`}>
            <h2>🔥 {boss.name} 🔥</h2>
            <div className="image-content">
              <img src={boss.imageURI} alt={`Boss ${boss.name}`} />
              <div className="health-bar">
                <progress value={boss.hp} max={boss.maxHp} />
                <p>{`${boss.hp} / ${boss.maxHp} HP`}</p>
              </div>
            </div>
          </div>

          {attackState === "attacking" ? (
            <div className="loading-indicator">
              <LoadingIndicator />
              <p>Attacking ⚔️</p>
            </div>
          ) : (
            <div className="attack-container">
              <button className="cta-button" onClick={runAttackAction}>
                {`💥 Attack ${boss.name}`}
              </button>
            </div>
          )}
        </div>
      )}

      {characterNFT && (
        <div className="players-container">
          <div className="player-container">
            <h2>Your Character</h2>
            <div className="player">
              <div className="image-content">
                <h2>{characterNFT.name}</h2>
                <img
                  src={characterNFT.imageURI}
                  alt={`Character ${characterNFT.name}`}
                />
                <div className="health-bar">
                  <progress value={characterNFT.hp} max={characterNFT.maxHp} />
                  <p>{`${characterNFT.hp} / ${characterNFT.maxHp} HP`}</p>
                </div>
              </div>
              <div className="stats">
                <h4>{`⚔️ Attack Damage: ${characterNFT.attackDamage}`}</h4>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Arena;
