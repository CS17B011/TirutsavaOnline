import React from "react";

export default class profile extends React.Component {

  constructor(props) {
    super(props);
    console.log(this.props);
  }

  render() {
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
              value={this.props.person.name}
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
              value={this.props.person.email}
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
              value={this.props.person.college}
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
              value={this.props.person.phonenum}
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
              value={this.props.person.state}
              disabled
            />
          </div>
        </section>
      </main>
    );
  }
}
