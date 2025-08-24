import React from "react";
import Container from "./Container";

export default function DynamicPageBody({ children, className }) {
  return (
    <section className={`${className} py-[120px] bg-[#F6F6F6]`}>
      <Container>
        <div className="w-full max-w-full md:max-w-80/100 mx-auto">
          {children}
        </div>
      </Container>
    </section>
  );
}
