import PlusCircleSvg from "@/components/SVG/DashboardIcons/PlusCircleSvg";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React from "react";
import { useForm } from "react-hook-form";

// sample bank data
const banks = [
  {
    id: 1,
    name: "Bank 1",
  },
  {
    id: 2,
    name: "Bank 2",
  },
  {
    id: 3,
    name: "Bank 3",
  },
  {
    id: 4,
    name: "Bank 4",
  },
  {
    id: 5,
    name: "Bank 5",
  },
];

const country = [
  {
    id: 1,
    name: "Bangladesh",
  },
  {
    id: 2,
    name: "Bhuta",
  },
  {
    id: 1,
    name: "USA",
  },
];

export default function BankWithdrawal() {
  const { register, handleSubmit, setValue } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="w-full flex items-center gap-8">
          {/* full name */}
          <div className="w-full">
            <label className="text-xl font-medium leading-[30px] text-text ">
              Full Name{" "}
            </label>
            <input
              {...register("name")}
              type="text"
              placeholder="Enter Your Name"
              className="w-full mt-2 bg-[#F5F6F7] py-5 px-8 rounded-2xl placeholder:text-[#798090] border border-[#DFE0E4]"
            />
          </div>

          {/* account number */}
          <div className="w-full">
            <label className="text-xl font-medium leading-[30px] text-text ">
              Account Number{" "}
            </label>
            <input
              {...register("accountNumber")}
              type="text"
              placeholder="Enter Your Account Number"
              className="w-full mt-2 bg-[#F5F6F7] py-5 px-8 rounded-2xl placeholder:text-[#798090] border border-[#DFE0E4]"
            />
          </div>
        </div>

        <div className="w-full flex items-center gap-8">
          <div className="w-full">
            <label className="text-xl font-medium leading-[30px] text-text ">
              Bank
            </label>

            <Select
              className=""
              onValueChange={(value) => setValue("bank", value)}
            >
              <SelectTrigger
                className={
                  "w-full mt-2 py-7 px-8 bg-[#F5F6F7] !rounded-2xl placeholder:text-[#798090] border border-[#DFE0E4]"
                }
              >
                <SelectValue
                  className="placeholder:text-lg "
                  placeholder="Enter your bank name"
                />
              </SelectTrigger>
              <SelectContent className="w-full mt-2 !rounded-2xl placeholder:text-[#798090] border border-[#DFE0E4]">
                {banks?.map((bank, idx) => (
                  <SelectItem key={idx} value={bank?.name}>
                    {bank?.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="w-full">
            <label className="text-xl font-medium leading-[30px] text-text ">
              Branch Name
            </label>

            <Select
              className=""
              onValueChange={(value) => setValue("branchName", value)}
            >
              <SelectTrigger
                className={
                  "w-full mt-2 py-7 px-8 bg-[#F5F6F7] !rounded-2xl placeholder:text-[#798090] border border-[#DFE0E4]"
                }
              >
                <SelectValue
                  className="placeholder:text-lg "
                  placeholder="Enter your branch name"
                />
              </SelectTrigger>
              <SelectContent className="w-full mt-2 !rounded-2xl placeholder:text-[#798090] border border-[#DFE0E4]">
                {banks?.map((bank, idx) => (
                  <SelectItem key={idx} value={bank?.name}>
                    {bank?.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="w-full flex items-center gap-8">
          <div className="w-full">
            <label className="text-xl font-medium leading-[30px] text-text ">
              IFSC/IBAN/SWIFT Code
            </label>
            <input
              {...register("code")}
              type="text"
              placeholder="Enter Your Code"
              className="w-full mt-2 bg-[#F5F6F7] py-5 px-8 rounded-2xl placeholder:text-[#798090] border border-[#DFE0E4]"
            />
          </div>

          <div className="w-full">
            <label className="text-xl font-medium leading-[30px] text-text ">
              Country
            </label>

            <Select
              className=""
              onValueChange={(value) => setValue("country", value)}
            >
              <SelectTrigger
                className={
                  "w-full mt-2 py-7 px-8 bg-[#F5F6F7] !rounded-2xl placeholder:text-[#798090] border border-[#DFE0E4]"
                }
              >
                <SelectValue
                  className="placeholder:text-lg "
                  placeholder="Enter your Country name"
                />
              </SelectTrigger>
              <SelectContent className="w-full mt-2 !rounded-2xl placeholder:text-[#798090] border border-[#DFE0E4]">
                {country?.map((count, idx) => (
                  <SelectItem key={idx} value={count?.name}>
                    {count?.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="w-full flex items-center gap-8">
          <div className="w-full">
            <label className="text-xl font-medium leading-[30px] text-text ">
              State
            </label>
            <input
              {...register("state")}
              type="text"
              placeholder="Enter Your state"
              className="w-full mt-2 bg-[#F5F6F7] py-5 px-8 rounded-2xl placeholder:text-[#798090] border border-[#DFE0E4]"
            />
          </div>

          <div className="w-full">
            <label className="text-xl font-medium leading-[30px] text-text ">
              City
            </label>

            <Select
              className=""
              onValueChange={(value) => setValue("city", value)}
            >
              <SelectTrigger
                className={
                  "w-full mt-2 py-7 px-8 bg-[#F5F6F7] !rounded-2xl placeholder:text-[#798090] border border-[#DFE0E4]"
                }
              >
                <SelectValue
                  className="placeholder:text-lg "
                  placeholder="Enter your State Name"
                />
              </SelectTrigger>
              <SelectContent className="w-full mt-2 !rounded-2xl placeholder:text-[#798090] border border-[#DFE0E4]">
                {country?.map((count, idx) => (
                  <SelectItem key={idx} value={count?.name}>
                    {count?.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
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
