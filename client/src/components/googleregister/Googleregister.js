import React, { Component } from "react";

import { Redirect } from 'react-router-dom';



import "./Register.css";

import { city_state, state_india } from "./list";

import Axios from "axios";

import Swal from 'sweetalert2';



var collegelist;



const initialState = {

  gender: "Male",

  college: "IIT Tiupati",

  name: "",

  city: "Adoni",

  statename: "Andhra Pradesh",

  phoneNo: "",

  collegeinlist: true

};



class Googleregister extends Component {

  constructor() {

    super();

    collegelist = ["IIT Tirupati"];

    this.state = initialState;

  }



  handleChange = e => {

    this.setState({ [e.target.name]: e.target.value });

  };

  handleSelect = e => {

    this.setState({ college: e.target.value });

  };



  handleNewCollege = e => {

		e.preventDefault();

		this.setState({ collegeinlist: !this.state.collegeinlist });

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

      phonenum: this.state.phoneNo

    };

    Axios.post('/auth/googleRegistration', userData)

      .then((res) => {

        console.log(res);

        if (res.data.google && res.data.registered) {

          Swal.fire({

            icon: 'success',

            title: 'Success',

            text: 'Registration Successfull!!'

          })

            .then(() => {

              window.location.href = 'http://tirutsava.com/dashboard';

              //return <Redirect to="/dashboard" />

            });

        }

        else if (!res.data.google) {

          Swal.fire({

            icon: 'error',

            title: 'Error',

            text: 'Not a Google Id!!'

          })

            .then(() => {

              window.location.href = 'http://tirutsava.com/login';

              //return <Redirect to='/login' />

            });

        }

        else {

          Swal.fire({

            icon: 'error',

            title: 'Error',

            text: 'Error in Registration !! Try again later !!'

          })

            .then(() => {



              window.location.href = 'http://tirutsava.com';

              //return <Redirect to='/' />

            });

        }

      })

      .catch(err => {

        Swal.fire({

          icon: 'error',

          title: 'Error',

          text: 'Error in Registration !! Try again later !!'

        })

          .then(() => {

            return <Redirect to='/' />

          });

      })

  };



  responseGoogle = response => {

    //console.log(response);

  };



  render() {

    let classmod = 1;

    this.state.collegeinlist ? (classmod = 1) : (classmod = 0);

    return (

      <div className="login">

        <h1>Google Users</h1>

        <div className="login-page reg">

          <div className="box1"></div>

          <div className="box2 box2scroll">

            <form onSubmit={this.handleSubmit}>

              <div className="label ">

                <span className="big">N</span>

                <span className="normal">AME*</span>

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

                <span className="normal">ENDER*</span>

              </div>



              <select name="gender" onChange={this.handleChange} required>

                <option selected value="Male">

                  Male

                </option>

                <option value="Female">Female</option>

                <option value="Other">Other</option>

              </select>

              {/*



            <input

              type="text"

              name="college"

              value={this.state.college}

              onChange={this.handleChange}

            ></input> */}



              <div className="label ">

                <span className="big">C</span>

                <span className="normal">OLLEGE*</span>

              </div>



              <select

                name="college"

                className={this.state.collegeinlist ? "showit" : "dontshow"}

                onChange={this.handleChange}

                required

              >

                {

                  collegelist.map((college, index) => {

                    return (

                      <option value={college} key={index}>

                        {college}

                      </option>

                    )

                  })

                }

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

                onClick={this.handleNewCollege}

              >

                {

                  this.state.collegeinlist ? "Can't find your college?" : "Select from the list!"

                }

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

                <span className="big">S</span>

                <span className="normal">TATE*</span>

              </div>



              <select name="statename" onChange={this.handleChange} required>

                {

                  state_india.map((state, index) => {

                    return (

                      <option value={state} key={index}>{state}</option>

                    )

                  })

                }

              </select>



              <div className="label ">

                <span className="big">C</span>

                <span className="normal">ITY*</span>

              </div>



              <select name="city" onChange={this.handleChange} required>

                {

                  city_state[this.state.statename].map((city, index) => {

                    return (

                      <option value={city} key={index}>

                        {city}

                      </option>

                    );

                  })

                }

              </select>

              {/* <input

              type="text"

              name="city"

              value={this.state.city}

              onChange={this.handleChange}

            ></input> */}



              {/* <input

                type="text"

                name="statename"

                value={this.state.statename}

                onChange={this.handleChange}

              ></input> */}



              <div className="label ">

                <span className="big">P</span>

                <span className="normal">HONE NO*</span>

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

                  SUBMIT

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


