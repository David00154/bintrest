import React from "react";
import DashboardLayout from "./_layouts/DashboardLayout";
// import Notification from "../models/notifications.model";
import Notifis from "./components/admin/Notifications";

const Loop = (props) => {
  // console.log(props);
  // for (let i = 0; i < props.notifications.length; i++) {
  //   // const element = array[index];
  //   return <Notifis key={i} _doc={props.notifications[i]} />;
  // }
  return (
    <div className="">
      {props.notifications.map((x, i) => {
        return <Notifis key={i} _doc={x} />;
      })}
    </div>
  );
};

export default function Notifications(props) {
  // console.log(props.notifications[0]["date"].toString());
  return (
    <DashboardLayout title="Notifications" {...props}>
      <span className="font-semibold text-2xl mb-3 mb-5 inline-block">
        Notifications
      </span>
      {props.notifications.length > 0 ? (
        <div>
          {/* {props.notifications.map((x, i) => {
            return <Notifis {...props} key={i} _index={i} {...x} />;
          })} */}
          <Loop notifications={props.notifications} />
        </div>
      ) : (
        <div></div>
      )}
    </DashboardLayout>
  );
}

// console.log(Notifis());
