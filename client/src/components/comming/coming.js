import React from "react";
import "./page.css";
import Logo from "./logo.png";

export default function Page() {
  return (
    <div
      style={{
        height: "90vh"
      }}
      className="cover"
    >
      <img src={Logo} alt="" className="hammer" />
      <div class="logo">
        <b>
          C<span>o</span>m<span>in</span>g<br />S<span>o</span>o<span>n</span>
        </b>
      </div>
    </div>
  );
}
