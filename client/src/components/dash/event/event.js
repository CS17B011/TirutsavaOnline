import React from "react";
import { Link } from "react-router-dom";
import "./events.css";

export default function event() {
  return (
    <main role="main" className="my-0">
      <section className="panel">
        <h2>Solo Events</h2>
        <ul>
          <li>
            <Link className="text-dark li" to="#!">
              <span>CS GO</span>{" "}
              <span style={{ color: "red" }}> {"  "}[Technical]</span>
            </Link>
          </li>
          <li>
            <Link className="text-dark li" to="">
              <span>CS GO</span>{" "}
              <span style={{ color: "blue" }}> {"  "}[Cultural]</span>
            </Link>
          </li>
          <li>
            <Link className="text-dark li" to="">
              <span>CS GO</span>{" "}
              <span style={{ color: "green" }}> {"  "}[PreFest]</span>
            </Link>
          </li>{" "}
          <li>
            <Link className="text-dark li" to="">
              <span>CS GO</span>{" "}
              <span style={{ color: "red" }}> {"  "}[Technical]</span>
            </Link>
          </li>
          <li>
            <Link className="text-dark li" to="">
              <span>CS GO</span>{" "}
              <span style={{ color: "blue" }}> {"  "}[Cultural]</span>
            </Link>
          </li>
        </ul>
      </section>
      <section className="panel">
        <h2>Group Events</h2>
        <ul>
          <li>
            <Link className="text-dark li " to="#!">
              <span>CS GO</span>{" "}
              <span style={{ color: "red" }} className="blink_me">
                {" "}
                {"  "}[Technical]
              </span>
            </Link>
          </li>
          <li>
            <Link className="text-dark li" to="">
              Singing <span style={{ color: "blue" }}> {"  "}[Cultural]</span>
            </Link>
          </li>
          <li>
            <Link className="text-dark li" to="">
              Shooting <span style={{ color: "green" }}> {"  "}[PreFest]</span>
            </Link>
          </li>{" "}
          <li>
            <Link className="text-dark li" to="">
              Robotics <span style={{ color: "red" }}> {"  "}[Technical]</span>
            </Link>
          </li>
          <li>
            <Link className="text-dark li" to="">
              Dancing <span style={{ color: "blue" }}> {"  "}[Cultural]</span>
            </Link>
          </li>
        </ul>
      </section>
    </main>
  );
}
