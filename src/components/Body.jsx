import React, { Component } from "react";
import Home from "./Home";
import Profile from "./Profile";
import Forums from "./Forums";
import getCourses from "./data/Courses";
import getRecom from "./data/Recommendations";
import getPlans from "./data/Plans";

import { Route, BrowserRouter } from "react-router-dom";
import axios from "axios";
import Registeration from "./Registeration";
import Course from "./Course";

const baseAPI = "http://localhost:8080/api/courses";

class Body extends Component {
  state = {
    courses: getCourses(),
    recommendations: getRecom(),
    plans: getPlans(),
  };

  constructor(props) {
    super(props);
    this.state.courses = getCourses();
    this.state.recommendations = getRecom();
    this.state.plans = getPlans();
  }

  async componentDidMount() {
    const { data } = await axios.get(baseAPI);
    this.setState({ courses: data });
  }

  handlePlanCompletion = (id) => {
    this.setState({ plans: this.state.plans.filter((e) => e.id !== id) });
  };

  render() {
    return (
      <div className="container mt-4">
        <BrowserRouter>
          <Route path="/home">
            <Home
              courses={this.state.courses}
              plans={this.state.plans}
              recommendations={this.state.recommendations}
              onCompletion={this.handlePlanCompletion}
              history={this.props.history}
            />
          </Route>
          <Route path="/profile">
            <Profile history={this.props.history} />
          </Route>
          <Route path="/forums">
            <Forums />
          </Route>
          <Route path="/register">
            <Registeration
              history={this.props.history}
              parent={this}
            ></Registeration>
          </Route>
          <Route path="/courses" component={Course}></Route>
        </BrowserRouter>
      </div>
    );
  }
}

export default Body;
