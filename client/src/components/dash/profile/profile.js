import React from "react";

export default function profile() {
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
          />
          <br />
          <label htmlFor="email">Email:</label>
          <input
            className="form-control"
            type="email"
            name="email"
            id="email"
            placeholder="Your Name"
          />{" "}
          <br />
          <label htmlFor="college">College:</label>
          <input
            className="form-control"
            type="text"
            college="college"
            id="college"
            placeholder="Your Name"
          />{" "}
          <br />
          <label htmlFor="name">Phone:</label>
          <input
            className="form-control"
            type="text"
            name="phone"
            id="phone"
            placeholder="Your Contact"
          />{" "}
          <br />
          <label htmlFor="name">State:</label>
          <input
            className="form-control"
            type="text"
            name="state"
            id="state"
            placeholder="Your State"
          />
        </div>
      </section>
    </main>
  );
}
