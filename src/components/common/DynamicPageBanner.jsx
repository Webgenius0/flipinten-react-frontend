import React from "react";
import Container from "./Container";

export default function DynamicPageBanner({ className, title, lastUpdatedAt }) {
  return (
    <section className={`py-[130px] ${className}`}>
      <Container>
        <div className="w-full flex flex-col items-center justify-center">
          <h6 className="text-[#798090] text-center text-lg leading-[150%]">
            LAST UPDATED AT: {lastUpdatedAt || "no date found"}
          </h6>

          <h1 className="text-[#252C32] text-center text-5xl not-italic font-semibold leading-[120%] mt-7">
            {title || "Dynamic Page Banner"}
          </h1>
        </div>
      </Container>
    </section>
  );
}
