import { useViemClient } from "@/hooks/useViemClient";
import { useAppStore } from "@/store/useAppStore";
import { useState, useEffect } from "react";

export function ChainIdLabel() {
  const { client } = useViemClient();
  const { rpcEndpoint, contractAddress } = useAppStore();
  const [chainId, setChainId] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (rpcEndpoint && contractAddress) {
      const fetch = async () => {
        try {
          setIsLoading(true);
          const chainID = await client.getChainId();
          setChainId(chainID);
        } finally {
          setIsLoading(false);
        }
      };
      fetch();
    }
  }, [client, contractAddress, rpcEndpoint]);

  if (isLoading) return <span>loading chain...</span>;
  return <span>Chain ID: {chainId}</span>;
}
