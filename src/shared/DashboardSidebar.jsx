import React from "react";
import Logo from "@/assets/logo.png";
import toast from "react-hot-toast";
import LogoutSVG from "@/components/SVG/LogoutSVG";
import DashboardOverviewSVG from "@/components/SVG/DashboardNavIcons/DashboardOverviewSVG";
import { NavLink } from "react-router-dom";
import DashboardYoutubeServiceSVG from "@/components/SVG/DashboardNavIcons/DashboardYoutubeServiceSVG";
import DashboardLifetimeStarterSVG from "@/components/SVG/DashboardNavIcons/DashboardLifetimeStarterSVG";
import DashboardLifetimeWealthSVG from "@/components/SVG/DashboardNavIcons/DashboardLifetimeWealthSVG";
import DashboardBuyYoutubeSVG from "@/components/SVG/DashboardNavIcons/DashboardBuyYoutubeSVG";
import DashboardYTSeoSVG from "@/components/SVG/DashboardNavIcons/DashboardYTSeoSVG";
import DashboardYTVideosSVG from "@/components/SVG/DashboardNavIcons/DashboardYTVideosSVG";
import DashboardSupportSVG from "@/components/SVG/DashboardNavIcons/DashboardSupportSVG";
import DashboardAnnounementsSVG from "@/components/SVG/DashboardNavIcons/DashboardAnnounementsSVG";
import DashboardBillingSVG from "@/components/SVG/DashboardNavIcons/DashboardBillingSVG";
import DashboardProfileSVG from "@/components/SVG/DashboardNavIcons/DashboardProfileSVG";
import DashboardLiveChatSVG from "@/components/SVG/DashboardNavIcons/DashboardLiveChatSVG";

// Dashboard Nav Links
const DashboardNavLinks = [
  {
    title: "Dashboard Overview",
    icon: <DashboardOverviewSVG />,
    link: "/dashboard",
  },
  {
    title: "My YouTube Services",
    icon: <DashboardYoutubeServiceSVG />,
    link: "/dashboard/youtube-services",
  },
  {
    title: "My Lifetime Starter",
    icon: <DashboardLifetimeStarterSVG />,
    link: "/dashboard/lifetime-starter",
  },
  {
    title: "Lifetime Wealth Plan",
    icon: <DashboardLifetimeWealthSVG />,
    link: "/dashboard/lifetime-wealth-plan",
  },
  {
    title: "Buy YouTube Videos",
    icon: <DashboardBuyYoutubeSVG />,
    link: "/dashboard/buy-youtube-videos",
  },
  {
    title: "YT SEO Service",
    icon: <DashboardYTSeoSVG />,
    link: "/dashboard/youtube-seo-service",
  },
  {
    title: "YT Videos Voiceover",
    icon: <DashboardYTVideosSVG />,
    link: "/dashboard/youtube-videos-voiceover",
  },
  {
    title: "Announcements",
    icon: <DashboardAnnounementsSVG />,
    link: "/dashboard/announcements",
  },
  {
    title: "Support",
    icon: <DashboardSupportSVG />,
    link: "/dashboard/support",
  },
  {
    title: "Billing & Transactions",
    icon: <DashboardBillingSVG />,
    link: "/dashboard/billing-transactions",
  },
  {
    title: "Profile Setting",
    icon: <DashboardProfileSVG />,
    link: "/dashboard/profile-setting",
  },
  {
    title: "Live Chat",
    icon: <DashboardLiveChatSVG />,
    link: "/dashboard/live-chat",
  },
];

export default function DashboardSidebar() {
  return (
    <div className="w-full h-full p-8 flex flex-col justify-between">
      {/* Website Logo */}
      <div className="w-full flex justify-center items-center pb-10">
        <img src={Logo} alt="Website Logo" />
      </div>

      {/* Dashboard Nav Links */}
      <div className="w-full h-full">
        <ul className="w-full h-full flex flex-col overflow-y-scroll gap-1 custom-scrollbar">
          {DashboardNavLinks?.map((item, index) => (
            <NavLink
              to={item?.link}
              key={index}
              className={({ isActive }) =>
                isActive
                  ? "text-red-500 text-lg font-medium w-full items-center gap-3 p-3 bg-[#FFF1F0] rounded-lg cursor-pointer duration-300 inline-flex"
                  : "text-[#5B6477] text-lg font-medium w-full items-center gap-3 p-3 hover:bg-[#F6F6F6] rounded-lg cursor-pointer duration-300 inline-flex"
              }
              end
            >
              <div>{item?.icon}</div>
              <div>{item?.title}</div>
            </NavLink>
          ))}
        </ul>
      </div>

      {/* Logout */}
      <div className="pt-10">
        <button
          onClick={() => toast("Feature coming soon")}
          type="button"
          className="inline-flex items-center gap-3 text-xl text-primary-red hover:bg-red-50 py-2 px-5 rounded-lg w-full cursor-pointer duration-300"
        >
          <LogoutSVG />
          Logout
        </button>
      </div>
    </div>
  );
}
