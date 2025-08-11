import Container from "@/components/common/Container";
import YTCVoiceImage from "@/assets/YTCVoiceImage.png";

const YTStartSeoData = [
  {
    id: 0,
    text: "We provide professional voiceover artists who are native speakers in various languages to ensure natural tone, pronunciation, and cultural relevance.",
  },
  {
    id: 1,
    text: "Receive your high-quality voiceovers within 24–48 hours.",
  },
  {
    id: 2,
    text: "Receive your high-quality voiceovers within 24–48 hours.",
  },
];

export default function YTCSVoice() {
  return (
    <section className="py-[130px] bg-[#F6F6F6]">
      <Container>
        <div className="flex justify-between items-center">
          <div className="w-[531px] h-[250px]">
            <img
              className="w-full h-full object-cover"
              src={YTCVoiceImage}
              alt="not found"
            />
          </div>
          <div className="flex flex-col gap-8">
            <div className="max-w-[731px] flex flex-col gap-4">
              <div>
                <h2 className="text-[#1C1D20] text-[32px] font-semibold leading-[48px]">
                  Professional
                  <span className="text-[#E52621]">Voiceovers</span>
                </h2>
                <h2 className="text-[#1C1D20] text-[32px] font-semibold leading-[48px]">
                  Tailored for
                  <span className="text-[#E52621]">YTstart</span>
                </h2>
              </div>
              <p className="text-[#798090] text-[16px] leading-[26px]">
                Narration that captivates. Our voiceover team brings your videos to life with high-quality sound, native-language options, and script assistance.
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
        </div>
      </Container>
    </section>
  );
}
