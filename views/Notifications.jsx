import React from "react";
import DashboardLayout from "./_layouts/DashboardLayout";

export default function Notifications(props) {
  console.log(props);
  return <DashboardLayout title="Notifications" {...props}></DashboardLayout>;
}
