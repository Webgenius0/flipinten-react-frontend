import YTCBoostSEO from "@/components/ytcServices/YTCBoostSEO";
import YTCServiceCardHolder from "@/components/ytcServices/YTCServiceCardHolder";
import YTCServicesBanner from "@/components/ytcServices/YTCServicesBanner";
import YTCSVoice from "@/components/ytcServices/YTCSVoice";
import React from "react";

export default function YTCService() {
  return (
    <>
      <YTCServicesBanner />
      <YTCServiceCardHolder />
      <YTCBoostSEO />
      <YTCSVoice />
    </>
  );
}
