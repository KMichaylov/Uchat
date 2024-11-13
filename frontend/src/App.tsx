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
      <div className="min-h-screen bg-background-pattern bg-cover bg-center flex items-center justify-center px-4">
        <div className="container mx-auto bg-white rounded-lg shadow-lg p-8 max-w-lg w-full">
          <div className="flex flex-col space-y-8">
            <div className="flex justify-center gap-y-10">
              <Logo />
            </div>
            <CustomForm {...loginConfig} />
            <div className="flex items-center justify-center mt-8">
              <p className="text-center text-gray-600">
                Don't have an account?{" "}
                {/* TODO use react routers */}
                <a href="#" className="text-blue-500 underline">
                  Register here
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
