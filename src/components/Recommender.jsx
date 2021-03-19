import React, { Component } from "react";

class Recommender extends Component {
  state = {};
  render() {
    return (
      <div class="card text-center shadow-sm">
        <div class="card-body">
          <h5 class="card-title">{this.props.recommendation.name}</h5>
          <p class="card-text">{this.props.recommendation.desc}</p>
          <a
            href={this.props.recommendation.link}
            class="btn btn-primary btn-dark"
          >
            View
          </a>
        </div>
      </div>
    );
  }
}

export default Recommender;
