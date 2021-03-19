import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";

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
            <a className="navbar-brand mx-3" href="#">
              MSL
            </a>
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
                  href="#"
                >
                  Home
                </a>
                <a className="nav-link mx-3" href="#">
                  Profile
                </a>
                <a className="nav-link mx-3" href="#">
                  Forums
                </a>
                <a className="nav-link mx-3" href="#">
                  Discover New
                </a>
              </div>
            </div>

            <div classNameName="" style={{ color: "white" }}>
              {" "}
              {this.state.time}{" "}
            </div>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}
