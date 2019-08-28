import React, { Component } from "react";
import SingleService from "./SingleService";

// Images imports
import img1 from "../assets/image/icons/javaScript.jpg";
import img4 from "../assets/image/icons/python.png";
import img5 from "../assets/image/icons/Postgress.jpg"



const services = [
  {
    tittle: "JavaScript",
    description: "I am a full stack Javascript web developer.I have specialized in the PREN stack (Postgres, ReactJS, Express, and NodeJS). I have worked on Travela which is a travel tool used to manage all travel realated activities of all Andelans. ",
    image:img1
  },
  {
    tittle: "Python",
    description: "I also have experience in Python(Django Framework), Django REST framework, Flask. I have created machine learning models using python to clasify images and also to read data from Images ",
    image:img4
  },
  {
    tittle: "Postgress",
    description: "I have a strong knowledge in designing, coding, testing and profiling PostgreSQL database in the highly loaded environment. . ",
    image:img5
  }
];

class Services extends Component {
  render() {
    return (
      <section className="page-section" id="services">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 id="service" className="section-heading  text-uppercase">My Areas of specialty</h2>
              <h3 className="section-subheading text-muted">
                These are some of the technologies that I'm best at.
              </h3>
            </div>
          </div>
          <div classname="row text-center">
            {services.map((services, index) => {  
              return <SingleService {...services} key={index} />;
              
            })}
          </div>
        </div>
      </section>
    );
  }
}

export default Services;
