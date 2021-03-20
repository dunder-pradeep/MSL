import React, { Component } from "react";
import ForumCard from "./ForumCard";
import getForums from "./data/forums";
import ForumForm from "./ForumForm";
import { toast } from "react-toastify";
import axios from "axios";

const baseAPI = "http://localhost:8080/api/forums";

class Forums extends Component {
  state = {
    forums: [],
    newForum: false,
  };

  constructor(props) {
    super(props);
    this.state.forums = getForums();
    this.state.newForum = false;
  }

  async componentDidMount() {
    const resp = await axios.get(baseAPI);
    this.setState({ forums: resp.data });
  }

  createThread = async (head, title, author) => {
    const newPost = {
      id: 6,
      head: head,
      title: title,
      author: author,
      replyCount: 0,
    };
    const oldforums = { ...this.state.forums };
    const new_forums = [newPost, ...this.state.forums];
    try {
      const resp = await axios.post(baseAPI, newPost);
      this.setState({ forums: new_forums });
      toast.success("🌈 New post added");
    } catch (e) {
      console.log(e);
      this.setState({ forums: oldforums });
      toast.error("Failed to create a new post!");
    } finally {
      this.setState({ newForum: false });
    }
  };

  showForm = () => {
    this.setState({ newForum: true });
  };

  render() {
    return (
      <div className="col align-self-center mx-5">
        <div className="row justify-content-between">
          <div className="col-4">
            <h3>Threads</h3>
          </div>
          <div className="col-1">
            <button
              type="button"
              className="btn btn-outline-dark "
              onClick={this.showForm}
            >
              New
            </button>
          </div>
        </div>
        <div className="card text-dark bg-light my-3 px-3 py-3">
          <div className="card-body">
            {this.state.newForum ? (
              <ForumForm createThread={this.createThread} />
            ) : null}
            {this.state.forums.map((forum) => (
              <ForumCard forum={forum} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Forums;
