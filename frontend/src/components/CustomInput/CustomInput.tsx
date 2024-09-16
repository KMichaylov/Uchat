import { ChangeEventHandler } from "react";

interface InputProperties {
  inputLabel: string;
  inputValue: string;
  inputPlaceholder?: string;
  type: "emial" | "image" | "password" | "text";
  labelName: string;
  onChange: ChangeEventHandler<HTMLInputElement> | undefined;
}

export const CustomInput: React.FC<InputProperties> = ({
  inputLabel,
  inputPlaceholder,
  inputValue,
  type,
  labelName,
  onChange,
}) => {
  return (
    <>
      <label htmlFor={labelName}>{inputLabel}</label>
      <input
        type={type}
        id={labelName}
        placeholder={inputPlaceholder}
        value={inputValue}
        onChange={onChange}
      ></input>
    </>
  );
};
