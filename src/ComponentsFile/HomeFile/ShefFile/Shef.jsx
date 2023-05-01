import { useEffect, useState } from "react";
import SingleChef from "./SingleChef";

const Shef = () => {
    const [chefData, setChefData] = useState([])
    useEffect(() => {
        fetch("http://localhost:5000/chef")
            .then(res => res.json())
            .then(data => setChefData(data))
            .catch(err => console.error(err.message))
    }, [])
    console.log(chefData)
    return (
        <div className="text-white -mt-10 md:py-20">
            <h2 className="text-center text-xl md:text-3xl ">... All Chef ...</h2>
            <h4 className="text-center mb-8 ">GOOD FOOD FOR YOUR ALL DAY GOOD MOOD</h4>

           

            <div className="chef-container grid  md:grid-cols-2 lg:grid-cols-3 justify-center w-11/12 mx-auto gap-10">
                {
                    chefData?.map((chef, index) => <SingleChef
                        key={index}
                        data={chef}
                    ></SingleChef>)
                }
            </div>

        </div>
    );
};

export default Shef;