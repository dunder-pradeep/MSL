import React, { Component } from "react";
import { Trash } from "react-bootstrap-icons";
import { toast } from "react-toastify";

class Planner extends Component {
  state = {};

  cardStyle = {
    textDecoration: "none",
  };

  planRender(plans) {
    if (plans.length === 0) {
      toast.success(" 🎉   kudos ..");
      return (
        <div className="card w-0 my-3">
          <div className="card-body">
            <h4 className="card-title">Planned-to</h4>
            <p>No plans for now ur chillin..</p>
          </div>
        </div>
      );
    }
    return (
      <div className="card w-0 my-3">
        <div className="card-body">
          <h4 className="card-title">Planned-to</h4>
          {plans.map((plan) => this.planCard(plan))}
        </div>
      </div>
    );
  }

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
    return this.planRender(this.props.plans);
  }
}

export default Planner;
