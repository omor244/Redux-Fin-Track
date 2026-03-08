import { createBrowserRouter } from "react-router";
import MainLayout from "../LayOut/MainLayout";
import HomePage from "../Pages/HomePage";
import FeaturesPage from "../Pages/FeaturesPage";



 export const router = createBrowserRouter([
    {
        path: "/",
         element: <MainLayout />,
         children: [
             {
                 index: true,
                 element: <HomePage/>
             },
             {
                 path: "/features",
                 element: <FeaturesPage/>
             }
        ]
    },
]);