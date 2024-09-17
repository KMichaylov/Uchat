// TODO create 2 types, one for registration and one for login

import { CustomButton } from "../CustomButton/CustomButton";
import { CustomInput } from "../CustomInput/CustomInput";
import { LoginFormModel } from "../../models/LoginModel";
import { RegistrationFormModel } from "../../models/RegistrationModel";

// Distinguish between Login and Registration
type FormType = LoginFormModel | RegistrationFormModel;

export const CustomForm: React.FC<FormType> = (props) => {
  return (
    <form onSubmit={handleSubmit}>
      {props.type === "LOGIN" && (
        <>
          <CustomInput />
          <CustomInput />
          <CustomButton />
        </>
      )}

      {props.type === "REGISTRATION" && (
        <>
          <CustomInput />
          <CustomInput />
          <CustomInput />
          <CustomInput />
          <div>
            <CustomButton />
            <CustomButton />
          </div>
        </>
      )}
    </form>
  );
};
