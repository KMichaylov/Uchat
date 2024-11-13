import { CustomForm } from "../components/Form/CustomForm";
import { RegistrationFormModel } from "../models/RegistrationModel";
import { Logo } from "../components/Logo/Logo";

const handleSubmit = async (isValid, formValues) => {
  if (isValid) {
    console.log("Form is valid", formValues);
  } else {
    console.log("Form is not valid");
  }
};

const registrationConfig: RegistrationFormModel = {
  type: "REGISTRATION",
  userName: "",
  email: "",
  password: "",
  confirmPassword: "",
  profilePicture: new File([], ""),
  onSubmit: handleSubmit,
};

function RegistrationPage() {
  return (
    <>
      <div className="min-h-screen bg-background-pattern bg-cover bg-center flex items-center justify-center px-4">
        <div className="container mx-auto bg-white rounded-lg shadow-lg p-8 max-w-lg w-full">
          <div className="flex flex-col space-y-8">
            <div className="flex justify-center gap-y-10">
              <Logo />
            </div>
            <CustomForm {...registrationConfig} />
          </div>
        </div>
      </div>
    </>
  );
}

export default RegistrationPage;
