import Container from "@/components/common/Container";
import { useState } from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import * as SelectPrimitive from "@radix-ui/react-select";
import { ChevronDown } from "lucide-react";
import SearchIconSVG from "../SVG/SearchIconSVG";

export default function WeAreHiringBanner() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedWorkType, setSelectedWorkType] = useState("");
  const [selectedEmploymentType, setSelectedEmploymentType] = useState("");

  const jobCategories = [
    "Design & Creative",
    "Video Production",
    "Content Creation",
    "Marketing",
    "Development",
  ];

  const workTypes = ["Remote", "On-site", "Hybrid"];

  const employmentTypes = ["Full-time", "Part-time", "Contract", "Freelance"];

  return (
    <section className="py-[80px]">
      <Container>
        <div className="p-12 customBackGroundsWAH">
          <div className="text-center max-w-[550px] mx-auto">
            <h2 className="text-[#FFF] text-[40px] font-semibold leading-[60px]">
              Drop Resume & Get Your Desire Job
            </h2>
            <p className="text-center text-[#FFF] text-base font-medium leading-normal mt-[36px]">
              Join Our Creative Team!
            </p>
          </div>

          <div className="p-3 bg-white w-full mt-8 rounded-[12px]">
            <div className="w-full flex items-center justify-between gap-6">
              {/* Job Category */}
              <Select>
                <SelectPrimitive.Trigger
                  className={cn(
                    "flex h-12 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2  focus:outline-none focus:ring-0 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1"
                  )}
                >
                  <SelectValue placeholder="Job Category" />
                  <SelectPrimitive.Icon asChild>
                    <ChevronDown className="h-4 w-4 opacity-50" />
                  </SelectPrimitive.Icon>
                </SelectPrimitive.Trigger>

                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Job Category</SelectLabel>

                    {jobCategories?.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>

              {/* Work Type */}
              <Select>
                <SelectPrimitive.Trigger
                  className={cn(
                    "flex h-12 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2  focus:outline-none focus:ring-0 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1"
                  )}
                >
                  <SelectValue placeholder="Work Type" />
                  <SelectPrimitive.Icon asChild>
                    <ChevronDown className="h-4 w-4 opacity-50" />
                  </SelectPrimitive.Icon>
                </SelectPrimitive.Trigger>

                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Work Type</SelectLabel>

                    {workTypes?.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>

              {/* Employment Type */}
              <Select>
                <SelectPrimitive.Trigger
                  className={cn(
                    "flex h-12 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2  focus:outline-none focus:ring-0 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1"
                  )}
                >
                  <SelectValue placeholder="Employment Type" />
                  <SelectPrimitive.Icon asChild>
                    <ChevronDown className="h-4 w-4 opacity-50" />
                  </SelectPrimitive.Icon>
                </SelectPrimitive.Trigger>

                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Employment Type</SelectLabel>

                    {employmentTypes?.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>

              {/* Submit Button */}
              <button className="w-full h-full max-w-12 max-h-12 p-2 inline-block bg-primary-red hover:opacity-80 text-white font-bold rounded-lg transition-colors cursor-pointer">
                <SearchIconSVG />
              </button>
            </div>
          </div>

          <p className="text-center text-[#FFF] text-base font-medium leading-normal mt-[36px]">
            Help us build amazing YouTube videos. Explore exciting roles.
          </p>
        </div>
      </Container>
    </section>
  );
}
