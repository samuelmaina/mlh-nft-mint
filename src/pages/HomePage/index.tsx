import React, { useState } from "react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { useWallet } from "@solana/wallet-adapter-react";
import CandyMachine from "../../components/CandyMachine";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { FetchNft } from "../../components/FetchNft";

const HomePage = () => {
  const wallet = useWallet()

  return (
    <div className="container-home">
    <Tabs variant={'soft-rounded'} colorScheme={'orange'}>
      <TabList>
        <Tab mr={4}>Mint a Funky Fellow</Tab>
        <Tab>View your NFTs</Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
            <img src="/preview.png" className="preview" alt="mlh" />
            <h1>🍭 MLH Funky Fellows</h1>
            <h5>
              A clean collection of 50 builders in the MLH community that will
              transcend the internet. Not officially affiliated with MLH
            </h5>
            <WalletMultiButton
              className="connect-wallet"
            />
            {wallet.publicKey && <CandyMachine walletAddress={wallet} />}
        </TabPanel>

        <TabPanel>
          <FetchNft />
        </TabPanel>
      </TabPanels>
    </Tabs>
    </div>
  );
};

export default HomePage;
