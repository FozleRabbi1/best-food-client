import { faEnvelope, faEye, faEyeSlash, faUnlockKeyhole } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import SocialLogin from "../SharedFile/SocialLogin/SocialLogin";

const Login = () => {
    const [showPass, setShowPass] = useState(false);
    const {user, loginUser } = useContext(AuthContext);
    const [error, setError] = useState("");
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";

    

    if (user) {
        navigate(from, { replace: true })
    }
    // console.log(user)
    // const navigateNow = () => {
    //     setTimeout(() => { navigate(from, { replace: true }) }, 1)
    // }

    const loginHandler = (e) => {
        e.preventDefault();
        setError("")
        const email = e.target.email.value;
        const password = e.target.password.value;

        loginUser(email, password)
            .then(() => {
                // console.log(res)
                // navigateNow();
            })
            .catch(err => {
                setError(err.message)
            })


    }


    return (
        <div className='containerr'>
            <form onSubmit={loginHandler} className='form signUp'>
                <h2>Sign In</h2>
                <div className="inputBox">
                    <input name="email" type="email" required />
                    <FontAwesomeIcon className='icone' icon={faEnvelope} />
                    <span>Email Adderss</span>
                </div>
                <div className="inputBox">
                    <input name="password" type={`${showPass ? "text" : "password"}`} required />
                    <FontAwesomeIcon className='icone' icon={faUnlockKeyhole} />
                    <span>Password</span>
                    <i>{
                        showPass ? <FontAwesomeIcon onClick={() => setShowPass(!showPass)} icon={faEye} ></FontAwesomeIcon> :
                            <FontAwesomeIcon onClick={() => setShowPass(!showPass)} icon={faEyeSlash} ></FontAwesomeIcon>
                    }</i>
                </div>
                {
                    error && <span className="text-red-500 text-center"  >{error}</span>
                }
                <div className="inputBox">
                    <input type="submit" value="Create Account" />
                </div>
                <p className="-mb-2">Do not have an account ? <Link to={"/register"} >Sign Up</Link> </p>
                <span className="text-white -my-3 ">or</span>
                <SocialLogin></SocialLogin>
            </form>
        </div>
    );
};

export default Login;