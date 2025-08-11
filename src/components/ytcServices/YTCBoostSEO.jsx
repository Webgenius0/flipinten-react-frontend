import Container from "@/components/common/Container";
import YTCSeoImage from "@/assets/YtStartSeoImage.png"

const YTStartSeoData = [
  {
    id: 0,
    text: "We research high-traffic, low-competition keywords to ensure your video titles, tags, and descriptions align with what your target audience.",
  },
  {
    id: 1,
    text: "Custom-designed thumbnails that grab attention and increase click-through rates (CTR).",
  },
  {
    id: 2,
    text: "We write compelling descriptions that not only inform viewers but are rich in keywords to help with ranking.",
  },
  {
    id: 3,
    text: "Organized playlists improve viewer retention and watch time by guiding users through related videos.",
  },
  {
    id: 4,
    text: "Tactics designed to drive more likes, comments, shares, and subscriptions.",
  },
];

export default function YTCBoostSEO() {
  return (
    <section className="py-[130px]">
      <Container>
        <div className="flex justify-between items-center">
          <div className="flex flex-col gap-8">
            <div className="max-w-[731px] flex flex-col gap-4">
              <h2 className="text-[#1C1D20] text-[32px] font-semibold leading-[48px]">
                Boost Visibility with Smart
                <span className="text-[#E52621]">YTstart SEO</span>
              </h2>
              <p className="text-[#798090] text-[16px] leading-[26px]">
                Our SEO experts help you rank higher and attract more viewers.
                We research the best keywords, create SEO-friendly descriptions,
                and guide you on optimal posting strategies.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              {YTStartSeoData.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-[19px] items-center max-w-[688px]"
                >
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="25"
                      viewBox="0 0 24 25"
                      fill="none"
                    >
                      <path
                        d="M15 3.42618C14.053 3.12873 13.0452 2.96838 12 2.96838C6.47715 2.96838 2 7.44553 2 12.9684C2 18.4912 6.47715 22.9684 12 22.9684C17.5228 22.9684 22 18.4912 22 12.9684C22 11.9232 21.8396 10.9154 21.5422 9.96838"
                        stroke="#E52621"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                      <path
                        d="M8.5 10.4684L12 13.9684L21.0002 3.96838"
                        stroke="#E52621"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <p className="text-[#1C1D20] text-[16px] font-medium leading-[24px]">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="w-[550px] h-[456px]">
            <img className="w-full h-full object-cover" src={YTCSeoImage} alt="not found" />
          </div>
        </div>
      </Container>
    </section>
  );
}
