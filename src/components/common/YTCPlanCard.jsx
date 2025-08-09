import { Link } from "react-router-dom";

export default function YTCPlanCard({ plan }) {
  return (
    <div className="py-[48px] px-[52px] flex flex-col justify-between gap-8 rounded-3xl bg-white customHoverEffect">
      {/* details */}
      <div className="space-y-8">
        <h2 className="text-[#1C1D20] text-[32px] font-semibold leading-[48px] text-center">
          {plan?.planName}
        </h2>
        <div className="flex justify-center">
          <h4 className="text-[#4F586D] text-[16px] leading-6 text-center max-w-[317px]">
            {plan?.planDes}
          </h4>
        </div>
        <div>
          <h2 className="text-[#1C1D20] text-[32px] font-semibold leading-[48px] text-center">
            {plan.price}/
            <span className="text-[#5B6477] text-2xl leading-[150%] font-normal">
              Month
            </span>
          </h2>
        </div>
        <ul className=" flex flex-col gap-2">
          {plan.feature.map((item, index) => (
            <li key={index} className="flex gap-2 items-center">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="19"
                  viewBox="0 0 18 19"
                  fill="none"
                >
                  <path
                    d="M14.2814 5.71973C14.5744 6.0127 14.5744 6.48848 14.2814 6.78145L8.28145 12.7814C7.98848 13.0744 7.5127 13.0744 7.21973 12.7814L4.21973 9.78145C3.92676 9.48848 3.92676 9.0127 4.21973 8.71973C4.5127 8.42676 4.98848 8.42676 5.28145 8.71973L7.75176 11.1877L13.2221 5.71973C13.515 5.42676 13.9908 5.42676 14.2838 5.71973H14.2814Z"
                    fill="#1C1D20"
                  />
                </svg>
              </div>
              <h3 className="text-[#1C1D20] text-[14px] leading-[21px]">
                {item}
              </h3>
            </li>
          ))}
        </ul>
      </div>
      {/* button */}
      <div className="">
        <Link className="py-4 w-full flex justify-center rounded-[30px] border border-[#1C1D20] text-[#1C1D20] text-[20px] font-semibold leading-[30px] ease-in-out duration-200 hover:bg-[#E52621] hover:text-white hover:border-transparent">
          {plan?.whichPlan}
        </Link>
      </div>
    </div>
  );
}
