import React from "react";
import { Link } from "react-router-dom";
import Frame from "../frames/technical-frame.png";
import "./TechnicalEventCard.css";

const TechnicalEventCard = ({ height, price, eventInfo ,history, match }) => {

	const imgpath = eventInfo.name.split(' ').join('_');
	const img = `http://tirutsava.com/events_poster/${imgpath}.jpeg`;

	return (
		<Link to={`/events/technical/${eventInfo.eventId}`}>
			<div id="entire-card">
				<div
					style={{
						width: "100%",
						height: `${height}vh`,
						overflow: "hidden"
					}}
				>
					<div
						id="back-img"
						style={{
							backgroundImage: "url(" + Frame + ")"
						}}
					></div>
					<div id="poster-back">
						<div
							id="poster"
							style={{
								backgroundImage: `url(${img})`
							}}
						>
							<div className="info-box"></div>
						</div>
					</div>

					<div
						//onClick={() => console.log("we will redirect now")}
						id="event-btn"
					>
						button...
          </div>
					<div className="price-tag">Rs.{price}</div>
				</div>

				<div className="description">Hello dds</div>
			</div>
		</Link>
	);
};

export default TechnicalEventCard;
