import React, { Component } from "react";
import Header from "../common/Header";
import image from "../assets/image/about.jpg";
import { Link } from "react-router-dom";

class About extends Component {
  render() {
    return (
      <div>
        <Header title="All about" subtitle="My career journey" image={image} />
        <section className="page-section" id="about">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <h2 className="section-heading text-uppercase">About Me</h2>
                <h3 className="section-subheading text-muted">
                  This is the summary of my story as a developer.
                </h3>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <ul className="timeline">
                  <li>
                    <div className="timeline-image">
                      <img
                        className="rounded-circle img-fluid"
                        src="img/about/graduation.jpg"
                        alt=""
                      />
                    </div>
                    <div className="timeline-panel">
                      <div className="timeline-heading">
                        <h4>2007-2012</h4>
                        <h4 className="subheading">My Humble Beginnings</h4>
                      </div>
                      <div className="timeline-body">
                        <p className="text-muted">
                          I graduated from Makerere University with a bachelors
                          degree in Social Work and Social Administration.
                          Despite this background, I always had desire to be a
                          software developer, that is why I spent the better
                          part of my campus life in IT computer labs learning to
                          write code. There I got introduced to HTML language
                          and CSS.
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className="timeline-inverted">
                    <div className="timeline-image">
                      <img
                        className="rounded-circle img-fluid"
                        src="img/about/GTG.jpg"
                        alt=""
                      />
                    </div>
                    <div className="timeline-panel">
                      <div className="timeline-heading">
                        <h4>May 2012</h4>
                        <h4 className="subheading">Global team genius</h4>
                      </div>
                      <div className="timeline-body">
                        <p className="text-muted">
                          After campus, I joined Global team genius which is a
                          computer service Company based both in Kenya and
                          Uganda in partnership with{" "}
                          <a href="https://yourcomputergenius.com/">
                            Your computer genius{" "}
                          </a>
                          which is a US based IT Company. Here my
                          responsibilities included, website design using
                          wordpress, domain registration, and Hosting. We also
                          bought and sold used computers from US to Kenya. At
                          this company I was introduced to languages like PHP
                          and MYSQL.
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="timeline-image">
                      <img
                        className="rounded-circle img-fluid"
                        src="img/about/Evidence.png"
                        alt=""
                      />
                    </div>
                    <div className="timeline-panel">
                      <div className="timeline-heading">
                        <h4>May 2013</h4>
                        <h4 className="subheading">Evidence Action - Kenya</h4>
                      </div>
                      <div className="timeline-body">
                        <p className="text-muted">
                        Evidence Action scales evidence-based and cost-effective programs to reduce the burden of poverty for hundreds of millions of people. I was hired as  Monitoring and Evaluation Field Officer(M&E-FO). My roles included, monitoring all deworming activities all over the country, I was also visiting waterpoints all over the country and monitoring chlorine intake. 
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className="timeline-inverted">
                    <div className="timeline-image">
                      <img
                        className="rounded-circle img-fluid"
                        src="img/about/google.jpg"
                        alt=""
                      />
                    </div>
                    <div className="timeline-panel">
                      <div className="timeline-heading">
                        <h4>July 2014</h4>
                        <h4 className="subheading">
                          Google Digital Skills -Kenya
                        </h4>
                      </div>
                      <div className="timeline-body">
                        <p className="text-muted">
                          Digital Skills For Africa is a Google initiative in
                          conjunction with various training partners, which aims
                          to train young people in digital skills.{" "}
                          <p>
                            I was hired as a digital skills trainer in the
                            program and my major role was to help small and
                            medium enterprices bring their businesses online
                            using google products.{" "}
                          </p>
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="timeline-image">
                      <img
                        className="rounded-circle img-fluid"
                        src="img/about/andela1.png"
                        alt=""
                      />
                    </div>
                    <div className="timeline-panel">
                      <div className="timeline-heading">
                        <h4>Nov 2018</h4>
                        <h4 className="subheading">Andela Kenya</h4>
                      </div>
                      <div className="timeline-body">
                        <p className="text-muted">
                          During my work at Google Digital Skills program, I came a cross ALC program which was an opportunity to learn Javascript, CSS and HTML. I enrolled in the course and upon completion, I applied for employment at Andela Kenya. <p>At Andela, I went through 3 weeks bootcamp where I learnt and built a product in python Flask. After bootcamp, I was taken through a six month training where I learnt python Django and React Redux, and React node. This was the birth of my love for Javascript.<p>Currently I'm a full stack Javascript majoring in MREN(Mongodb, React, Express and  Node) and PREN(Postgres, React, Express and  Node) stacks</p> </p>
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className="timeline-inverted">
                    <Link to="/contact">
                      <div className="timeline-image">
                        <h4>
                          Be Part
                          <br />
                          Of My
                          <br />
                          Story!
                        </h4>
                      </div>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default About;
