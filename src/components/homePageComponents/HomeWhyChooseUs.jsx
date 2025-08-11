import CommonHeading from "@/components/common/CommonHeading";
import Container from "@/components/common/Container";
import Icon from "@/assets/ChooseImage.png";

export default function HomeWhyChooseUs() {
  const chooseData = [
    {
      id: 0,
      icon: Icon,
      heading: "Proof and Quality",
      desCription:
        "Drive traffic with CTAs, capture leads with forms, and showcase products or testimonials. Promote events, build brand awareness, and turn videos into powerful profit centres.",
    },
    {
      id: 1,
      icon: Icon,
      heading: "No Cost Until You Hire",
      desCription:
        "Drive traffic with CTAs, capture leads with forms, and showcase products or testimonials. Promote events, build brand awareness, and turn videos into powerful profit centres.",
    },
    {
      id: 2,
      icon: Icon,
      heading: "Safe and Secure",
      desCription:
        "Drive traffic with CTAs, capture leads with forms, and showcase products or testimonials. Promote events, build brand awareness, and turn videos into powerful profit centres.",
    },
    {
      id: 3,
      icon: Icon,
      heading: "Post Job & Hire A Pro",
      desCription:
        "Drive traffic with CTAs, capture leads with forms, and showcase products or testimonials. Promote events, build brand awareness, and turn videos into powerful profit centres.",
    },
    {
      id: 4,
      icon: Icon,
      heading: "Bio to Find Jobs",
      desCription:
        "Drive traffic with CTAs, capture leads with forms, and showcase products or testimonials. Promote events, build brand awareness, and turn videos into powerful profit centres.",
    },
    {
      id: 5,
      icon: Icon,
      heading: "Top Rated",
      desCription:
        "Drive traffic with CTAs, capture leads with forms, and showcase products or testimonials. Promote events, build brand awareness, and turn videos into powerful profit centres.",
    },
  ];

  return (
    <section className="pb-[140px]">
      <Container>
        <div>
          <div className="text-center">
            <CommonHeading text="Why You Should Choose Us" />
            <p className="mt-6 text-[#6A7283] text-[18px] leading-[27px]">
              No contracts. No surprise fees.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-10 mt-12 px-10">
            {chooseData.map((item) => (
              <div
                key={item.id}
                className="p-8 border-b-2 border-b-[#E52621] rounded-2xl shadow-customTwo flex flex-col justify-center items-center text-center"
              >
                <div className="h-12 w-12">
                  <img
                    className="w-full h-full"
                    src={item.icon}
                    alt="not found"
                  />
                </div>
                <h4 className="mt-8 text-[#1C1D20] text-2xl font-semibold">
                  {item.heading}
                </h4>
                <p className="mt-4 text-[#262629] text-[16px] leading-[24px]">
                  {item.desCription}{" "}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
