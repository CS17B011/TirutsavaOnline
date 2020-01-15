import React from "react";
import { Link } from "react-router-dom";
import "./SideDrawer.css";

const SideDrawer = props => {
  let drawerClasses = "side-drawer";
  if (props.show) {
    drawerClasses = "side-drawer open";
  }
  const navLinks = document.querySelectorAll("li.move");
  console.log(navLinks);
  navLinks.forEach((link, index) => {
    if (link.style.animation) {
      link.style.animation = "";
    } else {
      link.style.animation = `linkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
    }
  });

  return (
    <nav className={drawerClasses}>
      <ul className="link-tab">
        <li className="move">
          <Link to="/">HOME</Link>
        </li>
        <li className="move">
          <Link to="/aboutus">ABOUT US</Link>
        </li>
        <li className="move">
          <Link to="/testimonials">TESTIMONIALS</Link>
        </li>
        <li className="move">
          <Link to="/events">EVENTS</Link>
        </li>
        <li className="move">
          <Link to="/faq">FAQs</Link>
        </li>
        <li className="move">
          <Link className="special-button" id="onReg" to="/login">
            LOGIN
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default SideDrawer;
