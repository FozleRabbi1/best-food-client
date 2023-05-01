import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../firebase.config";
import { GoogleAuthProvider } from "firebase/auth";
import { GithubAuthProvider } from "firebase/auth";

// import { toast } from "react-toastify";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const gitProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [photo, setphoto] = useState("");

    // if(user){
    //     toast("register successful")
    // }
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const updateUserData = (name, photoUrl) => {
        const auth = getAuth();
        updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photoUrl
        })
    }
    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider)
    }
    const githubLogin = () => {
        return signInWithPopup(auth, gitProvider)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            if (currentUser) {
                setUser(currentUser)
                setphoto(currentUser.photoURL)
                if (!currentUser.photoURL) {
                    location.reload()
                }
            }
        });
        return () => {
            return unSubscribe();
        }
    }, [])

    const logOut = () => {
        setUser(null)
        return signOut(auth)
    }

    const userInfo = {
        user: user,
        createUser,
        updateUserData,
        loginUser,
        logOut,
        photo: photo,
        googleLogin,
        githubLogin
    }
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;