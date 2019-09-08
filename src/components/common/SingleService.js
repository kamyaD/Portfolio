import React, { Component } from "react";

class SingleService extends Component {
  render() {
    return (
      <div className="col-md-4 job_sections">
        <img className="service_img" src={this.props.image} />
        <h4 className="service-heading">{this.props.tittle}</h4>

        <p className="text-muted">
          {this.props.description}
        </p>
      </div>
    );
  }
}

export default SingleService;
