import { Link } from "react-router-dom";
import Container from "@/components/common/Container";
import CommonButton from "@/components/common/CommonButton";

export default function HomeHero() {
  return (
    <section className="py-[160px]">
      <Container>
        <div className="grid grid-cols-2 items-center gap-[72px]">
          <div>
            <h1 className="text-[#1C1D20] text-[56px] font-medium leading-[67px] max-w-[644px]">
              Powerful Features to Simplify Your Financial{" "}
            </h1>
            <p className="text-[#262629] text-[20px] leading-[30px] max-w-[600px] mt-6">
              Keep it short and sweet. Avoid long, drawn-out channel
              descriptions.
            </p>
            <div className="mt-[48px] flex gap-6">
              <CommonButton text="Start free today" />
              <Link className="w-max py-4 px-6 text-[18px] font-semibold leading-[27px] rounded-[30px] flex gap-2 items-center border-1 border-[#6B7280] text-[#6B7280] group">
                <span>Explore streaming platform</span>
                <div className="transition-transform duration-300 group-hover:rotate-[-40deg]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <rect
                      width="24"
                      height="24"
                      transform="matrix(-1 0 0 1 24 0)"
                      fill="white"
                    />
                    <path
                      d="M19 12H5M19 12L13 18M19 12L13 6"
                      stroke="#6B7280"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </Link>
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
  );
}
