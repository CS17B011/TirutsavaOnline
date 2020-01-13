import React, { Component } from "react";

import "./Register.css";

class Googleregister extends Component {
  constructor() {
    super();
    this.state = {
      college: "",
      name: "",
      city: "",
      statename: "",
      phoneNo: ""
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    console.log("Submission success");

    const userData = {
      college: this.state.college,
      name: this.state.name,
      city: this.state.city,
      state: this.state.statename,
      phoneNo: this.state.phoneNo
    };
    this.setState({
      college: "",
      name: "",
      city: "",
      statename: "",
      phoneNo: ""
    });
    console.log(userData);
  };

  responseGoogle = response => {
    console.log(response);
  };

  render() {
    return (
      <div className="login">
        <h1>REGISTER WTH GOOGLE</h1>
        <div className="login-page reg">
          <div className="box1"></div>
          <div className="box2 box2scroll">
            <div className="label ">
              <span className="big">N</span>
              <span className="normal">AME</span>
            </div>

            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            ></input>

            <div className="label ">
              <span className="big">C</span>
              <span className="normal">OLLEGE</span>
            </div>

            <input
              type="text"
              name="college"
              value={this.state.college}
              onChange={this.handleChange}
            ></input>

            <div className="label ">
              <span className="big">C</span>
              <span className="normal">ITY</span>
            </div>
            <input
              type="text"
              name="city"
              value={this.state.city}
              onChange={this.handleChange}
            ></input>

            <div className="label ">
              <span className="big">S</span>
              <span className="normal">TATE</span>
            </div>
            <input
              type="text"
              name="statename"
              value={this.state.statename}
              onChange={this.handleChange}
            ></input>

            <div className="label ">
              <span className="big">P</span>
              <span className="normal">HONE NO</span>
            </div>
            <input
              type="number"
              name="phoneNo"
              value={this.state.phoneNo}
              onChange={this.handleChange}
            ></input>

            <div className="buttons buttons1 ">
              {" "}
              <button className="btn-hover color-1" onClick={this.handleSubmit}>
                REGISTER
              </button>
            </div>

            {/* <div className="buttons">
            {" "}
            <button className="btn-hover color-1">
              <GoogleLogin
                clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
                buttonText="Login"
                onSuccess={this.responseGoogle}
                onFailure={this.responseGoogle}
                cookiePolicy={"single_host_origin"}
              />
            </button>
          </div> */}
          </div>

          <div className="box1"></div>
        </div>
      </div>
    );
  }
}

export default Googleregister;
