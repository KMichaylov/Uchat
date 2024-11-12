import { CustomButton } from "./components/CustomButton/CustomButton";
import { CustomForm } from "./components/Form/CustomForm";
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
      {/* Tailwind classes to cover the full screen with a background */}
      <div className="min-h-screen bg-background-pattern bg-cover bg-center flex items-center justify-center">
        <div className="container mx-auto bg-white rounded-lg shadow-lg p-8 max-w-lg">
          <CustomForm {...loginConfig} />
        </div>
      </div>
    </>
  );
}

export default App;
