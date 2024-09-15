interface ButtonProps {
  text: string;
  color: "primary-color" | "danger-color" | "warning-color";
  size?: "normal" | "large";
  type: "button" | "submit" | "reset";
  onClick?: () => void;
}

export const CustomButton: React.FC<ButtonProps> = ({
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
