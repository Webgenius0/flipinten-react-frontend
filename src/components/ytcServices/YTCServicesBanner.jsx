import Container from "@/components/common/Container";
import CommonButton from "@/components/common/CommonButton";
import YouTubeImage from "@/assets/youTubeImg.png"

export default function YTCServicesBanner() {
  return (
    <section className="py-[140px]">
      <Container>
        <div className="flex justify-between items-center mx-12">
          <div className="max-w-[700px]">
            <h2 className="text-[#0B0B0B] text-[40px] font-bold leading-[54px]">
              Grow Your Channel with Professional{" "}
              <span className="text-[#E52621]">YTstart Services</span>
            </h2>
            <p className="text-[#5B6477] text-[14px] leading-5 max-w-[295px] mt-4">Voiceovers, SEO Optimization, and Everything You Need to Succeed</p>

            <div className="mt-[32px]">
                <CommonButton text="Get Started" />
            </div>
          </div>
          <div className="w-[604px] h-[340px] rounded-2xl overflow-hidden">
            <img className="w-full h-full object-cover" src={YouTubeImage} alt="not found" />
          </div>
        </div>
      </Container>
    </section>
  );
}
