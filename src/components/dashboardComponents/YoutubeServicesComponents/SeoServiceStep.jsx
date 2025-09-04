import React, { useState } from "react";
import PendingSeoService from "./SeoServicesComponents/PendingSeoService";
import DeliveredSeoService from "./SeoServicesComponents/DeliveredSeoService";

export default function SeoServiceStep() {
  const [orderStep, setOrderStep] = useState(1);

  const [view, setView] = useState(false);

  return (
    <div>
      {/*  */}

      {view ? (
        <div className="w-full my-3 py-3 px-4 rounded-2xl flex items-center gap-10 justify-between">
          <p className="text-2xl font-semibold leadiong-9 text-[#1C1D20]">
            YT Services
          </p>
        </div>
      ) : (
        <div className="w-full my-3 py-3 px-4 rounded-2xl flex items-center gap-10 justify-between">
          <p className="text-2xl font-semibold leadiong-9 text-[#1C1D20]">
            YT SEO Services List Order New
          </p>
          <button
            type="button"
            onClick={() => setView(!view)}
            className="bg-[#2FA75F] py-4 px-6 rounded-[8px] text-white text-nowrap border border-transparent cursor-pointer hover:bg-green-800 duration-300"
          >
            Order Now
          </button>
        </div>
      )}

      {/* table  content */}
      <div className="p-12 rounded-3xl mt-6 bg-white shadow-xl">
        {/* tab */}

        {view || (
          <div className="p-3 rounded-[8px] border border-[#A6AAB5] flex items-center gap-4 w-1/4 mx-auto">
            <button
              type="button"
              onClick={() => setOrderStep(1)}
              className={`w-full text-[#DB8711] border border-[#DB8711] py-3 px-4 rounded-[8px] cursor-pointer hover:scale-105 duration-300 ${
                orderStep == 1 && "bg-[#DB8711] text-white"
              }`}
            >
              Pending
            </button>

            <button
              type="button"
              onClick={() => setOrderStep(2)}
              className={`w-full text-[#2FA75F] border border-[#2FA75F] py-3 px-4 rounded-[8px] cursor-pointer hover:scale-105 duration-300 ${
                orderStep == 2 && "bg-[#2FA75F] text-white"
              }`}
            >
              Delivered
            </button>
          </div>
        )}

        {orderStep == 1 ? <PendingSeoService /> : <DeliveredSeoService />}

        {view && (
          <div className="w-full grid grid-cols-2">
            <div className="border w-full border-[#A6AAB5] py-6 px-8">
              <p className="text-[#E52621] text-lg font-semibold underline text-center cursor-pointer hover:scale-105 duration-300">
                View Channel
              </p>
            </div>

            <div className="border w-full border-[#A6AAB5] py-6 px-8">
              <p className="text-[#2FA75F] text-lg font-semibold underline text-center cursor-pointer hover:scale-105 duration-300">
                Download Full Report
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
