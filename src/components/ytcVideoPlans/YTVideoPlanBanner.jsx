import Container from "@/components/common/Container";
import CommonButton from "@/components/common/CommonButton";

export default function YTVideoPlanBanner() {
  return (
    <section className="py-[120px]">
      <Container>
        <div className="max-w-[644px] mx-auto text-center flex flex-col items-center">
          <h1 className="text-[36px] text-[#1C1D20] font-semibold leading-[54px]">
            Grow Your Channel With{" "}
            <span className="text-[#E52621]">YTstart Video Plans</span>
          </h1>
          <p className="text-[#1C1D20] text-[20px] leading-[30px] mt-4 mb-[32px]">
            YTstart video library organises, shares, and grows your
            content—turning videos into tools for real business results.
          </p>
          <CommonButton text='Get Started' />
        </div>
      </Container>
    </section>
  );
}
