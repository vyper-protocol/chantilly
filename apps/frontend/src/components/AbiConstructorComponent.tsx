import { AbiConstructor } from "abitype";
import _ from "lodash";

export function AbiConstructorComponent({ entry }: { entry: AbiConstructor }) {
  return (
    <div className="overflow-x-auto rounded border-2 border-solid border-primary">
      <div className="flex flex-col space-y-4">
        {/* header */}
        <div className="flex space-x-2 bg-slate-200 px-4 py-2">
          <div className="flex-grow">
            {entry.type}: (
            {_.join(
              entry.inputs.map((p, i) => `${p.type} ${p.name}`),
              ", "
            )}
            )
          </div>
          {entry.stateMutability && <div>stateMutability: {entry.stateMutability}</div>}
        </div>
      </div>
    </div>
  );
}
