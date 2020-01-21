import React, { Component } from "react";

import Toolbar from "./Toolbar";
import SideDrawer from "./SideDrawer";
import Backdrop from "./Backdrop";
import "./navbar.css";

// class navbar extends Component {
//   render() {
//     return (
//       <nav
//         class="navbar navbar-expand-lg navbar-dark fixed-top"
//         style={{ backgroundColor: "#181129" }}
//       >
//         <div class="container">
//           <a class="navbar-brand" href="/">
//             <img
//               src={logo}
//               style={{ height: "40px", width: "150px" }}
//               alt="Tirutsava Logo"
//             />
//           </a>
//           <button
//             class="navbar-toggler"
//             type="button"
//             data-toggle="collapse"
//             data-target="#navbarResponsive"
//             aria-controls="navbarResponsive"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span class="navbar-toggler-icon"></span>
//           </button>
//           <div class="collapse navbar-collapse" id="navbarResponsive">
//             <ul class="navbar-nav ml-auto">
//               <li class="nav-item">
//                 <a class="nav-link" href="/">
//                   Home
//                 </a>
//               </li>
//               <li class="nav-item">
//                 <a class="nav-link" href="/aboutus">
//                   About Us
//                 </a>
//               </li>
//               <li class="nav-item">
//                 <a class="nav-link" href="/testimonials">
//                   Testimonials
//                 </a>
//               </li>
//               <li class="nav-item">
//                 <a class="nav-link" href="/events">
//                   Events
//                 </a>
//               </li>
//               <li class="nav-item">
//                 <a class="nav-link" href="/faq">
//                   FAQs
//                 </a>
//               </li>
//               <li class="nav-item">
//                 <a class="nav-link" href="/gallery">
//                   Gallery
//                 </a>
//               </li>
//               <li class="nav-item">
//                 <a class="nav-link" href="/sponsers">
//                   Sponsers
//                 </a>
//               </li>
//               <li class="nav-item">
//                 <a class="nav-link" href="/">
//                   Login
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>
//     );
//   }
// }

class navbar extends Component {
  state = {
    sideDrawerOpen: false,
    login: localStorage.getItem('loggedin')
  };

  sideDrawerHandler = () => {
    this.setState(prevState => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  backdropHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  render() {
    let backdrop;
    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropHandler} />;
    }
    return (
      <div style={{ height: "10vh" }}>
        <Toolbar
          drawer={this.sideDrawerHandler}
          xbtn={this.state.sideDrawerOpen}
          login={this.state.login}
        />
        <SideDrawer
          show={this.state.sideDrawerOpen}
          click={this.backdropHandler}
          login={this.state.login}
        />
        {backdrop}
      </div>
    );
  }
}

export default navbar;
