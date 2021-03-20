import React, { Component } from "react";

class ForumCard extends Component {
  state = {};
  render() {
    const { forum } = this.props;
    return (
      <div className="card btn-outline-dark mb-3">
        <div className="card-header text-white bg-dark ">{forum.head}</div>
        <div className="card-body ">
          <div className="row justify-content-between">
            <div className="col-4">
              <h5 className="card-title">{forum.title}</h5>
              <p className="card-text text-muted">{`created by ${forum.author}`}</p>
            </div>
            <div className="col-1">
              <p className="card-text text-muted">{`${forum.replyCount} replies`}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ForumCard;
