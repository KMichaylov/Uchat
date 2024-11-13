import { ButtonModel } from "../../models/ButtonModel";

export const CustomButton: React.FC<ButtonModel> = ({
  text,
  color,
  type,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={`w-full font-bold bg-${color} text-white py-2 rounded-md`}
      type={type}
    >
      {text}
    </button>
  );
};
