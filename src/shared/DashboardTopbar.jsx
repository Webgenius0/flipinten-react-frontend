import React from "react";
import UserAvatar from "@/assets/user-avatar.png";
import { Link, useLocation } from "react-router-dom";
import NotificationSVG from "@/components/SVG/NotificationSVG";
import toast from "react-hot-toast";

export default function DashboardTopbar() {
  const currentPathName = useLocation().pathname;
  console.log(currentPathName);

  return (
    <div className="w-full h-full flex justify-between items-center gap-10 px-[50px]">
      <div>
        <h2 className="text-black text-3xl font-semibold capitalize">
          {currentPathName === "/dashboard" ? (
            <span>Welcome back, Manoj Manju</span>
          ) : (
            <span>{currentPathName.split("/")[2].replace("-", " ")}</span>
          )}
        </h2>
      </div>

      <div className="flex items-center gap-6">
        <Link
          onClick={() => toast("Feature coming soon")}
          to={"#"}
          className="size-10 flex items-center justify-center border border-[#C1C4CC] rounded-lg bg-[#F5F6F7] cursor-pointer"
        >
          <NotificationSVG />
        </Link>

        <Link
          to={"/dashboard/profile-setting"}
          className="size-[50px] rounded-full"
        >
          <img src={UserAvatar} alt="User Image" />
        </Link>
      </div>
    </div>
  );
}
