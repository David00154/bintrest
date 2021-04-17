import React from "react";

export default function Cta(props) {
  return (
    <div>
      <section
        id="cta"
        style={{
          background: `linear-gradient(rgba(2, 2, 2, 0.5), rgba(0, 0, 0, 0.5)), url('${props.url}') fixed center center`,
        }}
        className="cta"
      >
        <div className="" data-aos="zoom-in">
          {props.children}
        </div>
      </section>
    </div>
  );
}
