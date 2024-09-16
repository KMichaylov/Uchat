export interface ButtonModel {
    text: string;
    color: "primary-color" | "danger-color" | "warning-color";
    size?: "normal" | "large";
    type: "button" | "submit" | "reset";
    onClick?: () => void;
}