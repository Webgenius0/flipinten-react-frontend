import React from "react";
import Container from "@/components/common/Container";
import CommonHeading from "@/components/common/CommonHeading";
import SEOIcon from "@/components/icons/SEOIcon";

const SeoData = [
  {
    id: 0,
    icon: <SEOIcon />,
    heading: "Keyword Research",
    desCription:
      "Find the best-performing keywords for your niche to help your videos rank higher.",
  },
  {
    id: 1,
    icon: <SEOIcon />,
    heading: "Keyword Research",
    desCription:
      "Find the best-performing keywords for your niche to help your videos rank higher.",
  },
  {
    id: 2,
    icon: <SEOIcon />,
    heading: "Keyword Research",
    desCription:
      "Find the best-performing keywords for your niche to help your videos rank higher.",
  },
  {
    id: 3,
    icon: <SEOIcon />,
    heading: "Keyword Research",
    desCription:
      "Find the best-performing keywords for your niche to help your videos rank higher.",
  },
  {
    id: 4,
    icon: <SEOIcon />,
    heading: "Keyword Research",
    desCription:
      "Find the best-performing keywords for your niche to help your videos rank higher.",
  },
  {
    id: 5,
    icon: <SEOIcon />,
    heading: "Keyword Research",
    desCription:
      "Find the best-performing keywords for your niche to help your videos rank higher.",
  },
];

export default function HomeSeoServices() {
  return (
    <section className="py-[140px]">
      <Container>
        <div className="text-center flex flex-col justify-center items-center gap-6">
          <CommonHeading text="YouTube SEO Services" />
          <p className="text-[#6A7283] text-[18px] leading-[27px]">
            Optimize. Rank. Grow.
          </p>
        </div>

        <div className="mt-[48px] grid grid-cols-3 gap-10 mx-14">
          {SeoData.map((item)=>(
            <div key={item.id} className="p-[32px] w-max transition-all ease-linear duration-200 hover:scale-105 customBgForKey">
              <div className="flex justify-center items-center mb-8">
                {item.icon}
              </div>
              <div className="flex flex-col gap-4 items-center justify-center">
                <h2 className="text-[#1C1D20] text-2xl font-semibold">
                  {item.heading}
                </h2>
                <p className="text-[#262629] text-[16px] leading-6 max-w-[301px] text-center">
                  {item.desCription}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
