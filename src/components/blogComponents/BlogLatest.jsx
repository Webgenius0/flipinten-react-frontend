import CommonHeading from "../common/CommonHeading";
import Container from "../common/Container";
import BlogCard from "@/components/common/BlogCard";
import BlogImage from "@/assets/BlogImage.png";
import PaginationTabs from "../common/PaginationTabs";

const BlogCardData = [
  {
    id: 1,
    isBlog: true,
    image: BlogImage,
    heading: "Professional Voices",
    description:
      "Struggling to pick the perfect tutor? Here’s a quick guide to finding someone who fits your goals, budget, and schedule.....",
  },
  {
    id: 2,
    isBlog: true,
    image: BlogImage,
    heading: "Professional Voices",
    description:
      "Struggling to pick the perfect tutor? Here’s a quick guide to finding someone who fits your goals, budget, and schedule.....",
  },
  {
    id: 3,
    isBlog: true,
    image: BlogImage,
    heading: "Professional Voices",
    description:
      "Struggling to pick the perfect tutor? Here’s a quick guide to finding someone who fits your goals, budget, and schedule.....",
  },
  {
    id: 4,
    isBlog: true,
    image: BlogImage,
    heading: "Professional Voices",
    description:
      "Struggling to pick the perfect tutor? Here’s a quick guide to finding someone who fits your goals, budget, and schedule.....",
  },
  {
    id: 5,
    isBlog: true,
    image: BlogImage,
    heading: "Professional Voices",
    description:
      "Struggling to pick the perfect tutor? Here’s a quick guide to finding someone who fits your goals, budget, and schedule.....",
  },
  {
    id: 6,
    isBlog: true,
    image: BlogImage,
    heading: "Professional Voices",
    description:
      "Struggling to pick the perfect tutor? Here’s a quick guide to finding someone who fits your goals, budget, and schedule.....",
  },
  {
    id: 7,
    isBlog: true,
    image: BlogImage,
    heading: "Professional Voices",
    description:
      "Struggling to pick the perfect tutor? Here’s a quick guide to finding someone who fits your goals, budget, and schedule.....",
  },
  {
    id: 8,
    isBlog: true,
    image: BlogImage,
    heading: "Professional Voices",
    description:
      "Struggling to pick the perfect tutor? Here’s a quick guide to finding someone who fits your goals, budget, and schedule.....",
  },
  {
    id: 9,
    isBlog: true,
    image: BlogImage,
    heading: "Professional Voices",
    description:
      "Struggling to pick the perfect tutor? Here’s a quick guide to finding someone who fits your goals, budget, and schedule.....",
  },
];

export default function BlogLatest() {
  return (
    <section className="py-[130px] bg-[#F6F6F6]">
      <Container>
        <div>
          <div className="flex justify-between items-center">
            <CommonHeading text="Our Latest Blogs" />
            <div className="w-[525px] rounded-[60px] border border-[#E52621] bg-white py-[14px] flex justify-between px-3">
              <input
                className="w-[95%] pl-[20px] outline-none"
                placeholder="Search..."
                type="text"
              />
              <button className="p-3 rounded-full bg-[#E52621]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="21"
                  viewBox="0 0 20 21"
                  fill="none"
                >
                  <path
                    d="M17.5 18.1406L12.5 13.1406M2.5 8.97396C2.5 9.74 2.65088 10.4985 2.94404 11.2063C3.23719 11.914 3.66687 12.5571 4.20854 13.0987C4.75022 13.6404 5.39328 14.0701 6.10101 14.3633C6.80875 14.6564 7.56729 14.8073 8.33333 14.8073C9.09938 14.8073 9.85792 14.6564 10.5657 14.3633C11.2734 14.0701 11.9164 13.6404 12.4581 13.0987C12.9998 12.5571 13.4295 11.914 13.7226 11.2063C14.0158 10.4985 14.1667 9.74 14.1667 8.97396C14.1667 8.20791 14.0158 7.44937 13.7226 6.74164C13.4295 6.03391 12.9998 5.39084 12.4581 4.84917C11.9164 4.30749 11.2734 3.87781 10.5657 3.58466C9.85792 3.29151 9.09938 3.14063 8.33333 3.14062C7.56729 3.14063 6.80875 3.29151 6.10101 3.58466C5.39328 3.87781 4.75022 4.30749 4.20854 4.84917C3.66687 5.39084 3.23719 6.03391 2.94404 6.74164C2.65088 7.44937 2.5 8.20791 2.5 8.97396Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className="my-[48px] grid grid-cols-3 gap-10 mx-12">
            {BlogCardData.map((item) => (
              <BlogCard key={item.id} item={item} />
            ))}
          </div>

          <div>
            <PaginationTabs />
          </div>
        </div>
      </Container>
    </section>
  );
}
