import Container from "@/components/common/Container";
import CommonHeading from "@/components/common/CommonHeading";
import CommonSubHeading from "@/components/common/CommonSubHeading";
import YTCPlanCard from "@/components/common/YTCPlanCard";

const YTCPlanData = [
    {
        id: 0,
        planName: 'Lifetime Plan',
        planDes: 'This plan is perfect for creators or businesses who need professional yet budget-friendly video',
        price: 'RS 200',
        feature: [
            'Up to 10 minutes',
            'Basic editing, text, background music',
            'Tutorials, reviews, explainer videos',
            'Clean cuts, transitions, and visual flow',
            'Competitive for content creators',
            '24/7 Premium Support'
        ],
        whichPlan: 'Buy Lifetime Plan'
    },
    {
        id: 1,
        planName: 'Monthly Subscription',
        planDes: 'This plan is perfect for creators or businesses who need professional yet budget-friendly video',
        price: 'RS 200',
        feature: [
            'Up to 10 minutes',
            'Basic editing, text, background music',
            'Tutorials, reviews, explainer videos',
            'Clean cuts, transitions, and visual flow',
            'Competitive for content creators',
            '24/7 Premium Support'
        ],
        whichPlan: 'Subscribe Monthly'
    },
    {
        id: 2,
        planName: 'Yearly Subscription',
        planDes: 'This plan is perfect for creators or businesses who need professional yet budget-friendly video',
        price: 'RS 200',
        feature: [
            'Up to 10 minutes',
            'Basic editing, text, background music',
            'Tutorials, reviews, explainer videos',
            'Clean cuts, transitions, and visual flow',
            'Competitive for content creators',
            '24/7 Premium Support'
        ],
        whichPlan: 'Subscribe Yearly'
    },
]

export default function YTCPricePlan() {
  return (
    <section className="py-[120px] bg-[#F6F6F6]">
      <Container>
        <div className="max-w-[650px] mx-auto text-center flex flex-col items-center justify-center gap-3">
          <CommonHeading text="Get the Right Plan for Your Channel" />
          <div className="max-w-[450px]">
            <CommonSubHeading text="Whether you're just starting or scaling up, our video plans help you grow faster and smarter." />
          </div>
        </div>

        <div className="mt-[64px] grid grid-cols-3 gap-[44px]">
            {YTCPlanData.map((plan)=>(
                <YTCPlanCard key={plan.id} plan={plan} />
            ))}
        </div>
      </Container>
    </section>
  );
}
