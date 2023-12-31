import { Transition } from "@headlessui/react";
import { useContext, useState } from "react";
import ActiveLink from "../../ActiveLinkFile/ActiveLink";
import "./Nav.css"
import { AuthContext } from "../../Providers/AuthProvider";
import { Avatar } from "flowbite-react";
import { toast } from "react-toastify";

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut();
    }

    const showNameFun = () => {
        // console.log("cool")
        toast(user?.displayName, {
            position: "top-center"
        })
    }
    return (
        <div className=' sticky top-0 z-50 '>

            <nav className="nav-style">
                <div className=" mx-auto px-10 lg:px-4 py-2">
                    <div className="flex items-center justify-between">
                        <div className="flex w-full justify-between items-center">
                            <div className="flex-shrink-0">
                                <div className="typing">
                                    <h2 className="text-uppercase"> BestFood </h2>
                                </div>
                            </div>
                            <div className="hidden md:block">
                                <div className="ml-10 flex items-center space-x-4">
                                    <ActiveLink
                                        to="/"
                                        className="  text-white px-3 py-0 rounded-md text-sm font-medium"
                                    >
                                        Home
                                    </ActiveLink>
                                    <ActiveLink
                                        to="/blog"
                                        className="  text-white px-3 py-0 rounded-md text-sm font-medium"
                                    >
                                        Blog
                                    </ActiveLink>

                                    <ActiveLink
                                        to="register"
                                        className="  text-white px-3 py-2 rounded-md text-sm font-medium"
                                    >
                                        Register
                                    </ActiveLink>

                                    {
                                        user ? <ActiveLink className=""> <button onClick={handleLogOut} className=" signOutStyle text-white px-3 py-2 rounded-md text-sm font-medium">SignOut</button> </ActiveLink> :
                                            <ActiveLink to="login" className="  text-white px-3 py-2 rounded-md text-sm font-medium">Login</ActiveLink>
                                    }
                                    {
                                        user && <Avatar
                                            img={user?.photoURL}
                                            rounded={true}
                                            stacked={true}
                                            onMouseOver={showNameFun}
                                            color="purple"
                                        />
                                    }


                                </div>
                            </div>
                        </div>
                        <div className="-mr-2 flex md:hidden">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                type="button"
                                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                                aria-controls="mobile-menu"
                                aria-expanded="false"
                            >
                                <span className="sr-only">Open main menu</span>
                                {!isOpen ? (
                                    <svg
                                        className="block h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        className="block h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                <Transition
                    show={isOpen}
                    enter="transition ease-out duration-100 transform"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="transition ease-in duration-75 transform"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    {(ref) => (
                        <div className="md:hidden" id="mobile-menu">
                            <div ref={ref} className="px-2 togolStyle pt-2 pb-3 grid grid-row space-y-1 sm:px-3">
                                <ActiveLink
                                    to="/"
                                    className="  text-white px-3 py-0 rounded-md text-sm font-medium"
                                >
                                    Home
                                </ActiveLink>
                                <ActiveLink
                                    to="/blog"
                                    className="  text-white px-3 py-0 rounded-md text-sm font-medium"
                                >
                                    Blog
                                </ActiveLink>

                                <ActiveLink
                                    to="register"
                                    className="  text-white px-3 py-2 rounded-md text-sm font-medium"
                                >
                                    Register
                                </ActiveLink>

                                {
                                    user ? <ActiveLink className=""> <button onClick={handleLogOut} className=" signOutStyle text-white px-3 py-2 rounded-md text-sm font-medium">SignOut</button> </ActiveLink> :
                                        <ActiveLink to="login" className="  text-white px-3 py-2 rounded-md text-sm font-medium">Login</ActiveLink>
                                }
                            </div>
                        </div>
                    )}
                </Transition>
            </nav>
        </div>
    );
};

export default NavBar;