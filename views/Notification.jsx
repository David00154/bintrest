import React from "react";
import DashboardLayout from "./_layouts/DashboardLayout";

export default function Notification(props) {
  //   console.log(props);
  return (
    <DashboardLayout title={props.topic} {...props}>
      <div>
        {/* <span className="font-semibold text-2xl mb-3 mb-5 inline-block">
        Notifications
      </span> */}
        <div className="bg-gray-100 mb-5">
          <div className="bg-white px-4 py-3 rounded-lg shadow-md w-full">
            <div className="flex items-center justify-between">
              <a
                href="/dashboard/notifications"
                className="bg-blue-500 text-white flex flex-row justify-center items-center font-semibold text-sm p-2 focus:outline-none rounded-md"
              >
                Back
              </a>
              <button className="bg-gray-200 p-2 rounded-full focus:outline-none">
                <svg className="h-3 w-3 fill-current" viewBox="0 0 20 20">
                  <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
                </svg>
              </button>
            </div>
            <div className="flex items-center mt-3 rounded-lg px-1 py-1 cursor-pointer">
              <div className="ml-3 flex-1">
                <span className="lg:text-lg text-sm font-semibold mb-1">
                  {props.content}
                </span>
                <br />
                <span className="text-sm text-blue font-semibold">
                  {props.date.toGMTString()}
                </span>
              </div>
              <div>
                <svg
                  viewBox="0 0 8 8"
                  fill="currentColor"
                  className="h-4 w-4 text-blue"
                >
                  <circle cx="4" cy="4" r="3"></circle>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <style jsx>{`
          .text-blue {
            color: #1876f2;
          }
        `}</style>
      </div>
    </DashboardLayout>
  );
}
