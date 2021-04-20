import React from "react";
import DashboardLayout from "./_layouts/DashboardLayout";
// import Notification from "../models/notifications.model";
import Notifis from "./components/admin/Notifications";

export default function Notifications(props) {
  // console.log(props.notifications[0]["date"].toString());
  return (
    <DashboardLayout title="Notifications" {...props}>
      <span className="font-semibold text-2xl mb-3 mb-5 inline-block">
        Notifications
      </span>
      {props.notifications.length > 0 ? (
        <div>
          {props.notifications.map((x, i) => {
            return <Notifis key={i} {...x} />;
          })}
        </div>
      ) : (
        <div></div>
      )}
    </DashboardLayout>
  );
}

// console.log(Notifis());
