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
      name: "We Are Hiring Page - (NEW)",
      link: "/we-are-hiring",
    },
    {
      name: "Job Details Page - (NEW)",
      link: "/job-details",
    },
    {
      name: "Buy Back Guarantee Page - (NEW)",
      link: "/buy-back-guarantee",
    },
    {
      name: "Refer Page - (NEW)",
      link: "/refer",
    },
    {
      name: "Terms And Conditions Page - (NEW)",
      link: "/terms-and-conditions",
    },
    {
      name: "Privacy Policy Page - (NEW)",
      link: "/privacy-policy",
    },
    {
      name: "Refund Policy Page - (NEW)",
      link: "refund-policy",
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
