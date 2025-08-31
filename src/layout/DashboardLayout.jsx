import React from "react";
import { Outlet } from "react-router-dom";
import DashboardSidebar from "@/shared/DashboardSidebar";
import DashboardTopbar from "@/shared/DashboardTopbar";

export default function DashboardLayout() {
  return (
    <main className="w-full h-screen flex">
      <div className="w-[320px] h-screen">
        <DashboardSidebar />
      </div>

      <div className="w-[calc(100%-320px)] h-screen overflow-y-scroll custom-scrollbar">
        {/* Dashboard Topbar */}
        <div className="w-full h-[105px]">
          <DashboardTopbar />
        </div>

        <div className="w-full h-[calc(100%-105px)] bg-[#F6F6F6] p-6">
          <Outlet />
        </div>
      </div>
    </main>
  );
}
