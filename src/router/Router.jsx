import { createBrowserRouter } from "react-router-dom";
import Layout from "@/layout/Layout";
import HomePage from "@/allPages/HomePage";
import AboutUsPage from "@/allPages/AboutUsPage";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'about-us',
        element: <AboutUsPage/>
      }
    ],
  },
]);


export default Router;