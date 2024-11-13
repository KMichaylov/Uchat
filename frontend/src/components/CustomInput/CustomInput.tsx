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
    <div className="flex flex-col my-6">
      <label htmlFor={labelName} className={`${stylingLabel} mb-2`}>
        {inputLabel}
      </label>
      <input
        type={type}
        id={labelName}
        placeholder={inputPlaceholder}
        value={inputValue}
        onChange={onChange}
        className={stylingInput}
      />
    </div>
  );
};
