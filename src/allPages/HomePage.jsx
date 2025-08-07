import HomeFAQ from "@/components/homePageComponents/HomeFAQ";
import HomeCounter from "@/components/homePageComponents/HomeCounter";
import HomeHero from "@/components/homePageComponents/HomeHero";
import HomePricing from "@/components/homePageComponents/HomePricing";
import HomeTestimonial from "@/components/homePageComponents/HomeTestimonial";
import HomeWhyChooseUs from "@/components/homePageComponents/HomeWhyChooseUs";
import HomeSeoServices from "@/components/homePageComponents/HomeSeoServices";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <HomeCounter />
      <HomeWhyChooseUs />
      <HomePricing />
      <HomeTestimonial />
      <HomeFAQ />
      <HomeSeoServices />
    </>
  );
}
