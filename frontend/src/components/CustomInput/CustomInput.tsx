import { InputModel } from "../../models/InputModel";

export const CustomInput: React.FC<InputModel> = ({
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
