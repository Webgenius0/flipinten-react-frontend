import SearchSvg from "@/components/SVG/DashboardIcons/SearchSvg";
import YoutubeSvg from "@/components/SVG/DashboardIcons/YoutubeSvg";
import React from "react";
import VoiceSvg from "./../../SVG/DashboardIcons/VoiceSvg";
import PlaySvg from "@/components/SVG/DashboardIcons/PlaySvg";

// recent activity sample data
const activity = [
  {
    title: "Video uploaded",
    subtitle: "How to Start YouTube Channel",
    status: "Completed",
    time: "2 hours ago",
  },
  {
    title: "SEO optimization",
    subtitle: "Best Gaming Setup 2024",
    status: "in-progress",
    time: "5 hours ago",
  },
  {
    title: "Voiceover completed",
    subtitle: "How to Start YouTube Channel",
    status: "Completed",
    time: "1 day ago",
  },
  {
    title: "Video uploaded",
    subtitle: "How to Start YouTube Channel",
    status: "Active",
    time: "2 days ago",
  },
];

// quick actions
const actions = [
  {
    title: "YTC Plans",
    icon: <YoutubeSvg />,
    bgColor: "#EFF6FF",
    subColor: "#DAEAFF",
    color: "#2563EB",
  },
  {
    title: "SEO Service",
    icon: <SearchSvg />,
    bgColor: "#F0FDF4",
    subColor: "#D7F8E3",
    color: "#16A34A",
  },
  {
    title: "Voiceover",
    icon: <VoiceSvg />,
    bgColor: "#FAF5FF",
    subColor: "#F1E3FF",
    color: "#9333EA",
  },
  {
    title: "Buy Videos",
    icon: <PlaySvg />,
    bgColor: "#FEFCE8",
    subColor: "#F2EDC2",
    color: "#CA8A04",
  },
];

export default function BottomOvervirewContent() {
  const complete = "text-[#16A34A] bg-[#16A34A]/15";
  const active = "text-[#418DFF] bg-[#418DFF]/15";
  const progress = "text-[#F39D39] bg-[#F39D39]/15";

  return (
    <div className=" grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Recent Activity section */}
      <div className="bg-white rounded-3xl p-8 h-full">
        <h5 className="text-[32px] font-semibold leading-[38px]">
          Recent Activity
        </h5>

        <div className="space-y-4 mt-6">
          {activity?.map((task, idx) => (
            <div
              key={idx}
              className="bg-[#FAFAFA] p-5 rounded-xl flex items-center justify-between"
            >
              <div className="flex items-center gap-6">
                <p className="bg-[#2FA75F] w-5 h-5 rounded-full"></p>

                <div className="space-y-2">
                  <p className="text-2xl font-semibold leading-7 text-[#1C1D20]">
                    {task?.title}
                  </p>
                  <p className="text-xl font-medium leading-[30px] text-[#6A7283]">
                    {task?.subtitle}
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                <p
                  className={`py-2 px-4 rounded-full text-lg font-medium leading-[27px] w-[130px] text-center text-nowrap ${
                    task?.status?.toLowerCase() == "completed"
                      ? complete
                      : `${
                          task?.status?.toLowerCase() == "active"
                            ? active
                            : progress
                        }`
                  }`}
                >
                  {task?.status}
                </p>
                <p className="text-lg leading-[27px] text-[#121117]">
                  {task?.time}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* quick actions */}
      <div className="bg-white rounded-3xl p-8 h-full">
        <h5 className="text-[32px] font-semibold leading-[38px]">
          Quick Actions
        </h5>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {actions?.map((action, idx) => (
            <div
              key={idx}
              className={`p-8 rounded-3xl flex flex-col items-center justify-center gap-6 hover:scale-105 duration-300 ease-in-out`}
              style={{ backgroundColor: `${action?.bgColor}` }}
            >
              <div
                className="w-fit p-6 rounded-[18px]"
                style={{ backgroundColor: `${action?.subColor}` }}
              >
                <p className="w-8 h-8">{action?.icon}</p>
              </div>

              <p
                className="text-2xl font-semibold leading-9"
                style={{ color: `${action?.color}` }}
              >
                {action?.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
