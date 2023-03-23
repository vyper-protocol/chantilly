import { AbiConstructor, AbiError, AbiEvent, AbiFallback, AbiFunction, AbiReceive } from "abitype";
import { AbiConstructorComponent } from "./AbiConstructorComponent";
import { AbiEventComponent } from "./AbiEventComponent";
import { AbiFunctionComponent } from "./AbiFunctionComponent";

export function AbiEntryComponent({
  entry,
}: {
  entry: AbiConstructor | AbiError | AbiEvent | AbiFallback | AbiFunction | AbiReceive;
}) {
  if (entry.type === "function") return <AbiFunctionComponent entry={entry} />;
  if (entry.type === "event") return <AbiEventComponent entry={entry} />;
  if (entry.type === "constructor") return <AbiConstructorComponent entry={entry} />;
  

  return (
    <div className="overflow-x-auto rounded border-2 border-solid border-primary">
      <div className="flex flex-col space-y-4">
        {/* header */}
        <div className="flex space-x-2 bg-slate-200 px-4 py-2">
          <div className="flex-grow">
            {entry.type}
          </div>
        </div>
      </div>
    </div>
  );
}
