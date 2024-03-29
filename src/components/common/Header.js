import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Header extends Component {
  render (){
    return (
      <div>
        <header className="masthead" style={{backgroundImage:`url(${this.props.image})`}}>
          <div className="container">
            <div className="intro-text">
              <div className="intro-lead-in">{this.props.title}</div>
              <div className="intro-heading text-uppercase">
                {this.props.subtitle}
              </div>
              <Link
                className="btn  btn-xl text-uppercase js-scroll-trigger"
                href={this.props.link}
              >
               
              </Link>
            </div>
          </div>
        </header>
      </div>
    )
  }

}

export default Header;