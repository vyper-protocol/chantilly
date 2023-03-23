import { AbiParameter } from "abitype";

export function AbiParameterOutput({ param, value }: { param: AbiParameter; value: any }) {
  if (param.type === "bool") {
    return <div>{!!value ? "true ✅" : "false ❌"}</div>;
  }

  if (param.type === "address") {
    return <div> {String(value)}</div>;
  }

  if (param.type === "int256" || param.type === "uint256") {
    return <div>{(value as BigInt)?.toString()}</div>;
  }

  return <div>{value}</div>;
}
