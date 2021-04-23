import React from "react";
import faker from "faker";

export default function Popup() {
  return (
    <div>
      <div className="pop-up hidden" id={"pop-up"}>
        <p className="pop-text">
          Someone from <span id="country"></span> just earned
          <br />
          <span id={"balance"}></span>
        </p>
      </div>
      <style jsx>{`
        .pop-up {
          bottom: 18px;
          left: 0;
          position: fixed;
          color: black;
          padding: 15px;
          margin: 2rem 1rem;
          --tw-bg-opacity: 1;
          background-color: #e8e8e8;
          font-style: normal;
          font-weight: 500;
          font-size: 14px;
          border-left-width: 4px;
          border-color: #cc1616;
          border-left-style: solid;
        }
        .hidden {
          display: none;
        }
      `}</style>
    </div>
  );
}
