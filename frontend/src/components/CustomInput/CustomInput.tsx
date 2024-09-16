import { ChangeEventHandler } from "react";

interface InputProperties {
  inputLabel: string;
  inputValue: string;
  inputPlaceholder?: string;
  type: "emial" | "image" | "password" | "text";
  labelName: string;
  onChange: ChangeEventHandler<HTMLInputElement> | undefined;
  stylingInput: string;
  stylingLabel: string;
}

export const CustomInput: React.FC<InputProperties> = ({
  inputLabel,
  inputPlaceholder,
  inputValue,
  type,
  labelName,
  onChange,
  stylingInput,
  stylingLabel,
}) => {
  return (
    <>
      <label htmlFor={labelName} className={stylingLabel}>
        {inputLabel}
      </label>
      <input
        type={type}
        id={labelName}
        placeholder={inputPlaceholder}
        value={inputValue}
        onChange={onChange}
        className={stylingInput}
      ></input>
    </>
  );
};
