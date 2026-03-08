import { createBrowserRouter } from "react-router";
import MainLayout from "../LayOut/MainLayout";
import HomePage from "../Pages/HomePage";
import FeaturesPage from "../Pages/FeaturesPage";
import ManualPayment from "../components/ManualPayment/ManualPayment";
import SecurityPage from "../Pages/SecurityPage";



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
             },
             {
                 path: "/pricing",
                 element: <ManualPayment/>
             },
             {
                 path: "/security",
                 element: <SecurityPage/>
             },
        ]
    },
]);