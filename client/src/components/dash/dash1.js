import React, { Component } from "react";
import "./dash.css";
import Profile from "./profile/profile";
import Event from "./event/event";
import axios from 'axios';

export default class Dash1 extends Component {

  componentDidMount() {
    axios.get('http://localhost:80/auth/dashboard', {withCredentials: true}).then(
      data => {
        console.log(data);
        this.setState({
          data : data.person,
          events: data.events
        });
      }
    )
    .catch(err => console.log(err));
  }

  constructor() {
    super();
    this.state = {
      data: {},
      events: []
    };
    this.state.route = "profile";
    this.state.render = <Profile person={this.state.data} />;
    
    
    /*
    this.data = {
      name: "Nandha",
      phonenum: "9965852345",
      state: "Andhara Pradesh",
      email: "cs17b021@iittp.ac.in",
      college: "IITTP"
    };
    this.events = [
      {name: "1",type:"s1", eventId:"1"}
    ];
    */

  }
  handleChange = route => {
    if (route === "profile") {
      this.setState({ render: <Profile person={this.state.data}/> });
    } else if (route === "events") {
      this.setState({ render: <Event events={this.state.events}/> });
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
