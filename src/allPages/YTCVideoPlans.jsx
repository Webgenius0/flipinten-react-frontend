import YTCHowItWorks from "@/components/ytcPlansComponents/YTCHowItWorks";
import YTCKeepEverything from "@/components/ytcVideoPlans/YTCKeepEverything";
import YTCVideoPlanOverview from "@/components/ytcVideoPlans/YTCVideoPlanOverview";
import YTVideoHowWork from "@/components/ytcVideoPlans/YTVideoHowWork";
import YTVideoPlanBanner from "@/components/ytcVideoPlans/YTVideoPlanBanner";

export default function YTCVideoPlans() {
  return (
    <>
      <YTVideoPlanBanner />
      <YTVideoHowWork />
      <YTCKeepEverything />
      <YTCVideoPlanOverview />
    </>
  );
}
