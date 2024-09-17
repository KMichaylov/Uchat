import "./App.css";
import { CustomForm } from "./components/Form/CustomForm";
import { LoginFormModel } from "./models/LoginModel";
import { RegistrationFormModel } from "./models/RegistrationModel";

// TODO extract into custom hook
const handleSubmit = () => {
  // Impelemnt the logic here for both registration and login
  console.log(true);
};

const loginConfig: LoginFormModel = {
  type: "LOGIN",
  email: "",
  password: "",
  onSubmit: handleSubmit,
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

function App() {
  return (
    <>
      <div className="bg-background-pattern">
        <CustomForm {...loginConfig} />
      </div>
    </>
  );
}

export default App;
