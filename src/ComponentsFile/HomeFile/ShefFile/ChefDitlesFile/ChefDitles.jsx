// import { useLoaderData } from "react-router-dom";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './CHefDitles.css';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import FooterPage from "../../../SharedFile/FooterFile/FooterPage";
import { toast } from "react-toastify";

const ChefDitles = () => {
    const [data, setData] = useState({})
    const [foods, allFood] = useState([])
    const name = useParams();
    const [favurite, setFavourite] = useState([])

    useEffect(() => {
        // fetch(`http://localhost:5000/chef/${name.name}`)
        fetch(`https://assignment-ten-server-fozlerabbi1.vercel.app/chef/${name.name}`)
            .then(res => res.json())
            .then(data => setData(data))
    }, [])

    useEffect(() => {
        // fetch(`http://localhost:5000/allFoods/${name.name}`)
        fetch(`https://assignment-ten-server-fozlerabbi1.vercel.app/allFoods/${name.name}`)
            .then(res => res.json())
            .then(data => allFood(data))
    }, [])


    const isLikeFun = (id) => {
        const newData = [...favurite, id]
        setFavourite(newData)
    }

    const showTostFun = () => {
        toast("selected to favourite list")
    }



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
                        <li> <span className="text-green-400">Experience</span> :  {data?.YearsOfExperience} Y  </li>
                        <li> <span className="text-green-400">Likes</span> :  {data?.Likes}  </li>
                        <li> <span className="text-green-400">Total recipes</span> :  {foods?.length}  </li>
                    </ul>
                </div>
            </div>

            <div className="all-recipes text-white    mt-24 pb-10 mx-24">
                {
                    foods.map((d, index) =>
                        <div className="" key={index}>

                            <div className="food grid grid-cols-3 gap-8 mb-10 ">
                                <div className="image">
                                    <img className="bg-gray-400 w-full h-64 " src={d.recipe.image} alt="" />
                                </div>

                                <div className="info pt-2">
                                    <h2 className=" text-xl ">{d.recipe.name}</h2>
                                    <p className="text-sm">{d.recipe.method.slice(0, 200)}...</p>
                                </div>

                                <div className="reating pt-2">
                                    <ul>
                                        {
                                            d?.recipe?.ingredients.map((i, index) => <li className=" text-sm " key={index}>** {i}</li>)
                                        }
                                    </ul>
                                    <Rating
                                        style={{ maxWidth: 90 }}
                                        value={d.recipe.rating}
                                        readOnly
                                    />

                                    {
                                        favurite.includes(d.id) ?
                                            <button disabled >
                                                <FontAwesomeIcon className="text-2xl mt-1 text-red-500 " icon={faHeart} />
                                            </button> :
                                            <button  >
                                                <FontAwesomeIcon onMouseUp={showTostFun} onClick={() => isLikeFun(d.id)} className="text-2xl mt-1" icon={faHeart} />
                                            </button>
                                    }


                                </div>
                            </div>
                        </div>)
                }
            </div>

            <FooterPage></FooterPage>

        </div>
    );
};

export default ChefDitles;