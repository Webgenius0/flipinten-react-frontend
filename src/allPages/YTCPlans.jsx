import YTCHowItWorks from "@/components/ytcPlansComponents/YTCHowItWorks";
import YTCPlanBanner from "@/components/ytcPlansComponents/YTCPlanBanner";
import YTCPowerFul from "@/components/ytcPlansComponents/YTCPowerFul";
import YTCPricePlan from "@/components/ytcPlansComponents/YTCPricePlan";

export default function YTCPlans() {
  return (
    <>
      <YTCPlanBanner />
      <YTCHowItWorks />
      <YTCPowerFul />
      <YTCPricePlan />
    </>
  );
}
