import React, { Component } from "react";
import ReactModal from "react-modal";

class FollowModal extends Component {
  state = {};

  render() {
    return (
      <div
        className="modal fade"
        id="myModal"
        aria-hidden="true"
        style={{ display: "none" }}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Followers</h4>
              <button type="button" className="close" data-dismiss="modal">
                ×
              </button>
            </div>

            <div className="modal-body">
              <div className="container">
                <div className="row justify-content-between my-1">
                  <div className="col-8 d-flex flex-row align-middle my-0">
                    <p className="card-text my-0 py-0 ">Isthiri Manidhan</p>{" "}
                    <p className="card-text text-muted ">#8Ruva</p>
                  </div>
                  <div className="col-4 align-middle d-flex justify-content-end">
                    <button
                      type="button"
                      className="btn btn-outline-dark btn-sm"
                    >
                      Follow
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-dark"
                data-dismiss="modal"
                onClick={this.props.onClick}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FollowModal;
