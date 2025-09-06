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
import BuyBackGuaranteePage from "@/allPages/BuyBackGuaranteePage";
import Refer from "@/allPages/Refer";
import TermsAndConditions from "@/allPages/TermsAndConditions";
import PrivacyPolicy from "@/allPages/PrivacyPolicy";
import RefundPolicy from "@/allPages/RefundPolicy";
import AllPages from "@/allPages/AllPages";
import DashboardLayout from "@/layout/DashboardLayout";
import DashboardOverview from "@/allPages/Dashboard/DashboardOverview";
import DashboardYoutubeServices from "@/allPages/Dashboard/DashboardYoutubeServices";
import DashboardStarterPlan from "@/allPages/Dashboard/DashboardStarterPlan";
import DashboardWealthPlan from "@/allPages/Dashboard/DashboardWealthPlan";
import DashboardBuyYoutube from './../allPages/Dashboard/DashboardBuyYoutube';

const Router = createBrowserRouter([
  {
    path: "/all-pages",
    element: <AllPages />,
  },

  // Landing Pages
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
      {
        path: "buy-back-guarantee",
        element: <BuyBackGuaranteePage />,
      },
      {
        path: "refer",
        element: <Refer />,
      },
      {
        path: "terms-and-conditions",
        element: <TermsAndConditions />,
      },
      {
        path: "privacy-policy",
        element: <PrivacyPolicy />,
      },
      {
        path: "refund-policy",
        element: <RefundPolicy />,
      },
    ],
  },

  // Dashboard Pages
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <DashboardOverview />,
      },
      {
        path: "/dashboard/youtube-services",
        element: <DashboardYoutubeServices/>,
      },
      {
        path: "/dashboard/lifetime-starter",
        element: <DashboardStarterPlan/>
      },
      {
        path: "/dashboard/lifetime-wealth-plan",
        element: <DashboardWealthPlan/>,
      },
      {
        path: "/dashboard/buy-youtube-videos",
        element: <DashboardBuyYoutube/>,
      },
      {
        path: "/dashboard/youtube-seo-service",
        element: <h1>Youtube SEO Service</h1>,
      },
      {
        path: "/dashboard/youtube-videos-voiceover",
        element: <h1>Youtube Videos Voiceover</h1>,
      },
      {
        path: "/dashboard/announcements",
        element: <h1>Announcements</h1>,
      },
      {
        path: "/dashboard/support",
        element: <h1>Support</h1>,
      },
      {
        path: "/dashboard/billing-transactions",
        element: <h1>Billing Transactions</h1>,
      },
      {
        path: "/dashboard/profile-setting",
        element: <h1>Profile Setting</h1>,
      },
      {
        path: "/dashboard/live-chat",
        element: <h1>Live Chat</h1>,
      },
    ],
  },
]);

export default Router;
