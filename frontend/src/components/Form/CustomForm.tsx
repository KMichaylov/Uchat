// TODO create 2 types, one for registration and one for login

import { CustomButton } from "../CustomButton/CustomButton";
import { CustomInput } from "../CustomInput/CustomInput";
import { LoginFormModel } from "../../models/LoginModel";
import { RegistrationFormModel } from "../../models/RegistrationModel";
import { useState } from "react";

export const CustomForm: React.FC<LoginFormModel | RegistrationFormModel> = (
  props
) => {
  const initializeData = (formType: string) => {
    if (formType === "LOGIN") {
      return { email: "", password: "" };
    } else if (formType === "REGISTRATION") {
      return { username: "", email: "", password: "", confirmPassword: "" };
    }
    throw new Error(`The following option ${formType} is not specified`);
  };
  const [formValues, setFormValues] = useState(() =>
    initializeData(props.type)
  );

  const handleValidation = () => {};

  const handleChange = (fieldName: string, newValue: string) => {
    setFormValues((prevValues) => ({
      ...prevValues,
      [fieldName]: newValue,
    }));
  };

  // TODO: Finish the implementation of the CustomForm and test it extensively
  return (
    <form onSubmit={props.onSubmit}>
      {props.type === "LOGIN" && (
        <>
          <CustomInput
            type="email"
            inputLabel="Email"
            labelName="email"
            inputValue={formValues.email}
            onChange={(event) =>
              handleChange("email", event.currentTarget.value)
            }
          />
          <CustomInput
            type="password"
            inputLabel="Password"
            labelName="email"
            inputValue={formValues.password}
            onChange={(event) =>
              handleChange("password", event.currentTarget.value)
            }
          />
          <CustomButton type="submit" text="Login" color="warning-color" />
        </>
      )}

      {props.type === "REGISTRATION" && (
        <>
          <CustomInput
            type="text"
            inputLabel="User Name"
            labelName="username"
            inputValue={formValues.userName}
            onChange={(event) =>
              handleChange("userName", event.currentTarget.value)
            }
          />
          <CustomInput
            type="email"
            inputLabel="Email"
            labelName="email"
            inputValue={formValues.email}
            onChange={(event) =>
              handleChange("email", event.currentTarget.value)
            }
          />
          <CustomInput
            type="password"
            inputLabel="Password"
            labelName="email"
            inputValue={formValues.password}
            onChange={(event) =>
              handleChange("password", event.currentTarget.value)
            }
          />
          <CustomInput
            type="password"
            inputLabel="Confirm Password"
            labelName="confirmpassword"
            inputValue={formValues.confirmPassword}
            onChange={(event) =>
              handleChange("confirmPassword", event.currentTarget.value)
            }
          />
          {/* TODO Check how this works for the image */}
          <CustomInput
            type="image"
            inputLabel="Upload your profile image"
            labelName="profileimage"
            inputValue={formValues.profilePicture}
            onChange={(event) =>
              handleChange("profilePicture", event.currentTarget.value)
            }
          />
          <div>
            <CustomButton type="submit" text="Back" color="retract-color" />
            <CustomButton
              type="submit"
              text="Create Account"
              color="warning-color"
            />
          </div>
        </>
      )}
    </form>
  );
};
