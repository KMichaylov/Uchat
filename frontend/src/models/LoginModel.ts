
export interface LoginFormModel {
    type: string;
    email: string;
    password: string;
    onSubmit: () => void;
}