import { BdFlagSvg } from "@/components/SVG/FlagIcon/BdFlagSvg";
import { GermanSvg } from "@/components/SVG/FlagIcon/GermanSvg";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const country = [
  { value: "bangladesh", label: "Bangladesh", icon: <BdFlagSvg /> },
  { value: "german", label: "German", icon: <GermanSvg /> },
];

const interests = [
  {
    id: 1,
    name: "bank",
  },
  {
    id: 2,
    name: "card",
  },
  {
    id: 1,
    name: "money",
  },
];

export default function StarterCardsForm() {
  const { register, handleSubmit, setValue } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    if (data) {
      Swal.fire({
        title: "Thank You!",
        text: "Your application for the YouTube Channel Lifetime Plan was successful. Our team will reach out to you within 24 business hours.",
        icon: "success",
        draggable: true,
      });
    }
  };

  return (
    <div>
      <div className="text-center w-3/4 mx-auto">
        <h2 className="text-[32px] leading-[38px] font-semibold text-[#071431] mb-4">
          “Let’s Connect Before You Commit”
        </h2>
        <p className="text-base text-[#5B6477]">
          Before we proceed with your Lifetime Plan payment, we’d like to have a
          quick conversation to understand your goals and ensure a smooth,
          secure future partnership. Please fill out this form to get started.
          ✅
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="mt-12 space-y-6">
        <div className="flex items-center gap-8">
          {/* first name */}
          <div className="w-full">
            <label>First Name*</label>
            <input
              {...register("name", { required: true })}
              type="text"
              placeholder="enter your first name"
              className="w-full mt-2 py-5 px-8 rounded-2xl bg-white border border-[#C1C4CC] "
            />
          </div>

          {/* last name */}
          <div className="w-full">
            <label>Last Name*</label>
            <input
              {...register("lastName", { required: true })}
              type="text"
              placeholder="enter your last name"
              className="w-full mt-2 py-5 px-8 rounded-2xl bg-white border border-[#C1C4CC] "
            />
          </div>
        </div>

        <div className="flex items-center gap-8">
          {/* first name */}
          <div className="w-full">
            <label>Email*</label>
            <input
              {...register("email", { required: true })}
              type="email"
              placeholder="email@gmail.com"
              className="w-full mt-2 py-5 px-8 rounded-2xl bg-white border border-[#C1C4CC] "
            />
          </div>

          {/* phone */}
          <div className="w-full">
            <label>Phone*</label>
            <Select onValueChange={(value) => setValue("phone", value)}>
              <SelectTrigger className="w-full mt-2 py-7 px-8 !rounded-2xl bg-white border border-[#C1C4CC] ">
                <div className="flex items-center gap-2 ">
                  <SelectValue placeholder={"Phone"} />
                </div>
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Phone</SelectLabel>
                  {country.map((fruit) => (
                    <SelectItem key={fruit.value} value={fruit.value}>
                      <div className="flex items-center gap-2">
                        {fruit.icon} {fruit.label}
                      </div>
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/*The product you are interested in* */}
        <div className="w-full">
          <label>The product you are interested in*</label>
          <Select
            onValueChange={(value) => setValue("interestedProduct", value)}
          >
            <SelectTrigger className="w-full mt-2 py-7 px-8 !rounded-2xl bg-white border border-[#C1C4CC] ">
              <div className="flex items-center gap-2 ">
                <SelectValue placeholder={"Choose Lifetime Wealth Plans"} />
              </div>
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Interesrted Product</SelectLabel>
                {interests.map((info) => (
                  <SelectItem key={info.name} value={info.name}>
                    <div className="flex items-center gap-2">{info?.name}</div>
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <div className="flex items-center gap-8">
          {/* coutry/ region */}
          <div className="w-full">
            <label>Country/Region*</label>
            <input
              {...register("region", { required: true })}
              type="text"
              placeholder=""
              className="w-full mt-2 py-5 px-8 rounded-2xl bg-white border border-[#C1C4CC] "
            />
          </div>

          {/*address*/}
          <div className="w-full">
            <label>Address*</label>
            <input
              {...register("address", { required: true })}
              type="text"
              placeholder=""
              className="w-full mt-2 py-5 px-8 rounded-2xl bg-white border border-[#C1C4CC] "
            />
          </div>
        </div>

        <div className="flex items-center gap-8">
          {/* City */}
          <div className="w-full">
            <label>City*</label>
            <input
              {...register("city", { required: true })}
              type="text"
              placeholder=""
              className="w-full mt-2 py-5 px-8 rounded-2xl bg-white border border-[#C1C4CC] "
            />
          </div>

          {/*Zip / Postal code**/}
          <div className="w-full">
            <label>Zip / Postal code*</label>
            <input
              {...register("postalCode", { required: true })}
              type="text"
              placeholder=""
              className="w-full mt-2 py-5 px-8 rounded-2xl bg-white border border-[#C1C4CC] "
            />
          </div>
        </div>

        <div className="w-full">
          <label>Write if you have anything to say</label>
          <textarea
            {...register("details")}
            className="w-full h-[168px] mt-2 py-5 px-8 rounded-2xl bg-white border border-[#C1C4CC] "
          ></textarea>{" "}
        </div>

        <div>
          <button
            type="submit"
            className=" py-3 px-6 bg-primary-red rounded-[8px] text-white font-medium cursor-pointer hover:bg-red-700 duration-300"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
