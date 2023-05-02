// import { useLoaderData } from "react-router-dom";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './CHefDitles.css';

const ChefDitles = () => {
    const [data, setData] = useState({})
    const [foods, allFood] = useState([])
    const name = useParams();

    useEffect(() => {
        fetch(`http://localhost:5000/chef/${name.name}`)
            .then(res => res.json())
            .then(data => setData(data))
    }, [])

    useEffect(() => {
        fetch(`http://localhost:5000/allFoods/${name.name}`)
            .then(res => res.json())
            .then(data => allFood(data))
    }, [])

    console.log(foods)

    return (
        <div>

            <div className="chef-card grid  md:grid-cols-2 gap-8 mt-8 mx-36">
                <div className="chef-img">
                    <img className="" src={data?.ChefPicture} alt="" />
                </div>
                <div className="chefInfo md:mt-24 text-white">
                    <h2 className="text-red-700">{data?.ChefName}</h2>
                    <p className="text-white"> <span className="text-green-400">Some info : </span> {data?.description}</p>
                    <ul className="mt-2">
                        <li> <span className="text-green-400">Recipes</span> :  {data.NumbersOfRecipes}  </li>
                        <li> <span className="text-green-400">Experience</span> :  {data.YearsOfExperience} Y  </li>
                        <li> <span className="text-green-400">Likes</span> :  {data.Likes}  </li>
                    </ul>
                </div>
            </div>

            <div className="all-recipes text-white grid lg:grid-cols-2 gap-8  mt-24 pb-10 mx-24">
               {
                foods.map((d, index) => <div key={index}>
                    <img className="bg-gray-400 md:w-3/5 h-56 " src={d.recipe.image} alt="" />
                    <h2 className=" text-xl ">{d.recipe.name}</h2>      
                    <p>rating : {d.recipe.rating}</p> 
                    <ul>
                        {
                            d?.recipe?.ingredients.map((i, index) => <li key={index}>** {i}</li> )
                        }
                    </ul>
                    <p>{d.recipe.method.slice(0,200)}...</p>  

                </div> )
               }
            </div>


        </div>
    );
};

export default ChefDitles;