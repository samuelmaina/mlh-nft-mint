import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { Metaplex } from "@metaplex-foundation/js";
import {
  FC,
  JSXElementConstructor,
  ReactElement,
  ReactFragment,
  ReactPortal,
  useEffect,
  useState,
} from "react";
import { Button, Link } from "@chakra-ui/react";
import { linkStyle, details } from "./styles";

export const FetchNft: FC = () => {
  const [nftData, setNftData] = useState<any>([]);
  const { publicKey } = useWallet();
  const { connection } = useConnection();

  const metaplex = Metaplex.make(connection);

  const fetchNfts = async () => {
    if (!publicKey) {
      return;
    }

    const nfts = await metaplex
      .nfts()
      .findAllByOwner({ owner: publicKey })
      .run();

    let nftData = [];

    for (let i = 0; i < nfts.length; i++) {
      let fetchResult = await fetch(nfts[i].uri);
      let json = await fetchResult.json();
      nftData.push(json);
    }

    setNftData(nftData);
  };

  useEffect(() => {
    fetchNfts();
  }, [publicKey]);

  return (
    <div className="container">
      <Button className="home-link">
        <Link style={linkStyle} href="/">
          Go Back to the home page
        </Link>
      </Button>
      {nftData && (
        <div className={"gridNFT"}>
          {nftData.map(
            (nft: {
              name:
                | string
                | number
                | boolean
                | ReactElement<any, string | JSXElementConstructor<any>>
                | ReactFragment
                | ReactPortal
                | null
                | undefined;
              image: string | undefined;
              attributes: any[];
            }) => (
              <div className="grid-item">
                <div className="grid-item-title">{nft.name}</div>
                <img src={nft.image} alt="" />
                <div style={details}>
                  {nft.attributes.map((attribute) => (
                    <p>{`${attribute.trait_type}: ${attribute.value}`}</p>
                  ))}
                </div>
              </div>
            ),
          )}
        </div>
      )}
    </div>
  );
};
