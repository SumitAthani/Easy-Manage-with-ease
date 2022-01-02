import { useContext } from "react";
import authContext from "./context";
import authStorage from "./storage";
import jwtDecode from "jwt-decode";
import AsyncStorage from "@react-native-async-storage/async-storage";

const useAuth = () => {
  const { user, setUser } = useContext(authContext);

  const login = (authToken) => {
    const user = jwtDecode(authToken);
    setUser(user);
    authStorage.storeToken(authToken);
  };

  const logOut = () => {
    setUser(null);

    authStorage.removeToken();
    AsyncStorage.clear();
  };

  return { user, logOut, login };
};

export default useAuth;
