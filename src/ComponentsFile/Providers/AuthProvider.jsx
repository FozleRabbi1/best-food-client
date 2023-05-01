import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from "../firebase.config";
// import { toast } from "react-toastify";

export const AuthContext = createContext(null);
const auth = getAuth(app);

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
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            // setUser(null)
            if(currentUser){
                setUser(currentUser)
                if(!currentUser.photoURL){
                    location.reload()
                }
                setphoto(currentUser.photoURL)
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
        photo : photo,
    }
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;