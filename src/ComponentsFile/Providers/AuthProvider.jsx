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
    // const [photo, setphoto] = useState("");
    const [loading, setLoading] = useState(true);

    
    // console.log(user)
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const updateUserData = (name, photoUrl) => {
        setLoading(true)
        const auth = getAuth();
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photoUrl
        })
    }
    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const googleLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }
    const githubLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, gitProvider)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)

            // if (!currentUser.photoUrl) {
            //     location.reload()
            // }
            // setLoading(false)
            // if (currentUser) {
            // console.log(user)
            // setphoto(user.photoURL)
            // if (!currentUser.photoURL) {
            //     setUser(currentUser)
            //     // setLoading(false)
            //     // setphoto(currentUser.photoURL)
            //     // location.reload()
            // }
            // }
            
            setLoading(false)


        });
        return () => {
            // setLoading(false)
            return unSubscribe();
        }
    }, [user])

    const logOut = () => {
        setLoading(true)
        setUser(null)
        return signOut(auth)
    }

    const userInfo = {
        user: user,
        createUser,
        updateUserData,
        loginUser,
        logOut,
        // photo: photo,
        googleLogin,
        githubLogin,
        loading: loading
    }
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;