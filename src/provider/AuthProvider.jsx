/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import App from "../App";

export const AuthContext = createContext();

const auth = getAuth(App);

const AuthProvider = ({ children }) => {
  const [user, setuser] = useState(null);

  const register = (email, password) =>
    createUserWithEmailAndPassword(auth, email, password);

  const value = { user, setuser, register };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
