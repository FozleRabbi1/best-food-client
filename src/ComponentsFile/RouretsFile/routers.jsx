import { createBrowserRouter } from "react-router-dom";
import Main from "../MainFile/Main";
import Home from "../HomeFile/Home";
import NotFound from "../NotFoundFile/NotFound";
import Login from "../LoginFile/Login";
import Register from "../RegisterFile/Register";
import PrivateRoute from "../PrivateRouteFile/PrivateRoute";
import ChefDitles from "../HomeFile/ShefFile/ChefDitlesFile/ChefDitles";
import BlogMainPage from "../BlogFile/BlogMainPage/BlogMainPage";

const router = createBrowserRouter([
    {
        path: "/", element: <Main></Main>,
        children: [
            {
                path: "/", element: <Home></Home>,
                // loader: () => fetch("http://localhost:5000/allFoods")
                // loader: () => fetch("https://assignment-ten-server-fozlerabbi1.vercel.app/allFoods")
            },
            {
                path: "blog",
                element: <PrivateRoute>
                    <BlogMainPage></BlogMainPage>
                </PrivateRoute>
            },
            {
                path: "chef/:name", element: <PrivateRoute>
                    <ChefDitles></ChefDitles>
                </PrivateRoute>
                // loader : ({params})=> fetch(`http://localhost:5000/chef/${params.name}`)
            },
            { path: "login", element: <Login></Login> },
            { path: "register", element: <Register></Register> },
            { path: "*", element: <NotFound></NotFound> }
        ]
    }

])

export default router;