import { Program, web3, BN } from "@project-serum/anchor";
interface CandyMachineState {
  authority: web3.PublicKey;
  itemsAvailable: number;
  itemsRedeemed: number;
  itemsRemaining: number;
  treasury: web3.PublicKey;
  tokenMint: null | web3.PublicKey;
  isSoldOut: boolean;
  isActive: boolean;
  isPresale: boolean;
  isWhitelistOnly: boolean;
  goLiveDate: BN;
  price: BN;
  gatekeeper: null | {
    expireOnUse: boolean;
    gatekeeperNetwork: web3.PublicKey;
  };
  endSettings: null | {
    number: BN;
    endSettingType: any;
  };
  whitelistMintSettings: null | {
    mode: any;
    mint: web3.PublicKey;
    presale: boolean;
    discountPrice: null | BN;
  };
  hiddenSettings: null | {
    name: string;
    uri: string;
    hash: Uint8Array;
  };
  retainAuthority: boolean;
}
export interface CandyMachineAccount {
  id: web3.PublicKey;
  program: Program;
  state: CandyMachineState;
}
