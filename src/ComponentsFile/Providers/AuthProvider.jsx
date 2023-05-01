import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from "../firebase.config";
// import { toast } from "react-toastify";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

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
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            
            setUser(currentUser)
        });
        return () => {
            return unSubscribe();
        }
    }, [])
    const logOut = () => {
        return signOut(auth)
    }

    const userInfo = {
        user: user,
        createUser,
        updateUserData,
        loginUser,
        logOut
    }
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;