export interface RegistrationFormModel {
  type: string;
  userName: string;
  email: string;
  password: string;
  confirmPassword: string;
  profilePicture: File;
  onSubmit: () => void;
}
