import CalenderSvg from "@/components/SVG/DashboardIcons/CalenderSvg";
import DollarSvg from "@/components/SVG/DashboardIcons/DollarSvg";
import React from "react";

// sample data

const info = [
  {
    id: 1,
    title: "Active Subscriptions",
    value: "27",
    icon: <CalenderSvg />,
    color: "#EFF6FF",
  },
  {
    id: 2,
    title: "Payment Due",
    value: "$2340",
    icon: <DollarSvg fill={"#16A34A"} />,
    color: "#E0FFEA",
  },
  {
    id: 1,
    title: "Profit Sharing Due",
    value: "$2340",
    icon: <DollarSvg fill={"#9333EA"} />,
    color: "#FAF5FF",
  },
  {
    id: 1,
    title: "Referral Commission",
    value: "$2340",
    icon: <DollarSvg fill={"#CA8A04"} />,
    color: "#FEFCE8",
  },
];

export default function TopOverviewCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {info?.map((data, idx) => (
        <div key={idx} className="bg-white p-8 rounded-3xl w-full flex items-center justify-between">
          <div className="flex flex-col gap-6">
            <p className="text-lg font-medium text-[#798090]">{data?.title}</p>
            <h6 className="text-[32px] leading-[39px] font-semibold text-[#1C1D20]">{data?.value}</h6>
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
  );
}
