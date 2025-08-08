import Container from "@/components/common/Container";
import CommonHeading from "@/components/common/CommonHeading";
import CommonSubHeading from "@/components/common/CommonSubHeading";
import BlogCard from "@/components/common/BlogCard";
import BlogImage from "@/assets/BlogImage.png";
import { Link } from "react-router-dom";

const BlogCardData = [
  {
    id: 0,
    image: BlogImage,
    heading: "Professional Voices",
    description:
      "Struggling to pick the perfect tutor? Here’s a quick guide to finding someone who fits your goals, budget, and schedule.....",
  },
  {
    id: 1,
    image: BlogImage,
    heading: "Professional Voices",
    description:
      "Struggling to pick the perfect tutor? Here’s a quick guide to finding someone who fits your goals, budget, and schedule.....",
  },
  {
    id: 2,
    image: BlogImage,
    heading: "Professional Voices",
    description:
      "Struggling to pick the perfect tutor? Here’s a quick guide to finding someone who fits your goals, budget, and schedule.....",
  },
];

export default function HomeBlog() {
  return (
    <section className="py-[140px]">
      <Container>
        <div className="flex flex-col gap-6 justify-center items-center">
          <CommonHeading text="Latest Updates and News" />
          <div className="max-w-[630px]">
            <CommonSubHeading text="Latest refers to the most recent element in a chronological series" />
          </div>
        </div>

        <div className="my-[48px] grid grid-cols-3">
          {BlogCardData.map((item) => (
            <BlogCard key={item.id} item={item} />
          ))}
        </div>

        <div className="flex justify-center items-center">
          <Link className="py-4 px-6 bg-[#E52621] rounded-[30px] w-max text-white text-[18px] font-semibold leading-[27px] flex gap-2 group">
            <span>See all</span>
            <div className="transition-transform duration-300 group-hover:rotate-[-40deg]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
              >
                <path
                  d="M19 12.5H5M19 12.5L13 18.5M19 12.5L13 6.5"
                  stroke="white"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </Link>
        </div>
      </Container>
    </section>
  );
}
