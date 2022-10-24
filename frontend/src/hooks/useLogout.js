import axios, { LOGOUT_ENDPOINT, config } from "../api/axios";
import useAuth from "./useAuth";

const useLogout = () => {
  const { auth, setAuth } = useAuth();

  const logout = async () => {
    try {
      const response = await axios.get(
        LOGOUT_ENDPOINT,
        config({ token: auth?.token })
      );
      console.log(response.data);
      setAuth({});
      localStorage.removeItem("token");
    } catch (err) {
      console.error(err);
    }
  };

  return logout;
};

export default useLogout;
