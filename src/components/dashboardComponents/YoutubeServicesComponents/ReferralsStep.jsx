import CopySvg from "@/components/SVG/DashboardIcons/CopySvg";
import ShareSvg from "@/components/SVG/DashboardIcons/ShareSvg";
import React, { useState } from "react";
import ThreePeopleSvg from "./../../SVG/DashboardIcons/ThreePeopleSvg";
import WrittenPlanSvg from "@/components/SVG/DashboardIcons/WrittenPlanSvg";
import CalendarEventSvg from "@/components/SVG/DashboardIcons/CalendarEventSvg";
import DollarSvg from "@/components/SVG/DashboardIcons/DollarSvg";
import BankWithdrawal from "./ReferralContents/BankWithdrawal";
import UpiWithdrawal from "./ReferralContents/UpiWithdrawal";

const info = [
  {
    id: 1,
    title: "Total Referred Users",
    value: "26",
    icon: <ThreePeopleSvg />,
    color: "#EFF6FF",
  },
  {
    id: 2,
    title: "Total Plans Bought",
    value: "15",
    icon: <WrittenPlanSvg />,
    color: "#E0FFEA",
  },
  {
    id: 1,
    title: "Total Commission Paid",
    value: "$2600",
    icon: <DollarSvg fill={"#9333EA"} />,
    color: "#FAF5FF",
  },
  {
    id: 1,
    title: "Commission Pending",
    value: "$100",
    icon: <DollarSvg fill={"#CA8A04"} />,
    color: "#FEFCE8",
  },
  {
    id: 1,
    title: "Next Payment Date",
    value: "31/09/2025",
    icon: <CalendarEventSvg />,
    color: "#FAF5FF",
  },
];

export default function ReferralsStep() {

  const [tab, setTab] = useState(1);
  return (
    <div>
      <div className="my-8">
        <p className="text-lg text-text">Your Referral Link</p>

        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="py-3 px-6 rounded-[8px] bg-[#DFE0E4] ">
              <p className="text-lg text-text">
                https ://ytc.com/ref/your-unique - 1z26adf
              </p>
            </div>

            <button className="py-3 px-6 rounded-[8px] bg-primary-green text-white text-lg font-medium flex items-center gap-2 cursor-pointer hover:bg-green-700 duration-300">
              <p className="w-6 h-6">
                <CopySvg />{" "}
              </p>
              <span>Copy</span>
            </button>
          </div>

          <button className="py-3 px-6 rounded-[8px] bg-primary-green text-white text-lg font-medium flex items-center gap-2 cursor-pointer hover:bg-green-700 duration-300">
            <p className="w-6 h-6">
              <ShareSvg />{" "}
            </p>
            <span>Share Referral Link</span>
          </button>
        </div>
      </div>

      {/* cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {info?.map((data, idx) => (
          <div
            key={idx}
            className="bg-white p-8 rounded-3xl w-full flex items-center justify-between"
          >
            <div className="flex flex-col gap-6">
              <p className="text-lg font-medium text-[#798090]">
                {data?.title}
              </p>
              <h6 className="text-[32px] leading-[39px] font-semibold text-[#1C1D20]">
                {data?.value}
              </h6>
            </div>

            <div
              className={`p-6 rounded-2xl w-fit flex items-center justify-center`}
              style={{ backgroundColor: `${data?.color}` }}
            >
              <p className="w-[30px] h-[30px]">{data?.icon}</p>
            </div>
          </div>
        ))}
      </div>

      {/* form tabs */}
      <div className="my-6 p-10 rounded-xl bg-white ">
        <div className="flex items-center justify-between">
          <h4 className="text-[32px] font-semibold leading-[38px] text-text">
            Withdrawal Request
          </h4>


          {/* tabs */}
          <div className="w-fit p-3 rounded-[8px] bg-[#FAFAFB] border border-[#C1C4CC] flex items-center gap-5">
            <button type="button" onClick={() => setTab(1)} className={`w-[140px] py-3 px-4 text-center bg-[#EBECEF] text-lg font-medium text-text rounded-[8px] cursor-pointer ${tab == 1 && "bg-primary-red text-white"}`}>
             Bank
            </button>
            <button type="button" onClick={() => setTab(2)} className={`w-[140px] py-3 px-4 text-center bg-[#EBECEF] text-lg font-medium text-text rounded-[8px] cursor-pointer ${tab == 2 && "bg-primary-red text-white"}`}>
             Upi
            </button>

          </div>
        </div>


        {/* tab contents */}
        <div className="mt-4">
          {
            tab == 1 ? <BankWithdrawal/> : <UpiWithdrawal/>
          }
        </div>
      </div>
    </div>
  );
}
