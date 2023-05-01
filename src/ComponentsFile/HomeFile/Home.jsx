// import { useContext } from "react";
// import { AuthContext } from "../Providers/AuthProvider";
import Carosule from "./CarosuleFile/Carosule";
import "./Home.css";
import Shef from "./ShefFile/Shef";

const Home = () => {
    // const {user} = useContext(AuthContext)
    return (
        <div className="main-div">

            <div className="bannerDiv">
                    <Carosule></Carosule>
            </div>

            <div className="shef-div">
                <Shef></Shef>
            </div>




            

        </div>
    );
};

export default Home;