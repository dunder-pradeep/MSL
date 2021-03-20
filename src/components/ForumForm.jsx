import React, { Component } from "react";

class ForumForm extends Component {
  state = { forum: { head: "General Discussion", title: "", author: "" } };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.createThread(
      this.state.forum.head,
      this.state.forum.title,
      this.state.forum.author
    );
  };

  handleChange = ({ currentTarget: input }) => {
    let newforum = { ...this.state.forum };
    newforum[input.name] = input.value;
    this.setState({ forum: newforum });
  };

  render() {
    return (
      <form className="row g-3 m-3 pb-3" onSubmit={this.handleSubmit}>
        <div className="col-md-6">
          <label htmlFor="inputTopic" className="form-label">
            Topic
          </label>
          <select
            id="inputState"
            className="form-select"
            name="head"
            defaultValue="General Discussion"
            value={this.state.forum.head}
            onChange={this.handleChange}
          >
            <option>General Discussion</option>
            <option>DataStructures</option>
            <option>Machine Learning</option>
            <option>Database Management Systems</option>
            <option>Some random topic</option>
            <option>Another random topic</option>
            <option>DataStructures</option>
          </select>
        </div>

        <div className="col-12">
          <label htmlFor="inputTitle" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="inputTitle"
            value={this.state.forum.title}
            placeholder="Your topic here"
            name="title"
            onChange={this.handleChange}
          />
        </div>

        <div className="col-12">
          <label htmlFor="inputContent" className="form-label"></label>
          <input
            type="text"
            className="form-control"
            id="inputContent"
            placeholder="Write something here"
            value={this.state.forum.author}
            name="author"
            onChange={this.handleChange}
          />
        </div>

        <div className="col-12">
          <button type="submit" className="btn btn-primary">
            Post
          </button>
        </div>
      </form>
    );
  }
}

export default ForumForm;
