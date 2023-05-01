import { Outlet } from "react-router-dom";
import NavBar from "../SharedFile/NavBarFile/NavBar";
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const Main = () => {
    return (
        <div className=" px-2 md:px-4 lg:px-12 bg-gray-900">

           <NavBar></NavBar>
           <Outlet></Outlet>
           <ToastContainer></ToastContainer>
            
        </div>
    );
};

export default Main;