import React, { Component } from "react";
import Recommender from "./Recommender";
import Planner from "./Planner";
import CourseStat from "./CourseStat";
import Timeline from "react-time-line";

class Home extends Component {
  state = {};
  render() {
    return (
      <div className="row">
        <div className="col-md-9">
          {this.props.courses.map((course) => (
            <CourseStat
              name={course.name}
              date={course.startDate}
              stat={course.status}
              res={course.resources}
            />
          ))}
          <div className="row mt-5 mb-3">
            <h2>Reccomended</h2>
          </div>
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {this.props.recommendations.map((recommendation) => (
              <div className="col">
                <Recommender
                  recommendation={recommendation}
                  history={this.props.history}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="col-md-3">
          <Planner
            plans={this.props.plans}
            onCompletion={this.props.onCompletion}
          />
        </div>
      </div>
    );
  }
}

export default Home;
