export interface RegistrationFormModel {
  type: "REGISTRATION";
  userName: string;
  email: string;
  password: string;
  confirmPassword: string;
  profilePicture: File;
  onSubmit: () => void;
}
