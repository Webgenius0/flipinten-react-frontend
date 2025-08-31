import { useState } from "react";
import CommonHeading from "@/components/common/CommonHeading";
import Container from "@/components/common/Container";
import PricingCard from "@/components/common/PricingCard";

// Pricing Dummy Data
const pricingData = [
  {
    name: "Lifetime Starter Plan",
    details: [
      {
        id: crypto.randomUUID(),
        title: "Features",
        notAnItem: true,
        features: [
          "Targeted Niches",
          "Setup Time",
          "Monetization Timeline",
          "Long Videos / Month",
          "Shorts / Month",
          "Content Type",
          "Support",
          "Profit Split",
          "Buyback Guarantee",
          "Client Earnings (Monthly)",
          "Time to Achieve Earnings",
        ],
      },
      {
        id: crypto.randomUUID(),
        title: "Starter Basic",
        price: "₹1,00,000",
        features: [
          "Entertainment, Kids Animation, Pet Specific",
          "3 Days",
          "6 Months",
          "3–4 (4–5 min)",
          "2–3 (25–30s)",
          "Faceless / AI",
          "Weekly Update",
          "50–50",
          "2× in 24M",
          "₹8K – ₹20K",
          "6–9 mo",
        ],
      },
      {
        id: crypto.randomUUID(),
        title: "Starter Plus",
        price: "₹2,00,000",
        features: [
          "Stories, Religious, Book Summaries",
          "3 Days",
          "5 Months",
          "5–6 (5–6 min)",
          "4–5 (30–35s)",
          "Faceless / AI",
          "Weekly Update",
          "50–50",
          "2× in 18M",
          "₹15K – ₹35K",
          "6–8 mo",
        ],
      },
      {
        id: crypto.randomUUID(),
        title: "Starter Pro",
        price: "₹3,50,000",
        features: [
          "Reviews, Motivation, Study Tips",
          "4 Days",
          "4–5 Months",
          "7–8 (6–7 min)",
          "6–7 (35–40s)",
          "Advanced AI Editing",
          "Weekly Review",
          "50–50",
          "2× in 15M",
          "₹25K – ₹60K",
          "5–7 mo",
        ],
      },
      {
        id: crypto.randomUUID(),
        title: "Starter Elite",
        price: "₹5,00,000",
        features: [
          "History, General Education, Career Advice",
          "5 Days",
          "4 Months",
          "9–10 (7–8 min)",
          "7–8 (40–45s)",
          "Premium Cinematic Edits",
          "Dedicated Manager",
          "50–50",
          "2× in 15M",
          "₹40K – ₹90K",
          "5–6 mo",
        ],
      },
    ],
  },
  {
    name: "Lifetime Wealth Plan",
    details: [
      {
        id: crypto.randomUUID(),
        title: "Features",
        notAnItem: true,
        features: [
          "Targeted Niches",
          "Long Video Length",
          "Shorts Length",
          "Monthly Output",
          "Timeline to Monetization",
          "Total till Monetization",
          "Client Earnings (Monthly)",
          "Time to Achieve Earnings",
        ],
      },
      {
        id: crypto.randomUUID(),
        title: "Wealth Prime",
        price: "₹7,00,000",
        features: [
          "Tech Reviews, Business Case Studies, AI News",
          "8–9 min",
          "40–50 sec",
          "8–10 Long / 7–8 Shorts",
          "3–4 mo",
          "24–30 Long + 21–24 Shorts",
          "₹60K – ₹1.5L",
          "4–6 mo",
        ],
      },
      {
        id: crypto.randomUUID(),
        title: "Wealth Prestige",
        price: "₹10,00,000",
        features: [
          "Current Affairs, Entrepreneurship, Skill Training",
          "9–10 min",
          "45–55 sec",
          "10–12 Long / 8–10 Shorts",
          "3–4 mo",
          "30–36 Long + 24–30 Shorts",
          "₹1L – ₹2.5L",
          "4–6 mo",
        ],
      },
      {
        id: crypto.randomUUID(),
        title: "Wealth Empire",
        price: "₹15,00,000",
        features: [
          "Finance, Crypto Insurance, Startup Documentaries",
          "10–11 min",
          "50–60 sec",
          "12–14 Long / 10–12 Shorts",
          "3 mo",
          "36–42 Long + 30–35 Shorts",
          "₹1.5L – ₹3.5L",
          "3–5 mo",
        ],
      },
      {
        id: crypto.randomUUID(),
        title: "Wealth Alpha",
        price: "₹20,00,000",
        features: [
          "Wealth Mgmt, Global Finance, Crime Docs, Premium History",
          "12–15 min",
          "60–75 sec",
          "14–16 Long / 12–14 Shorts",
          "3 mo (Priority)",
          "42–48 Long + 36–40 Shorts",
          "₹2L – ₹5L",
          "3–5 mo",
        ],
      },
    ],
  },
];

export default function HomePricing() {
  // To make the pricing tabg active
  const [selectedPlan, setSelectedPlan] = useState(pricingData[0]?.name);

  return (
    <section className="py-[140px] bg-[#F6F6F6]">
      <Container>
        <div className="text-center">
          <CommonHeading text="Start Your YouTube Empire with Confidence" />

          <p className="mt-6 text-[#6A7283] text-[18px] leading-[27px] max-w-60/100 mx-auto">
            Four one‑time plans to take you from zero to monetized—fast. Clear
            deliverables, weekly updates, and buyback protection.
          </p>
        </div>

        {/* Plan Type Tabs */}
        <div className="mt-[48px] flex items-center justify-center gap-[16px]">
          {pricingData?.map((item, key) => (
            <div
              key={key}
              onClick={() => setSelectedPlan(item?.name)}
              className={`py-[12px] px-[24px] rounded-[8px] bg-white w-max text-[#5B6477] text-2xl font-medium cursor-pointer ${
                selectedPlan === item?.name ? "customClass" : ""
              }`}
            >
              <span>{item?.name}</span>
            </div>
          ))}
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mt-[48px]">
          {pricingData
            ?.find((plan) => plan?.name === selectedPlan)
            ?.details.map((plan) => (
              <PricingCard key={plan?.id} plan={plan} />
            ))}
        </div>
      </Container>
    </section>
  );
}
