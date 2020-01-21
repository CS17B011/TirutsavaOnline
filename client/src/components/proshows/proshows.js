import React from "react";
import Revanth from "./revanth.png";
import Zeph from "./zephyrtone.png";
import Gaurav from "./Untitled-1.png";
import { MDBRow, MDBCol, MDBIcon, MDBContainer } from "mdbreact";
import "./proshows.css";

const ProjectsPage = () => {
  return (
    <div>
      <MDBContainer>
        <section className="my-5">
          <h2 className="h1-responsive font-weight-bold text-center my-5">
            <MDBIcon icon="music" size="1x" className="pink-text" /> Pro Shows
          </h2>

          <MDBRow>
            <MDBCol lg="5" className="mb-lg-0 mb-5">
              <img
                src={Revanth}
                alt=""
                className="img-fluid rounded z-depth-1 adjustments1"
              />
            </MDBCol>
            <MDBCol lg="7">
              <MDBRow className="mb-3"></MDBRow>
              <MDBRow className="mb-3"></MDBRow>
              <MDBRow className="mb-3">
                <MDBCol md="1" size="2">
                  <MDBIcon far icon="star" size="2x" className="blue-text" />
                </MDBCol>
                <MDBCol md="11" size="10">
                  <h5 className="font-weight-bold mb-3">L.V. Revanth</h5>
                  <p className="grey-text">
                    {" "}
                    L. V. Revanth is an Indian playback singer, known for his
                    songs in Telugu films. He is the winner of Indian Idol
                    season 9 in 2017. He also won Rock Star, Spicy Singer on Maa
                    TV and Superstar of the South.
                  </p>
                </MDBCol>
                <MDBCol style={{ justifyContent: "center" }}>
                  <div className="buttons">
                    {" "}
                    <button className="bt-hover color-7">Register</button>
                  </div>
                </MDBCol>
              </MDBRow>
            </MDBCol>
          </MDBRow>
          <hr className="my-5" />
          <MDBRow>
            <MDBCol lg="7">
              <MDBRow className="mb-3"></MDBRow>
              <MDBRow className="mb-3">
                <MDBCol md="1" size="2">
                  <MDBIcon far icon="star" size="2x" className="blue-text" />
                </MDBCol>
                <MDBCol md="11" size="10">
                  <h5 className="font-weight-bold mb-3">Zephyrtone</h5>
                  <p className="grey-text">
                    Launched in 2015, Zephyrtone is one of the youngest and
                    fastest rising electronic acts, comprising of the producer +
                    vocalist duo – Sayan and Zephyr. They grew up listening to a
                    lot of pop and electronic music and were influenced by
                    artists like Avicii, Zedd, and Krewella. Their journey
                    started with them producing covers of their favourite
                    artists such as Coldplay, Guns N Roses and Zedd, to name a
                    few.
                  </p>
                </MDBCol>
                <MDBCol style={{ justifyContent: "center" }}>
                  <div className="buttons">
                    {" "}
                    <button className="bt-hover color-7">Register</button>
                  </div>
                </MDBCol>
              </MDBRow>
            </MDBCol>
            <MDBCol lg="5">
              <img
                src={Zeph}
                alt=""
                className="img-fluid rounded z-depth-1 adjustments2"
              />
            </MDBCol>
          </MDBRow>
          <hr className="my-5" />
          <MDBRow>
            <MDBCol lg="5" className="mb-lg-0 mb-5">
              <img
                src={Gaurav}
                alt=""
                className="img-fluid rounded z-depth-1 adjustments1"
              />
            </MDBCol>
            <MDBCol lg="7">
              <MDBRow className="mb-3"></MDBRow>
              <MDBRow className="mb-3"></MDBRow>
              <MDBRow className="mb-3">
                <MDBCol md="1" size="2">
                  <MDBIcon far icon="star" size="2x" className="blue-text" />
                </MDBCol>
                <MDBCol md="11" size="10">
                  <h5 className="font-weight-bold mb-3">Gaurav Mehta</h5>
                  <p className="grey-text">
                    Gaurav Mehta has proven to be one of the major forerunners
                    in kindling and propagating the Dance Music Culture in
                    Hyderabad.Gaurav has amassed a large fan base of club goers
                    and party enthusiasts, who love him for the innovative sets
                    that he belts out week after week.
                  </p>
                </MDBCol>
                <MDBCol style={{ justifyContent: "center" }}>
                  <div className="buttons">
                    {" "}
                    <button className="bt-hover color-7">Register</button>
                  </div>
                </MDBCol>
              </MDBRow>
            </MDBCol>
          </MDBRow>
        </section>
      </MDBContainer>
    </div>
  );
};

export default ProjectsPage;
