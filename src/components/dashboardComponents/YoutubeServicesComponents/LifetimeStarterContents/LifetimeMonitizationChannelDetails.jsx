import WarningSvg from "@/components/SVG/DashboardIcons/WarningSvg";
import React from "react";

// section top sample data
const channelDetails = {
  channelName: "Horror Mania",
  channelId: "YTC001",
  status: "Active",
  totalProfitGenerated: "₹10,00,000",
  planName: "Starter Plus",
  topicChosen: "Horror Stories",
  channelCreatedOn: "10/05/2023",
  noOfVideosUploaded: 1,
  nextVideoUploadingIn: "60:22H:15M",
  lastUpdated: "2 days ago",
  toBeLinked: "YouTube",
  channelValue: 5000,
  channelValueDuration: "24 months",
  value: 5,
  monitizationExpectationDay: 175,
  monitizationDate: "10/06/2023",
  youtubeEmil: "hello@gmail.com",
  splitAmountDueDate: "10/6/2023",
  currentMonthProfit: "₹10,00,000",
  YTStartShare: "$5000",
  paymentAmountDue: "₹2,00,000",
};

export default function LifetimeMonitizationChannelDetails() {
  return (
    <div>
      {/* warning */}
      <div className="w-full bg-white my-3 py-3 px-4 rounded-2xl flex items-center gap-10 justify-between">
        <div className="w-3/4 flex items-center gap-6 ">
          <p className="w-10 h-10">
            <WarningSvg />
          </p>
          <p className="text-base font-medium text-[#E52621] leading-6">
            If the client is pass the grace period of 7 days for the payment. We
            stopped working on your channel since the profit split amount is due
            from your end. Kindly make the payment immediately
          </p>
        </div>

        <button className="bg-[#2FA75F] py-4 px-6 rounded-[8px] text-white text-nowrap border border-transparent cursor-pointer hover:bg-green-800 duration-300">
          Pay Now
        </button>
      </div>

      {/* channel details top content */}
      <div className="w-full py-6 px-12 rounded-2xl bg-white my-6">
        <div className="flex items-center justify-between">
          <h3 className="text-[32px] font-semibold leading-[38px] text-[#071431] mb-6">
            Channel Details
          </h3>

          <p className="text-base font-medium leading-6 text-[#6A7283]">
            Last Updated: {channelDetails?.lastUpdated}
          </p>
        </div>

        <div className="grid grid-cols-4 mt-6">
          {/* 1st content */}
          <div className="flex flex-col justify-between mb-2">
            <div className="w-fit relative">
              <p className="py-7 px-[38px] rounded-full bg-[#6D891F] text-[32px] font-semibold leading-12 text-white w-fit">
                M
              </p>

              <p className="bg-[#13DE64] w-4 h-4 rounded-full absolute top-4 right-0"></p>
            </div>

            <div className="space-y-2">
              <p className="text-2xl font-semibold leading-9 text-[#071431]">
                {channelDetails?.channelName}
              </p>
              <p className="text-sm text-[#798090] leading-[21px]">
                Total Profit Generated
              </p>
              <p className="text-2xl font-semibold leading-9 text-[#071431]">
                {channelDetails?.totalProfitGenerated}
              </p>

              {/* <p className="flex items-center gap-2">
                <p className="bg-green-600 w-2 h-2 rounded-full"></p>
                <span className="text-green-600">Active</span>
              </p> */}
            </div>
          </div>

          {/* 2nd content */}
          <div className="flex flex-col justify-between">
            <div className="text-base font-medium">
              <p className="text-[#798090]">Channel ID </p>
              <p className="text-xl font-semibold text-[#071431]">
                {channelDetails?.channelId}
              </p>
            </div>
            <div className="text-base font-medium">
              <p className="text-[#798090]">Channel Created On</p>
              <p className="text-xl font-semibold text-[#071431]">
                {channelDetails?.channelCreatedOn}
              </p>
            </div>
            <div className="text-base font-medium">
              <p className="text-[#798090]">No of Videos Uploaded</p>
              <p className="text-xl font-semibold text-[#071431]">
                {channelDetails?.noOfVideosUploaded}
              </p>
            </div>
          </div>

          {/* 3rd content */}
          <div className="flex flex-col justify-between">
            <div className="text-base font-medium">
              <p className="text-[#798090]">Plan Name</p>
              <p className="text-xl font-semibold text-green-600 underline">
                {channelDetails?.planName}
              </p>
            </div>
            <div className="text-base font-medium">
              <p className="text-[#798090]">Topic Chosen</p>
              <p className="text-xl font-semibold text-[#071431]">
                {channelDetails?.topicChosen}
              </p>
            </div>
            <div className="text-base font-medium">
              <p className="text-[#798090]">Next Video Uploading In</p>
              <p className="text-xl font-semibold text-red-600">
                {channelDetails?.nextVideoUploadingIn}
              </p>
            </div>
          </div>

          {/* 4rth content or channel value content */}
          <div className="w-full py-6 px-12 rounded-2xl bg-white flex flex-col justify-between">
            <p className="text-2xl font-semibold leading-9 text-[#071431]">
              Chanel Value
            </p>

            <div className="mt-6">
              <p className="text-base text-[#798090] font-medium leading-6">
                Buy Back Price
              </p>
              <p className="text-xl font-semibold leading-[30px] text-[#071431]">
                ${channelDetails?.channelValue} in{" "}
                {channelDetails?.channelValueDuration}
              </p>
            </div>

            <div className="mt-6">
              <p className="text-base text-[#798090] font-medium leading-6">
                Track your channel's growing value over time
              </p>

              <div className="w-full relative">
                <div className="mt-3 grid grid-cols-8 gap-3 relative">
                  {[...Array(8)].map((_, idx) => (
                    <div key={idx} className="w-full h-2 bg-[#FEF2F2]"></div>
                  ))}

                  <div className="absolute inset-0 z-50">
                    <div className="grid grid-cols-8 gap-3">
                      {Array.from({ length: channelDetails?.value }).map(
                        (_, idx) => (
                          <div
                            key={idx}
                            className="w-full h-2 bg-[#E52621]"
                          ></div>
                        )
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* monitization content */}
      <div className="my-6 grid grid-cols-12 gap-6">
        {/* monitization value */}
        <div className="w-full col-span-8 py-6  px-12 rounded-2xl bg-white">
          <p className="text-2xl font-semibold leading-9 text-[#071431]">
            Monitization Status
          </p>

          <div className="mt-6 flex items-center justify-between">
            <div>
              <div className="text-sm font-medium text-[#1C1D20] flex items-center justify-between">
                <p>Monetization Expected In</p>
                <p>{channelDetails?.monitizationExpectationDay} Days</p>
              </div>

              <div className="relative my-2">
                <div className="w-full h-2 bg-[#FEF2F2] rounded-full"></div>
                <div className="w-1/2 h-2 bg-red-500 rounded-full absolute inset-0"></div>
              </div>

              <div className="text-sm font-medium text-[#1C1D20] flex items-center justify-between">
                <p>Plan Renewal Due on</p>
                <p className="text-red-600">
                  {channelDetails?.monitizationDate}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-12">
              <div>
                <p className="text-sm text-[#798090] leading-[21px]">
                  Profit Split Amount Due on
                </p>
                <p className="text-2xl font-semibold leading-9 text-[#071431]">
                  {channelDetails?.splitAmountDueDate}
                </p>
              </div>

              <div>
                <p className="text-sm text-[#798090] leading-[21px]">
                  Current Month Profit
                </p>
                <p className="text-2xl font-semibold leading-9 text-[#071431]">
                  {channelDetails?.currentMonthProfit}
                </p>
              </div>

              <div>
                <p className="text-sm text-[#798090] leading-[21px]">
                  YTStart Share
                </p>
                <p className="text-2xl font-semibold leading-9 text-[#071431]">
                  {channelDetails?.YTStartShare}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="py-6  px-12 rounded-2xl bg-white col-span-4">
          <p className="text-2xl font-semibold leading-9 text-[#071431]">
            Monitization Status
          </p>

          <div className="my-6">
            <p className="text-sm text-[#798090] leading-[21px]">
              Payment Amount Due
            </p>
            <p className="text-[32px] font-semibold leading-9 text-[#E52621]">
              {channelDetails?.paymentAmountDue}
            </p>
          </div>

          <div className="flex items-center gap-4">
            <button className="bg-[#2FA75F] py-4 px-6 rounded-[8px] text-white border border-transparent cursor-pointer hover:bg-green-800 duration-300">
              Pay Now
            </button>
            <button className=" py-4 px-6 rounded-[8px] text-[#6A7283] border-2 border-[#C1C4CC] cursor-pointer hover:bg-gray-100 duration-300">
              Payment History
            </button>
          </div>
        </div>
      </div>

      {/* channel value content */}
      <div className="w-full h-full py-6 px-12 rounded-2xl bg-white">
        <p className="text-2xl font-semibold leading-9 text-[#071431]">
          Contact Details
        </p>

        <div className="mt-6 space-y-6">
          {/* utube email */}

          <div className="p-6 rounded-2xl bg-[#F9FAFB] text-base font-medium leading-6 space-y-1">
            <p className=" text-[#798090] ">YouTube Email</p>
            <p className="text-[#1C1D20]">{channelDetails?.youtubeEmil}</p>
          </div>

          {/* password access */}
          <div className="p-6 rounded-2xl  bg-[#FEFCE8] text-base font-medium leading-6 space-y-1">
            <p className=" text-[#798090] ">Password Access</p>
            <p className="text-[#1C1D20]">
              Contact support from your registered email/WhatsApp
            </p>
          </div>

          {/* utube email */}
          <div className="p-6 rounded-2xl bg-[#F0FDF4] text-base font-medium leading-6 space-y-1 flex items-center gap-6 justify-between">
            <div>
              <p className=" text-[#798090] ">Support</p>
              <p className="text-[#1C1D20]">
                WhatsApp + Registered Mobile Only
              </p>
            </div>

            <div className="flex items-center gap-4">
              <button className="bg-[#2FA75F] py-2 px-6 rounded-[8px] text-white border border-transparent cursor-pointer hover:bg-green-800 duration-300">
                Whatsapp
              </button>
              <button className=" py-2 px-6 rounded-[8px] text-[#6A7283] border-2 border-[#C1C4CC] cursor-pointer hover:bg-gray-100 duration-300">
                Call
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
