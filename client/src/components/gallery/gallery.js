import React from "react";
import "./gallery.css";
import Img from "./final.jpg";
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBMask,
  MDBContainer
} from "mdbreact";

const CarouselPage = () => {
  return (
    <div
      className="backgroundimg1"
      style={{
        height: "90vh",
        backgroundImage: `url(${Img})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
      }}
    >
      <MDBContainer>
        <MDBContainer className="space-around">
          <div className="wrapper">
            <h1 className="neon head">Gallery</h1>
          </div>
        </MDBContainer>
        <MDBCarousel
          activeItem={1}
          length={3}
          showControls={true}
          showIndicators={true}
          className="z-depth-1"
        >
          <MDBCarouselInner>
            <MDBCarouselItem itemId="1">
              <div>
                <img
                  className="d-block w-100"
                  src="https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg"
                  alt="First slide"
                />
                <MDBMask overlay="black-light" />
              </div>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="2">
              <div>
                <img
                  className="d-block w-100"
                  src="https://mdbootstrap.com/img/Photos/Slides/img%20(6).jpg"
                  alt="Second slide"
                />
                <MDBMask overlay="black-strong" />
              </div>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="3">
              <div>
                <img
                  className="d-block w-100"
                  src="https://mdbootstrap.com/img/Photos/Slides/img%20(9).jpg"
                  alt="Third slide"
                />
                <MDBMask overlay="black-slight" />
              </div>
            </MDBCarouselItem>
          </MDBCarouselInner>
        </MDBCarousel>
      </MDBContainer>
    </div>
  );
};

export default CarouselPage;
