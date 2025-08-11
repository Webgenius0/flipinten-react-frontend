import Container from "@/components/common/Container";
import CommonButton from "../common/CommonButton";

const YouTubeCardData = [
  {
    id: 0,
    videoLink: "https://www.youtube.com/embed/GAEnQGT7J-M?si=p0QJYzGSE6pYILYw",
    heading: "YTstart SEO Services",
    subHeading:
      "We optimize your videos to rank higher and reach more viewers. Our SEO service includes:",
    feature: [
      "Keyword Research for Titles, Tags, and Descriptions",
      "Optimized Video Titles & Thumbnails",
      "Engagement Strategy (Hashtags, Playlists, End Screens)",
      "Channel Optimization (About Page, Banner, Links)",
    ],
  },
  {
    id: 1,
    videoLink: "https://www.youtube.com/embed/h7CSXI7MTBI?si=x_HuXFCer062Z2JO",
    heading: "YTstart Voiceover Services",
    subHeading:
      "Professional voiceovers in multiple languages to make your videos engaging and global.",
    feature: [
      "Male/Female Voice Artists",
      "English, Hindi, Spanish, Bengali & More",
      "Background Music Option",
      "Delivered in 24–48 Hours",
      "Script Writing & Editing Included",
    ],
  },
];

export default function YTCServiceCardHolder() {
  return (
    <section className="py-[140px] bg-[#F6F6F6]">
      <Container>
        <div className="grid grid-cols-2 gap-[48px] mx-12">
          {YouTubeCardData.map((card) => (
            <div
              key={card.id}
              className="p-[48px] bg-white rounded-[32px] flex flex-col"
            >
              <div className=" w-full h-[340px] bg-red-300 rounded-[18px] overflow-hidden">
                <iframe
                  width="100%"
                  height="100%"
                  src={card.videoLink}
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                ></iframe>
              </div>

              <div className="flex flex-col gap-4 mt-[44px] max-w-[408px]">
                <h3 className="text-[#1C1D20] text-[32px] leading-[38px] font-semibold">
                  {card.heading}
                </h3>
                <p className="text-[#798090] text-[16px] leading-6">
                  {card.subHeading}
                </p>
              </div>

              <div className="mt-[44px] flex flex-col gap-[44px]">
                <ul className="flex flex-col gap-3">
                  {card.feature.map((item, index) => (
                    <li
                      key={index}
                      className="list-disc text-[#1C1D20] text-[16px] font-medium leading-6"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
                <CommonButton text="Get Started" />
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
