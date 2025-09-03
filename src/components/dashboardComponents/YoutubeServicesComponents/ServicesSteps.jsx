import React, { useState } from "react";
import LifetimeStarterStep from "./LifetimeStarterStep";
import LifetimeWealthStep from "./LifetimeWealthStep";
import YoutubeVideosStep from "./YoutubeVideosStep";
import SeoServiceStep from "./SeoServiceStep";
import ReferralsStep from "./ReferralsStep";

// sample steps
const stepValue = [
  {
    id: 1,
    title: "My Lifetime Starter",
    value: 1,
  },
  {
    id: 2,
    title: "MY Lifetime Wealth",
    value: 2,
  },
  {
    id: 3,
    title: "My YouTube Videos",
    value: 3,
  },
  {
    id: 4,
    title: "My YT SEO Services",
    value: 4,
  },
  {
    id: 5,
    title: "My Referrals",
    value: 5,
  },
];

export default function ServicesSteps() {
  const [step, setStep] = useState(1);
  return (
    <div className="w-full">
      {/* steps */}
      <div className="bg-white p-3 rounded-xl w-full flex items-center mb-6">
        {stepValue?.map((value, idx) => (
          <button
            key={idx}
            onClick={() => setStep(value?.value)}
            type="button"
            className={`py-4 px-6 rounded-[8px] w-full text-[#798090] text-lg font-medium  leading-[27px] cursor-pointer ${
              value?.value == step && "bg-[#E52621] text-white"
            }`}
          >
            {value?.title}
          </button>
        ))}
      </div>

      <div className="w-full">

        {
          step === 1 ? <LifetimeStarterStep/> : (
            step == 2 ? <LifetimeWealthStep/> : (
              step == 3 ? <YoutubeVideosStep/> : (
                step == 4 ? <SeoServiceStep/> : <ReferralsStep/>
              )
            )
          )
        }

      </div>
    </div>
  );
}
