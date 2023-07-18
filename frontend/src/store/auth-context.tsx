// auth-context.ts

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import {
  Unsubscribe,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  UserCredential,
  User as FirebaseAuthUser,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  updateEmail,
  updatePassword,
  sendEmailVerification,
  
} from "firebase/auth";
import { setDoc, doc} from 'firebase/firestore'
import { auth, db } from "../config/firebase";

interface AuthProviderProps {
  children: ReactNode;
}

interface AuthContextValue {
  currentUser: FirebaseAuthUser | null;
  signUp: (email: string, password: string) => Promise<UserCredential>;
  logIn: (email: string, password: string) => Promise<UserCredential>;
  signout: () => Promise<void>;
  forgotPassword: (email: string) => Promise<void>;
  changeEmail: (email: string)=> Promise<void>;
  changePassword: (password: string)=> Promise<void>;
}

const AuthContext = createContext<AuthContextValue | null>(null);

export function useAuth(): AuthContextValue {
  const authContext = useContext(AuthContext);
  if (!authContext) {
    throw new Error("useAuth must be used within an AuthProvider.");
  }
  return authContext;
}

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<FirebaseAuthUser | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  async function signUp(
    email: string,
    password: string
  ): Promise<UserCredential> {
    const userCredentials = await createUserWithEmailAndPassword(auth, email, password);
    if(auth.currentUser) await sendEmailVerification(auth.currentUser)
    return userCredentials
  }

  async function resendVerificationEmail() {
    if(auth.currentUser) return sendEmailVerification(auth.currentUser)
  }
  async function logIn(
    email: string,
    password: string
  ): Promise<UserCredential> {
    const userCredentials = await signInWithEmailAndPassword(auth, email, password);
    if(!userCredentials.user.emailVerified){
      await signOut(auth)
      throw new Error("Email not verified. Please check your inbox and verify your email.")
    }
    return userCredentials;
  }
  async function signout() {
    return signOut(auth);
  }
  async function forgotPassword(email: string): Promise<void> {
    return sendPasswordResetEmail(auth, email);
  }
  async function changeEmail(email: string) {
    if (currentUser) updateEmail(currentUser, email);
  }
  async function changePassword(password: string) {
    if (currentUser) updatePassword(currentUser, password);
  }
  useEffect(() => {
    const unsubscribe: Unsubscribe = onAuthStateChanged(
      auth,
      (user: FirebaseAuthUser | null) => {
        if (user) {
          // Handle the case when the user is logged in
          setLoading(false);
          setCurrentUser(user);
        } else {
          // Handle the case when the user is logged out
          setCurrentUser(null);
        }
      }
    );

    return unsubscribe;
  }, []);

  const value: AuthContextValue = {
    currentUser,
    signUp,
    logIn,
    signout,
    forgotPassword,
    changeEmail,
    changePassword
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
