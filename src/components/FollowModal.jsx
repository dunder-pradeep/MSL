import React, { Component } from "react";
import { TelephoneMinus } from "react-bootstrap-icons";
import ReactModal from "react-modal";

class FollowModal extends Component {
  state = { open: true };

  render() {
    return (
      <ReactModal
        isOpen={this.state.open}
        onRequestClose={() => {
          this.setState({ open: false });
          this.props.onClick();
        }}
        style={{ width: "10px" }}
        role="dialog"
        closeTimeoutMS={2000}
      >
        <h4 className="modal-title">Followers</h4>
        <div className="container">
          <div className="row justify-content-between my-1">
            <div className="col-8 d-flex flex-row align-middle my-0">
              <p className="card-text my-0 py-0 ">Isthiri Manidhan</p>{" "}
              <p className="card-text text-muted ">#8Ruva</p>
            </div>
            <div className="col-4 align-middle d-flex justify-content-end">
              <button type="button" className="btn btn-outline-dark btn-sm">
                Follow
              </button>
            </div>
          </div>
        </div>
      </ReactModal>
    );
  }
}

export default FollowModal;
