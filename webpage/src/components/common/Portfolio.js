import React, {Component} from 'react';
import PortfolioItem from './PortfolioItem';

import img1 from '../assets/logos/creative-market.jpg';
import img2 from '../assets/logos/designmodo.jpg';
import img3 from '../assets/logos/envato.jpg';


const portfolio = [
  {title : 'React', subtitle:'Web develoment using React', image: img1},
  {title : 'Explore', subtitle:'Graphic D esign', image: img2},
  {title : 'Finish ', subtitle:'Identity', image: img3},
  
  
];


class Portfolio extends Component {
  render(){
    return(
      <div>
      <section className="bg-light page-section" id="portfolio">
        <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-heading text-uppercase">Portfolio</h2>
            <h3   className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur</h3>
          </div>
        </div>
        <div className="row">
         
          {portfolio.map((item, index)=>{
             return <PortfolioItem {...item} key={index} /> 
          })}
        </div>
      </div>
  </section>
  <div/> 
  </div>
    )
  }

  
}

export default Portfolio;