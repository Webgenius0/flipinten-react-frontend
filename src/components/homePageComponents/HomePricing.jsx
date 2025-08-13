import { useState } from "react";
import CommonHeading from "@/components/common/CommonHeading";
import Container from "@/components/common/Container";
import PricingCard from "@/components/common/PricingCard";

const PlanData = [
  { id: 0, planName: "One Time Plan" },
  { id: 1, planName: "Recurring Plans" },
  { id: 2, planName: "Video Packages" }
];

 
const pricingData = {
  "One Time Plan": [
    {
      id: crypto.randomUUID(),
      title: "One Time Premium",
      setupTime: "Setup in 3 Working Days",
      billing: {
        monthly: {
          price: "Rs 50000",
          duration: "/one-time",
          highlighted: false
        },
        yearly: {
          price: "Rs 50000",
          duration: "/one-time",
          highlighted: false
        }
      },
      features: [
        "1 Month Support",
        "Video Strategy Session",
        "1 Video Delivered",
        "Custom Branding",
        "Buy Back Not Included"
      ]
    },
    {
      id: crypto.randomUUID(),
      title: "One Time Premium",
      setupTime: "Setup in 3 Working Days",
      billing: {
        monthly: {
          price: "Rs 50000",
          duration: "/one-time",
          highlighted: false
        },
        yearly: {
          price: "Rs 50000",
          duration: "/one-time",
          highlighted: false
        }
      },
      features: [
        "1 Month Support",
        "Video Strategy Session",
        "1 Video Delivered",
        "Custom Branding",
        "Buy Back Not Included"
      ]
    },
    {
      id: crypto.randomUUID(),
      title: "One Time Premium",
      setupTime: "Setup in 3 Working Days",
      billing: {
        monthly: {
          price: "Rs 50000",
          duration: "/one-time",
          highlighted: false
        },
        yearly: {
          price: "Rs 50000",
          duration: "/one-time",
          highlighted: false
        }
      },
      features: [
        "1 Month Support",
        "Video Strategy Session",
        "1 Video Delivered",
        "Custom Branding",
        "Buy Back Not Included"
      ]
    },
    {
      id: crypto.randomUUID(),
      title: "One Time Premium",
      setupTime: "Setup in 3 Working Days",
      billing: {
        monthly: {
          price: "Rs 50000",
          duration: "/one-time",
          highlighted: false
        },
        yearly: {
          price: "Rs 50000",
          duration: "/one-time",
          highlighted: false
        }
      },
      features: [
        "1 Month Support",
        "Video Strategy Session",
        "1 Video Delivered",
        "Custom Branding",
        "Buy Back Not Included"
      ]
    },
  ],
  "Recurring Plans": [
    {
      id: crypto.randomUUID(),
      title: "Life Time Premium",
      setupTime: "Setup in 3 Working Days",
      billing: {
        monthly: {
          price: "Rs 25000",
          duration: "/month",
          highlighted: false
        },
        yearly: {
          price: "Rs 270000",
          duration: "/year",
          highlighted: false,
          saveTag: "Save 10%"
        }
      },
      features: [
        "180 Days Monetization Guaranteed",
        "4 Videos Uploaded every Month",
        "3-4 Minute video length",
        "2 Shorts uploaded every month",
        "Faceless Videos",
        "Weekly Work Progress Updates",
        "7 Months Money Back Guarantee",
        "Buy Back Price Rs 60000",
        "Buy Back in 24 Months"
      ]
    },
    {
      id: crypto.randomUUID(),
      title: "Advanced Plan",
      setupTime: "Setup in 2 Working Days",
      billing: {
        monthly: {
          price: "Rs 35000",
          duration: "/month",
          highlighted: true
        },
        yearly: {
          price: "Rs 378000",
          duration: "/year",
          highlighted: true,
          saveTag: "Save 10%"
        }
      },
      features: [
        "240 Days Monetization Guaranteed",
        "6 Videos Uploaded every Month",
        "Long-form & Shorts Mix",
        "Custom Video Thumbnails",
        "Buy Back Option Included"
      ]
    },
    {
      id: crypto.randomUUID(),
      title: "Life Time Premium",
      setupTime: "Setup in 3 Working Days",
      billing: {
        monthly: {
          price: "Rs 25000",
          duration: "/month",
          highlighted: false
        },
        yearly: {
          price: "Rs 270000",
          duration: "/year",
          highlighted: false,
          saveTag: "Save 10%"
        }
      },
      features: [
        "180 Days Monetization Guaranteed",
        "4 Videos Uploaded every Month",
        "3-4 Minute video length",
        "2 Shorts uploaded every month",
        "Faceless Videos",
        "Weekly Work Progress Updates",
        "7 Months Money Back Guarantee",
        "Buy Back Price Rs 60000",
        "Buy Back in 24 Months"
      ]
    },
    {
      id: crypto.randomUUID(),
      title: "Advanced Plan",
      setupTime: "Setup in 2 Working Days",
      billing: {
        monthly: {
          price: "Rs 35000",
          duration: "/month",
          highlighted: true
        },
        yearly: {
          price: "Rs 378000",
          duration: "/year",
          highlighted: true,
          saveTag: "Save 10%"
        }
      },
      features: [
        "240 Days Monetization Guaranteed",
        "6 Videos Uploaded every Month",
        "Long-form & Shorts Mix",
        "Custom Video Thumbnails",
        "Buy Back Option Included"
      ]
    },
  ],
  "Video Packages": [
    {
      id: crypto.randomUUID(),
      title: "Starter Video Pack",
      setupTime: "Setup in 2 Days",
      billing: {
        monthly: {
          price: "Rs 15000",
          duration: "/month",
          highlighted: false
        },
        yearly: {
          price: "Rs 162000",
          duration: "/year",
          highlighted: false
        }
      },
      features: [
        "2 Videos per Month",
        "Basic Editing",
        "Royalty-free Music",
        "Weekly Progress Reports",
        "1 Revision per Video"
      ]
    },
    {
      id: crypto.randomUUID(),
      title: "Starter Video Pack",
      setupTime: "Setup in 2 Days",
      billing: {
        monthly: {
          price: "Rs 15000",
          duration: "/month",
          highlighted: false
        },
        yearly: {
          price: "Rs 162000",
          duration: "/year",
          highlighted: false
        }
      },
      features: [
        "2 Videos per Month",
        "Basic Editing",
        "Royalty-free Music",
        "Weekly Progress Reports",
        "1 Revision per Video"
      ]
    },
    {
      id: crypto.randomUUID(),
      title: "Starter Video Pack",
      setupTime: "Setup in 2 Days",
      billing: {
        monthly: {
          price: "Rs 15000",
          duration: "/month",
          highlighted: false
        },
        yearly: {
          price: "Rs 162000",
          duration: "/year",
          highlighted: false
        }
      },
      features: [
        "2 Videos per Month",
        "Basic Editing",
        "Royalty-free Music",
        "Weekly Progress Reports",
        "1 Revision per Video"
      ]
    },
    {
      id: crypto.randomUUID(),
      title: "Starter Video Pack",
      setupTime: "Setup in 2 Days",
      billing: {
        monthly: {
          price: "Rs 15000",
          duration: "/month",
          highlighted: false
        },
        yearly: {
          price: "Rs 162000",
          duration: "/year",
          highlighted: false
        }
      },
      features: [
        "2 Videos per Month",
        "Basic Editing",
        "Royalty-free Music",
        "Weekly Progress Reports",
        "1 Revision per Video"
      ]
    },
  ],
};

