import React, { Component } from "react";
import { Redirect } from 'react-router-dom';

import "./Register.css";
import { city_state, state_india } from "./list";
import Axios from "axios";
import Swal from 'sweetalert2';

var collegelist;

const initialState = {
	email: "",
	password: "",
	confirmpassword: "",
	gender: "Male",
	college: "IIT Tiupati",
	name: "",
	city: "Adoni",
	statename: "Andhra Pradesh",
	phoneNo: "",
	collegeinlist: true
};

class Register extends Component {

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
	handleSubmit = e => {
		e.preventDefault();
		if (this.state.password != this.state.confirmpassword) {
			Swal.fire({
				icon: 'error',
				title: 'Password Not Mached!',
				text: 'Password and Confirm Password should be same'
			});
		}
		else {
			const userData = {
				email: this.state.email,
				password: this.state.password,
				gender: this.state.gender,
				college: this.state.college,
				name: this.state.name,
				city: this.state.city,
				state: this.state.statename,
				phoneNo: this.state.phoneNo
			};
			Axios.post('/auth/registration', userData)
				.then((res) => {
					if (res.data.valid) {
						Swal.fire({
							icon: 'success',
							title: 'Success',
							text: 'Registration Successfull!!'
						})
							.then(() => {
								window.location.href = 'http://tirutsava.com/login';
							});
					}
					else if (res.data.exist) {
						Swal.fire({
							icon: 'error',
							title: 'Error',
							text: 'User with same emailid already exists!!'
						})
							.then(() => {
								return <Redirect to='/login' />
							});
					}
					else {
						Swal.fire({
							icon: 'error',
							title: 'Error',
							text: 'Error in Registration !! Try again later !!'
						})
							.then(() => {
								return <Redirect to='/' />
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
		}
	};

	handleNewCollege = e => {
		e.preventDefault();
		this.setState({ collegeinlist: !this.state.collegeinlist });
	};

	responseGoogle = response => {
		//console.log(response);
	};

	componentDidMount() {/*
		Axios.get('/api/collegelist')
			.then(colleges => {
				collegelist = colleges
			});
			*/
	}


	render() {
		let classmod = 1;
		this.state.collegeinlist ? (classmod = 1) : (classmod = 0);
		return (
			<div className="login">
				<h1>SIGN UP</h1>
				<div className="login-page reg">
					<div className="box1"></div>
					<div className="box2 box2scroll">
						<form onSubmit={this.handleSubmit}>
							<div className="label ">
								<span className="big">E</span>

								<span className="normal">MAIL*</span>
							</div>
							<input
								type="email"
								name="email"
								required
								value={this.state.email}
								onChange={this.handleChange}
							></input>
							<div className="label ">
								<span className="big">P</span>
								<span className="normal">ASSWORD*</span>
							</div>

							<input
								type="password"
								name="password"
								required
								value={this.state.password}
								minLength={8}
								onChange={this.handleChange}
							></input>
							<div className="label ">
								<span className="big">C</span>
								<span className="normal">ONFIRM PASSWORD*</span>
							</div>

							<input
								type="password"
								name="confirmpassword"
								required
								value={this.state.confirmpassword}
								minLength={8}
								onChange={this.handleChange}
							></input>

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
								<option defaultValue="Male">
									Male
                </option>
								<option value="Female">Female</option>
								<option value="Other">Other</option>
							</select>

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
								name="phoneNo"
								value={this.state.phoneNo}
								onChange={this.handleChange}
							></input>

							<div className="buttons buttons1">
								{" "}
								<button className="btn-hover color-1" type="submit">
									SIGN UP
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

export default Register;
