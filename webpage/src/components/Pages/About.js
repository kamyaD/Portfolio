import React, { Component } from "react";
import Header from "../common/Header";
import image from "../assets/image/about.jpg";
import {Link} from 'react-router-dom';


class About extends Component {
  render() {
    return (
      <div>
        <Header
          title="All about"
          subtitle="My career journey" 
          image={image}
        />
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
                          I graduated from Makerere University with a bachelors degree in Social Work and Social Administration. Despite this background, I always had desire to be a software developer, that is why I spent the better part of my campus life in IT computer labs learning to write code. There I got introduced to HTML language and CSS. 
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className="timeline-inverted">
                    <div className="timeline-image">
                      <img
                        className="rounded-circle img-fluid"
                        src="img/about/gtg.jpg"
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
                          After campus, I joined Global team genius which is a computer service Company based both in 
                        Kenya and Uganda  in partnership with <a href="https://yourcomputergenius.com/">Your computer genius </a>which is a US based IT Company. Here my responsibilities included, website design using wordpress, domain registration, and Hosting. We also bought and sold used computers from US to Kenya. At this company I was introduced  to  languages like PHP and MYSQL.
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="timeline-image">
                      <img
                        className="rounded-circle img-fluid"
                        src="img/about/Evidence.jpg"
                        alt=""
                      />
                    </div>
                    <div className="timeline-panel">
                      <div className="timeline-heading">
                        <h4>May 2013</h4>
                        <h4 className="subheading">
                          Evidence Action - Kenya
                        </h4>
                      </div>
                      <div className="timeline-body">
                        <p className="text-muted">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Sunt ut voluptatum eius sapiente, totam
                          reiciendis temporibus qui quibusdam, recusandae sit
                          vero unde, sed, incidunt et ea quo dolore laudantium
                          consectetur!
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
                        <h4 className="subheading">Google Digital Skills -Kenya</h4>
                      </div>
                      <div className="timeline-body">
                        <p className="text-muted">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Sunt ut voluptatum eius sapiente, totam
                          reiciendis temporibus qui quibusdam, recusandae sit
                          vero unde, sed, incidunt et ea quo dolore laudantium
                          consectetur!
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="timeline-image">
                      <img
                        className="rounded-circle img-fluid"
                        src="img/about/andela1.jpg"
                        alt=""
                      />
                    </div>
                    <div className="timeline-panel">
                      <div className="timeline-heading">
                        <h4>Nov 2018</h4>
                        <h4 className="subheading">
                          Andela Kenya
                        </h4>
                      </div>
                      <div className="timeline-body">
                        <p className="text-muted">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Sunt ut voluptatum eius sapiente, totam
                          reiciendis temporibus qui quibusdam, recusandae sit
                          vero unde, sed, incidunt et ea quo dolore laudantium
                          consectetur!
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
