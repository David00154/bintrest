import React from "react";
import DashboardLayout from "./_layouts/DashboardLayout";

export default function Deposit(props) {
  return (
    <DashboardLayout title="Deposit" {...props}>
      <div className="flex flex-row justify-center h-60 align-center w-full items-center">
        <div className="flex flex-col w-full lg:w-2/3">
          <div className="p-2 lg:p-3 bg-white border-blue-300 lg:w-2/3 text-lg font-medium">
            BTC Address
          </div>
          <button className="focus:outline-none my-3 lg:w-2/3 rounded-md p-1 bg-blue-500 flex flex-row justify-center hover:bg-blue-300 text-white font-medium text-lg">
            Copy
          </button>
        </div>
      </div>
    </DashboardLayout>
  );
}
