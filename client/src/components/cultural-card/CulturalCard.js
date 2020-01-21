import React from "react";
import { Link } from "react-router-dom";
import Frame from "../frames/cult-frame.png";

const CulturalCard = ({ height, price, eventInfo, history, match, type }) => {
  const imgpath = eventInfo.name.split(' ').join('_');
  const img = `http://tirutsava.com/events_poster/${imgpath}.jpg`;
  return (
    <Link
      to={`/events/${
        type === "4"
          ? "prefest"
          : type === "6"
          ? "informal"
          : type === "5"
          ? "workshop"
          : "cultural"
      }/${eventInfo.eventId}`}
    >
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
            ></div>
          </div>
        </div>

        <div className="description">Hello dds</div>
      </div>
    </Link>
  );
};

export default CulturalCard;
