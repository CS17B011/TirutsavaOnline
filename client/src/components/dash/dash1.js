import React, { Component } from "react";
import "./dash.css";
import Profile from "./profile/profile";
import Event from "./event/event";
import axios from 'axios';

export default class Dash1 extends Component {

  state = {
      route: "profile",
      render: <Profile />
    }


  componentDidMount() {
    axios.get('/auth/status')
      .then(res => {
        if (!res.data.loggedin)
        {
          localStorage.removeItem('loggedin');
          window.location.href = 'http://tirutsava.com/login'; //'http://tirutsava.com/login'
        }
      })
  }
  
  
  logout = (e) => {
    e.preventDefault();
    axios.get('/auth/logout')
      .then(res => {
        localStorage.removeItem('loggedin');
        window.location.href = 'http://tirutsava.com';//'http:tirutsava.com'
      });
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
              <span onClick={() => this.handleChange("comming")}>Accomodation</span>
            </li>

            <li className="users">
              <span onClick={this.logout}>Log Out</span>
            </li>
          </ul>
        </nav>
        {this.state.render}
      </>
    );
  }
}
