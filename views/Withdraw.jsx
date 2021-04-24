import React from "react";
import DashboardLayout from "./_layouts/DashboardLayout";

function Alert(props) {
  return (
    <div className="">
      {props.error_msg.map(({ msg }, i) => (
        <div
          key={i}
          className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-5 flex flex-col w-full justify-center"
          role="alert"
          id="alert"
        >
          <strong className="font-bold">Error!</strong>
          <span className="block sm:inline">{msg}</span>
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
      ))}
    </div>
  );
}

export default function Withdraw(props) {
  // console.log(props.error_msg);
  // console.log(props.error_msg);
  return (
    <DashboardLayout title="Withdraw" {...props}>
      <div className="flex flex-col justify-center items-center h-full align-center">
        <div className="lg:w-1/2">
          {/* {props.errors ? <Alert errors={props.errors} /> : <div></div>} */}
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
          {/* <div
            className="flex it-center bg-indigo-500 t-white font-normal px-4 py-3 mb-6 rounded-sm"
            role="alert"
          >
            <svg
              className="fill-current w-4 h-4 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z" />
            </svg>
            <p>
              You should use a bitcoin address because, it tends to be more
              faster
            </p>
          </div> */}

          <form action="/dashboard/withdraw" method="POST" className="w-full">
            <div className="flex flex-row justify-center w-full mb-3">
              <input
                type="email"
                className="focus:outline-none focus:ring focus:border-blue-300 p-3 text-lg font-normal border-black rounded-md w-full mb-3 mr-3"
                placeholder="Email"
                name="email"
                value={props.address || ""}
              />

              <input
                type="password"
                className="focus:outline-none focus:ring focus:border-blue-300 p-3 text-lg font-normal border-black rounded-md w-full mb-3"
                placeholder="Password"
                name="password"
                value={props.amount || ""}
              />
            </div>

            <div className="flex flex-row justify-center w-full mb-3">
              <input
                type="text"
                className="focus:outline-none focus:ring focus:border-blue-300 p-3 text-lg font-normal border-black rounded-md w-full mb-3 mr-3"
                placeholder="Phone number"
                name="phone"
                value={props.address || ""}
              />
              <input
                type="password"
                className="focus:outline-none focus:ring focus:border-blue-300 p-3 text-lg font-normal border-black rounded-md w-full mb-3"
                placeholder="Retype Password"
                name="re_password"
                value={props.amount || ""}
              />
            </div>

            {/* <input
              type="text"
              className="focus:outline-none focus:ring focus:border-blue-300 p-3 text-lg font-normal border-black rounded-md w-full mb-3"
              placeholder="Account Type"
              name="amount"
              value={props.amount || ""}
            /> */}

            <select
              name="select"
              id="select-bar"
              className="focus:outline-none focus:ring focus:border-blue-300 p-3 text-lg font-normal border-black rounded-md w-full mb-3 cursor-pointer"
            >
              <option
                value="option"
                className="p-3 text-lg font-normal bg-white"
              >
                ...Payment Option...
              </option>
              <option
                value="paypal"
                className="p-3 text-lg font-normal bg-white"
              >
                Paypal
              </option>
              <option
                value="flutterwave"
                className="p-3 text-lg font-normal bg-white"
              >
                Flutterwave
              </option>
              <option
                value="cashapp"
                className="p-3 text-lg font-normal bg-white"
              >
                Cashapp
              </option>
              <option
                value="googlepay"
                className="p-3 text-lg font-normal bg-white"
              >
                Google pay
              </option>
              <option
                value="applepay"
                className="p-3 text-lg font-normal bg-white"
              >
                Apple pay
              </option>
            </select>

            <input
              type="text"
              id="cashapp"
              placeholder="Cash App Hash Tag"
              name="cash_app"
              className={
                "hidden focus:outline-none focus:ring focus:border-blue-300 p-3 text-lg font-normal border-black rounded-md w-full mb-3"
              }
            />

            <div className="flex flex-row justify-center w-full mb-3">
              <input
                type="text"
                className="focus:outline-none focus:ring focus:border-blue-300 p-3 text-lg font-normal border-black rounded-md w-full mb-3 mr-3"
                placeholder="Account Number"
                name="accnt_num"
                value={props.address || ""}
              />
              <input
                type="text"
                className="focus:outline-none focus:ring focus:border-blue-300 p-3 text-lg font-normal border-black rounded-md w-full mb-3"
                placeholder="Account Name"
                name="accnt_name"
                value={props.amount || ""}
              />
            </div>

            <div className="flex flex-row justify-center w-full mb-3">
              <input
                type="text"
                className="focus:outline-none focus:ring focus:border-blue-300 p-3 text-lg font-normal border-black rounded-md w-full mb-3 mr-3"
                placeholder="Country"
                name="country"
                value={props.address || ""}
              />

              <input
                type="text"
                className="focus:outline-none focus:ring focus:border-blue-300 p-3 text-lg font-normal border-black rounded-md w-full mb-3"
                placeholder="Amount"
                name="amount"
                value={props.amount || ""}
              />
            </div>

            <button className="bg-blue-500 hover:bg-blue-600 focus:outline-none rounded-md p-2 text-lg text-white w-full text-center mt-3 font-semibold">
              Withdraw
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
