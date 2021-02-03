import React, { Component, useState } from "react";
import { data } from "./data/userData.js";
import { withRouter } from "react-router-dom";
import axios from "axios";
import ReactStoreIndicator from "react-score-indicator";

import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

import "./Profiles.css";
import EditProfile from "./EditProfile";
import Calender from "./Calendar";
import Client from "../GraphqlClient/GraphqlClient";
import { getUserQuery } from "../queries/queries";
import { connect } from "react-redux";
import Menu from "./Menu";

const TOTAL_PROBLEM = 200;

let local = "http://localhost:8080/";
let heroku = "https://frozen-atoll-01566.herokuapp.com/";

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      id: "",
      name: "",
      pic: "",
      email: "",
      bio: "",
      website: [{ label: "LinkedIn", url: "https://www.google.com/" }],
      location: "",
      college: "",
      editMode: true,
      skills: [],
    };
  }

  myEdit() {
    let email = this.props.email;
    let url = email.split("@")[0];
    this.props.history.push("/setting/edit");
  }

  componentDidUpdate(previousProps, previousState) {
    if (previousProps.match.params.id != this.props.match.params.id) {
      let email = this.props.match.params.id;
      Client.query({
        query: getUserQuery,
        variables: { email: email },
      })
        .then((res) => {
          //console.log("graphql ",res.data);
          this.setState({
            id: res.data.user.id,
            name: res.data.user.name,
            pic: res.data.user.pic,
            bio: res.data.user.bio,
            website: res.data.user.website,
            location: res.data.user.location,
            college: res.data.user.college,
            email: res.data.user.email,
          });
        })
        .catch((err) => {
          console.log("graph err ", err);
        });
    }
  }

  componentDidMount() {
    let email = this.props.match.params.id;

    Client.query({
      query: getUserQuery,
      variables: { email: email },
    })
      .then((res) => {
        //console.log("graphql ",res.data);
        this.setState({
          id: res.data.user.id,
          name: res.data.user.name,
          pic: res.data.user.pic,
          bio: res.data.user.bio,
          // website: res.data.user.website,
          location: res.data.user.location,
          college: res.data.user.college,
          email: res.data.user.email,
        });
      })
      .catch((err) => {
        console.log("graph err ", err);
      });
  }

  render() {
    return (
      <div className="container profilePage">
        <div className="main-body">
          <div className="row gutters-sm">
            <div className="col-md-4 mb-3">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex flex-column align-items-center text-center">
                    <img
                      src={this.state.pic}
                      alt="Admin"
                      className="rounded-circle"
                      width="150"
                    />
                    <div className="mt-3">
                      <h4>{this.state.name}</h4>
                      <p className="text-secondary mb-1">{this.state.bio}</p>

                      <div>
                        {this.state.email == this.props.email ? (
                          <button
                            className="edit-btn"
                            onClick={() => {
                              this.myEdit();
                            }}
                          >
                            {" "}
                            Edit Profile
                          </button>
                        ) : null}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card mt-3">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 className="mb-0">College</h6>
                    <span className="text-secondary">{this.state.college}</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 className="mb-0">Location</h6>
                    <span className="text-secondary">
                      {this.state.location}
                    </span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 className="mb-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="feather feather-globe mr-2 icon-inline"
                      >
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="2" y1="12" x2="22" y2="12"></line>
                        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                      </svg>
                      Websites
                    </h6>
                    <ul>
                      {this.state.website.map((web) => (
                        <li>
                          <a href={web.url} target="_blank">
                            {web.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-8">
              <div className="card mb-3">
                <div className="card-body">
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Full Name</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      {this.state.name}
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Email</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      {this.state.email}
                    </div>
                  </div>

                  <hr />
                  <div className="row">
                    <div className=" inline">
                      <h6 className="mb-0">Skills</h6>
                      <div class="skills mb-0">
                        <ul>
                          {this.state.skills.map((skill) => (
                            <li>{skill}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row gutters-sm">
                <div className="col-sm-6 mb-3">
                  <div className="card h-100">
                    <div className="card-body">
                      <h6 className="d-flex align-items-center mb-3">
                        <i className="material-icons text-info mr-2">
                          Progress :
                        </i>
                      </h6>
                      <small>Web Design</small>
                      <div className="progress mb-3" style={{ height: "5px" }}>
                        <div
                          className="progress-bar bg-primary"
                          role="progressbar"
                          style={{ width: "80%" }}
                          aria-valuenow="80"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                      <small>Website Markup</small>
                      <div className="progress mb-3" style={{ height: "5px" }}>
                        <div
                          className="progress-bar bg-primary"
                          role="progressbar"
                          style={{ width: "72%" }}
                          aria-valuenow="72"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                      <small>One Page</small>
                      <div className="progress mb-3" style={{ height: "5px" }}>
                        <div
                          className="progress-bar bg-primary"
                          role="progressbar"
                          style={{ width: "89%" }}
                          aria-valuenow="89"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                      <small>Mobile Template</small>
                      <div className="progress mb-3" style={{ height: "5px" }}>
                        <div
                          className="progress-bar bg-primary"
                          role="progressbar"
                          style={{ width: "55%" }}
                          aria-valuenow="55"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                      <small>Backend API</small>
                      <div className="progress mb-3" style={{ height: "5px" }}>
                        <div
                          className="progress-bar bg-primary"
                          role="progressbar"
                          style={{ width: "66%" }}
                          aria-valuenow="66"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 mb-3">
                  <div className="card h-100">
                    <div className="card-body">
                      <i className="material-icons text-info mr-2">
                        Problem Solved : <br />
                      </i>
                      <span
                        style={{
                          fontSize: "50px",
                          fontWeight: "200",
                        }}
                      >
                        {this.state.problemSolved}
                      </span>

                      <div>
                        <ReactStoreIndicator
                          value={30}
                          maxValue={100}
                          stepsColors={[
                            "#3da940",
                            "#3da940",
                            "#3da940",
                            "#53b83a",
                            "#84c42b",
                            "#f1bc00",
                            "#ed8d00",
                            "#d12000",
                          ]}
                          style={{ marginTop: "10px" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Calender id={this.state.id} />
        <Menu></Menu>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    token: state.token,
    isAuthenticated: state.isAuthenticated,
    email: state.email,
    solved: state.solved,
  };
};
export default withRouter(connect(mapStateToProps)(Profile));
