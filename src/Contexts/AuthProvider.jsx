import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useState } from "react";
import auth from '../Firebase/Firebase.config'
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth/cordova";

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState();
    const [isLoading, setIsLoading] = useState(true);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };
     // GOOGLE LOGIN 
     const googleProvider = new GoogleAuthProvider();
     const googleLogin = () => {
         setIsLoading(true);
         return signInWithPopup(auth, googleProvider)
     };
     // login with github
     const githubProvider = new GithubAuthProvider();
     const githubLogin = () => {
         setIsLoading(true);
        return signInWithPopup(auth , githubProvider)
     }
     // sign in user with email and password
     const signInUser = (email, password) => {
         setIsLoading(true);
         return signInWithEmailAndPassword(auth, email, password)
     };
     // log out
     const logOut = () => {
         setIsLoading(true);
         return signOut(auth)
     }
    const userInfo = { user,setUser, isLoading, createUser, googleLogin, githubLogin, signInUser, logOut }

    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    )
};

export default AuthProvider;