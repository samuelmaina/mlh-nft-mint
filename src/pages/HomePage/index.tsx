import React, { useState } from "react";

const HomePage = () => {
  const [walletConneted, setWalletConnected] = useState<boolean>(false);

  const connectWalletHandler = () => {
    setWalletConnected(true);
  };

  const minNFTHandler = () => {
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
        <button className="mint-nft" onClick={minNFTHandler}>
          Mint NFT
        </button>
      ) : (
        <button className="connect-wallet" onClick={connectWalletHandler}>
          Connect Wallet
        </button>
      )}
    </div>
  );
};

export default HomePage;
