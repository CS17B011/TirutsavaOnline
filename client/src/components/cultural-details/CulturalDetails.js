import React from "react";
import Frame from "../frames/cult-frame.png";
import axios from "axios";
import "./CulturalDetails.css";
import Swal from 'sweetalert2';

class CulturalDetails extends React.Component {
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
								icon: 'error',
								title: 'Registration Failed!',
								text: 'Log in first!!'
							});
						}
						else
						{ 
							Swal.fire({
								icon: 'success',
								title: 'Registration Completed!',
								text: 'You are registered for this event!!'
							});
						}
					})
			}
			else if (this.state.event.typeOfEvent === 5) {
				axios.get('/auth/status')
					.then((res) => {
						if (res.data.loggedin)
							window.location.href = 'https://www.instamojo.com/tbytes/techo-workshop-series-at-iit-tirupati-date-1/?ref=store';
						else {
							Swal.fire({
								icon: 'error',
								title: 'Registraion Failed!',
								text: 'If you are not logged in then log in first!!'
							})
						}
					});
			}
			else {
				axios.post('/api/events/register', this.state.event)
					.then((res) => {
						//console.log(res.data.success);
						if (res.data.success) {
							window.location.href = res.data.payment_request.longurl;
						}
						else {
							Swal.fire({
								icon: 'error',
								title: 'Registration Failed!!',
								text: 'If you are not logged in sign in first!'
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
			img = `http://tirutsava.com/events_poster/${iname}.jpg`;
		}
		else
			img = ''
		return (
			<div className="online-details">
				<div className="event-details-poster">
					<img
						src={Frame}
						className="event-details-img"
						alt="Cultural Details"
					/>
					<img src={img} className="adjustmentscult" alt="Event Details" />
				</div>
				<div className="event-details-text online-scroll">
					<h1 align="center">
						<b>
							<u>{this.state.event.name}</u>
						</b>
					</h1>
					<p>{this.state.event.description}</p>
					{//console.log("Event : ", this.state.event)
					}
					<div style={{ alignContent: "center", boxAlign: "center" }}>
						<button
							style={this.state.event.typeOfEvent === 5 ? { display: 'none' } : {}}
							className="btn btn-default btn-lg btn-primary"
							href={`http://tirutsava.com/events_rulebook/${this.state.event.name}.pdf`}
						>
							RuleBook
            			</button>
						<button className="btn btn-default btn-lg btn-primary" onClick={this.handlePayment}>
							Register+
            			</button>
					</div>
				</div>
			</div>
		);
	}
}

export default CulturalDetails;
