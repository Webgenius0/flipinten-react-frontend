import React from "react";
import { useLocation } from "react-router-dom";

export default function DashboardAnnounementsSVG() {
  const currentLink = useLocation().pathname;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
    >
      <path
        d="M13 17.1429V19.382C13 20.1253 12.2177 20.6088 11.5528 20.2764L7.55279 18.2764C7.214 18.107 7 17.7607 7 17.382V14.5"
        stroke={
          currentLink === "/dashboard/announcements" ? "#E52621" : "#5B6477"
        }
        stroke-width="1.5"
        stroke-linejoin="round"
      />
      <path
        d="M7.5 14.4974V8.5"
        stroke={
          currentLink === "/dashboard/announcements" ? "#E52621" : "#5B6477"
        }
        stroke-width="1.5"
        stroke-linejoin="round"
      />
      <path
        d="M7.5 8.49999H5C3.89543 8.49999 3 9.39542 3 10.5V12.5C3 13.6046 3.89543 14.5 5 14.5H7.5L16.7554 18.4666C17.5071 18.7888 18.3949 18.633 18.8995 17.9894C20.0464 16.5265 21 14.4901 21 11.5C21 8.50994 20.0464 6.47353 18.8995 5.01057C18.3949 4.36696 17.5071 4.21123 16.7554 4.53338L7.5 8.49999Z"
        stroke={
          currentLink === "/dashboard/announcements" ? "#E52621" : "#5B6477"
        }
        stroke-width="1.5"
        stroke-linejoin="round"
      />
    </svg>
  );
}
