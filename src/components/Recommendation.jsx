import React, { Component } from "react";

class Recommendation extends Component {
  state = {};

  styles = {
    position: "absolute",
    top: 0,
    right: 0,
    paddingTop: 85,
  };

  render() {
    return (
      <div className="col-md-3" style={this.styles}>
        <div className="card w-0 my-3">
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              With supporting text below as a natural lead-in to additional
              content.
            </p>
            <a href="#" className="btn btn-primary">
              Button
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Recommendation;
