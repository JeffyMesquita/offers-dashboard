import React, {
  useContext,
  useState,
  useEffect,
  useRef,
  useCallback,
  createContext,
} from "react";
import { auth } from "../firebase/config/firebaseClient";
import {
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

interface User {
  login: string;
  password: string;
}

export interface AuthContextData {
  currentUser: User;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({} as User);
  const [isLoading, setIsLoading] = useState(false);
  const userInfo = useRef();

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        isLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = (): AuthContextData => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuthContext must be used within an AuthProvider");
  }

  return context;
};

export { AuthProvider };
