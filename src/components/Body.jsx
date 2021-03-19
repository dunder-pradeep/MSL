import React, { Component } from "react";
import CourseStat from "./CourseStat";
import Recommendation from "./Recommendation";
import Recommender from "./Recommender";
import Planner from "./Planner";
import getCourses from "./data/Courses";
import getRecom from "./data/Recommendations";
import getPlans from "./data/Plans";

class Body extends Component {
  state = {
    courses: getCourses(),
    recommendations: getRecom(),
    plans: getPlans(),
  };
  constructor() {
    super();
  }

  handlePlanCompletion = (id) => {
    this.state.plans = this.state.plans.filter((e) => e.id != id);
    console.log(this.state.plans);
    this.setState({});
  };

  render() {
    return (
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-9">
            {this.state.courses.map((course) => (
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
              {this.state.recommendations.map((recommendation) => (
                <div className="col">
                  <Recommender recommendation={recommendation} />
                </div>
              ))}
            </div>
          </div>
          <div className="col-md-3">
            <Planner
              plans={this.state.plans}
              onCompletion={this.handlePlanCompletion}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Body;
