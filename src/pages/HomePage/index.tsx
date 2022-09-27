import React, { useState } from "react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { useWallet, WalletContextState } from "@solana/wallet-adapter-react";
import CandyMachine from "../../components/CandyMachine";

const HomePage = () => {
  const wallet: WalletContextState = useWallet();

  return (
    <div className="container-home">
      <img src="/preview.png" className="preview" alt="mlh" />
      <h1>🍭 MLH Funky Fellows</h1>
      <h5>
        A clean collection of 50 builders in the MLH community that will
        transcend the internet. Not officially affiliated with MLH
      </h5>
      <WalletMultiButton className="connect-wallet" />
      {wallet.publicKey && <CandyMachine walletAddress={wallet} />}
    </div>
  );
};

export default HomePage;
