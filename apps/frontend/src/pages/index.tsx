import { Abi } from "abitype";
import { useEffect, useState } from "react";

import { useAppStore } from "@/store/useAppStore";
import { AbiEntryComponent } from "@/components/AbiEntryComponent";
import { TextInputBox } from "@/components/TextInputBox";
import { TextAreaInputBox } from "@/components/TextAreaInputBox";
import { useViemClient } from "@/hooks/useViemClient";
import { ChainIdLabel } from "@/components/ChainIdLabel";
import uniswap_v2_abi from "../mock/uniswap_v2_abi.json";
import aave_staked from "../mock/aave_staked.json";
import cryptopunk from "../mock/cryptopunk.json";
import usdt_token from "../mock/usdt_token.json";
import bayc from "../mock/bayc.json";

const EXAMPLES = [
  {
    label: "Uniswap v2",
    rpc: "https://rpc.ankr.com/eth",
    address: "0xC75650fe4D14017b1e12341A97721D5ec51D5340",
    abi: JSON.stringify(uniswap_v2_abi),
  },
  {
    label: "USDT token",
    rpc: "https://rpc.ankr.com/eth",
    address: "0xdac17f958d2ee523a2206206994597c13d831ec7",
    abi: JSON.stringify(usdt_token),
  },
  {
    label: "cryptopunk",
    rpc: "https://rpc.ankr.com/eth",
    address: "0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb",
    abi: JSON.stringify(cryptopunk),
  },
  {
    label: "bayc",
    rpc: "https://rpc.ankr.com/eth",
    address: "0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d",
    abi: JSON.stringify(bayc),
  },
  {
    label: "Aave staked",
    rpc: "https://rpc.ankr.com/eth",
    address: "0x4da27a545c0c5B758a6BA100e3a049001de870f5",
    abi: JSON.stringify(aave_staked),
  },
];

export default function Home() {
  const { rpcEndpoint, setRpcEndpoint, contractAddress, setContractAddress, rawABI, setRawABI } = useAppStore();
  const [currentAbi, setCurrentAbi] = useState<Abi>([]);

  useEffect(() => {
    try {
      setCurrentAbi(() => []);
      setCurrentAbi(() => JSON.parse(rawABI));
    } catch (error) {
      console.error(error);
    }
  }, [rawABI]);
  return (
    <div className="container ">
      <div className="grid grid-cols-3 gap-4">
        <div className="p-5">
          <TextInputBox label="RPC endpoint" value={rpcEndpoint} onChange={setRpcEndpoint} />
          <ChainIdLabel />
          <TextInputBox label="Address" value={contractAddress} onChange={setContractAddress} />
          <TextAreaInputBox label="ABI" onChange={setRawABI} value={rawABI} />

          <div className="my-2">Examples:</div>
          <div className="flex flex-wrap">
            {EXAMPLES.map((example, i) => (
              <button
                key={i}
                className="btn-xs btn mb-2 mr-2"
                onClick={() => {
                  setRpcEndpoint(example.rpc);
                  setContractAddress(example.address);
                  setRawABI(example.abi);
                }}
              >
                {example.label}
              </button>
            ))}
          </div>
        </div>

        <div className="col-span-2 space-y-2 p-5">
          {currentAbi.map((entry, i) => (
            <AbiEntryComponent key={contractAddress + i} entry={entry} />
          ))}
        </div>
      </div>
    </div>
  );
}
