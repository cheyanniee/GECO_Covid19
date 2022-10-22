import axios, { REFRESHTOKEN_ENDPOINT, config } from "../api/axios";
import useAuth from "./useAuth";

const useRefreshToken = ({ token }) => {
  const { setAuth } = useAuth();

  const refresh = async () => {
    const response = await axios.get(
      REFRESHTOKEN_ENDPOINT,
      config({ token: token })
    );
    setAuth((prev) => {
      console.log(JSON.stringify(prev));
      console.log(response.data.accessToken);
      return {
        ...prev,
        roles: response.data?.roles,
        accessToken: response.data?.accessToken,
        official_id: response.data?.official_id,
      };
    });
    return response.data.accessToken;
  };
  return refresh;
};

export default useRefreshToken;
