import CommonHeading from "../common/CommonHeading";
import Container from "../common/Container";

const HowWorksData = [
  {
    id: 0,
    icon: "",
    heading: "Grow Your Channel",
    subText: "We build your channel to monetization-ready standards.",
  },
  {
    id: 1,
    icon: "",
    heading: "Not Satisfied?",
    subText: "If your channel doesn't meet agreed metrics within 24 months...",
  },
  {
    id: 2,
    icon: "",
    heading: "We Buy It Back",
    subText:
      "Get a full/partial refund or sell it back to us at a guaranteed price.",
  },
];

export default function BBGHowITWorks() {
  return (
    <section className="py-[120px] bg-[#F6F6F6]">
      <Container>
        <div>
          <div className="flex justify-center items-center">
            <CommonHeading text="How It works" />
          </div>
          <div className="mt-12 grid grid-cols-3 gap-10 items-center">
            {HowWorksData.map((item) => (
              <div
                key={item.id}
                className="p-10 bg-white rounded-3xl flex justify-center items-center flex-col"
              >
                <div className="p-[10px] bg-[#E52621] rounded-[8px] w-max flex justify-center items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="36"
                    height="35"
                    viewBox="0 0 36 35"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_15932_652)">
                      <mask
                        id="mask0_15932_652"
                        maskUnits="userSpaceOnUse"
                        x="0"
                        y="0"
                        width="36"
                        height="35"
                      >
                        <path
                          d="M0.769531 0.409607H35.2311V34.8711H0.769531V0.409607Z"
                          fill="white"
                        />
                      </mask>
                      <g mask="url(#mask0_15932_652)">
                        <path
                          d="M23.7442 9.02502L27.0324 12.3132L20.0252 19.3204L14.2816 13.5768L3.6416 24.2312L5.66622 26.2558L14.2816 17.6404L20.0252 23.384L29.0713 14.3522L32.3596 17.6404V9.02502H23.7442Z"
                          fill="white"
                        />
                      </g>
                    </g>
                    <defs>
                      <clipPath id="clip0_15932_652">
                        <rect
                          width="34.4615"
                          height="34.4615"
                          fill="white"
                          transform="translate(0.769531 0.40979)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </div>

                <div className="mt-[33px]">
                  <h3 className="text-[#000] text-[20px] text-center font-semibold leading-6">
                    {item.heading}
                  </h3>
                  <p className="max-w-[234px] text-center text-[#5B6477] text-[14px] leading-[21px] mt-3">
                    {item.subText}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
