import React from "react";
import Container from "@/components/common/Container";
import CommonHeading from "@/components/common/CommonHeading";

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
      </Container>
    </section>
  );
}
