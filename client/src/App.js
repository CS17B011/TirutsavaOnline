import React, { useState,useEffect } from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import AOS from "aos";
import EventDetails from "./components/event-details/EventDetails";
import OnlineDetails from "./components/online-details/OnlineDetails";
import CulturalDetails from "./components/cultural-details/CulturalDetails";
import TechnicalEvents from "./components/technical-events/TechnicalEvents";
import CulturalEvents from "./components/cultural-events/CulturalEvents";
import OnlineEvents from "./components/online-events/OnlineEvents";
import AboutUs from "./components/about-us/AboutUs";
import Events from "./components/event2/Events";

import Sponsers from "./components/sponsers/sponsers";

import Dash from "./components/dash/dash1.js";

import Home from "./components/home/home";

import Faq from "./components/faqs/main";
import Query from "./components/faqs/query/query";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import Googleregister from "./components/googleregister/Googleregister";
import Workshop from "./components/workshop/Workshop";
import Prefest from "./components/prefest/Prefest";
import "aos/dist/aos.css";
import NFOUND from "./components/notfound/notfound";
import CSOON from "./components/comming/coming";
import Gallery from "./components/gallery/gallery";
import Navbar from "./components/navbar/navbar";
import Informal from "./components/informal/Informal";
import Axios from "axios";

import Sponsors from "./components/sponsers/sponsers.js"; 

import Proshows from "./components/proshows/proshows";

AOS.init();

const App = () => {

  const [login, setLogin] = useState(localStorage.getItem('loggedin'));

  useEffect(() => {
    Axios.get('/auth/status')
      .then((res) => {
        if (res.data.loggedin)
          localStorage.setItem('loggedin', true);
        setLogin(localStorage.getItem('loggedin'));
      })
      .catch(err => {
        //console.log(err);
      });
  },[]);

  return (
    <Router>
      <div>
        <Navbar login={login}/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/proshows" component={Proshows} />
          <Route exact path="/aboutus" component={AboutUs} />
          <Route exact path="/dashboard" component={Dash} />
          <Route exact path="/events" component={Events} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/gallery" component={Gallery} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/googleregister" component={Googleregister} />
          <Route exact path="/events/technical" component={TechnicalEvents} />
          <Route exact path="/events/cultural" component={CulturalEvents} />
          <Route exact path="/events/online" component={OnlineEvents} />
          <Route exact path="/events/technical/:id" component={EventDetails} />
          <Route exact path="/events/online/:id" component={OnlineDetails} />
          <Route exact path="/comingsoon" component={CSOON} />
          <Route
            exact
            path="/events/cultural/:id"
            component={CulturalDetails}
          />
          <Route exact path="/events/prefest/:id" component={CulturalDetails} />

          <Route exact path="/events/informals/:id" component={CulturalDetails} />
          <Route exact path="/events/informals" component={Informal} />

          <Route exact path="/events/workshop/:id" component={CulturalDetails} />
          <Route exact path="/events/workshop" component={Workshop} />

          <Route exact path="/faq" component={Faq} />
          <Route exact path="/query" component={Query} />
          <Route exact path="/events/prefest" component={Prefest} />
          <Route exact path="/sponsors" component={Sponsers} />
          <Route path="/" component={NFOUND} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
