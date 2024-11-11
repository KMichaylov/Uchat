import { CustomForm } from "../components/Form/CustomForm";
import { RegistrationFormModel } from "../models/RegistrationModel";

const registrationConfig: RegistrationFormModel = {
  type: "REGISTRATION",
  userName: "",
  email: "",
  password: "",
  confirmPassword: "",
  profilePicture: new File([], ""),
  onSubmit: handleSubmit,
};

const handleFormSubmit = async (isValid, formValues) => {
  if (isValid) {
    console.log("Form is valid");
  } else {
    console.log("Form is not valid");
  }
};

function RegistrationPage() {
  return (
    <>
      <div className="bg-background-pattern">
        <div className="container mx-auto bg-white rounded-lg shadow-lg p-8 max-w-lg">
          {/* TODO: Create the logo component */}
          <Logo />
          <CustomForm {...registrationConfig} />
        </div>
      </div>
    </>
  );
}
