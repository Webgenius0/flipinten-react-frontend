import Container from "@/components/common/Container";
import CommonButton from "@/components/common/CommonButton";
import CommonHeading from "@/components/common/CommonHeading";

export default function YTCPowerFul() {
  return (
    <section className="py-[120px]">
      <Container>
        <div className="grid grid-cols-2 items-center gap-[72px] mx-12">
          <div className="max-w-[558px]">
            <CommonHeading text="Simple Pricing for Powerful Results" />
            <p className="text-[#5B6477] text-[16px] leading-[24px] mt-3">
              Stop wasting time searching through endless folders. Tag, categorise and find your videos instantly with AI-powered tools. Cinema8 ensures your team can always locate what they need—whether it’s for training, marketing or creative projects.
            </p>
            <div className="mt-[32px] flex gap-6">
              <CommonButton text="Get My Plan" />
            </div>
          </div>

          <div className="border-[5px] border-[#FE0000] shadow-custom w-[604px] h-[340px] rounded-[18px] overflow-hidden">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/SRXH9AbT280?si=Vnp5OZosNvajsMUI"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </Container>
    </section>
  )
}
