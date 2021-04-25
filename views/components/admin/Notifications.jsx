import React from "react";

export default function Notifis(props) {
  console.log(props);
  return (
    <div>
      {/* <span className="font-semibold text-2xl mb-3 mb-5 inline-block">
        Notifications
      </span> */}
      <div className="bg-gray-100 mb-5">
        <div className="bg-white px-4 py-3 rounded-lg shadow-md w-full">
          <div className="flex items-center justify-between">
            <a
              href={"/dashboard/notification/" + props._doc._id}
              className="bg-blue-500 text-white flex flex-row justify-center items-center font-semibold text-sm p-2 focus:outline-none rounded-md"
            >
              Open
            </a>
            <button className="bg-gray-200 p-2 rounded-full focus:outline-none">
              <svg className="h-3 w-3 fill-current" viewBox="0 0 20 20">
                <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
              </svg>
            </button>
          </div>
          <div className="flex items-center mt-3 rounded-lg px-1 py-1 cursor-pointer">
            <div className="flex flex-shrink-0 items-end">
              {/* <img
                className="h-16 w-16 rounded-full"
                src="https://drive.google.com/uc?id=1mNQj7dO9Y_2pe8HEljojHm9iLmt6iHvh"
              /> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="28"
                viewBox="0 0 24 24"
                width="28"
                className="fill-current mr-3 hover:text-blue-500"
              >
                <path d="M0 0h24v24H0z" fill="none" />
                <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6z" />
              </svg>
            </div>
            <div className="ml-3 flex-1">
              <span className="lg:text-lg text-sm font-medium mb-1">
                From Bintrest Trade:
              </span>
              <p className="lg:text-lg text-sm font-medium mb-1">
                Subject: {props._doc.topic}
              </p>
              <span className="text-sm text-blue font-semibold">
                {props._doc.date.toGMTString()}
              </span>
            </div>
            <div>
              <svg
                viewBox="0 0 8 8"
                fill="currentColor"
                className={`h-4 w-4 ${
                  props._doc.opened == true ? "text-green-500" : "text-red-500"
                }`}
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
  );
}
