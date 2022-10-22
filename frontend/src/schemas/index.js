import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
// min 5 characters, 1 upper case letter, 1 lower case letter and 1 number

export const INITIAL_FORM_VALUES = {
  first_name: "",
  last_name: "",
  official_id: "",
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
  official_id: yup.string().required("Required"),
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
    .min(100000, "Postal code must be exactly 6 digits")
    .max(1000000, "Postal code must be at exactly 6 digits")
    .required("Please enter valid postal code"),
});

export const userDetailsSchema = yup.object().shape({
  email: yup.string().email("Please enter a valid email"),
  password: yup
    .string()
    .min(5)
    .matches(passwordRules, { message: "Please enter stronger password" }),
  confirm_password: yup.string().when("password", (val) => {
    if (val?.length > 0)
      return yup
        .string()
        .oneOf([yup.ref("password"), null], "Password must match")
        .required("Required");
    else return yup.string().notRequired();
  }),
  dob: yup.date("Please enter valid date").typeError("Please enter valid date"),
  mobile: yup
    .number()
    .positive()
    .integer()
    .min(80000000, "Mobile number must be start with 8 or 9")
    .max(100000000, "Mobile number must be start with 8 or 9"),
  postal_code: yup
    .number()
    .positive()
    .integer()
    .min(100000, "Postal code must be exactly 6 digits")
    .max(1000000, "Postal code must be at exactly 6 digits"),
});
