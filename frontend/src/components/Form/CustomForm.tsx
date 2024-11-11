import { useState } from "react";
import { CustomButton } from "../CustomButton/CustomButton";
import { CustomInput } from "../CustomInput/CustomInput";
import { LoginFormModel } from "../../models/LoginModel";
import { RegistrationFormModel } from "../../models/RegistrationModel";

export const CustomForm: React.FC<LoginFormModel | RegistrationFormModel> = (
  props
) => {
  // Helper function to initialize form values based on the form type
  const initializeData = (formType: string) => {
    if (formType === "LOGIN") {
      return { email: "", password: "" };
    } else if (formType === "REGISTRATION") {
      return {
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
        profilePicture: "",
      };
    }
    throw new Error(`The following option ${formType} is not specified`);
  };

  const [formValues, setFormValues] = useState(() =>
    initializeData(props.type)
  );
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  /**
   * Validates all inputs, based on predetermined criteria.
   * @returns return true if everything is valid false otherwise
   */
  const handleValidation = () => {
    const newErrors: { [key: string]: string } = {};

    const emailRegex: RegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    if (!formValues.email) {
      newErrors.email = "Email is required.";
    } else if (emailRegex.test(formValues.email)) {
      newErrors.email = "Invalid email address.";
    }

    if (!formValues.password) {
      newErrors.password = "Password is required.";
    } else if (formValues.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters long.";
    }

    // Additional validations for registration
    if (props.type === "REGISTRATION") {
      if (!formValues.username) {
        newErrors.username = "Username is required.";
      } else if (formValues.username.length < 3) {
        newErrors.username = "Username must be at least 3 characters.";
      }

      if (!formValues.confirmPassword) {
        newErrors.confirmPassword = "Confirm password is required.";
      } else if (formValues.confirmPassword !== formValues.password) {
        newErrors.confirmPassword = "Confirm passwrd does not match password.";
      }

      const pictureFormatRegex: RegExp = !/\.(jpeg|jpg|png)$/i;
      if (
        formValues.profilePicture &&
        pictureFormatRegex.test(formValues.profilePicture)
      ) {
        newErrors.profilePicture = "Profile picture format must be a JPG or PNG.";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  /**
   * Handles changes occuring in the form fields.
   * @param fieldName name of the field
   * @param newValue  the new value that the field is being assigned
   */
  const handleChange = (fieldName: string, newValue: string) => {
    setFormValues((prevValues) => ({
      ...prevValues,
      [fieldName]: newValue,
    }));
  };

  const handleSubmit = (event: React.FormEvent) => {
  
  };

  return (
    <form onSubmit={handleSubmit}>
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
          {errors.email && <div className="error">{errors.email}</div>}

          <CustomInput
            type="password"
            inputLabel="Password"
            labelName="password"
            inputValue={formValues.password}
            onChange={(event) =>
              handleChange("password", event.currentTarget.value)
            }
          />
          {errors.password && <div className="error">{errors.password}</div>}

          <CustomButton type="submit" text="Login" color="warning-color" />
        </>
      )}

      {props.type === "REGISTRATION" && (
        <>
          <CustomInput
            type="text"
            inputLabel="User Name"
            labelName="username"
            inputValue={formValues.username}
            onChange={(event) =>
              handleChange("username", event.currentTarget.value)
            }
          />
          {errors.username && <div className="error">{errors.username}</div>}

          <CustomInput
            type="email"
            inputLabel="Email"
            labelName="email"
            inputValue={formValues.email}
            onChange={(event) =>
              handleChange("email", event.currentTarget.value)
            }
          />
          {errors.email && <div className="error">{errors.email}</div>}

          <CustomInput
            type="password"
            inputLabel="Password"
            labelName="password"
            inputValue={formValues.password}
            onChange={(event) =>
              handleChange("password", event.currentTarget.value)
            }
          />
          {errors.password && <div className="error">{errors.password}</div>}

          <CustomInput
            type="password"
            inputLabel="Confirm Password"
            labelName="confirmPassword"
            inputValue={formValues.confirmPassword}
            onChange={(event) =>
              handleChange("confirmPassword", event.currentTarget.value)
            }
          />
          {errors.confirmPassword && (
            <div className="error">{errors.confirmPassword}</div>
          )}

          <CustomInput
            type="file"
            inputLabel="Upload your profile image"
            labelName="profilePicture"
            inputValue={formValues.profilePicture}
            onChange={(event) =>
              handleChange("profilePicture", event.currentTarget.value)
            }
          />
          {errors.profilePicture && (
            <div className="error">{errors.profilePicture}</div>
          )}

          <div className="button-group">
            <CustomButton type="button" text="Back" color="retract-color" />
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
