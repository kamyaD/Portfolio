import React, { Component } from "react";
import Header from "../common/Header";
import image from '../assets/image/header-bg.jpg';

// Re-useble components
import Services from '../common/Services';
import About from './About' ;
import Team from '../common/Team';
import Portfolio from '../common/Portfolio';

class Home extends Component {
  render() {
    return (
      <div>
        <Header 
         title="Welcome to my Page!"
         subtitle="IT'S NICE TO MEET YOU"
         Link="/services"
        image={image}
        />
        <Services />
        </div>
    )
  }
}

export default Home;
