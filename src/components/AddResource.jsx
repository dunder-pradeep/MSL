import React, { Component } from "react";

class AddResource extends Component {
  state = {};
  render() {
    const dateObj = new Date();
    return (
      <form className="row g-3">
        <div className="col-auto">
          <label for="staticEmail2" className="visually-hidden">
            Email
          </label>
          <input
            type="text"
            readonly
            className="form-control-plaintext"
            id="staticEmail2"
            value={dateObj.toUTCString()}
          />
        </div>
        <div className="col-auto">
          <label htmlFor="inputPassword2" className="visually-hidden">
            Password
          </label>
          <input
            type="text"
            className="form-control"
            id="inputPassword2"
            placeholder="Source"
          />
        </div>
        <div className="col-auto">
          <button type="submit" className="btn btn-primary mb-3">
            Add Resource
          </button>
        </div>
      </form>
    );
  }
}

export default AddResource;
