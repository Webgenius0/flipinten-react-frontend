import React, { useState } from "react";
import WealthMonitizationChannelDetails from "./WealthMonitizationChannelDetails";
import LifetimeWealthChannelDetails from "./LifetimeWealthChannelDetails";

const channels = [
  {
    planName: "Starter Plus",
    channelId: "YTC001",
    channelName: "Horror Mania",
    createdOn: "10/05/2025",
    monetizationIn: "89 Days",
    action: "View Details",
  },
  {
    planName: "Starter Plus",
    channelId: "YTC001",
    channelName: "Horror Mania",
    createdOn: "10/05/2025",
    monetizationIn: "89 Days",
    action: "View Details",
  },
];

export default function LifetimeWealthContent() {
  const [channelDetails, setChannelDetails] = useState(false);
  return (
    <div className="w-full">
      {channelDetails ? (
        // <LifetimeWealthChannelDetails/>
        <WealthMonitizationChannelDetails/>
      ) : (
        <div className="w-full bg-white p-8 rounded-xl space-y-10">
          {channels?.map((info, idx) => (
            <div
              key={idx}
              className="text-lg text-[#1C1D20] grid grid-cols-6 w-full"
            >
              {/* plan name */}
              <div className="w-full border-collapse">
                <p className="py-3 px-4 bg-[#FAA693] font-semibold border border-[#A6AAB5] border-b-0">
                  Plan Name
                </p>
                <p className="py-3 px-4 font-medium border border-[#A6AAB5]">
                  {info?.planName}
                </p>
              </div>

              {/* /channe id */}
              <div className="w-full border-collapse">
                <p className="py-3 px-4 bg-[#FAA693] font-semibold border border-[#A6AAB5] border-b-0">
                  Channel Id
                </p>
                <p className="py-3 px-4 font-medium border border-[#A6AAB5]">
                  {info?.channelId}
                </p>
              </div>

              {/* channel name */}
              <div className="w-full border-collapse">
                <p className="py-3 px-4 bg-[#FAA693] font-semibold border border-[#A6AAB5] border-b-0">
                  Channel Name
                </p>
                <p className="py-3 px-4 font-medium border border-[#A6AAB5]">
                  {info?.channelName}
                </p>
              </div>

              {/* created on */}
              <div className="w-full border-collapse">
                <p className="py-3 px-4 bg-[#FAA693] font-semibold border border-[#A6AAB5] border-b-0">
                  Created On
                </p>
                <p className="py-3 px-4 font-medium border border-[#A6AAB5]">
                  {info?.createdOn}
                </p>
              </div>

              {/* Monetization in */}
              <div className="w-full border-collapse">
                <p className="py-3 px-4 bg-[#FAA693] font-semibold border border-[#A6AAB5] border-b-0">
                  Monetization in
                </p>
                <p className="py-3 px-4 font-medium border border-[#A6AAB5]">
                  {info?.monetizationIn}
                </p>
              </div>

              {/* action */}
              <button
                type="button"
                onClick={() => setChannelDetails(!channelDetails)}
                className="w-full h-full py-3 px-4 border border-[#A6AAB5] border-collapse bg-[#2FA75F] flex items-center justify-center cursor-pointer"
              >
                <p className=" font-bold underline text-white">View Details</p>
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
