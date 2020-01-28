import React from "react";
import "./list.css";

export default function List() {
  const sap = {
    margin: "0 0 20px 0",
    textTransform: "none",
    color: "rgba(254, 82, 76, 1)",
    fontWeight: "600",
    letterSpacing: "1px",
    lineHeight: "1.5"
  };
  const italic = {
    fontStyle: "italic",
    fontWeight: "bold"
  };
  return (
    <div>
      <section id="team" className="team content-section">
        <div className="container">
          <div className="row text-center">
            <div className="col-md-12">
              <h2 style={sap}>Our Sponsers</h2>
              <h3 className="caption gray">
                Meet the Sponsers who make our event awesome
              </h3>
            </div>
            <div className="container">
              <div className="row" style={{ justifyContent: "space-around" }}>
                <div className="col-md-5">
                  <div
                    className="team-member"
                    style={{
                      backgroundSize: "cover"
                    }}
                  >
                    <figure>
                      <img
                        src="http://tirutsava.com/sp_logo/amara_raja.png"
                        alt=""
                        className="img-responsive"
                        style={{ height: "250px" }}
                      />
                      <figcaption>
                        <br />
                        <br />
                        <ul>
                          <li>
                            <a href="!#">
                              <i className="fab fa-facebook fa-2x"></i>
                            </a>
                          </li>
                          <li>
                            <a href="!#">
                              <i className="fab fa-twitter fa-2x"></i>
                            </a>
                          </li>
                          <li>
                            <a href="!#">
                              <i className="fab fa-linkedin fa-2x"></i>
                            </a>
                          </li>
                        </ul>
                      </figcaption>
                    </figure>
                    <h4 style={sap}>Amara Raja</h4>
                    <div className="button button-gold" style={italic}>
                      Gold Sponsor
                    </div>
                  </div>
                </div>
                <div className="col-md-5">
                  <div
                    className="team-member"
                    style={{
                      backgroundSize: "cover"
                    }}
                  >
                    <figure>
                      <img
                        src="http://tirutsava.com/sp_logo/sbi.png"
                        alt=""
                        className="img-responsive"
                        style={{ height: "250px" }}
                      />
                      <figcaption>
                        <br />
                        <br />
                        <ul>
                          <li>
                            <a href="!#">
                              <i className="fab fa-facebook fa-2x"></i>
                            </a>
                          </li>
                          <li>
                            <a href="!#">
                              <i className="fab fa-twitter fa-2x"></i>
                            </a>
                          </li>
                          <li>
                            <a href="!#">
                              <i className="fab fa-linkedin fa-2x"></i>
                            </a>
                          </li>
                        </ul>
                      </figcaption>
                    </figure>
                    <h4 style={sap}>SBI</h4>
                    <div
                      className="button button-gold"
                      style={(italic, { justifyContent: "flex-end" })}
                    >
                      Gold Sponsor
                    </div>
                  </div>
                </div>
                <div className="col-md-5">
                  <div
                    className="team-member"
                    style={{ backgroundSize: "cover" }}
                  >
                    <figure>
                      <img
                        src="http://tirutsava.com/sp_logo/canara_bank.png"
                        alt=""
                        className="img-responsive"
                        style={{ height: "250px" }}
                      />
                      <figcaption>
                        <br />
                        <ul>
                          <li>
                            <a href="!#">
                              <i className="fab fa-facebook fa-2x"></i>
                            </a>
                          </li>
                          <li>
                            <a href="!#">
                              <i className="fab fa-twitter fa-2x"></i>
                            </a>
                          </li>
                          <li>
                            <a href="!#">
                              <i className="fab fa-linkedin fa-2x"></i>
                            </a>
                          </li>
                        </ul>
                      </figcaption>
                    </figure>
                    <h4 style={sap}>Canara Bank</h4>
                    <div className="button button-gold" style={italic}>
                      Gold Sponsor
                    </div>
                  </div>
                </div>
                <div className="col-md-5">
                  <div
                    className="team-member"
                    style={{ backgroundSize: "cover" }}
                  >
                    <figure>
                      <img
                        src="http://tirutsava.com/sp_logo/axis_bank.png"
                        alt=""
                        className="img-responsive"
                        style={{ height: "250px" }}
                      />
                      <figcaption>
                        <br />
                        <ul>
                          <li>
                            <a href="!#">
                              <i className="fab fa-facebook fa-2x"></i>
                            </a>
                          </li>
                          <li>
                            <a href="!#">
                              <i className="fab fa-twitter fa-2x"></i>
                            </a>
                          </li>
                          <li>
                            <a href="!#">
                              <i className="fab fa-linkedin fa-2x"></i>
                            </a>
                          </li>
                        </ul>
                      </figcaption>
                    </figure>
                    <h4 style={sap}>Axis Bank</h4>
                    <div className="button button-gold" style={italic}>
                      Gold Sponsor
                    </div>
                  </div>
                </div>
              </div>
              {/* NEW ROW */}
              <div
                className="row"
                style={{
                  justifyContent: "center"
                }}
              >
                {/* 1 */}
                <div className="col-md-4">
                  <div
                    className="team-member"
                    style={{ backgroundSize: "cover" }}
                  >
                    <figure>
                      <img
                        src="http://tirutsava.com/sp_logo/venusgeo.png"
                        alt=""
                        className="img-responsive"
                        style={{ height: "200px" }}
                      />
                      <figcaption>
                        <br />
                        <ul>
                          <li>
                            <a href="!#">
                              <i className="fab fa-facebook fa-2x"></i>
                            </a>
                          </li>
                          <li>
                            <a href="!#">
                              <i className="fab fa-twitter fa-2x"></i>
                            </a>
                          </li>
                          <li>
                            <a href="!#">
                              <i className="fab fa-linkedin fa-2x"></i>
                            </a>
                          </li>
                        </ul>
                      </figcaption>
                    </figure>
                    <h4 style={sap}>Venusgeo</h4>
                    <div className="button button-silver">Silver Sponsor</div>
                  </div>
                </div>
                {/* 2 */}
                <div className="col-md-4">
                  <div className="team-member">
                    <figure>
                      <img
                        src="http://tirutsava.com/sp_logo/zwickroell.png"
                        alt=""
                        className="img-responsive"
                        style={{ height: "200px" }}
                      />
                      <figcaption>
                        <br />
                        <ul>
                          <li>
                            <a href="!#">
                              <i className="fab fa-facebook fa-2x"></i>
                            </a>
                          </li>
                          <li>
                            <a href="!#">
                              <i className="fab fa-twitter fa-2x"></i>
                            </a>
                          </li>
                          <li>
                            <a href="!#">
                              <i className="fab fa-linkedin fa-2x"></i>
                            </a>
                          </li>
                        </ul>
                      </figcaption>
                    </figure>
                    <h4 style={sap}>Zwickroell</h4>
                    <div className="button button-silver">Silver Sponsor</div>
                  </div>
                </div>
                {/* 3 */}
                <div className="col-md-4">
                  <div className="team-member">
                    <figure>
                      <img
                        src="http://tirutsava.com/sp_logo/hoverrobotix.png"
                        alt=""
                        className="img-responsive"
                        style={{ height: "200px" }}
                      />
                      <figcaption>
                        <br />
                        <ul>
                          <li>
                            <a href="!#">
                              <i className="fab fa-facebook fa-2x"></i>
                            </a>
                          </li>
                          <li>
                            <a href="!#">
                              <i className="fab fa-twitter fa-2x"></i>
                            </a>
                          </li>
                          <li>
                            <a href="!#">
                              <i className="fab fa-linkedin fa-2x"></i>
                            </a>
                          </li>
                        </ul>
                      </figcaption>
                    </figure>
                    <h4 style={sap}>HoverRobotix</h4>
                    <div className="button button-silver">Silver Sponsor</div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="team-member">
                    <figure>
                      <img
                        src="http://tirutsava.com/sp_logo/journey_wheels.png"
                        alt=""
                        className="img-responsive"
                        style={{ height: "200px" }}
                      />
                      <figcaption>
                        <br />
                        <ul>
                          <li>
                            <a href="!#">
                              <i className="fab fa-facebook fa-2x"></i>
                            </a>
                          </li>
                          <li>
                            <a href="!#">
                              <i className="fab fa-twitter fa-2x"></i>
                            </a>
                          </li>
                          <li>
                            <a href="!#">
                              <i className="fab fa-linkedin fa-2x"></i>
                            </a>
                          </li>
                        </ul>
                      </figcaption>
                    </figure>
                    <h4 style={sap}>Journey Wheels</h4>
                    <div className="button button-silver">Silver Sponsor</div>
                  </div>
                </div>
              </div>
              {/* NEW ROW */}
              <div className="row">
                {/* 1 */}
                <div className="col-md-3">
                  <div
                    className="team-member"
                    style={{ backgroundSize: "cover" }}
                  >
                    <figure>
                      <img
                        src="http://tirutsava.com/sp_logo/firefox.png"
                        alt=""
                        className="img-responsive"
                        style={{ height: "150px" }}
                      />
                      <figcaption>
                        <br />

                        <ul>
                          <li>
                            <a href="!#">
                              <i className="fab fa-facebook fa-2x"></i>
                            </a>
                          </li>
                          <li>
                            <a href="!#">
                              <i className="fab fa-twitter fa-2x"></i>
                            </a>
                          </li>
                          <li>
                            <a href="!#">
                              <i className="fab fa-linkedin fa-2x"></i>
                            </a>
                          </li>
                        </ul>
                      </figcaption>
                    </figure>
                    <h4 style={sap}>Firefox</h4>
                    <div className="button button-normal">Cycles Partner</div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div
                    className="team-member"
                    style={{ backgroundSize: "cover" }}
                  >
                    <figure>
                      <img
                        src="http://tirutsava.com/sp_logo/ace_engineering.png"
                        alt=""
                        className="img-responsive"
                        style={{ height: "150px" }}
                      />
                      <figcaption>
                        <br />
                        <ul>
                          <li>
                            <a href="!#">
                              <i className="fab fa-facebook fa-2x"></i>
                            </a>
                          </li>
                          <li>
                            <a href="!#">
                              <i className="fab fa-twitter fa-2x"></i>
                            </a>
                          </li>
                          <li>
                            <a href="!#">
                              <i className="fab fa-linkedin fa-2x"></i>
                            </a>
                          </li>
                        </ul>
                      </figcaption>
                    </figure>
                    <h4 style={sap}>Ace Engineering</h4>
                    <div className="button button-normal">
                      Education Partner
                    </div>
                  </div>
                </div>
                {/* 2 */}
                <div className="col-md-3">
                  <div className="team-member">
                    <figure>
                      <img
                        src="http://tirutsava.com/sp_logo/career_launcher.png"
                        alt=""
                        className="img-responsive"
                        style={{ height: "150px" }}
                      />
                      <figcaption>
                        <br />
                        <ul>
                          <li>
                            <a href="!#">
                              <i className="fab fa-facebook fa-2x"></i>
                            </a>
                          </li>
                          <li>
                            <a href="!#">
                              <i className="fab fa-twitter fa-2x"></i>
                            </a>
                          </li>
                          <li>
                            <a href="!#">
                              <i className="fab fa-linkedin fa-2x"></i>
                            </a>
                          </li>
                        </ul>
                      </figcaption>
                    </figure>
                    <h4 style={sap}>Career Launcher</h4>
                    <div className="button button-normal">
                      Education Partner
                    </div>
                  </div>
                </div>
                {/* 3 */}
                <div className="col-md-3">
                  <div className="team-member">
                    <figure>
                      <img
                        src="http://tirutsava.com/sp_logo/made_easy.png"
                        alt=""
                        className="img-responsive"
                        style={{ height: "150px" }}
                      />
                      <figcaption>
                        <br />
                        <ul>
                          <li>
                            <a href="!#">
                              <i className="fab fa-facebook fa-2x"></i>
                            </a>
                          </li>
                          <li>
                            <a href="!#">
                              <i className="fab fa-twitter fa-2x"></i>
                            </a>
                          </li>
                          <li>
                            <a href="!#">
                              <i className="fab fa-linkedin fa-2x"></i>
                            </a>
                          </li>
                        </ul>
                      </figcaption>
                    </figure>
                    <h4 style={sap}>Made Easy</h4>
                    <div className="button button-normal">
                      Education Partner
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="team-member">
                    <figure>
                      <img
                        src="http://tirutsava.com/sp_logo/soda_junction.png"
                        alt=""
                        className="img-responsive"
                        style={{ height: "150px" }}
                      />
                      <figcaption>
                        <br />
                        <ul>
                          <li>
                            <a href="!#">
                              <i className="fab fa-facebook fa-2x"></i>
                            </a>
                          </li>
                          <li>
                            <a href="!#">
                              <i className="fab fa-twitter fa-2x"></i>
                            </a>
                          </li>
                          <li>
                            <a href="!#">
                              <i className="fab fa-linkedin fa-2x"></i>
                            </a>
                          </li>
                        </ul>
                      </figcaption>
                    </figure>
                    <h4 style={sap}>Soda Junction</h4>
                    <div className="button button-normal">Food Partner</div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="team-member">
                    <figure>
                      <img
                        src="http://tirutsava.com/sp_logo/creamstone.png"
                        alt=""
                        className="img-responsive"
                        style={{ height: "150px" }}
                      />
                      <figcaption>
                        <br />
                        <ul>
                          <li>
                            <a href="!#">
                              <i className="fab fa-facebook fa-2x"></i>
                            </a>
                          </li>
                          <li>
                            <a href="!#">
                              <i className="fab fa-twitter fa-2x"></i>
                            </a>
                          </li>
                          <li>
                            <a href="!#">
                              <i className="fab fa-linkedin fa-2x"></i>
                            </a>
                          </li>
                        </ul>
                      </figcaption>
                    </figure>
                    <h4 style={sap}>Creamstone</h4>
                    <div className="button button-normal">Food Partner</div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="team-member">
                    <figure>
                      <img
                        src="http://tirutsava.com/sp_logo/dare2compete.png"
                        alt=""
                        className="img-responsive"
                        style={{ height: "150px" }}
                      />
                      <figcaption>
                        <br />
                        <ul>
                          <li>
                            <a href="!#">
                              <i className="fab fa-facebook fa-2x"></i>
                            </a>
                          </li>
                          <li>
                            <a href="!#">
                              <i className="fab fa-twitter fa-2x"></i>
                            </a>
                          </li>
                          <li>
                            <a href="!#">
                              <i className="fab fa-linkedin fa-2x"></i>
                            </a>
                          </li>
                        </ul>
                      </figcaption>
                    </figure>
                    <h4 style={sap}>Dare2compete</h4>
                    <div className="button button-normal">Hosting Partner</div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="team-member">
                    <figure>
                      <img
                        src="http://tirutsava.com/sp_logo/airtel.png"
                        alt=""
                        className="img-responsive"
                        style={{ height: "150px" }}
                      />
                      <figcaption>
                        <br />
                        <ul>
                          <li>
                            <a href="!#">
                              <i className="fab fa-facebook fa-2x"></i>
                            </a>
                          </li>
                          <li>
                            <a href="!#">
                              <i className="fab fa-twitter fa-2x"></i>
                            </a>
                          </li>
                          <li>
                            <a href="!#">
                              <i className="fab fa-linkedin fa-2x"></i>
                            </a>
                          </li>
                        </ul>
                      </figcaption>
                    </figure>
                    <h4 style={sap}>Airtel</h4>
                    <div className="button button-normal">
                      Marketing Partner
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="team-member">
                    <figure>
                      <img
                        src="http://tirutsava.com/sp_logo/indian_institute_of_photography.png"
                        alt=""
                        className="img-responsive"
                        style={{ height: "114px" }}
                      />
                      <figcaption>
                        <br />
                        <ul>
                          <li>
                            <a href="!#">
                              <i className="fab fa-facebook fa-2x"></i>
                            </a>
                          </li>
                          <li>
                            <a href="!#">
                              <i className="fab fa-twitter fa-2x"></i>
                            </a>
                          </li>
                          <li>
                            <a href="!#">
                              <i className="fab fa-linkedin fa-2x"></i>
                            </a>
                          </li>
                        </ul>
                      </figcaption>
                    </figure>
                    <h4 style={sap}>Indian Institute of Photography</h4>
                    <div className="button button-normal">
                      Photography Partner
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="team-member">
                    <figure>
                      <img
                        src="http://tirutsava.com/sp_logo/inkpot.png"
                        alt=""
                        className="img-responsive"
                        style={{ height: "150px" }}
                      />
                      <figcaption>
                        <br />
                        <ul>
                          <li>
                            <a href="!#">
                              <i className="fab fa-facebook fa-2x"></i>
                            </a>
                          </li>
                          <li>
                            <a href="!#">
                              <i className="fab fa-twitter fa-2x"></i>
                            </a>
                          </li>
                          <li>
                            <a href="!#">
                              <i className="fab fa-linkedin fa-2x"></i>
                            </a>
                          </li>
                        </ul>
                      </figcaption>
                    </figure>
                    <h4 style={sap}>Inkpot</h4>
                    <div className="button button-normal">Printing Partner</div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="team-member">
                    <figure>
                      <img
                        src="http://tirutsava.com/sp_logo/its_my_tirupati.png"
                        alt=""
                        className="img-responsive"
                        style={{ height: "150px" }}
                      />
                      <figcaption>
                        <br />
                        <ul>
                          <li>
                            <a href="!#">
                              <i className="fab fa-facebook fa-2x"></i>
                            </a>
                          </li>
                          <li>
                            <a href="!#">
                              <i className="fab fa-twitter fa-2x"></i>
                            </a>
                          </li>
                          <li>
                            <a href="!#">
                              <i className="fab fa-linkedin fa-2x"></i>
                            </a>
                          </li>
                        </ul>
                      </figcaption>
                    </figure>
                    <h4 style={sap}>Its My Tirupati</h4>
                    <div className="button button-normal">
                      Social Media Partner
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="team-member">
                    <figure>
                      <img
                        src="http://tirutsava.com/sp_logo/ktm.png"
                        alt=""
                        className="img-responsive"
                        style={{ height: "150px" }}
                      />
                      <figcaption>
                        <br />
                        <ul>
                          <li>
                            <a href="!#">
                              <i className="fab fa-facebook fa-2x"></i>
                            </a>
                          </li>
                          <li>
                            <a href="!#">
                              <i className="fab fa-twitter fa-2x"></i>
                            </a>
                          </li>
                          <li>
                            <a href="!#">
                              <i className="fab fa-linkedin fa-2x"></i>
                            </a>
                          </li>
                        </ul>
                      </figcaption>
                    </figure>
                    <h4 style={sap}>KTM</h4>
                    <div className="button button-normal">Racing Partner</div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="team-member">
                    <figure>
                      <img
                        src="http://tirutsava.com/sp_logo/LTI.png"
                        alt=""
                        className="img-responsive"
                        style={{ height: "150px" }}
                      />
                      <figcaption>
                        <br />
                        <ul>
                          <li>
                            <a href="!#">
                              <i className="fab fa-facebook fa-2x"></i>
                            </a>
                          </li>
                          <li>
                            <a href="!#">
                              <i className="fab fa-twitter fa-2x"></i>
                            </a>
                          </li>
                          <li>
                            <a href="!#">
                              <i className="fab fa-linkedin fa-2x"></i>
                            </a>
                          </li>
                        </ul>
                      </figcaption>
                    </figure>
                    <h4 style={sap}>LTI </h4>
                    <div className="button button-normal">
                      Technical Partner
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="team-member">
                    <figure>
                      <img
                        src="http://tirutsava.com/sp_logo/WAF.png"
                        alt=""
                        className="img-responsive"
                        style={{ height: "150px" }}
                      />
                      <figcaption>
                        <br />
                        <ul>
                          <li>
                            <a href="!#">
                              <i className="fab fa-facebook fa-2x"></i>
                            </a>
                          </li>
                          <li>
                            <a href="!#">
                              <i className="fab fa-twitter fa-2x"></i>
                            </a>
                          </li>
                          <li>
                            <a href="!#">
                              <i className="fab fa-linkedin fa-2x"></i>
                            </a>
                          </li>
                        </ul>
                      </figcaption>
                    </figure>
                    <h4 style={sap}>What After College </h4>
                    <div className="button button-normal">Workshop Partner</div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="team-member">
                    <figure>
                      <img
                        src="http://tirutsava.com/sp_logo/techobytes.png"
                        alt=""
                        className="img-responsive"
                        style={{ height: "150px" }}
                      />
                      <figcaption>
                        <br />
                        <ul>
                          <li>
                            <a href="!#">
                              <i className="fab fa-facebook fa-2x"></i>
                            </a>
                          </li>
                          <li>
                            <a href="!#">
                              <i className="fab fa-twitter fa-2x"></i>
                            </a>
                          </li>
                          <li>
                            <a href="!#">
                              <i className="fab fa-linkedin fa-2x"></i>
                            </a>
                          </li>
                        </ul>
                      </figcaption>
                    </figure>
                    <h4 style={sap}>Techobytes </h4>
                    <div className="button button-normal">Workshop Partner</div>
                  </div>
                </div>{" "}
                <div className="col-md-3">
                  <div className="team-member">
                    <figure>
                      <img
                        src="http://tirutsava.com/sp_logo/bank_of_baroda.png"
                        alt=""
                        className="img-responsive"
                        style={{ height: "150px" }}
                      />
                      <figcaption>
                        <br />
                        <ul>
                          <li>
                            <a href="!#">
                              <i className="fab fa-facebook fa-2x"></i>
                            </a>
                          </li>
                          <li>
                            <a href="!#">
                              <i className="fab fa-twitter fa-2x"></i>
                            </a>
                          </li>
                          <li>
                            <a href="!#">
                              <i className="fab fa-linkedin fa-2x"></i>
                            </a>
                          </li>
                        </ul>
                      </figcaption>
                    </figure>
                    <h4 style={sap}>Bank of Baroda </h4>
                    <div className="button button-normal">Other Partner</div>
                  </div>
                </div>{" "}
                <div className="col-md-3">
                  <div className="team-member">
                    <figure>
                      <img
                        src="http://tirutsava.com/sp_logo/exafluence.png"
                        alt=""
                        className="img-responsive"
                        style={{ height: "150px" }}
                      />
                      <figcaption>
                        <br />
                        <ul>
                          <li>
                            <a href="!#">
                              <i className="fab fa-facebook fa-2x"></i>
                            </a>
                          </li>
                          <li>
                            <a href="!#">
                              <i className="fab fa-twitter fa-2x"></i>
                            </a>
                          </li>
                          <li>
                            <a href="!#">
                              <i className="fab fa-linkedin fa-2x"></i>
                            </a>
                          </li>
                        </ul>
                      </figcaption>
                    </figure>
                    <h4 style={sap}>Exafluence </h4>
                    <div className="button button-normal">Other Partner</div>
                  </div>
                </div>{" "}
                <div className="col-md-3">
                  <div className="team-member">
                    <figure>
                      <img
                        src="http://tirutsava.com/sp_logo/indian_scienctific.png"
                        alt=""
                        className="img-responsive"
                        style={{ height: "150px" }}
                      />
                      <figcaption>
                        <br />
                        <ul>
                          <li>
                            <a href="!#">
                              <i className="fab fa-facebook fa-2x"></i>
                            </a>
                          </li>
                          <li>
                            <a href="!#">
                              <i className="fab fa-twitter fa-2x"></i>
                            </a>
                          </li>
                          <li>
                            <a href="!#">
                              <i className="fab fa-linkedin fa-2x"></i>
                            </a>
                          </li>
                        </ul>
                      </figcaption>
                    </figure>
                    <h4 style={sap}>Indian Scientific </h4>
                    <div className="button button-normal">Other Partner</div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="team-member">
                    <figure>
                      <img
                        src="http://tirutsava.com/sp_logo/accountants_factory.png"
                        alt=""
                        className="img-responsive"
                        style={{ height: "113px" }}
                      />
                      <figcaption>
                        <br />
                        <ul>
                          <li>
                            <a href="!#">
                              <i className="fab fa-facebook fa-2x"></i>
                            </a>
                          </li>
                          <li>
                            <a href="!#">
                              <i className="fab fa-twitter fa-2x"></i>
                            </a>
                          </li>
                          <li>
                            <a href="!#">
                              <i className="fab fa-linkedin fa-2x"></i>
                            </a>
                          </li>
                        </ul>
                      </figcaption>
                    </figure>
                    <h4 style={sap}>Accountants Factory </h4>
                    <div className="button button-normal">Other Partner</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
