import HomeFAQ from "@/components/homePageComponents/HomeFAQ";
import HomeCounter from "@/components/homePageComponents/HomeCounter";
import HomeHero from "@/components/homePageComponents/HomeHero";
import HomePricing from "@/components/homePageComponents/HomePricing";
import HomeTestimonial from "@/components/homePageComponents/HomeTestimonial";
import HomeWhyChooseUs from "@/components/homePageComponents/HomeWhyChooseUs";
import HomeSeoServices from "@/components/homePageComponents/HomeSeoServices";
import HomeVoiceOverService from "@/components/homePageComponents/HomeVoiceOverService";
import HomeBlog from "@/components/homePageComponents/HomeBlog";
import RoadmapToMonetization from "@/components/homePageComponents/RoadmapToMonetization";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <HomeCounter />
      <HomeWhyChooseUs />
      <RoadmapToMonetization />
      <HomePricing />
      <HomeTestimonial />
      {/* <HomeFAQ /> */}
      <HomeSeoServices />
      <HomeVoiceOverService />
      <HomeBlog />
    </>
  );
}
