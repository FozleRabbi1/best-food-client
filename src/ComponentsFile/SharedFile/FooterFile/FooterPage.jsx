// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faFacebookF } from "@fortawesome/free-solid-svg-icons";

import { Footer } from "flowbite-react";
import "./Footer.css"
const FooterPage = () => {
    return (
        <div className="pb-5">
            <Footer className="" container={true}>
                <div className="w-full bg-gray-300 p-5 rounded-md ">
                    <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
                        <div>
                            <h2 className="text-2xl font-bold text-red-600 ">Good_Food</h2>
                            <p>Good Food For Better Life...</p>
                        </div>
                        <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
                            <div>
                                <Footer.Title className="text-black" title="about" />
                                <Footer.LinkGroup col={true}>
                                    <Footer.Link href="#">
                                        About
                                    </Footer.Link>
                                    <Footer.Link href="#">
                                        Products
                                    </Footer.Link>
                                </Footer.LinkGroup>
                            </div>
                            <div>
                                <Footer.Title className="text-black" title="Follow us" />
                                <Footer.LinkGroup col={true}>
                                    <Footer.Link href="#">
                                        Facebook
                                    </Footer.Link>
                                    <Footer.Link href="#">
                                        InstaGram
                                    </Footer.Link>
                                </Footer.LinkGroup>
                            </div>
                            <div>
                                <Footer.Title className="text-black" title="Legal" />
                                <Footer.LinkGroup col={true}>
                                    <Footer.Link href="#">
                                        Privacy Policy
                                    </Footer.Link>
                                    <Footer.Link href="#">
                                        Terms & Conditions
                                    </Footer.Link>
                                </Footer.LinkGroup>
                            </div>
                        </div>
                    </div>
                    <Footer.Divider />
                </div>
            </Footer>
        </div>
    );
};

export default FooterPage;