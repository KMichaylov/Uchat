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

function App() {
  return (
    <>
      <div className="bg-background-pattern">
      <div className="container mx-auto bg-white rounded-lg shadow-lg p-8 max-w-lg">
        <CustomForm {...loginConfig} />
      </div>
      </div>
    </>
  );
}

export default App;
