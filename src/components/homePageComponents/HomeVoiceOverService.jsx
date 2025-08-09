import Container from "@/components/common/Container";
import CommonHeading from "@/components/common/CommonHeading";
import CommonSubHeading from "@/components/common/CommonSubHeading";
import VideoIcon from "@/components/icons/VideoIcon";
import VideoImage from "@/assets/videoImage.png";
import CommonButton from "@/components/common/CommonButton";

const VideoServiceData = [
  {
    id: 0,
    icon: <VideoIcon />,
    heading: "Pro Voice Artists",
    desCription: "Choose your perfect voice (male/female, tone, style) ",
  },
  {
    id: 1,
    icon: <VideoIcon />,
    heading: "Keyword Research",
    desCription:
      "Find the best-performing keywords for your niche to help your videos rank higher.",
  },
];

export default function HomeVoiceOverService() {
  return (
    <section className="py-[140px] bg-[#F6F6F6]">
      <Container>
        <div className="flex flex-col gap-6 justify-center items-center">
          <CommonHeading text="YouTube Video Voiceover Services" />
          <div className="max-w-[630px]">
            <CommonSubHeading text="High-quality voiceovers in multiple languages – fast, professional, and ready for YouTube" />
          </div>
        </div>

        <div className="my-[48px] mx-12 grid grid-cols-3 gap-10">
          <div className="flex flex-col gap-10">
            {VideoServiceData.map((item) => (
              <div key={item.id} className="p-[32px] w-max customBgForKey">
                <div className="flex justify-center items-center mb-8">
                  {item.icon}
                </div>
                <div className="flex flex-col gap-4 items-center justify-center">
                  <h2 className="text-[#1C1D20] text-2xl font-semibold">
                    {item.heading}
                  </h2>
                  <p className="text-[#262629] text-[16px] leading-6 max-w-[301px] text-center">
                    {item.desCription}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="w-full  rounded-3xl overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src={VideoImage}
              alt="Not Found"
            />
          </div>
          <div className="flex flex-col gap-10">
            {VideoServiceData.map((item) => (
              <div key={item.id} className="p-[32px] w-max customBgForKey">
                <div className="flex justify-center items-center mb-8">
                  {item.icon}
                </div>
                <div className="flex flex-col gap-4 items-center justify-center">
                  <h2 className="text-[#1C1D20] text-2xl font-semibold">
                    {item.heading}
                  </h2>
                  <p className="text-[#262629] text-[16px] leading-6 max-w-[301px] text-center">
                    {item.desCription}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-[456px] mx-auto flex flex-col items-center gap-6">
          <h3 className="text-[#0B0B0B] text-2xl font-medium text-center ">
            Ready to bring your video to life with a professional voiceover?
          </h3>
          <CommonButton text="Get Started" />
        </div>
      </Container>
    </section>
  );
}
