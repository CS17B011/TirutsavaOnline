import React, { Component } from "react";
import { Redirect } from 'react-router-dom';

import { GoogleLogin } from "react-google-login";
import { Link } from "react-router-dom";
import "./Login.css";
import Axios from "axios";

class Login extends Component {
	constructor() {
		super();
		this.state = {
			email: "",
			password: ""
		};
	}

	handleChange = e => {
		this.setState({ [e.target.name]: e.target.value });
	};

	handleSubmit = e => {
		e.preventDefault();
		const userData = {
			username: this.state.email,
			password: this.state.password
		};
		Axios.post('/auth/local', userData)
			.then((res) => {
				//console.log(res.data.user);
				if (res.data.valid)
				{
					localStorage.setItem('loggedin', true);
					//window.location.href = 'http://tirutsava.com/dashboard';
					return <Redirect to="/dashboard" />
				}
				else
					//window.location.href = 'http://tirutsava.com/login';
					return <Redirect to="/login" />
				 //'http://tirutsava.com'
				//localStorage.setItem('user', res.data.user);
			})
			.catch(err => {
				//console.log("Error");
			});
	};

	googleLogin = (e) => {
		e.preventDefault();
		localStorage.setItem('loggedin', true);
		//window.location.href = 'http://tirutsava.com/auth/google';
		window.location.href = '/auth/google';
	}

	render() {
		return (
			<div className="login">
				<h1>LOGIN</h1>
				<div className="login-page log">
					<div className="box1"></div>

					<div className="box2">
						<div className="label ">
							<span className="big">E</span>

							<span className="normal">MAIL</span>
						</div>
						<input
							type="email"
							name="email"
							value={this.state.email}
							onChange={this.handleChange}
							required
						></input>
						<div className="label ">
							<span className="big">P</span>
							<span className="normal">ASSWORD</span>
						</div>
						<input
							type="password"
							name="password"
							value={this.state.password}
							onChange={this.handleChange}
							required
						></input>
						<div className="buttongrp">
							<div className="buttons ">
								{" "}
								<button
									className="btn-hover color-1"
									onClick={this.handleSubmit}
									type="submit"
								>
									LOGIN
                </button>
							</div>

							<div className="or">OR</div>

							<div className="buttons">
										{" "}
										<button
											className="btn-hover color-7"
											style={{
												transform: "scale(0.9)"
									}}
									onClick = {this.googleLogin}
										>
											{/* {` OOGLE LOGIN`} */}
											{/* <span>{` `}</span> */}
											<div
												style={{
													fontSize: "26px",
													padding: "10px"
												}}
											>
												{/* <i class="fab fa-google fa-lg logocolor"></i> */}
												<span style={{ color: "#176bef" }}>{`G`}</span>
												<span style={{ color: "#FF3E30" }}>{`o`}</span>
												<span style={{ color: "#F7B529" }}>{`o`}</span>
												<span style={{ color: "#176bef" }}>{`g`}</span>
												<span style={{ color: "#179c52" }}>{`l`}</span>
												<span style={{ color: "#ff3e30" }}>{`e`}</span>
												<span style={{ color: "#176bef" }}>{`  login`}</span>
											</div>
										</button>
									</div>


							{/*<GoogleLogin
								clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
								render={renderProps => (
									<div className="buttons">
										{" "}
										<button
											onClick={renderProps.onClick}
											disabled={renderProps.disabled}
											className="btn-hover color-7"
											style={{
												transform: "scale(0.9)"
											}}
										>
											<div
												style={{
													fontSize: "26px",
													padding: "10px"
												}}
											>
												<span style={{ color: "#176bef" }}>{`G`}</span>
												<span style={{ color: "#FF3E30" }}>{`o`}</span>
												<span style={{ color: "#F7B529" }}>{`o`}</span>
												<span style={{ color: "#176bef" }}>{`g`}</span>
												<span style={{ color: "#179c52" }}>{`l`}</span>
												<span style={{ color: "#ff3e30" }}>{`e`}</span>
												<span style={{ color: "#176bef" }}>{`  login`}</span>
											</div>
										</button>
									</div>
								)}
								buttonText="Login"
								onSuccess={this.responseGoogle}
								onFailure={this.responseGoogle}
								cookiePolicy={"single_host_origin"}
							/>*/}

						</div>

						<div className="donttext">Don't have an account?</div>
						<div className="buttongrp">
							<div className="buttons ">
								{" "}
								<Link to="/register">
									<button
										className="btn-hover color-1"
										style={{
											transform: "translateX(-50px)"
										}}
									>
										SIGN UP
                  </button>
								</Link>
							</div>
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

export default Login;