export default function HomePricing() {
  const [selectedPlan, setSelectedPlan] = useState("Recurring Plans");
  const [billingCycle, setBillingCycle] = useState("monthly");

  const handleChangePlan = (planName) => {
    setSelectedPlan(planName);
  };

  const handleMonthlyYearly = () => {
    setBillingCycle((prev) => (prev === "monthly" ? "yearly" : "monthly"));
  };

  return (
    <section className="py-[140px] bg-[#F6F6F6]">
      <Container>
        <div className="text-center">
          <CommonHeading text="Simple, transparent pricing" />
          <p className="mt-6 text-[#6A7283] text-[18px] leading-[27px]">
            No contracts. No surprise fees.
          </p>
        </div>

        {/* Plan Type Tabs */}
        <div className="mt-[48px] flex items-center justify-center gap-[16px]">
          {PlanData.map((item) => (
            <div
              key={item.id}
              onClick={() => handleChangePlan(item.planName)}
              className={`py-[12px] px-[24px] rounded-[8px] bg-white w-max text-[#5B6477] text-2xl font-medium cursor-pointer ${
                selectedPlan === item.planName ? "customClass" : ""
              }`}
            >
              <span>{item.planName}</span>
            </div>
          ))}
        </div>

        {/* Monthly/Yearly Toggle */}
        {selectedPlan === 'Recurring Plans' && (
          <div className="mt-[48px] flex justify-center items-center gap-4">
            <h3 className="text-2xl font-medium text-[#1C1D20]">Monthly</h3>
            <div
              onClick={handleMonthlyYearly}
              className={`cursor-pointer w-[80px] h-[35px] ease-linear duration-150 ${
                billingCycle === "monthly" ? "bg-customTwo" : "bg-[#E52621]"
              } rounded-[45px] relative`}
            >
              <div
                className={`h-[30px] w-[30px] rounded-full bg-white absolute ease-linear duration-150 top-[2px] ${
                  billingCycle === "monthly" ? "left-[3px]" : "right-[3px]"
                }`}
              ></div>
            </div>
            <h3 className="text-2xl font-medium text-[#1C1D20]">Yearly</h3>
            <div className="px-2 bg-[#E52621] py-1 w-max text-white text-[14px] leading-[21px] rounded-2xl">
              Save 10%
            </div>
          </div>
        )}

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-[48px]">
          {pricingData[selectedPlan]?.map((plan) => (
            <PricingCard key={plan.id} plan={plan} billingCycle={billingCycle} />
          ))}
        </div>
      </Container>
    </section>
  );
}
