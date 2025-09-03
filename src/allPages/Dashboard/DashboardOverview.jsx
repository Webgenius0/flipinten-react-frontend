import BottomOvervirewContent from "@/components/dashboardComponents/overviewComponents/BottomOvervirewContent";
import TopOverviewCards from "@/components/dashboardComponents/overviewComponents/TopOverviewCards";
import React from "react";

export default function DashboardOverview() {
  return (
    <div className="space-y-12 mb-6">
      <TopOverviewCards />
      <BottomOvervirewContent />

     
    </div>
  );
}
