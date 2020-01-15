import React, { Component } from "react";
import "./dash.css";
import Profile from "./profile/profile";
import Event from "./event/event";

export default class Dash1 extends Component {
  constructor() {
    super();
    this.state = {
      route: "profile",
      render: <Profile />
    };
  }
  handleChange = route => {
    if (route === "profile") {
      this.setState({ render: <Profile /> });
    } else if (route === "events") {
      this.setState({ render: <Event /> });
    } else {
      this.setState({
        render: (
          <main role="main">
            <h1 className="text1 text-center">COMING SOON</h1>
            <h3 className="uc  text-center">Under Construction!</h3>{" "}
          </main>
        )
      });
    }
    this.setState({ route: route });
  };
  render() {
    return (
      <>
        <nav role="navigation" style={{ zIndex: "1000" }}>
          <ul className="main">
            <h4 style={{ padding: "5px" }} className="text-center">
              Welcome to Your Dashboard
            </h4>

            <li className="dashboard">
              <span onClick={() => this.handleChange("profile")}>Profile</span>
            </li>
            <li className="write">
              <span onClick={() => this.handleChange("events")}>Events</span>
            </li>
            <li className="edit">
              <span onClick={() => this.handleChange("comming")}>xyz</span>
            </li>

            <li className="users">
              <span>Log Out</span>
            </li>
          </ul>
        </nav>
        {this.state.render}
      </>
    );
  }
}
