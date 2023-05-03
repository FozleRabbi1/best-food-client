// import React from 'react';
import './Carusole.css';

import { Button, Carousel } from "flowbite-react";

const Carosule = () => {
    return (
        <div>
            <div className=" carousel-div">
                <Carousel>
                    <img
                        className=""
                        src="https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=600"
                        alt="..."
                    />
                    <img
                        src="https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=600"
                        alt="..."
                    />
                    <img
                        src="https://images.pexels.com/photos/958546/pexels-photo-958546.jpeg?auto=compress&cs=tinysrgb&w=600"
                        alt="..."
                    />
                    <img
                        src="https://images.pexels.com/photos/954677/pexels-photo-954677.jpeg?auto=compress&cs=tinysrgb&w=600"
                        alt="..."
                    />
                    <img
                        src="https://images.pexels.com/photos/209540/pexels-photo-209540.jpeg?auto=compress&cs=tinysrgb&w=600"
                        alt="..."
                    />
                </Carousel>
            </div>


            <div className="text-div text-white">
                <h2>BEST QUALITY </h2>
                <h2 className='-mt-8'>FOOD</h2>
                <p className='mb-2'>A restaurant is a business that prepares and serves food and drinks to customers. Meals are generally served and eaten on the premises, but many restaurants ...</p>

                <Button
                    outline={true}
                    gradientDuoTone="cyanToBlue"
                >
                <a href="https://en.wikipedia.org/wiki/Restaurant" target='_blanck'> More info </a>
                </Button>
            </div>

        </div>
    );
};

export default Carosule;