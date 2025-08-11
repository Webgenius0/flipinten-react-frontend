import Container from "@/components/common/Container";
import CommonHeading from "@/components/common/CommonHeading";
import CommonSubHeading from "@/components/common/CommonSubHeading";
import YTCPlanCard from "@/components/common/YTCPlanCard";

const YTCPlanData = [
  {
    id: 0,
    planName: "Standard Video",
    planDes:
      "This plan is perfect for creators or businesses who need professional yet budget-friendly video",
    price: "RS 200",
    feature: [
      "Up to 10 minutes",
      "Basic editing, text, background music",
      "Tutorials, reviews, explainer videos",
      "Clean cuts, transitions, and visual flow",
      "Competitive for content creators",
      "24/7 Premium Support",
    ],
    whichPlan: "Select Plan",
  },
  {
    id: 1,
    planName: "Custom Video",
    planDes:
      "This plan is perfect for creators or businesses who need professional yet budget-friendly video",
    price: "RS 200",
    feature: [
      "Up to 10 minutes",
      "Basic editing, text, background music",
      "Tutorials, reviews, explainer videos",
      "Clean cuts, transitions, and visual flow",
      "Competitive for content creators",
      "24/7 Premium Support",
    ],
    whichPlan: "Select Plan",
  },
  {
    id: 2,
    planName: "YouTube Shorts",
    planDes:
      "This plan is perfect for creators or businesses who need professional yet budget-friendly video",
    price: "RS 200",
    feature: [
      "Up to 10 minutes",
      "Basic editing, text, background music",
      "Tutorials, reviews, explainer videos",
      "Clean cuts, transitions, and visual flow",
      "Competitive for content creators",
      "24/7 Premium Support",
    ],
    whichPlan: "Select Plan",
  },
];

export default function YTCVideoPlanOverview() {
  return (
    <section className="py-[120px] bg-[#F6F6F6]">
      <Container>
        <div className="max-w-[650px] mx-auto text-center flex flex-col items-center justify-center gap-3">
          <CommonHeading text="Video Plans Overview" />
          <div className="max-w-[312px]">
            <CommonSubHeading text="High-quality videos tailored for your content needs" />
          </div>
        </div>

        <div className="mt-[64px] grid grid-cols-3 gap-[44px]">
          {YTCPlanData.map((plan) => (
            <YTCPlanCard key={plan.id} plan={plan} />
          ))}
        </div>
      </Container>
    </section>
  );
}
