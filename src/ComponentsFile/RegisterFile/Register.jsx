import { faEnvelope, faEye, faEyeSlash, faImage, faUnlockKeyhole, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import "../SharedFile/RegisterLoginStyle.css";
import { useContext, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import SocialLogin from "../SharedFile/SocialLogin/SocialLogin";
// import { toast } from "react-toastify";
// import { toast } from "react-toastify";

const Register = () => {
    const [againShowPass, setAgainShowPass] = useState(false);
    const [showPass, setShowPass] = useState(false);
    const [error, setError] = useState("");
    const {user, createUser, updateUserData } = useContext(AuthContext)
    // const navigate = useNavigate()
    // logOut, ,

    if (user) {
        // navigate("/")
        // toast.success('Registerd successfull')
    }


    const registerHandler = (e) => {
        e.preventDefault();
        setError("")
        const name = e.target.name.value;
        const email = e.target.email.value;
        const photo = e.target.photo.value;
        const password = e.target.password.value;
        const confirmPass = e.target.confirmPass.value;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const passwordRegex = /(?=.*[!@#$%^&*])/;



        if (!emailRegex.test(email)) {
            setError("Please inter a valid email")
            return
        }
        if (!passwordRegex.test(password)) {
            setError("You miss one spatial carecter in password")
            return
        }
        if (password !== confirmPass) {
            setError("Password not matched")
            return
        }
        if (password.length < 6) {
            setError("Type min 6 caracter")
            return
        }

        createUser(email, password)
            .then(res => {
                console.log(res.user)

                updateUserData(name, photo)
                    .then(() => console.log("profile updated"))
                    .catch(err => console.error(err.message));

            })
            .catch(err => console.log(err?.message))


           
        

        // console.log(name, email, password, confirmPass)


    }

    return (
        <div className='containerr'>
            <form onSubmit={registerHandler} className='form signUp'>
                <h2>Sign Up</h2>
                <div className="inputBox">
                    <input name="name" type="text" required />
                    <FontAwesomeIcon className='icone' icon={faUser} />
                    <span>userName</span>
                </div>

                <div className="inputBox">
                    <input name="email" type="text" required />
                    <FontAwesomeIcon className='icone' icon={faEnvelope} />
                    <span>Email Adderss</span>
                </div>

                <div className="inputBox">
                    <input name="photo" type="text" required />
                    <FontAwesomeIcon className='icone' icon={faImage} />
                    <span>Photo URL</span>
                </div>

                <div className="inputBox">
                    <input name="password" type={`${showPass ? "text" : "password"}`} required />
                    <FontAwesomeIcon className='icone' icon={faUnlockKeyhole} />
                    <span>Creat Password</span>
                    <i>{
                        showPass ? <FontAwesomeIcon onClick={() => setShowPass(!showPass)} icon={faEye} ></FontAwesomeIcon> :
                            <FontAwesomeIcon onClick={() => setShowPass(!showPass)} icon={faEyeSlash} ></FontAwesomeIcon>
                    }</i>
                </div>
                <div className="inputBox">
                    <input name="confirmPass" type={`${againShowPass ? "text" : "password"}`} required />
                    <FontAwesomeIcon className='icone' icon={faUnlockKeyhole} />
                    <span>Confirm Password</span>
                    <i>{
                        againShowPass ? <FontAwesomeIcon onClick={() => setAgainShowPass(!againShowPass)} icon={faEye} ></FontAwesomeIcon> :
                            <FontAwesomeIcon onClick={() => setAgainShowPass(!againShowPass)} icon={faEyeSlash} ></FontAwesomeIcon>
                    }</i>
                </div>

                {
                    error && <span className="text-red-500 text-sm text-center " > {error}</span>
                }
                <div className="inputBox">
                    <input type="submit" value="Create Account" />
                </div>
                <p className="-mb-2" >already a member ? <Link to={"/login"} >Log in</Link> </p>
                <span className="text-white -my-3 ">or</span>

                <SocialLogin></SocialLogin>
            </form>
        </div>
    );
};

export default Register;