// import { useContext } from "react";
// import { AuthContext } from "../Providers/AuthProvider";
import Carosule from "./CarosuleFile/Carosule";
import "./Home.css";

const Home = () => {
    // const {user} = useContext(AuthContext)
    return (
        <div className="main-div">

            <div className="bannerDiv">

                <div className="carusole">
                    <Carosule></Carosule>
                </div>

            </div>


            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit laudantium excepturi, officia praesentium quia ad laboriosam maxime similique ea omnis ipsum aspernatur deserunt. Corrupti aspernatur maxime illum, dolorum aperiam odit consequatur similique optio labore a qui odio aliquam veniam vel necessitatibus tempora natus, enim est iure doloremque et ut ad.</p>

        </div>
    );
};

export default Home;