import { ChangeEventHandler } from "react";
export interface InputModel {
    inputLabel: string;
    inputValue: string;
    inputPlaceholder?: string;
    type: "email" | "image" | "password" | "text";
    labelName: string;
    onChange?: ChangeEventHandler<HTMLInputElement> | undefined;
    stylingInput?: string;
    stylingLabel?: string;
}