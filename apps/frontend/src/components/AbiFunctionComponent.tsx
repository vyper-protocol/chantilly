import { useViemClient } from "@/hooks/useViemClient";
import { useAppStore } from "@/store/useAppStore";
import { AbiFunction } from "abitype";
import { MdOutlineExpandMore, MdOutlineExpandLess } from "react-icons/md";
import { useEffect, useState } from "react";
import { BaseError, getAccount } from "viem";
import { AbiParameterInput } from "./AbiParameterInput";
import { AbiParameterOutput } from "./AbiParameterOutput";
import _ from "lodash";
import { toast } from "react-toastify";

export function AbiFunctionComponent({ entry }: { entry: AbiFunction }) {
  const { contractAddress } = useAppStore();
  const [isLoading, setIsLoading] = useState(false);
  const [showBody, setShowBody] = useState(false);
  const { client } = useViemClient();

  const [args, setArgs] = useState(Array(entry.inputs.length).fill(0));
  const [output, setOutput] = useState(Array(entry.outputs.length).fill(0));
  useEffect(() => {
    setArgs(Array(entry.inputs.length).fill(0));
    setOutput(Array(entry.outputs.length).fill(0));
  }, [entry]);

  const [outputInitialized, setOutputInitialized] = useState(false);

  async function onButtonClick() {
    try {
      setIsLoading(true);
      setOutputInitialized(false);

      const res = await client.readContract({
        address: contractAddress as `0x${string}`,
        abi: [entry],
        functionName: entry.name as never,
        args: args,
      });
      if (Array.isArray(res)) setOutput(res as any[]);
      else setOutput([res]);

      setOutputInitialized(true);
    } catch (error) {
      console.error(error);

      if (error instanceof BaseError) {
        toast.error(error.shortMessage);
      } else {
        toast.error(`${entry.name} error`);
      }
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="overflow-x-auto rounded border-2 border-solid border-primary">
      <div className="flex flex-col space-y-4">
        {/* header */}
        <div className="flex space-x-2 bg-slate-200 px-4 py-2">
          <div className="flex-grow">
            {entry.type}: {entry.name}
          </div>
          {entry.stateMutability && <div>stateMutability: {entry.stateMutability}</div>}
          <div>
            <button onClick={() => setShowBody(!showBody)}>
              {!showBody && <MdOutlineExpandMore size="20px" />}
              {showBody && <MdOutlineExpandLess size="20px" />}
            </button>
          </div>
        </div>

        {/* body */}
        {showBody && (
          <div className="flex flex-col space-y-2 p-2">
            {/* parameters */}
            {entry.inputs.map((p, i) => (
              <AbiParameterInput
                key={i}
                param={p}
                value={args[i]}
                onChange={(v) => {
                  const newArgs = _.clone(args);
                  newArgs.splice(i, 1, v);
                  setArgs(newArgs);
                }}
              />
            ))}

            <div>
              {entry.stateMutability === "view" ? (
                <button className="btn" disabled={isLoading} onClick={(e) => onButtonClick()}>
                  {isLoading ? "loading" : "execute"}
                </button>
              ) : (
                <div className="btn-disabled btn">coming soon</div>
              )}
            </div>

            {/* output */}
            {outputInitialized && (
              <div className="flex-col space-y-2 rounded border-2 p-2">
                OUTPUT
                {entry.outputs.map((c, i) => (
                  <AbiParameterOutput key={i} value={output[i]} param={c} />
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
