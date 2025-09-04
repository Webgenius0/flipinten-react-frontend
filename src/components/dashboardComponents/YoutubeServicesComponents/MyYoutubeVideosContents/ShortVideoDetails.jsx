import React from "react";
// sample video data
const videoDetails = {
  leftBlock: [
    { name: "Video Type", value: "Animated" },
    { name: "Topics", value: "Ai News" },
    { name: "Video Duration", value: "3" },
    { name: "Language", value: "English" },
    { name: "Voice Over", value: "Female" },
  ],
  middleBlock: [
    { name: "Amount Paid", value: "09/07/2025" },
    { name: "Amount Paid", value: "09/07/2025" },
    { name: "Delivered On", value: "12/07/2025" },
    { name: "Delivered On", value: "12/07/2025" },
    { name: "Revision Made", value: "0" },
  ],
  rightBlock: [
    { name: "Video Title", value: "Cat is looking out the window" },
    { name: "Description", value: "Lorem ipsum dolor sit amet consectetur." },
    { name: "Keywords", value: "Lorem ipsum dolor sit amet consectetur." },
    { name: "Download Link", value: "Download Video & Thumbnails" },
    { name: "Revision Request", value: "1 Left" },
  ],
};

export default function ShortVideoDetails() {
  return (
    <div className="mt-8">
      <h6 className="text-2xl font-semibold leading-9 text-[#1C1D20]">
        Video Details For Standard, Custom & Shorts
      </h6>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6 mb-4">
        {/* left block */}
        <div className="p-6 rounded-[8px] bg-white space-y-6">
          {videoDetails?.leftBlock?.map((details, idx) => (
            <div
              key={idx}
              className="py-3 px-6 rounded-[8px] bg-[#F6F6F6CC]/80 "
            >
              <p className="text-base font-semibold text-[#4F586D] leading-6">
                {details?.name}
              </p>
              <p className="text-xl font-semibold text-[#1C1D20] leading-[30px]">
                {details?.value}
              </p>
            </div>
          ))}
        </div>

        {/* middle block */}
        <div className="p-6 rounded-[8px] bg-white space-y-6">
          {videoDetails?.middleBlock?.map((details, idx) => (
            <div
              key={idx}
              className="py-3 px-6 rounded-[8px] bg-[#F6F6F6CC]/80 "
            >
              <p className="text-base font-semibold text-[#4F586D] leading-6">
                {details?.name}
              </p>
              <p className="text-xl font-semibold text-[#1C1D20] leading-[30px]">
                {details?.value}
              </p>
            </div>
          ))}
        </div>

        {/* right blockl */}
        <div className="p-6 rounded-[8px] bg-white space-y-6">
          {videoDetails?.rightBlock?.map((details, idx) => (
            <div
              key={idx}
              className="py-3 px-6 rounded-[8px] bg-[#F6F6F6CC]/80 "
            >
              <p className="text-base font-semibold text-[#4F586D] leading-6">
                {details?.name}
              </p>
              <p className="text-xl font-semibold text-[#1C1D20] leading-[30px]">
                {details?.value}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="p-4 rounded-[8px] bg-[#FEFCE8]">
        <p className="text-base leadig-6 text-[#CA8A04] text-center">
          Revision request should be made within 24hrs after delivery. For
          revision, kindly raise a ticket to support team.{" "}
          <span className="font-bold">Click here</span>
        </p>
      </div>
    </div>
  );
}
