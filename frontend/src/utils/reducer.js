export const INITIAL_STATE = {
  form: { name: "", email: "", password: "", phone: "", address: "" },
  msg: null,
  error: null,
  user: null,
};
export const INITIAL_FORM_STATE = {
  name: "",
  email: "",
  password: "",
  phone: "",
  address: "",
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "update_input":
      return {
        ...state,
        [action.key]: action.value,
      };
    case "reset_form":
      return { ...state, form: INITIAL_FORM_STATE };
    default:
      return state;
  }
};
