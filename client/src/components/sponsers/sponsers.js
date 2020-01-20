import React from "react";
import Image from "./tirutsava.png";

import List from "./lists/list";
import "./sponsers.css";

import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

export default function Sponsers() {
  return (
    <>
      <div
        style={{
          backgroundColor: "#1e1534",
          minHeight: "100vh",
          height: "100%"
        }}
      >
        <div
          style={{
            borderBottom: "2px solid #e83350",
            paddingTop: "5px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "15vh"
          }}
        >
          <h1
            className="main-title  text-center fnt"
            style={{
              paddingLeft: "20px",
              paddingBottom: "40px",
              position: "relative",
              bottom: "5vh",
              fontWeight: "700",
              textTransform: "uppercase",
              color: "#ffffff"
            }}
          >
            sponsors
          </h1>
        </div>
        <MDBContainer>
          <MDBRow>
            <MDBCol>
              <img src={Image} alt="" className="img-fluid" />
            </MDBCol>
          </MDBRow>
        </MDBContainer>

        <List />
      </div>
    </>
  );
}
