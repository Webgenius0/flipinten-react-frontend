import CommonHeading from "../common/CommonHeading";
import Container from "../common/Container";
import DocumentIconSVG from "../SVG/DocumentIconSVG";
import GrowIconSVG from "../SVG/GrowIconSVG";
import ReloadIconSVG from "../SVG/ReloadIconSVG";

const HowWorksData = [
  {
    id: 0,
    icon: <GrowIconSVG />,
    heading: "Grow Your Channel",
    subText: "We build your channel to monetization-ready standards.",
  },
  {
    id: 1,
    icon: <ReloadIconSVG />,
    heading: "Not Satisfied?",
    subText: "If your channel doesn't meet agreed metrics within 24 months...",
  },
  {
    id: 2,
    icon: <DocumentIconSVG />,
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
                <div className="w-16 h-16 p-2.5 bg-[#E52621] rounded-[8px] flex justify-center items-center">
                  {item?.icon}
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
