import { CustomForm } from "./components/Form/CustomForm";
import { Logo } from "./components/Logo/Logo";
import { LoginFormModel } from "./models/LoginModel";

// TODO extract into custom hook
const handleSubmit = () => {
  const isValid = true;
  if (isValid) {
    console.log("Form is valid");
  } else {
    console.log("Form is not valid");
  }
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
      <div className="min-h-screen bg-background-pattern bg-cover bg-center flex items-center justify-center">
      <div className="container mx-auto bg-white rounded-lg shadow-lg p-8 max-w-lg">
        <div className="flex flex-row space-y-4">
          <Logo/>
            <CustomForm {...loginConfig} />
            <p>Don't have an account? Register here</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
