import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './SingleChefStyle.css';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazy-load'

// https://meet.google.com/mkp-riks-cpw

const SingleChef = ({ data }) => {
    console.log(data)
    const { ChefName, ChefPicture, Likes, NumbersOfRecipes, YearsOfExperience } = data;



    return (
        <div>

            <div className="">



                <div className="card p-4 flex flex-col">
                    {/* <img src={ChefPicture} alt="" /> */}
                    <LazyLoad className='' width={250} height={220} threshold={0.99}>
                        <img className="bg-gray-500" src={ChefPicture} alt="feb 20" />
                    </LazyLoad>
                    <div className="text mt-12">
                        <p className=" pt-1">Nane : {ChefName}</p>
                        <p>Recipes : {NumbersOfRecipes}</p>
                        <p> Experience : {YearsOfExperience}/Y</p>
                        <p> Likes : {Likes}</p>
                    </div>
                    <Link to={`chef/${ChefName.replace(/\s+/g, '')}`} >
                        <span className="fas fa-arrow-right"><FontAwesomeIcon icon={faArrowRight} />
                        </span>
                    </Link>

                </div>
            </div>




        </div>
    );
};

export default SingleChef;