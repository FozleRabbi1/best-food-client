import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const SocialLogin = () => {
    const { googleLogin, githubLogin, user } = useContext(AuthContext);
    const [error, setError] = useState("")
    console.log(user)

    const googleLoginFun = () => {
        setError("")
        googleLogin()
            .then(() => {
                // console.log(res)
            })
            .catch(err => setError(err.message))
    }
    const githubLoginFun = () => {
        setError("")
        githubLogin()
            .then(() => {
                // console.log(res)
            })
            .catch(err => setError(err.message))
    }

    return (
        <div>

            {
                error && <span className=" text-sm text-red-500 text-center block " >{error}</span>
            }

            {/* <button className="me-2"  >Goo</button> */}
            {/* <FontAwesomeIcon icon={faGoogleLogo} /> */}

            <div className="flex  w-10/12 mx-auto justify-between">
                <img onClick={googleLoginFun} className="w-20 h-7 rounded-xl mx-1 " src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTmIKGwObJ_A_JurYyKkt-eKYEFYpLxk8sww&usqp=CAU" alt="" />
                <img onClick={githubLoginFun} className="w-20 h-7 rounded-xl mx-1  " src="https://static.vecteezy.com/system/resources/previews/016/833/880/non_2x/github-logo-git-hub-icon-with-text-on-white-background-free-vector.jpg" alt="" />
            </div>

            {/* <button  >Giii</button> */}

        </div>
    );
};

export default SocialLogin;