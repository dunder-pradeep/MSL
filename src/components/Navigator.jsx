import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";

export default class Navigator extends Component {
  state = {
    time: new Date().toLocaleTimeString(),
  };

  constructor() {
    super();
    this.timeUpdater();
  }

  timeUpdater = () => {
    setInterval(
      () => this.setState({ time: new Date().toLocaleTimeString() }),
      1000
    );
  };

  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-3">
          <div className="container-fluid">
            <a className="navbar-brand mx-3">MSL</a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <a
                  className="nav-link active mx-3"
                  aria-current="page"
                  href="/home"
                >
                  Home
                </a>

                <a className="nav-link mx-3" href="/profile">
                  Profile
                </a>

                <a className="nav-link mx-3" href="/forums">
                  Forums
                </a>
                <a className="nav-link mx-3" href="/courses/435">
                  Discover New
                </a>
              </div>
            </div>

            <div className="" style={{ color: "white" }}>
              {" "}
              {this.state.time}{" "}
            </div>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}
