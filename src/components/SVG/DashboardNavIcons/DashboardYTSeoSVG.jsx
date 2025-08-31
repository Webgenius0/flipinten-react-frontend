import React from "react";
import { useLocation } from "react-router-dom";

export default function DashboardYTSeoSVG() {
  const currentLink = useLocation().pathname;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
    >
      <g clip-path="url(#clip0_15847_680)">
        <mask
          id="mask0_15847_680"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="24"
          height="25"
        >
          <path d="M0 0.5H24V24.5H0V0.5Z" fill="white" />
        </mask>
        <g mask="url(#mask0_15847_680)">
          <path
            d="M10.3636 4.25C8.5373 4.25 6.97846 4.89569 5.68708 6.18708C4.39569 7.47846 3.75 9.0373 3.75 10.8636C3.75 12.6899 4.39569 14.2487 5.68708 15.5401C6.97846 16.8315 8.5373 17.4772 10.3636 17.4772C12.1899 17.4772 13.7487 16.8315 15.0401 15.5401C16.3315 14.2487 16.9772 12.6899 16.9772 10.8636C16.9771 9.03736 16.3313 7.47857 15.04 6.18722C13.7486 4.89586 12.1899 4.25012 10.3636 4.25ZM10.3636 2.75C12.6041 2.75014 14.5164 3.54233 16.1006 5.12655C17.6849 6.71078 18.4771 8.62312 18.4772 10.8636C18.4772 13.1041 17.6851 15.0165 16.1008 16.6008C14.5165 18.1851 12.6041 18.9772 10.3636 18.9772C8.12309 18.9772 6.2107 18.1851 4.62642 16.6008C3.04214 15.0165 2.25 13.1041 2.25 10.8636C2.25 8.62308 3.04214 6.71069 4.62642 5.12642C6.21069 3.54214 8.12313 2.75 10.3636 2.75Z"
            fill={
              currentLink === "/dashboard/youtube-seo-service"
                ? "#E52621"
                : "#5B6477"
            }
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M15.3271 16.8877C15.0342 16.5948 15.0342 16.1199 15.3271 15.827C15.62 15.5341 16.0949 15.5341 16.3878 15.827L21.5304 20.9697C21.8233 21.2626 21.8233 21.7375 21.5304 22.0303C21.2375 22.3232 20.7626 22.3232 20.4697 22.0303L15.3271 16.8877Z"
            fill={
              currentLink === "/dashboard/youtube-seo-service"
                ? "#E52621"
                : "#5B6477"
            }
          />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_15847_680">
          <rect
            width="24"
            height="24"
            fill="white"
            transform="translate(0 0.5)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}
