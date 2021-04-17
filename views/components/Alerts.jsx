import React from "react";

function Errors(props) {
  console.log(props.errors);
  return (
    <div className="">
      {props.errors.map((err, i) => {
        return (
          <div
            key={i}
            className="alert alert-warning alert-dismissible fade show mb-3"
            role="alert"
          >
            {/* <strong>Holy guacamole!</strong> */}
            {err.msg}
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="alert"
              aria-label="Close"
            ></button>
          </div>
        );
      })}
    </div>
  );
}

function SuccessAlert(props) {
  //   console.log(props.msg);
  return (
    <div>
      {props.msg.map((msg, i) => {
        console.log(msg);
        return (
          <div
            key={i}
            className="alert alert-success alert-dismissible fade show mb-3"
            role="alert"
          >
            {/* <strong>Holy guacamole!</strong> */}
            {msg}
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="alert"
              aria-label="Close"
            ></button>
          </div>
        );
      })}
    </div>
  );
}

function ErrorAlert(props) {
  //   console.log(props.msg);
  return (
    <div>
      {props.error.map((msg, i) => {
        {
          /* console.log(msg); */
        }
        return (
          <div
            key={i}
            className="alert alert-warning alert-dismissible fade show mb-3"
            role="alert"
          >
            {/* <strong>Holy guacamole!</strong> */}
            {msg}
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="alert"
              aria-label="Close"
            ></button>
          </div>
        );
      })}
    </div>
  );
}

function Error_Msg_Alert(props) {
  //   console.log(props.msg);
  return (
    <div>
      {props.error.map((msg, i) => {
        // console.log(7, msg);
        return (
          <div
            key={i}
            className="alert alert-warning alert-dismissible fade show mb-3"
            role="alert"
          >
            {/* <strong>Holy guacamole!</strong> */}
            {msg}
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="alert"
              aria-label="Close"
            ></button>
          </div>
        );
      })}
    </div>
  );
}

export default function Alerts(props) {
  console.log(props);
  // console.log(5, props.error_msg, typeof props.error_msg);
  if (props.errors) {
    return <Errors errors={props.errors} />;
  } else if (props.error.length !== 0) {
    // console.log(typeof props.error);
    // console.log(1, props.error);
    return <ErrorAlert error={props.error} />;
  } else if (props.success_msg.length != 0) {
    console.log(props.success_msg);
    return <SuccessAlert msg={props.success_msg} />;
  } else if (props.error_msg.length !== 0) {
    // console.log(2, props.error_msg);
    return <Error_Msg_Alert error={props.error_msg} />;
  } else {
    return <div className=""></div>;
  }
  // return <div className=""></div>;
}
