import React from "react";
import "./home.css";
import Logo from "./logo.png";
import Image from "./hills.png";
import schedu from "./schedule.jpeg";

export default class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      route: "home"
    };
  }
  onRouteChange = () => {
    if (this.state.route === "home") {
      this.setState({ route: "schedule" });
    } else if (this.state.route === "schedule") {
      this.setState({ route: "home" });
    }
    //console.log(this.state.route);
  };
  render() {
    return (
      <div className="body-home">
        <div
          className="buttons"
          style={{
            bottom: 0,
            // left: 0,
            position: "fixed",
            zIndex: "1001",
            margin: 0,
            opacity: ".9"
          }}
          onClick={this.onRouteChange}
        >
          {" "}
          <button style={{ bottom: 0 }} className="bt-hover color-7">
            {this.state.route === "home" ? "Schedule" : "Go Back"}
          </button>
        </div>
        {this.state.route === "home" ? (
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
                alt={"Tirutsava Logo"}
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
              alt={"Tirutsava Pic"}
            />
          </div>
        ) : (
          <div
            style={{
              top: "10vh",
              height: "90vh",
              width: "100vw",
              height: "90vh"
            }}
          >
            <img style={{ width: "100%", maxHeight: "100%" }} src={schedu} />
          </div>
        )}
      </div>
    );
  }
}
