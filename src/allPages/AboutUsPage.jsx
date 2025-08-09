import AboutCoreServices from "@/components/aboutPageComponents/AboutCoreServices";
import AboutHeroSection from "@/components/aboutPageComponents/AboutHeroSection";
import AboutIdentity from "@/components/aboutPageComponents/AboutIdentity";
import AboutUserLove from "@/components/aboutPageComponents/AboutUserLove";
import AboutVisionValues from "@/components/aboutPageComponents/AboutVisionValues";

export default function AboutUsPage() {
  return (
    <>
      <AboutHeroSection />
      <AboutVisionValues />
      <AboutIdentity />
      <AboutUserLove />
      <AboutCoreServices />
    </>
  );
}
