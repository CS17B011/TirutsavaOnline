import React, { Component } from "react";

import "./Register.css";

class Googleregister extends Component {
  constructor() {
    super();
    this.state = {
      gender: "Male",
      college: "IIT Tiupati",
      name: "",
      city: "Tirupati",
      statename: "Andhra Pradesh",
      phoneNo: "",
      collegeinlist: true
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSelect = e => {
    this.setState({ college: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    //console.log("Submission success");

    const userData = {
      gender: this.state.gender,
      college: this.state.college,
      name: this.state.name,
      city: this.state.city,
      state: this.state.statename,
      phoneNo: this.state.phoneNo
    };
    // this.setState({
    //   email: "",
    //   password: "",
    //   college: "",
    //   name: "",
    //   city: "",
    //   statename: "",
    //   phoneNo: ""
    // });
    //console.log(userData);
  };

  responseGoogle = response => {
    //console.log(response);
  };

  render() {
    let classmod = 1;
    this.state.collegeinlist ? (classmod = 1) : (classmod = 0);
    return (
      <div className="login">
        <h1>REGISTER</h1>
        <div className="login-page reg">
          <div className="box1"></div>
          <div className="box2 box2scroll">
            <form onSubmit={this.handleSubmit}>
              <div className="label ">
                <span className="big">N</span>
                <span className="normal">AME</span>
              </div>

              <input
                type="text"
                name="name"
                required
                value={this.state.name}
                onChange={this.handleChange}
              ></input>

              <div className="label ">
                <span className="big">G</span>
                <span className="normal">ENDER</span>
              </div>

              <select name="gender" onChange={this.handleChange} required>
                <option selected value="Male">
                  Male
                </option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>

              <div className="label ">
                <span className="big">C</span>
                <span className="normal">OLLEGE</span>
              </div>

              {/* 

            <input
              type="text"
              name="college"
              value={this.state.college}
              onChange={this.handleChange}
            ></input> */}

              <select
                name="college"
                className={this.state.collegeinlist ? "showit" : "dontshow"}
                onChange={this.handleChange}
                required
              >
                <option selected value="IIT Tirupati">
                  IIT Tirupati
                </option>
                <option value="lime">Lime</option>
                <option value="coconut">Coconut</option>
              </select>
              <button
                style={{
                  width: "70%",
                  marginLeft: "10%",
                  borderRadius: "15px",
                  marginTop: "2vh",
                  marginBottom: "2vh"
                }}
                className="btn-hover color-1"
                onClick={() => this.setState({ collegeinlist: false })}
              >
                Can't find your college?
              </button>
              <input
                type="text"
                name="college"
                required
                value={this.state.college}
                onChange={this.handleChange}
                className={this.state.collegeinlist ? "dontshow" : "showit"}
              ></input>

              <div className="label ">
                <span className="big">C</span>
                <span className="normal">ITY</span>
              </div>

              <select name="city" onChange={this.handleChange} required>
                <option selected value="Tirupati">
                  Tirupati
                </option>
                <option value="lime">Lime</option>
                <option value="coconut">Coconut</option>
              </select>
              {/* <input
              type="text"
              name="city"
              value={this.state.city}
              onChange={this.handleChange}
            ></input> */}

              <div className="label ">
                <span className="big">S</span>
                <span className="normal">TATE</span>
              </div>

              <select name="statename" onChange={this.handleChange} required>
                <option selected value="Andhra Pradesh">
                  Andhra Pradesh
                </option>
                <option value="lime">Lime</option>
                <option value="coconut">Coconut</option>
              </select>

              {/* <input
                type="text"
                name="statename"
                value={this.state.statename}
                onChange={this.handleChange}
              ></input> */}

              <div className="label ">
                <span className="big">P</span>
                <span className="normal">HONE NO</span>
              </div>
              <input
                required
                type="number"
                name="phoneNo"
                value={this.state.phoneNo}
                onChange={this.handleChange}
              ></input>

              <div className="buttons buttons1">
                {" "}
                <button className="btn-hover color-1" type="submit">
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
            </form>
          </div>
          <div className="box1"></div>
        </div>
      </div>
    );
  }
}

export default Googleregister;
