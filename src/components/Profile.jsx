import React, { Component } from "react";
import FollowModal from "./FollowModal";
import ReactModal from "react-modal";

class Profile extends Component {
  state = { followers: false, following: false };

  handleFollowers = () => {
    this.setState({ followers: !this.state.followers });
  };

  render() {
    return (
      <div className="col align-self-center mx-3">
        {this.state.followers ? (
          <FollowModal onClick={this.handleFollowers} />
        ) : null}

        <div className="row justify-content-between">
          <div className="col-6">
            <h2>Brushothaman Waynekatraman</h2>
            <p className="card-text text-muted">tag#9696</p>
            <h5>
              <a href="#">
                <span className="badge rounded-pill bg-dark text-muted">
                  message
                </span>
              </a>
              <a href="#">
                <span className="badge rounded-pill bg-dark text-muted">
                  follow
                </span>
              </a>
            </h5>
          </div>
          <div className="col-2">
            <button
              type="button"
              className="btn btn-dark my-3"
              data-bs-toggle="modal"
              data-bs-target="#Followers"
              onClick={this.handleFollowers}
            >
              Followers{" "}
              <span className="badge bg-secondary rounded-pill">9</span>
              <span className="visually-hidden">unread messages</span>
            </button>
            <button
              type="button"
              className="btn btn-dark "
              data-bs-toggle="modal"
              data-bs-target="#Followers"
            >
              Following{" "}
              <span className="badge bg-secondary rounded-pill">120</span>
              <span className="visually-hidden">unread messages</span>
            </button>
          </div>
        </div>
        <nav>
          <div className="nav nav-tabs my-5" id="nav-tab" role="tablist">
            <button
              className="nav-link active"
              id="nav-home-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-home"
              type="button"
              role="tab"
              aria-controls="nav-home"
              aria-selected="true"
            >
              Completed
            </button>
            <button
              className="nav-link "
              id="nav-profile-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-profile"
              type="button"
              role="tab"
              aria-controls="nav-profile"
              aria-selected="false"
            >
              Ongoing
            </button>
            <button
              className="nav-link"
              id="nav-contact-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-contact"
              type="button"
              role="tab"
              aria-controls="nav-contact"
              aria-selected="false"
            >
              Planned-to
            </button>
            <button
              className="nav-link"
              id="nav-contact-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-contact"
              type="button"
              role="tab"
              aria-controls="nav-contact"
              aria-selected="false"
            >
              dropped
            </button>
          </div>
        </nav>
        <div className="tab-content" id="nav-tabContent">
          <div
            className="tab-pane fade show active"
            id="nav-home"
            role="tabpanel"
            aria-labelledby="nav-home-tab"
          >
            <div className="row row-cols-1 row-cols-md-3 g-4">
              <div className="col">
                <div className="card text-center shadow-sm">
                  <div className="card-body">
                    <h5 className="card-title">Algorithms</h5>
                    <p className="card-text">
                      With supporting text below as a natural lead-in to
                      additional content.
                    </p>
                    <a href="#" className="btn btn-primary btn-dark">
                      View
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade "
            id="nav-profile"
            role="tabpanel"
            aria-labelledby="nav-profile-tab"
          ></div>
          <div
            className="tab-pane fade"
            id="nav-contact"
            role="tabpanel"
            aria-labelledby="nav-contact-tab"
          ></div>
        </div>
      </div>
    );
  }
}

export default Profile;
