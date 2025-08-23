import DownloadMobileApp from "@/components/common/DownloadMobileApp";
import LatestJobs from "@/components/weAreHiringComponents/LatestJobs";
import WAHTrustedCompany from "@/components/weAreHiringComponents/WAHTrustedCompany";
import WeAreHiringBanner from "@/components/weAreHiringComponents/WeAreHiringBanner";

export default function WeAreHiringPage() {
  return (
    <>
      <WeAreHiringBanner />
      <WAHTrustedCompany />
      <LatestJobs />
      <DownloadMobileApp />
    </>
  );
}
