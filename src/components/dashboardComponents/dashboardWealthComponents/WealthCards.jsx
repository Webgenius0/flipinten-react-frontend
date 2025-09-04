import PricingCard from "@/components/common/PricingCard";
import WarningSvg from "@/components/SVG/DashboardIcons/WarningSvg";
import React, { useState } from "react";
import WealthCardsForm from "./WealthCardsForm";

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

export default function WealthCards() {
  // To make the pricing tabg active
  const [selectedPlan] = useState(pricingData[1]?.name);

  const [formOpen, setFormOpen] = useState(false);

  return (
    <div>
      {formOpen ? (
        <WealthCardsForm />
      ) : (
        <div>
          <div className="p-4 rounded-xl bg-[#FEFCE8] flex items-center gap-4">
            <p className="w-10 h-10">
              <WarningSvg fill={"#CA8A04"} />
            </p>
            <p className="text-[#CA8A04]">
              Before completing your monthly subscription payment, we’d like to
              understand your goals and expectations. This quick conversation
              helps us tailor the service to your needs and ensures a smooth,
              secure transaction. Please fill out the form to get started.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mt-[48px]">
            {pricingData
              ?.find((plan) => plan?.name === selectedPlan)
              ?.details.map((plan) => (
                <PricingCard
                  key={plan?.id}
                  plan={plan}
                  formOpen={formOpen}
                  setFormOpen={setFormOpen}
                  isDash={true}
                />
              ))}
          </div>

          <div className="mt-12 flex items-end justify-end">
            <div className="w-2/5 p-4 rounded-xl bg-[#FEFCE8] flex items-center justify-center gap-4">
              <p className="w-10 h-10">
                <WarningSvg fill={"#CA8A04"} />
              </p>
              <p className="text-[#CA8A04]">
                All prices exclude taxes. <span className="font-bold">18% GST</span> applicable at checkout. Setup
                time is 5-7 working days for all Wealth plans. Earnings
                forecasts shown are after profit split with YTStart. Content
                Type: <span className="font-bold">AI Model</span>. Buyback Guarantee: <span className="font-bold">15 Months for all Wealth
                Plans @ Double Price.</span>
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
