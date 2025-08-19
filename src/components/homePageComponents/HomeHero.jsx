import { Link } from "react-router-dom";
import Container from "@/components/common/Container";

export default function HomeHero() {
  return (
    <section className="pt-[100px] pb-[160px] customForClient">
      <Container>
        <div className="w-full flex flex-col items-center justify-center gap-8 text-center">
          <div className="px-4 py-2 border border-primary-red rounded-full">
            <p className="text-xl text-white">
              #1 AI Video Generator with Lifelike AI Avatars
            </p>
          </div>

          <h1 className="text-white text-[56px] font-medium leading-[67px]">
            Powerful Features to Simplify Your Financial
          </h1>

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

          <p className="text-white text-[28px] leading-[30px] mt-6">
            Perfect for social media content, video ads and more. Perfect for
            social media content
          </p>

          {/* Buttons */}
          <div className="mt-8 flex gap-6">
            <Link className="w-max py-4 px-6 text-[18px] bg-white font-semibold leading-[27px] rounded-xl flex gap-2 items-center border-1 border-[#6B7280] text-[#6B7280] group">
              <span>Get Started</span>
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
      </Container>
    </section>
  );
}
