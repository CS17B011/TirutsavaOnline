import React from "react";

import Logo from "./logo.png";

export default function Page() {
  return (
    <div>
      <img src={Logo} alt="" className="hammer" />
      <div class="logo" style={{ marginBottom: "0" }}>
        <b>
          <span> 4</span>
          <span>0</span>
          <span>4</span>
          <br />
          <div style={{ fontSize: "50px", fontFamily: "Comic Sans MS" }}>
            <span>N</span>
            <span>o</span>
            <span>t</span>
            <span> F</span>
            <span>o</span>
            <span>u</span>
            <span>n</span>
            <span>d</span>
          </div>
        </b>
      </div>
    </div>
  );
}
