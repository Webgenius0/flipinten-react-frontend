import { Link } from "react-router-dom";
import Container from "../common/Container";
import BlogDetailsBannerImg from "@/assets/blogDetailsBanner.png";
import CommonHeading from "../common/CommonHeading";
import CommonButton from "../common/CommonButton";

export default function BlogDetailsBanner() {
  return (
    <section className="py-[100px]">
      <Container>
        <div className="flex justify-between items-center">
          <div className="flex flex-col gap-[60px]">

              <Link className="text-[16px] font-medium leading-6 text-[#1C1D20] flex gap-3 items-center w-max">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    fill="none"
                  >
                    <path
                      d="M5.83325 14H22.1666M5.83325 14L10.4999 18.6667M5.83325 14L10.4999 9.33334"
                      stroke="#1C1D20"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />z
                  </svg>
                </div>
                <span>Back to Blog Page</span>
              </Link>
            

            <div className="max-w-[665px]">
                <CommonHeading text="Professional Voices" />
                <h4 className="text-[#262629] text-[18px] leading-[27px]">Building a Better Future with Technology.</h4>
                <p className="text-[#5B6477] text-[14px] leading-[24px] mt-6">We help YouTubers, content creators, and businesses bring their videos to life with high-quality, professional voiceovers. Whether you’re making tutorials, vlogs, ads, or explainer videos – we’ve got the voice that fits your style. We help creators and businesses deliver professional voiceovers for powerful, engaging videos</p>

                <div className="mt-12">
                    <CommonButton text="Explore now" />
                </div>
            </div>
          </div>
          <div className="h-[340px] w-[604px] rounded-2xl overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src={BlogDetailsBannerImg}
              alt=""
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
