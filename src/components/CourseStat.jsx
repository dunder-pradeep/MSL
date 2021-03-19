import React, { Component } from "react";

class CourseStat extends Component {
  state = {};
  render() {
    return (
      <div class="card w-80 my-3 m-2">
        <div class="card-body">
          <h3 class="card-title">{this.props.name}</h3>
          <p class="text-muted my-1">Started - {this.props.date.toString()}</p>
          <p class="text-muted my-1">Status- {this.props.stat}</p>
          <p class="card-text">Resources: {this.props.res.toString()}</p>
          <a href="#" class="btn btn-primary btn-dark">
            Update
          </a>
        </div>
      </div>
    );
  }
}

export default CourseStat;
