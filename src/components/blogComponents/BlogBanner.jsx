import Container from "@/components/common/Container";
import CommonButton from "@/components/common/CommonButton";
import YouTubeImage from "@/assets/youTubeImg.png"

export default function BlogBanner() {
  return (
    <section className="py-[140px]">
      <Container>
        <div className="flex justify-between items-center mx-12">
          <div className="max-w-[700px]">
            <h2 className="text-[#0B0B0B] text-[40px] font-bold leading-[54px]">
              Our Blogs
            </h2>
            <h4 className="mt-2 text-[18px] leading-[27px]">Building a Better Future with Technology.</h4>
            <p className="text-[#5B6477] text-[14px] leading-5 mt-4">We help YouTubers, content creators, and businesses bring their videos to life with high-quality, professional voiceovers. Whether you’re making tutorials, vlogs, ads, or explainer videos – we’ve got the voice that fits your style. We help creators and businesses deliver professional voiceovers for powerful, engaging videos</p>

            <div className="mt-[48px]">
                <CommonButton text="Explore now" />
            </div>
          </div>
          <div className="w-[604px] h-[340px] rounded-2xl overflow-hidden">
            <img className="w-full h-full object-cover" src={YouTubeImage} alt="not found" />
          </div>
        </div>
      </Container>
    </section>
  )
}
