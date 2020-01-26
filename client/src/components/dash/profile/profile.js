import React from "react";
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import Swal from 'sweetalert2';

export default class profile extends React.Component {
  state = {

  };

  componentDidMount(){
    axios.get('/auth/dashboard', {withCredentials: true}).then(
      data => {
        //console.log("Dashboard data");
        //console.log(data);
        const person = data.data.person;
        //console.log("person",person);
        /*if(person.college === "NA" && person.phonenum === "NA" && person.state === "NA"){
          return <Redirect to="/googleRegister" />
        }*/
        this.setState({
          person: data.data.person
        });
      }
    )
    .catch(err => console.log(err));


  }

  constructor(props){
    super(props);

      if(!this.state.person){
        this.state.person = {
          name: "Loading...",
          email: "Loading...",
          college: "Loading...",
          state: "Loading...",
          phonenum: "Loading..."
        }
      }
  }

  render() {
    if(this.state.person.college === "NA" && this.state.person.phonenum==="NA"){
      Swal.fire({
        icon: 'info',
        title: 'Needed Basic Info of the Google user',
        text: 'Basic details of the user are missing, kindly fill the upcoming form to procede.'
      });
      return <Redirect to="/googleregister" />
    }
    else{
      return (
      <main role="main" className="my-0">
        <section className="panel important">
          <div className="twothirds">
            <label htmlFor="name">Name:</label>
            <input
              className="form-control"
              type="text"
              name="name"
              id="name"
              placeholder="Your Name"
              value={this.state.person.name}
              disabled
            />
            <br />
            <label htmlFor="email">Email:</label>
            <input
              className="form-control"
              type="email"
              name="email"
              id="email"
              placeholder="Your Name"
              value={this.state.person.email}
              disabled
            />{" "}
            <br />
            <label htmlFor="college">College:</label>
            <input
              className="form-control"
              type="text"
              college="college"
              id="college"
              placeholder="Your Name"
              value={this.state.person.college}
              disabled
            />{" "}
            <br />
            <label htmlFor="name">Phone:</label>
            <input
              className="form-control"
              type="text"
              name="phone"
              id="phone"
              placeholder="Your Contact"
              value={this.state.person.phonenum}
              disabled
            />{" "}
            <br />
            <label htmlFor="name">State:</label>
            <input
              className="form-control"
              type="text"
              name="state"
              id="state"
              placeholder="Your State"
              value={this.state.person.state}
              disabled
            />
          </div>
        </section>
      </main>
    );
    }
  }
}
