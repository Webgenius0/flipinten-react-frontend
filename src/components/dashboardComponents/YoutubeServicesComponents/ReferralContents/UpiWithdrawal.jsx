import PlusCircleSvg from "@/components/SVG/DashboardIcons/PlusCircleSvg";
import React from "react";
import { useForm } from "react-hook-form";

export default function UpiWithdrawal() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="w-full">
          <label className="text-xl font-medium leading-[30px] text-text ">
            Name{" "}
          </label>
          <input
            {...register("name")}
            type="text"
            placeholder="Enter Your name"
            className="w-full mt-2 bg-[#F5F6F7] py-5 px-8 rounded-2xl placeholder:text-[#798090] border border-[#DFE0E4]"
          />
        </div>

        <div className="w-full">
          <label className="text-xl font-medium leading-[30px] text-text ">
            UPI Number
          </label>
          <input
            {...register("upiNumber")}
            type="text"
            placeholder="Enter Your Upi Number"
            className="w-full mt-2 bg-[#F5F6F7] py-5 px-8 rounded-2xl placeholder:text-[#798090] border border-[#DFE0E4]"
          />
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className=" py-3 px-6 bg-primary-red rounded-[8px] text-white font-medium cursor-pointer hover:bg-red-700 duration-300 flex items-center gap-2"
          >
            <p className="w-6 h-6">
              <PlusCircleSvg />
            </p>
            <span>Add Now</span>
          </button>
        </div>
      </form>
    </div>
  );
}
