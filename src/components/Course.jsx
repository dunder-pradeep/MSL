import React, { Component } from "react";
import axios from "axios";

const baseAPI = "http://localhost:8080/api/course";

class Course extends Component {
  state = { data: {} };
  async componentDidMount() {
    const { data } = await axios.get(baseAPI);
    this.setState({ data });
  }

  render() {
    const data = this.state.data;
    return (
      <div className="row">
        <div className="col align-self-center mx-4">
          <div className="row justify-content-between">
            <div className="col-8">
              <h2>Course</h2>
            </div>
            <div className="col-3 justify-content-end">
              <div className="d-flex flex-row-reverse">
                <button type="button" className="btn btn-dark">
                  Update
                </button>
                <button type="button" className="btn btn-outline-danger mx-2">
                  Like
                </button>
              </div>
            </div>
          </div>

          <div className="card text-dark bg-light my-3 py-1">
            <div className="card-body">
              <p className="card-text">
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book.
              </p>
            </div>
            <div className="card-footer text-muted">
              <p className="card-text">Prereq : Some random pre req </p>
            </div>
          </div>

          <div className="row my-4">
            <div className="col-sm-2">
              <div className="card">
                <div className="card-body">
                  <div className="mb-4">
                    <h3 className="card-title">Info</h3>
                  </div>
                  <div className="card-text my-3">
                    <h6 className="card-title py-0 my-0">status</h6>
                    <p className="card-text text-muted">{data.status}</p>
                  </div>

                  <div className="card-text my-3">
                    <h6 className="card-title py-0 my-0">type</h6>
                    <p className="card-text text-muted">Document</p>
                  </div>

                  <div className="card-text my-3">
                    <h6 className="card-title py-0 my-0">date added</h6>
                    <p className="card-text text-muted">{data.date}</p>
                  </div>

                  <div className="card-text my-3">
                    <h6 className="card-title py-0 my-0">favourites</h6>
                    <p className="card-text text-muted">{data.fav_count}</p>
                  </div>

                  <div className="card-text my-3">
                    <h6 className="card-title py-0 my-0">avg. difficulty</h6>
                    <p className="card-text text-muted">{data.diff}</p>
                  </div>

                  <div className="card-text my-3">
                    <h6 className="card-title py-0 my-0">intrested</h6>
                    <p className="card-text text-muted">{data.interest}</p>
                  </div>

                  <div className="card-text my-3">
                    <h6 className="card-title py-0 my-0">dropped</h6>
                    <p className="card-text text-muted">{data.dropped}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-10">
              <div className="col align-self-center mx-5">
                <div className="row justify-content-between">
                  <div className="col-4">
                    <h3>Threads</h3>
                  </div>
                  <div className="col-1">
                    <button type="button" className="btn btn-outline-dark ">
                      New
                    </button>
                  </div>
                </div>
                <div className="card text-dark bg-light my-3 px-3 py-3">
                  <div className="card-body">
                    <div className="card btn-outline-dark mb-3">
                      <div className="card-header text-white bg-dark ">
                        General Discussion
                      </div>
                      <div className="card-body ">
                        <div className="row justify-content-between">
                          <div className="col-4">
                            <h5 className="card-title">Success card title</h5>
                            <p className="card-text text-muted">
                              created by {data.createdBy}
                            </p>
                          </div>
                          <div className="col-1">
                            <p className="card-text text-muted">100 replies</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card text-white bg-dark my-4 mx-5">
                <div className="card-header">
                  <h5>Status Distribution </h5>
                </div>
                <div className="card-body">
                  <div className="d-flex flex-row">
                    <span className="badge badge-pill badge-primary">
                      ongoing
                    </span>
                    <span className="badge badge-pill badge-success">
                      planning
                    </span>
                    <span className="badge badge-pill badge-danger">
                      completed
                    </span>
                    <span className="badge badge-pill badge-warning">
                      dropped
                    </span>
                  </div>
                </div>
              </div>
              <div className="card text-white bg-dark my-4 mx-5">
                <div className="card-header">
                  <h5>Difficulty Distribution</h5>
                </div>
                <div className="card-body"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Course;
