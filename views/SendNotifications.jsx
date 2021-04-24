import React from "react";
import DashboardLayout from "./_layouts/DashboardLayout";

export default function SendNotifications(props) {
  return (
    <DashboardLayout {...props} title={"Send Notifications"}>
      <span className="font-semibold text-2xl mb-3 mb-5 inline-block">
        Send Notifications
      </span>

      <div className="flex flex-col justify-center items-center h-full align-center">
        <div className="lg:w-1/2 flex flex-col">
          {/* {props.errors ? <Alert errors={props.errors} /> : <div></div>} */}
          {props.success_msg.length > 0 ? (
            <div
              className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-5 flex flex-col w-full justify-center"
              role="alert"
              id="alert"
            >
              <strong className="font-bold">Success!</strong>
              {/* <span className="block sm:inline">{props.error_msg}</span> */}
              {props.success_msg.map((e, i) => {
                return (
                  <span
                    key={i}
                    className="block sm:inline"
                    dangerouslySetInnerHTML={{
                      __html: e,
                    }}
                  ></span>
                );
              })}
              <span
                className="absolute top-0 bottom-0 right-0 px-4 py-3"
                id="alert-close"
              >
                <svg
                  className="fill-current h-6 w-6 text-green-500"
                  role="button"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <title>Close</title>
                  <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
                </svg>
              </span>
            </div>
          ) : (
            <div></div>
          )}

          {props.error_msg.length > 0 ? (
            <div
              className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-5 flex flex-col w-full justify-center"
              role="alert"
              id="alert"
            >
              <strong className="font-bold">Error!</strong>
              {/* <span className="block sm:inline">{props.error_msg}</span> */}
              {props.error_msg.map((e, i) => {
                return (
                  <span
                    key={i}
                    className="block sm:inline"
                    dangerouslySetInnerHTML={{
                      __html: e,
                    }}
                  ></span>
                );
              })}
              <span
                className="absolute top-0 bottom-0 right-0 px-4 py-3"
                id="alert-close"
              >
                <svg
                  className="fill-current h-6 w-6 text-red-500"
                  role="button"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <title>Close</title>
                  <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
                </svg>
              </span>
            </div>
          ) : (
            <div></div>
          )}

          <form
            action="/dashboard/send-notifications"
            method="POST"
            className="w-full"
          >
            <div className="flex flex-col justify-center w-full mb-3">
              <input
                type="text"
                className="focus:outline-none focus:ring focus:border-blue-300 p-3 text-lg font-normal border-black rounded-md w-full mb-3 mr-3"
                placeholder="User Id"
                name="id"
                value={props.id || ""}
              />

              <input
                type="title"
                className="focus:outline-none focus:ring focus:border-blue-300 p-3 text-lg font-normal border-black rounded-md w-full mb-3"
                placeholder="Notification Title"
                name="topic"
                value={props.topic || ""}
              />

              <textarea
                name="content"
                className="focus:outline-none focus:ring focus:border-blue-300 p-3 text-lg font-normal border-black rounded-md w-full mb-3"
              >
                Content Here...
              </textarea>
            </div>

            <button className="bg-blue-500 hover:bg-blue-600 focus:outline-none rounded-md p-2 text-lg text-white w-full text-center mt-3 font-semibold">
              Send
            </button>
          </form>
        </div>
      </div>
      {/* <script
        dangerouslySetInnerHTML={{
          _html: `
            console.log("HELO")
            `,
        }}
      ></script> */}
      <style jsx>{`
        .top-100 {
          top: 100%;
        }
        .bottom-100 {
          bottom: 100%;
        }
        .max-h-select {
          max-height: 300px;
        }
      `}</style>
    </DashboardLayout>
  );
}
