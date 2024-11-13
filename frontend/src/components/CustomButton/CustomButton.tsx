import { ButtonModel } from "../../models/ButtonModel";

export const CustomButton: React.FC<ButtonModel> = ({
  text,
  type,
  styleButton,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={styleButton}
      type={type}
    >
      {text}
    </button>
  );
};
