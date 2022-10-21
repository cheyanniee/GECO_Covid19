import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
// min 5 characters, 1 upper case letter, 1 lower case letter and 1 number

export const INITIAL_FORM_VALUES = {
  first_name: "",
  last_name: "",
  email: "",
  password: "",
  confirm_password: "",
  dob: "",
  mobile: "",
  address: "",
  postal_code: "",
};

export const registerSchema = yup.object().shape({
  first_name: yup.string().required("Required"),
  last_name: yup.string().required("Required"),
  email: yup.string().email("Please enter a valid email").required("Required"),
  password: yup
    .string()
    .min(5)
    .matches(passwordRules, { message: "Please enter stronger password" })
    .required("Required"),
  confirm_password: yup
    .string()
    .oneOf([yup.ref("password"), null], "Password must match")
    .required("Required"),
  dob: yup
    .date("Please enter valid date")
    .typeError("Please enter valid date")
    .required("Required"),
  mobile: yup
    .number()
    .positive()
    .integer()
    .min(80000000, "Mobile number must be start with 8 or 9")
    .max(100000000, "Mobile number must be start with 8 or 9")
    .required("Please enter valid mobile number"),
  address: yup.string().required("Required"),
  postal_code: yup
    .number()
    .positive()
    .integer()
    .min(100000, "Postal code must be at least 6 digits")
    .required("Please enter valid postal code"),
});
