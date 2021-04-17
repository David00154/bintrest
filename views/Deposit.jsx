import React from "react";
import DashboardLayout from "./_layouts/DashboardLayout";

export default function Deposit(props) {
  return (
    <DashboardLayout {...props}>
      <div className="flex flex-row justify-center items-center h-full align-center">
        <div className="p-3 border-blue-300 w-1/2 text-lg font-medium">
          BTC Address
        </div>
      </div>
    </DashboardLayout>
  );
}
