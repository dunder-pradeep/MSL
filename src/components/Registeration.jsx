import React, { Component } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Redirect } from "react-router";
import { Route } from "react-router-dom";

const baseAPI = "http://localhost:8080/api/auth";

class Registeration extends Component {
  state = { user: { username: "", password: "", email: "" } };

  handleSubmit = async (e) => {
    e.preventDefault();
    const newusr = this.state.user;

    try {
      const resp = await axios.post(baseAPI, newusr);
      this.props.history.push("/home");

      toast.success(`Welcome ${newusr.username}`);
      window.location.reload(); //yep this is fake ..
    } catch (e) {
      console.log(e);
      toast.error("Failed to register user!");
    }
  };

  handleChange = ({ currentTarget: input }) => {
    let newUser = this.state.user;
    newUser[input.name] = input.value;
    this.setState({ user: newUser });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            name="email"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            onChange={this.handleChange}
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            name="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            onChange={this.handleChange}
          />
        </div>
        <div className="form-group form-check">
          <input
            type="checkbox"
            className="form-check-input"
            name="always"
            id="exampleCheck1"
            onChange={this.handleChange}
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Remember me
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    );
  }
}

export default Registeration;
