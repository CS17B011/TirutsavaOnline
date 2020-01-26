import React from "react";
import { Link } from "react-router-dom";
import "./events.css";
import axios from 'axios';

export default class event extends React.Component {
  state = {};
  componentDidMount(){
    axios.get('/auth/dashboard', {withCredentials: true}).then(
      data => {
        this.setState({
          events: data.data.events
        });
      }
    )
    .catch(err => console.log(err));
  }
    constructor(props){
      super(props);
      //console.log("Evenst");
      //onsole.log(this.state.events);
      if(!this.state.events){
        this.state.events = []
      }
    }
  render(){
  return (
    <main role="main" className="my-0">
      <section className="panel">
        <h2>Events</h2>
        <ul>
        {
          (this.state.events.length!==0) ?
              this.state.events.map((event,index) => {
                return(
                  <React.Fragment key={index}>
                  <li>
                    <Link className="text-dark li " to={"/events/"+event.type.toLowerCase()+"/"+event.eventId}>
                      <span>{event.name}</span>{" "}
                      <span style={{ color: "red" }} className="blink_me">
                        {" "}
                        {"  "}[{event.type}]
                      </span>
                    </Link>
                  </li>
                  </React.Fragment>
                );
              })
            :   <p>No Events</p>
        }
        </ul>
      </section>
      {/*<section className="panel">
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
      </section>*/}
    </main>
  );
}
}
