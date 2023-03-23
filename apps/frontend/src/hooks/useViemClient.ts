import { useAppStore } from "@/store/useAppStore";
import { useMemo } from "react";
import { createPublicClient, http } from "viem";

export function useViemClient() {
  const { rpcEndpoint } = useAppStore();
  const client = useMemo(() => {
    const transport = http(rpcEndpoint, {
      retryCount: 2,
    });
    return createPublicClient({
      transport,
    });
  }, [rpcEndpoint]);

  return { client };
}
