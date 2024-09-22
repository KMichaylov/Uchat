import { ButtonModel } from "../../models/ButtonModel";

export const CustomButton: React.FC<ButtonModel> = ({
  text,
  color,
  type,
  onClick,
}) => {
  return (
    <>
      <button
        onClick={onClick}
        className={`bg-${color} text-white`}
        type={type}
      >
        {text}
      </button>
    </>
  );
};
