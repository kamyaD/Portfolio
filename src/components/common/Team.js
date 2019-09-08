import React, {Component} from 'react';
import TeamMembers from './TeamMember';

import img1 from '../assets/team/1.jpg';
import img2 from '../assets/team/2.jpg';
import img3 from '../assets/team/3.jpg';


const member = [
  {name:"Gransom Oyombe", image:img1, title:""},
  {name:"Brian Bett", image:img2, title:""},
  {name:"Moses Gitau", image:img3, title:""}

]
class Team extends Component {
  render(){
    return(
      <section className="bg-light page-section" id="team">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h2 className="section-heading text-uppercase">Our Amazing Team</h2>
          <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
        </div>
      </div>
      <div className="row">
       {member.map((person, index)=>{
         return<TeamMembers {...person} key={index} />
       })} 
      
      </div>
    </div>
  </section>

    )
  }
}

export default Team;
