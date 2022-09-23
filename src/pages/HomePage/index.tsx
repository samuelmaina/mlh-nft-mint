import React, { useState } from "react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

const HomePage = () => {
  const [walletConneted, setWalletConnected] = useState<boolean>(false);

  const connectWalletHandler = () => {};

  const mintNFTHandler = () => {
    setWalletConnected(false);
  };

  return (
    <div className="container-home">
      <h1>🍭 MLH Funky Fellows</h1>
      <h5>
        A clean collection of 50 builders in the MLH community that will
        transcend the internet. Not officially affiliated with MLH
      </h5>
      {walletConneted ? (
        <button className="mint-nft" onClick={mintNFTHandler}>
          Mint NFT
        </button>
      ) : (
        <WalletMultiButton
          className="connect-wallet"
          onClick={connectWalletHandler}
        />
      )}
    </div>
  );
};

export default HomePage;
