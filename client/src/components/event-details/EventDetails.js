import React from "react";
import Frame from "../frames/technical-frame.png";
import "./EventDetails.css";
import axios from "axios";
import Swal from 'sweetalert2';

class EventDetails extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			event: {}
		};
	}

	componentDidMount() {
		const { id } = this.props.match.params;
		axios.get(`/api/events/${id}`).then(res => {
			this.setState({ event: res.data });
		});
	}

	handlePayment = (e) => {
		e.preventDefault();
		if (this.state.event) {
			if (this.state.event.entryfee <= 9)
			{
				const data = {
					event_id : this.state.event.eventId
				}
				axios.post('/api/events/registerfree',data)
					.then(res => {
						if (!res.data.valid)
						{
							Swal.fire({
								icon: 'info',
								title: 'Registration Failed!!',
								text: 'If you are not logged in sign in first!',
								allowOutsideClick: false,
								cancelButtonText: 'Cancel',
								showCancelButton: true,
								confirmButtonText: 'Login',
								confirmButtonColor: '#136207'
							})
								.then(res => {
									if (res.value)
										window.location.href = 'http://tirutsava.com/login';
							})
						}
						else if(res.data.valid && !res.data.already){
                                                        Swal.fire({
                                                                icon: 'success',
                                                                title: 'Registration Completed!',
                                                                text: 'You are registered for this event!!'
                                                        });
                                                }
                                                else{
                                                        Swal.fire({
                                                                icon: 'info',
                                                                title: 'Already Registered',
                                                                text: 'You can Register to this event only one.'
                                                        });
                                                }
					})
			}
			else
			{
				axios.post('/api/events/register', this.state.event)
				.then((res) => {
					//console.log(res.data.success);
					if (res.data.success)
					{
						window.location.href = res.data.payment_request.longurl;
					}
					else if(res.data.valid && res.data.already){
                                                        Swal.fire({
                                                                icon: 'info',
                                                                title: 'Already Registered',
                                                                text: 'You can Register to this event only one.'
                                                        });
                                                }
					else {
						Swal.fire({
								icon: 'info',
								title: 'Registration Failed!!',
								text: 'If you are not logged in sign in first!',
								allowOutsideClick: false,
								cancelButtonText: 'Cancel',
								showCancelButton: true,
								confirmButtonText: 'Login',
								confirmButtonColor: '#136207'
							})
								.then(res => {
									if (res.value)
										window.location.href = 'http://tirutsava.com/login';
							})
					}
				})	
			}
		}
	}

	render() {
		let img;
		let iname;
		if (this.state.event.name)
		{
			iname = this.state.event.name.split(' ').join('_');
			img = `http://tirutsava.com/events_poster/${iname}.jpeg`; 
		}
		else img = "";
		return (
			<div className="event-details">
				<div className="event-details-poster">
					<img src={Frame} className="event-details-img" alt="Event Details" />
					<img src={img} className="adjustments" alt="Event Details" />
				</div>
				<div className="event-details-text">
					<h1 align="center">
						<b>
							<u>{this.state.event.name}</u>
						</b>
					</h1>
					<p>{this.state.event.description}</p>
					<div><b>Registration Fee: </b>{this.state.event.entryfee}</div>
					<div style={{marginBottom: "7%"}}><b>Cash Prizes: </b>{this.state.event.cashPrize}</div>
					<div><b>Event Date: </b>{this.state.event.eventDate}</div>
					<div><b>Event Time: </b>{this.state.event.eventTime === "" ? "Will be updated" : this.state.event.eventTime}</div>
					<div><b>Venue: </b>{this.state.event.venue === "" ? "Will be updated" : this.state.event.venue}</div>
					<div><b>Last Date of registration/submission: </b>{this.state.event.registrationClose === "" ? "Will be updated" : this.state.event.registrationClose}</div>
					<div><b>Submission Email-ID: </b>{this.state.event.submissionEmailId === "" ? "Will be updated" : this.state.event.submissionMail}</div>
					{
						(this.state.event.entryfee === 0) ? <React.Fragment></React.Fragment> : 
						<React.Fragment>
					<p>
						<b>NOTE:</b>
						<br/>
						&#8226; Only the group leader needs to do the payment if it is a group event.	
					</p>
						</React.Fragment>
					}
					<div style={{ alignContent: "center", boxAlign: "center" }}>
						<a href={`http://tirutsava.com/events_rulebook/${this.state.event.name}.pdf`} target="_blank">
							<button className="btn btn-default btn-lg btn-primary">
								RuleBook
              </button>
						</a>
						<button className="btn btn-default btn-lg btn-primary" onClick={this.handlePayment}>
							Register+
            </button>
					</div>
				</div>
			</div>
		);
	}
}

export default EventDetails;
