import CommonButton from "../common/CommonButton";
import CommonHeading from "../common/CommonHeading";
import Container from "../common/Container";
import ContactBannerImg from "@/assets/contactBanner.png"

export default function ContactBanner() {
  return (
    <section className="py-[100px]">
        <Container>
            <div className="flex justify-between items-center">
                <div className="max-w-[666px]">
                    <div className="max-w-[560px]">
                        <CommonHeading text="Let’s Talk About Your Next YouTube Video!" />
                    </div>
                    <p className="text-[#1C1D20] text-[20px] leading-[30px] mt-4">Have questions, need support, or want a custom quote? We’re here to help.</p>
                    <div className="mt-[44px]">
                        <CommonButton text="Get a Free Quote" />
                    </div>
                </div>
                <div className="w-[560px] h-[420px]">
                    <img className="w-full h-full object-cover" src={ContactBannerImg} alt="not found" />
                </div>
            </div>
        </Container>
    </section>
  )
}
