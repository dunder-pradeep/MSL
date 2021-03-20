import React, { Component } from "react";
import { Route } from "react-router-dom";
import Recommendation from "./Recommendation";
import Course from "./Course";

class Recommender extends Component {
  state = {};
  handleRecomCourse = () => {
    console.log();
    this.props.history.push(`/courses/${this.props.recommendation.id}`);
    window.location.reload();
  };
  render() {
    return (
      <div class="card text-center shadow-sm">
        <div class="card-body">
          <h5 class="card-title">{this.props.recommendation.name}</h5>
          <p class="card-text">{this.props.recommendation.desc}</p>
          <button
            href={this.props.recommendation.link}
            class="btn btn-primary btn-dark"
            onClick={this.handleRecomCourse}
          >
            View
          </button>
        </div>
      </div>
    );
  }
}

export default Recommender;
