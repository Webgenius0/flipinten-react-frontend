import { createBrowserRouter } from "react-router-dom";
import Layout from "@/layout/Layout";
import HomePage from "@/allPages/HomePage";
import AboutUsPage from "@/allPages/AboutUsPage";
import YTCPlans from "@/allPages/YTCPlans";
import YTCService from "@/allPages/YTCService";

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
        path: "about-us",
        element: <AboutUsPage />,
      },
      {
        path: "ytc-plans",
        element: <YTCPlans />,
      },
      {
        path: "ytc-services",
        element: <YTCService/>,
      },
    ],
  },
]);

export default Router;
