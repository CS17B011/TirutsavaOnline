import React from "react";
import "./home.css";
import Logo from "./logo.png";
import Image from "./hills.png";

export default function home() {
  return (
    <div className="body-home">
      <div>
        <div className="night">
          <div className="shooting_star"></div>
          <div className="shooting_star"></div>
          <div className="shooting_star"></div>
          <div className="shooting_star"></div>
          <div className="shooting_star"></div>
          <div className="shooting_star"></div>
          <div className="shooting_star"></div>
          <div className="shooting_star"></div>
          <div className="shooting_star"></div>
          <div className="shooting_star"></div>
          <div className="shooting_star"></div>
          <div className="shooting_star"></div>
          <div className="shooting_star"></div>
        </div>
        <div>
          <img
            src={Logo}
            style={{
              backgroundSize: "cover",
              maxWidth: "100vw",
              position: "absolute",
              left: "0",
              right: "0",
              top: "10%",
              bottom: "0",
              zIndex: "1000",
              maxHeight: "90vh",
              width: "100%"
            }}
          />
        </div>

        <img
          src={Image}
          style={{
            backgroundSize: "cover",
            position: "fixed",
            left: "0",
            right: "0",
            bottom: "0",

            width: "100%",
            minHeight: "500px",
            marginBottom: "0"
          }}
        />
      </div>
    </div>
  );
}
