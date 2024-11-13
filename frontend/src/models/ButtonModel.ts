export interface ButtonModel {
    text: string;
    color: "primary-color" | "danger-color" | "warning-color" | "retract-color";
    size?: "normal" | "large";
    type: "button" | "submit" | "reset";
    styleButton: string
    onClick?: () => void;
}