import HomePricing from "@/components/homePageComponents/HomePricing";
import YTCHowItWorks from "@/components/ytcPlansComponents/YTCHowItWorks";
import YTCPlanBanner from "@/components/ytcPlansComponents/YTCPlanBanner";
import YTCPowerFul from "@/components/ytcPlansComponents/YTCPowerFul";

export default function YTCPlans() {
  return (
    <>
      <YTCPlanBanner />
      <YTCHowItWorks />
      <YTCPowerFul />
      <HomePricing />
    </>
  );
}
