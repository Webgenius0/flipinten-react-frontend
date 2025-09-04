import React, { useState } from "react";
import StandardVideo from "./MyYoutubeVideosContents/StandardVideo";
import CustomVideo from "./MyYoutubeVideosContents/CustomVideo";
import Shorts from "./MyYoutubeVideosContents/Shorts";

const buttonStep = [
  {
    id: 1,
    name: "Standard Video",
    value: 1,
  },
  {
    id: 2,
    name: "Custom Video",
    value: 2,
  },
  {
    id: 3,
    name: "Shorts",
    value: 3,
  },
];

export default function YoutubeVideosStep() {
  const [videoStep, setVideoStep] = useState(1);
  return (
    <div>
      {/* tabs */}
      <div className="w-1/2 mx-auto bg-[#F6F6F6] text-lg text-[#798090] font-medium p-3 rounded-[8px] border border-[#A6AAB5] flex">
        {buttonStep?.map((info, idx) => (
          <button
            key={idx}
            onClick={() => setVideoStep(info?.value)}
            type="button"
            className={`w-full py-3 px-4 rounded-[8px] ${
              videoStep == info?.value && "bg-[#2FA75F] text-white"
            }`}
          >
            {info?.name}
          </button>
        ))}
      </div>

      {/* tab options */}
      <div className="mt-3">
        {videoStep == 1 ? (
          <StandardVideo />
        ) : videoStep == 2 ? (
          <CustomVideo />
        ) : (
          <Shorts />
        )}
      </div>
    </div>
  );
}
