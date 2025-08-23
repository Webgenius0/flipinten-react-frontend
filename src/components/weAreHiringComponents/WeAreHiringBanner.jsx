import Container from "@/components/common/Container";
import { useState } from "react";

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
              <div className="w-full">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                >
                  <option value="" disabled>
                    Job Category
                  </option>
                  {jobCategories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>

              {/* Work Type */}
              <div className="w-full">
                <select
                  value={selectedWorkType}
                  onChange={(e) => setSelectedWorkType(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                >
                  <option value="" disabled>
                    Work Type
                  </option>
                  {workTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              {/* Employment Type */}
              <div className="w-full">
                <select
                  value={selectedEmploymentType}
                  onChange={(e) => setSelectedEmploymentType(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                >
                  <option value="" disabled>
                    Employment Type
                  </option>
                  {employmentTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              {/* Submit Button */}
              <button className="bg-primary-red hover:opacity-80 text-white font-bold py-4 px-4 rounded-lg transition-colors">
                {/* Search Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                >
                  <path
                    d="M11 3.5C15.4183 3.5 19 7.08172 19 11.5C19.0022 13.2767 18.4066 15.0028 17.3096 16.4004L20.71 19.79C20.8993 19.9778 21.0059 20.2334 21.0059 20.5C21.0059 20.7666 20.8993 21.0222 20.71 21.21C20.5222 21.3993 20.2666 21.5059 20 21.5059C19.7334 21.5059 19.4778 21.3993 19.29 21.21L15.9004 17.8096C14.5028 18.9066 12.7767 19.5022 11 19.5C6.58172 19.5 3 15.9183 3 11.5C3 7.08172 6.58172 3.5 11 3.5ZM11 5.5C7.68629 5.5 5 8.18629 5 11.5C5 14.8137 7.68629 17.5 11 17.5C14.3137 17.5 17 14.8137 17 11.5C17 8.18629 14.3137 5.5 11 5.5Z"
                    fill="white"
                  />
                </svg>
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
