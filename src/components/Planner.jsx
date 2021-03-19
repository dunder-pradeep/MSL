import React, { Component } from "react";
import { Trash } from "react-bootstrap-icons";
class Planner extends Component {
  state = {};

  cardStyle = {
    textDecoration: "none",
  };

  planCard(plan) {
    return (
      <div className="card mb-2 shadow-sm" style={this.cardStyle}>
        <div className="form-check mx-2 my-1">
          <button
            type="checkbox"
            className="btn btn-outline-success m-3"
            onClick={() => this.props.onCompletion(plan.id)}
          >
            <Trash />
          </button>
          <label className="form-check-label" for="flexCheckDefault">
            {plan.name}
          </label>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div classNameName="card w-0 my-3">
        <div className="card-body">
          <h4 classNameName="card-title">Planned-to</h4>
          {this.props.plans.map((plan) => this.planCard(plan))}
        </div>
      </div>
    );
  }
}

export default Planner;
