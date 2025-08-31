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
          "3-4 (4-5 mins)",
          "2-3 (25-30 secs)",
          "Faceless / AI",
          "Weekly Update",
          "50-50",
          "2 × in 24 Months",
          "₹8K - ₹20K",
          "6-9 months",
        ],
      },
      {
        id: crypto.randomUUID(),
        title: "Starter Plus",
        price: "₹2,00,000",
        features: [
          "Stories, Religious, Book Summaries",
          "3 Days",
          "6 Months",
          "3-4 (4-5 mins)",
          "2-3 (25-30 secs)",
          "Faceless / AI",
          "Weekly Update",
          "50-50",
          "2 × in 24 Months",
          "₹8K - ₹20K",
          "6-9 months",
        ],
      },
      {
        id: crypto.randomUUID(),
        title: "Starter Pro",
        price: "₹3,00,000",
        features: [
          "Reviews,Motivation, Study Tips",
          "3 Days",
          "6 Months",
          "3-4 (4-5 mins)",
          "2-3 (25-30 secs)",
          "Faceless / AI",
          "Weekly Update",
          "50-50",
          "2 × in 24 Months",
          "₹8K - ₹20K",
          "6-9 months",
        ],
      },
      {
        id: crypto.randomUUID(),
        title: "Starter Elite",
        price: "₹4,00,000",
        features: [
          "History, General Education, Career Advice",
          "3 Days",
          "6 Months",
          "3-4 (4-5 mins)",
          "2-3 (25-30 secs)",
          "Faceless / AI",
          "Weekly Update",
          "50-50",
          "2 × in 24 Months",
          "₹8K - ₹20K",
          "6-9 months",
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
        title: "Wealth Basic",
        price: "₹2,00,000",
        features: [
          "History, General Education, Career Advice",
          "3 Days",
          "6 Months",
          "3-4 (4-5 mins)",
          "2-3 (25-30 secs)",
          "Faceless / AI",
          "Weekly Update",
          "50-50",
          "2 × in 24 Months",
          "₹8K - ₹20K",
          "6-9 months",
        ],
      },
      {
        id: crypto.randomUUID(),
        title: "Wealth Plus",
        price: "₹3,00,000",
        features: [
          "History, General Education, Career Advice",
          "3 Days",
          "6 Months",
          "3-4 (4-5 mins)",
          "2-3 (25-30 secs)",
          "Faceless / AI",
          "Weekly Update",
          "50-50",
          "2 × in 24 Months",
          "₹8K - ₹20K",
          "6-9 months",
        ],
      },
      {
        id: crypto.randomUUID(),
        title: "Wealth Pro",
        price: "₹4,00,000",
        features: [
          "History, General Education, Career Advice",
          "3 Days",
          "6 Months",
          "3-4 (4-5 mins)",
          "2-3 (25-30 secs)",
          "Faceless / AI",
          "Weekly Update",
          "50-50",
          "2 × in 24 Months",
          "₹8K - ₹20K",
          "6-9 months",
        ],
      },
      {
        id: crypto.randomUUID(),
        title: "Wealth Pro",
        price: "₹4,00,000",
        features: [
          "History, General Education, Career Advice",
          "3 Days",
          "6 Months",
          "3-4 (4-5 mins)",
          "2-3 (25-30 secs)",
          "Faceless / AI",
          "Weekly Update",
          "50-50",
          "2 × in 24 Months",
          "₹8K - ₹20K",
          "6-9 months",
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
