import { useLoaderData } from "react-router-dom";
import Carosule from "./CarosuleFile/Carosule";
import "./Home.css";
import Shef from "./ShefFile/Shef";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import Test from "./ShefFile/ChefDitlesFile/TrstSwipre/Test";


const Home = () => {
    const foodDatas = useLoaderData();
    console.log(foodDatas)

    return (
        <div className="main-div">

            <div className="bannerDiv">
                <Carosule></Carosule>
            </div>

            <div className="shef-div">
                <Shef></Shef>
            </div>

            <div className="showAllrecipy-div pb-24 pt-8">
                <Test foodDatas={foodDatas} ></Test>
            </div>

            <div>
                
            </div>



        </div>
    );
};

export default Home;