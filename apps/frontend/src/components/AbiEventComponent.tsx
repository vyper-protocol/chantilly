import { useViemClient } from "@/hooks/useViemClient";
import { useAppStore } from "@/store/useAppStore";
import { AbiEvent } from "abitype";
import { useState } from "react";
import { getAccount } from "viem";
import { AbiParameterInput } from "./AbiParameterInput";
import { AbiParameterOutput } from "./AbiParameterOutput";
import _ from "lodash";

export function AbiEventComponent({ entry }: { entry: AbiEvent }) {
  return (
    <div className="overflow-x-auto rounded border-2 border-solid border-primary">
      <div className="flex flex-col space-y-4">
        {/* header */}
        <div className="flex space-x-2 bg-slate-200 px-4 py-2">
          <div className="flex-grow">
            {entry.type}: {entry.name} (
            {_.join(
              entry.inputs.map((p, i) => `${p.type} ${p.name}`),
              ", "
            )}
            )
          </div>
        </div>
      </div>
    </div>
  );
}
