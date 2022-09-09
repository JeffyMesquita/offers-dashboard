import {
  Auth, onAuthStateChanged, signInWithEmailAndPassword,
  signOut, User, UserCredential
} from "firebase/auth";
import React, {
  createContext, useCallback, useContext, useEffect,
  useRef, useState
} from "react";
import { auth } from "../firebase/config/firebaseClient";


export interface AuthContextData {
  currentUser: User;
  userInfo: React.MutableRefObject<User | undefined>;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<UserCredential>;
  logout: (auth: Auth) => Promise<void>;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({} as User);
  const [isLoading, setIsLoading] = useState(true);
  const userInfo = useRef<User>();

  const login = useCallback((email: string, password: string) => {
    return signInWithEmailAndPassword(auth, email, password);
  }, []);

  const logout = useCallback(() => {
    return signOut(auth);
  }, []);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async user => {
      if(user) {
        setCurrentUser(user)
        setIsLoading(false);
      }
    })

    return unsubscribe
  },[])

  const value = {
    currentUser,
    userInfo,
    isLoading,
    login,
    logout,
  };

  return (
    <AuthContext.Provider
      value={value}
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
