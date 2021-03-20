import React, { Component } from "react";
import Timeline from "react-time-line";
import AddResource from "./AddResource";

class CourseStat extends Component {
  state = { showTimeline: false, showUpdate: false };

  handleClick = () => {
    this.setState({
      showTimeline: !this.state.showTimeline,
      showUpdate: false,
    });
  };

  render() {
    const events = [
      { ts: "2020-09-17T12:22:46.587Z", text: "R1" },
      { ts: "2020-09-17T12:21:46.587Z", text: "R2" },
      { ts: "2020-09-17T12:20:46.587Z", text: "ML" },
      { ts: "2020-09-16T12:22:46.587Z", text: "git" },
      { ts: "2020-09-16T12:21:46.587Z", text: "OS" },
      { ts: "2020-09-16T12:20:46.587Z", text: "app" },
    ];
    return (
      <div class="card w-80 my-3 m-2">
        <div class="card-body">
          <h3 class="card-title">{this.props.name}</h3>
          <p class="text-muted my-1">Started - {this.props.date.toString()}</p>
          <p class="text-muted my-1">Status- {this.props.stat}</p>
          <p class="card-text">
            <button
              className="btn btn-outline-primary m-2"
              onClick={this.handleClick}
            >
              Resources:{" "}
              {this.state.showTimeline ? (
                <Timeline items={events} format="hh:mm a" />
              ) : null}
            </button>
            <button
              class="btn btn-primary btn-dark m-2"
              style={{ position: "absolute" }}
              onClick={() =>
                this.setState({
                  showUpdate: !this.state.showUpdate,
                  showTimeline: false,
                })
              }
            >
              Update
            </button>
            {this.state.showUpdate ? <AddResource /> : null}
          </p>
        </div>
      </div>
    );
  }
}

export default CourseStat;
