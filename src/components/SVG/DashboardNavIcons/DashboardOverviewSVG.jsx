import React from "react";
import { useLocation } from "react-router-dom";

export default function DashboardOverviewSVG() {
  const currentLink = useLocation().pathname;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
    >
      <g clip-path="url(#clip0_15847_770)">
        <mask
          id="mask0_15847_770"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="24"
          height="25"
        >
          <path d="M0 0.5H24V24.5H0V0.5Z" fill="white" />
        </mask>
        <g mask="url(#mask0_15847_770)">
          <path
            d="M9.5625 2.75H3.1875C2.66973 2.75 2.25 3.16973 2.25 3.6875V10.0625C2.25 10.5803 2.66973 11 3.1875 11H9.5625C10.0803 11 10.5 10.5803 10.5 10.0625V3.6875C10.5 3.16973 10.0803 2.75 9.5625 2.75Z"
            stroke={currentLink === "/dashboard" ? "#E52621" : "#5B6477"}
            stroke-width="1.5"
            stroke-linejoin="round"
          />
          <path
            d="M20.8125 2.75H14.4375C13.9197 2.75 13.5 3.16973 13.5 3.6875V10.0625C13.5 10.5803 13.9197 11 14.4375 11H20.8125C21.3303 11 21.75 10.5803 21.75 10.0625V3.6875C21.75 3.16973 21.3303 2.75 20.8125 2.75Z"
            stroke={currentLink === "/dashboard" ? "#E52621" : "#5B6477"}
            stroke-width="1.5"
            stroke-linejoin="round"
          />
          <path
            d="M9.5625 14H3.1875C2.66973 14 2.25 14.4197 2.25 14.9375V21.3125C2.25 21.8303 2.66973 22.25 3.1875 22.25H9.5625C10.0803 22.25 10.5 21.8303 10.5 21.3125V14.9375C10.5 14.4197 10.0803 14 9.5625 14Z"
            stroke={currentLink === "/dashboard" ? "#E52621" : "#5B6477"}
            stroke-width="1.5"
            stroke-linejoin="round"
          />
          <path
            d="M20.8125 14H14.4375C13.9197 14 13.5 14.4197 13.5 14.9375V21.3125C13.5 21.8303 13.9197 22.25 14.4375 22.25H20.8125C21.3303 22.25 21.75 21.8303 21.75 21.3125V14.9375C21.75 14.4197 21.3303 14 20.8125 14Z"
            stroke={currentLink === "/dashboard" ? "#E52621" : "#5B6477"}
            stroke-width="1.5"
            stroke-linejoin="round"
          />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_15847_770">
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
