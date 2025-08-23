import Container from "@/components/common/Container";
import BBGBannerImage from "@/assets/BlogImage.png"
import CommonButton from "../common/CommonButton";

export default function BBGBanner() {
  return (
    <section className="py-[100px]">
        <Container>
            <div className="flex justify-between items-center mx-12">
                <div className="max-w-[623px]">
                    <h2 className="text-[#1C1D20] text-[36px] font-semibold leading-[54px]">Your Success is Guaranteed – Or We Buy Your Channel Back!</h2>
                    <p className="text-[#1C1D20] text-[20px] leading-[30px] mt-6">We're so confident in our service, we offer a risk-free buyback option.</p>
                    <div className="mt-12">
                        <CommonButton text="See How It Works" />
                    </div>
                </div>
                <div className="w-[604px] h-[340px] rounded-2xl overflow-hidden">
                    <img src={BBGBannerImage} alt="not found" className="w-full h-full object-cover" />
                </div>
            </div>
        </Container>
    </section>
  )
}
