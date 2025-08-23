import { createBrowserRouter } from "react-router-dom";
import Layout from "@/layout/Layout";
import HomePage from "@/allPages/HomePage";
import AboutUsPage from "@/allPages/AboutUsPage";
import YTCPlans from "@/allPages/YTCPlans";
import YTCService from "@/allPages/YTCService";
import YTCVideoPlans from "@/allPages/YTCVideoPlans";
import BlogPage from "@/allPages/BlogPage";
import BlogDetails from "@/allPages/BlogDetails";
import ContactUsPage from "@/allPages/ContactUsPage";
import WeAreHiringPage from "@/allPages/WeAreHiringPage";
import JobDetails from "@/allPages/JobDetails";

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
        element: <YTCService />,
      },
      {
        path: "yt-video-plans",
        element: <YTCVideoPlans />,
      },
      {
        path: "blog",
        element: <BlogPage />,
      },
      {
        path: "blog-details/:id",
        element: <BlogDetails />,
      },
      {
        path: "contact-us",
        element: <ContactUsPage />,
      },
      {
        path: "we-are-hiring",
        element: <WeAreHiringPage />,
      },

      { path: "job-details", element: <JobDetails /> },
    ],
  },
]);

export default Router;
