import { create } from "zustand";
import { persist } from "zustand/middleware";
import uniswap_v2_abi from "../mock/uniswap_v2_abi.json";

interface AppStore {
  rpcEndpoint: string;
  setRpcEndpoint: (v: string) => void;

  rawABI: string;
  setRawABI: (v: string) => void;

  contractAddress: string;
  setContractAddress: (v: string) => void;
}

export const useAppStore = create<AppStore>()(
  persist(
    (set) => ({
      rpcEndpoint: "https://rpc.ankr.com/eth",
      setRpcEndpoint: (v: string) => set(() => ({ rpcEndpoint: v })),

      rawABI: JSON.stringify(uniswap_v2_abi),
      setRawABI: (v: string) => set(() => ({ rawABI: v })),

      contractAddress: "0xC75650fe4D14017b1e12341A97721D5ec51D5340",
      setContractAddress: (v: string) => set(() => ({ contractAddress: v })),
    }),
    { name: "app-storage" }
  )
);
