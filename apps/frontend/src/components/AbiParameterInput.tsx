import { AbiParameter } from "abitype";
import { useEffect, useState } from "react";
import { TextInputBox } from "./TextInputBox";

export function AbiParameterInput({
  param,
  value,
  onChange,
}: {
  param: AbiParameter;
  value: any;
  onChange: (v: any) => void;
}) {
  const [renderedValue, setRenderedValue] = useState("0");
  useEffect(() => {
    if (param.type === "int256" || param.type === "uint256") {
      setRenderedValue((value as BigInt)?.toString());
    } else {
      setRenderedValue(value);
    }
  }, [param, value]);

  const internalOnChange = (v: any) => {
    if (param.type === "int256" || param.type === "uint256") {
      onChange(BigInt(v));
    } else {
      onChange(v);
    }
  };

  return <TextInputBox label={`${param.name} (${param.type})`} onChange={internalOnChange} value={renderedValue} />;
}
