import { Link } from "react-router-dom";

const AllPages = () => {
  const AllPagesLinks = [
    {
      name: "Home Page",
      link: "/",
    },
    {
      name: "About Us Page",
      link: "/about-us",
    },
    {
      name: "YT Channel Plans Page",
      link: "/ytc-plans",
    },
    {
      name: "YT Channel Services Page",
      link: "/ytc-services",
    },
    {
      name: "YT Channel Video Plans Page",
      link: "/yt-video-plans",
    },
    {
      name: "Blog Page",
      link: "/blog",
    },
    {
      name: "Blog Details Page",
      link: "/blog-details/123",
    },
    {
      name: "Contact Us Page",
      link: "/contact-us",
    },
    {
      name: "We Are Hiring Page",
      link: "/we-are-hiring",
    },
    {
      name: "Job Details Page",
      link: "/job-details",
    },
    {
      name: "Buy Back Guarantee Page",
      link: "/buy-back-guarantee",
    },
    {
      name: "Refer Page",
      link: "/refer",
    },
    {
      name: "Terms And Conditions Page",
      link: "/terms-and-conditions",
    },
    {
      name: "Privacy Policy Page",
      link: "/privacy-policy",
    },
    {
      name: "Refund Policy Page",
      link: "/refund-policy",
    },
    {
      name: "",
      link: "#",
    },
    {
      name: "",
      link: "#",
    },
    {
      name: "Dashboard Overview Page",
      link: "/dashboard",
    },
    {
      name: "Dashboard Youtube Services Page",
      link: "/dashboard/youtube-services",
    },
    {
      name: "Dashboard Lifetime Starter Page",
      link: "/dashboard/lifetime-starter",
    },
    {
      name: "Dashboard Lifetime Wealth Page",
      link: "/dashboard/lifetime-wealth-plan",
    },
    {
      name: "Dashboard Buy Youtube Videos Page",
      link: "/dashboard/buy-youtube-videos",
    },
    {
      name: "Dashboard Youtube SEO Page",
      link: "/dashboard/youtube-seo-service",
    },
    {
      name: "Dashboard Youtube Voiceover Page",
      link: "/dashboard/youtube-videos-voiceover",
    },
    {
      name: "Dashboard Announcements Page",
      link: "/dashboard/announcements",
    },
    {
      name: "Dashboard Support Page",
      link: "/dashboard/support",
    },
    {
      name: "Dashboard Billing and Transactions Page",
      link: "/dashboard/billing-transactions",
    },
    {
      name: "Dashboard Profile Setting Page",
      link: "/dashboard/profile-setting",
    },
    {
      name: "Dashboard Live Chat Page",
      link: "/dashboard/live-chat",
    },
  ];

  return (
    <div className="py-28 px-20">
      <h1 className="text-4xl font-bold mb-10">All Pages of the Website</h1>

      <ul className="text-xl flex flex-col gap-4">
        {AllPagesLinks?.map((item, index) => (
          <li key={index}>
            <Link
              to={item?.link}
              target="_blank"
              className="text-black duration-300"
            >
              {item?.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllPages;
