import React from "react";
import Frame from "../frames/online-frame.png";
import axios from "axios";
import "./OnlineDetails.css";
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

  render() {
    let img;
    if (this.state.event.name)
      img = `http://localhost/events_poster/${this.state.event.name}.JPG`;
    else img = "";
    return (
      <div className="online-details">
        <div className="event-details-poster">
          <img src={Frame} className="event-details-img" alt="Online Details" />
          <img src={img} className="adjustmentsonline" alt="Event Details" />
        </div>
        <div className="event-details-text online-scroll">
          <h1 align="center">
            <b>
              <u>{this.state.event.name}</u>
            </b>
          </h1>
          <p>{this.state.event.description}</p>
          <div style={{ alignContent: "center", boxAlign: "center" }}>
            <button
              className="btn btn-default btn-lg btn-primary"
              href={`http://localhost/events_rulebook/${this.state.event.name}.pdf`}
            >
              RuleBook
            </button>
            <button className="btn btn-default btn-lg btn-primary">
              Register+
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default EventDetails;
