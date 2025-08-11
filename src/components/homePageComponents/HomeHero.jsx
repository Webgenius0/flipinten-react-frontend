import { Link } from "react-router-dom";
import Container from "@/components/common/Container";
import CommonButton from "@/components/common/CommonButton";

export default function HomeHero() {
  return (
    <section className="py-[160px] customForClient">
      <Container>
        <div className="grid grid-cols-2 items-center gap-[72px]">
          <div>
            <h1 className="text-white text-[56px] font-medium leading-[67px] max-w-[644px]">
              Powerful Features to Simplify Your Financial{" "}
            </h1>
            <p className="text-white text-[20px] leading-[30px] max-w-[600px] mt-6">
              Keep it short and sweet. Avoid long, drawn-out channel
              descriptions.
            </p>
            <div className="mt-[48px] flex gap-6">
              <Link
                className="py-4 px-6 bg-[#1C1D20] rounded-[30px] w-max text-white text-[18px] font-semibold leading-[27px] flex gap-2 group"
              >
                <span>Start free today</span>
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
              <Link className="w-max py-4 px-6 text-[18px] bg-white font-semibold leading-[27px] rounded-[30px] flex gap-2 items-center border-1 border-[#6B7280] text-[#6B7280] group">
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
              src="https://www.youtube.com/embed/GAEnQGT7J-M?si=Q_mvUkQvkdzBU4BE"
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
