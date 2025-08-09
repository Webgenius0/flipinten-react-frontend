import Container from "@/components/common/Container";
import CommonHeading from "@/components/common/CommonHeading";
import CommonSubHeading from "@/components/common/CommonSubHeading";
import BlogCard from "@/components/common/BlogCard";
import BlogImage from "@/assets/BlogImage.png";
import CommonButton from "@/components/common/CommonButton";

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
          <CommonButton text="See all" />
        </div>
      </Container>
    </section>
  );
}
