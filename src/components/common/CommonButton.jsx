import { Link } from "react-router-dom";

export default function CommonButton({ text, to }) {
  return (
    <Link
      to={to}
      className="py-4 px-6 bg-[#E52621] rounded-[30px] w-max text-white text-[18px] font-semibold leading-[27px] flex gap-2 group"
    >
      <span>{text}</span>
      <div className="transition-transform duration-300 group-hover:rotate-[-40deg]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
        >
          <path
            d="M19 12.5H5M19 12.5L13 18.5M19 12.5L13 6.5"
            stroke="white"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </Link>
  );
}
