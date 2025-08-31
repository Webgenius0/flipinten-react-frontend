import React from "react";
import Container from "../common/Container";
import CommonHeading from "../common/CommonHeading";

export default function RoadmapToMonetization() {
  // Roadmap To Monetization Dummy Data
  const RoadmapToMonetization = [
    {
      step: 1,
      title: "Select a Plan",
      description:
        "Choose Lifetime Starter or Lifetime Wealth — aligned to your budget & ROI.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="34"
          height="34"
          viewBox="0 0 34 34"
          fill="none"
        >
          <path
            d="M17.0005 32C25.2848 32 32.0005 25.2843 32.0005 17C32.0005 8.71573 25.2848 2 17.0005 2C8.71622 2 2.00049 8.71573 2.00049 17C2.00049 25.2843 8.71622 32 17.0005 32Z"
            stroke="white"
            stroke-width="3.33333"
          />
          <path
            d="M16.9998 25.3332C21.6022 25.3332 25.3332 21.6022 25.3332 16.9998C25.3332 12.3975 21.6022 8.6665 16.9998 8.6665C12.3975 8.6665 8.6665 12.3975 8.6665 16.9998C8.6665 21.6022 12.3975 25.3332 16.9998 25.3332Z"
            stroke="white"
            stroke-width="3.33333"
          />
        </svg>
      ),
    },
    {
      step: 2,
      title: "Onboarding & Strategy",
      description:
        "Kickoff form + call. We finalize niche, content type, and growth roadmap.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="31"
          height="30"
          viewBox="0 0 31 30"
          fill="none"
        >
          <path
            d="M17.834 2.5H12.834C12.1436 2.5 11.584 3.05964 11.584 3.75V6.25C11.584 6.94036 12.1436 7.5 12.834 7.5H17.834C18.5243 7.5 19.084 6.94036 19.084 6.25V3.75C19.084 3.05964 18.5243 2.5 17.834 2.5Z"
            stroke="white"
            stroke-width="2.5"
          />
          <path
            d="M11.584 5H6.58398C5.92094 5 5.28506 5.26339 4.81622 5.73223C4.34738 6.20107 4.08398 6.83696 4.08398 7.5V25C4.08398 25.663 4.34738 26.2989 4.81622 26.7678C5.28506 27.2366 5.92094 27.5 6.58398 27.5H24.084C24.747 27.5 25.3829 27.2366 25.8518 26.7678C26.3206 26.2989 26.584 25.663 26.584 25V7.5C26.584 6.83696 26.3206 6.20107 25.8518 5.73223C25.3829 5.26339 24.747 5 24.084 5H19.084"
            stroke="white"
            stroke-width="2.5"
          />
        </svg>
      ),
    },
    {
      step: 3,
      title: "Production Engine",
      description:
        "AI scripts, faceless/animated edits, voiceovers, thumbnails, SEO for every video.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="31"
          height="30"
          viewBox="0 0 31 30"
          fill="none"
        >
          <g clip-path="url(#clip0_16639_3359)">
            <path
              d="M24.417 7.5H6.91699C5.53628 7.5 4.41699 8.61929 4.41699 10V22.5C4.41699 23.8807 5.53628 25 6.91699 25H24.417C25.7977 25 26.917 23.8807 26.917 22.5V10C26.917 8.61929 25.7977 7.5 24.417 7.5Z"
              stroke="white"
              stroke-width="2.5"
            />
            <path
              d="M4.41699 7.5L10.667 1.25L15.667 7.5L21.917 1.25L26.917 7.5"
              stroke="white"
              stroke-width="2.5"
            />
          </g>
          <defs>
            <clipPath id="clip0_16639_3359">
              <rect
                width="30"
                height="30"
                fill="white"
                transform="translate(0.666992)"
              />
            </clipPath>
          </defs>
        </svg>
      ),
    },
    {
      step: 4,
      title: "Publish & Promote",
      description:
        "Scheduled uploads, keyword targeting, CTR optimization, early promotion.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
        >
          <path
            d="M5.00049 16.2499L3.75049 22.4999L10.0005 21.2499L23.7505 7.49991C24.0847 6.80014 24.1937 6.01397 24.0626 5.24966C23.9315 4.48535 23.5666 3.78049 23.0183 3.23214C22.4699 2.68379 21.765 2.31893 21.0007 2.1878C20.2364 2.05666 19.4503 2.1657 18.7505 2.49991L5.00049 16.2499Z"
            stroke="white"
            stroke-width="2.5"
          />
          <path
            d="M17.5005 8.75L21.2505 12.5"
            stroke="white"
            stroke-width="2.5"
          />
        </svg>
      ),
    },
    {
      step: 5,
      title: "Monetize",
      description:
        "Guaranteed YPP approval within timeline — or full refund per policy.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="31"
          height="30"
          viewBox="0 0 31 30"
          fill="none"
        >
          <path
            d="M15.334 27.5C22.2375 27.5 27.834 21.9036 27.834 15C27.834 8.09644 22.2375 2.5 15.334 2.5C8.43042 2.5 2.83398 8.09644 2.83398 15C2.83398 21.9036 8.43042 27.5 15.334 27.5Z"
            stroke="white"
            stroke-width="2.5"
          />
          <path d="M15.334 7.5V22.5" stroke="white" stroke-width="2.5" />
          <path
            d="M20.334 11.25H12.209C11.3802 11.25 10.5853 11.5792 9.99928 12.1653C9.41322 12.7513 9.08398 13.5462 9.08398 14.375C9.08398 15.2038 9.41322 15.9987 9.99928 16.5847C10.5853 17.1708 11.3802 17.5 12.209 17.5H20.334C21.1628 17.5 21.9576 17.8292 22.5437 18.4153C23.1297 19.0013 23.459 19.7962 23.459 20.625C23.459 21.4538 23.1297 22.2487 22.5437 22.8347C21.9576 23.4208 21.1628 23.75 20.334 23.75H10.334"
            stroke="white"
            stroke-width="2.5"
          />
        </svg>
      ),
    },
    {
      step: 6,
      title: "Scale & Protect",
      description:
        "Expand into new niches, boost output, or use 2× Buyback option later.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="31"
          height="30"
          viewBox="0 0 31 30"
          fill="none"
        >
          <g clip-path="url(#clip0_16639_3391)">
            <path
              d="M29.417 7.5L17.542 19.375L11.292 13.125L1.91699 22.5"
              stroke="white"
              stroke-width="2.5"
            />
            <path d="M21.917 7.5H29.417V15" stroke="white" stroke-width="2.5" />
          </g>
          <defs>
            <clipPath id="clip0_16639_3391">
              <rect
                width="30"
                height="30"
                fill="white"
                transform="translate(0.666992)"
              />
            </clipPath>
          </defs>
        </svg>
      ),
    },
  ];

  return (
    <section className="w-full py-[70px] bg-[#F6F6F6]">
      <Container>
        <div className="text-center">
          <CommonHeading text="Your Channel’s Roadmap to Guaranteed Monetization" />

          <p className="mt-6 text-[#6A7283] text-[18px] leading-[27px] max-w-60/100 mx-auto">
            6 simple steps — we build, publish, monetize, and scale your YouTube
            channel.
          </p>
        </div>

        <div className="w-full grid grid-cols-3 gap-12 mt-[48px]">
          {RoadmapToMonetization?.map((item) => (
            <div
              key={item.step}
              className="w-full bg-white flex flex-col gap-4 items-center justify-center p-8 rounded-2xl border-b-2 border-primary-red hover:-translate-y-1 duration-300 cursor-pointer"
            >
              <div className="size-8 bg-primary-red rounded-[5px] text-white text-lg font-semibold flex justify-center items-center">
                {item?.step}
              </div>

              <div className="size-12 bg-primary-red rounded-full flex items-center justify-center p-2">
                {item?.icon}
              </div>

              <h3 className="text-[#1C1D20] text-[20px] font-semibold leading-[30px]">
                {item?.title}
              </h3>

              <p className="text-[#6A7283] text-[16px] leading-[24px] text-center">
                {item?.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
