import React, { Component, useState } from "react";
import { data } from "./data/userData.js";
import { withRouter } from "react-router-dom";
import Button from "react-bootstrap/Button";

import Client from "../GraphqlClient/GraphqlClient";
import { getUserQuery, updateUser } from "../queries/queries";

import Toast from "light-toast";
import { connect } from "react-redux";

import "./EditProfile.scss";
class EditProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      id: "",
      name: "",
      pic: "",
      bio: "",
      website: "",
      location: "",
      college: "",
      email: "",
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.submit = this.submit.bind(this);
  }
  componentDidMount() {
    this.getProfile();
  }

  componentDidUpdate(previousProps, previousState) {
    //console.log("update ",this.props);
    /*if (previousProps.email != this.props.email) {
      /*let email = this.props.email.split("@")[0];

      Client.query({
        query: getUserQuery,
        variables: { email: email },
      })
        .then((res) => {
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
          Toast.info("Something go wrong!", 1500, () => {});
          console.log("graph err ", err);
        });
    }*/
  }

  handleInputChange(e) {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    this.setState({ [name]: value });
  }

  getProfile() {
    this.setState({
      id: this.props.user.id,
      name: this.props.user.name,
      pic: this.props.user.pic,
      bio: this.props.user.bio,
      website: this.props.user.website,
      location: this.props.user.location,
      college: this.props.user.college,
      email: this.props.user.email,
    });
  }

  submit() {
    this.setState({ loading: true });

    Client.mutate({
      variables: {
        id: this.state.id,
        name: this.state.name,
        website: this.state.website,
        college: this.state.college,
        location: this.state.location,
        bio: this.state.bio,
      },
      mutation: updateUser,
    })
      .then((res) => {
        console.log("update success ", res);

        Toast.info("Success!", 1000, () => {});
        this.setState({
          loading: false,
        });

        console.log("save user ", res.data.updateUser);
        this.props.setUser(res.data.updateUser);
      })
      .catch((err) => {
        //error handling for updating
        Toast.info("Something go wrong!", 1000, () => {});
        this.setState({ loading: false });
        console.log("graph err ", err);
      });
  }

  render() {
    let SaveB = (
      <Button className="outline-primary">
        <i class="fa fa-refresh fa-spin"></i>
      </Button>
    );

    if (!this.state.loading) {
      SaveB = (
        <Button className="form-btn" onClick={this.submit}>
          Save
        </Button>
      );
    }

    return (
      <div className="container form-container">
        <button
          className="btn return-btn btn-default"
          onClick={() =>
            this.props.history.push(
              "/profile/" + this.props.user.email.split("@")[0]
            )
          }
        >
          &laquo; Previous
        </button>
        <fieldset className="form-group">
          <label className="edit-label" htmlFor="name">
            Name
          </label>
          <input
            name="name"
            className="edit-profile-form-control"
            value={this.state.name}
            onChange={this.handleInputChange}
          />
        </fieldset>

        <fieldset className="form-group">
          <label className="edit-label" htmlFor="website">
            Website url
          </label>
          <input
            name="website"
            className="edit-profile-form-control"
            value={this.state.website}
            onChange={this.handleInputChange}
          />
        </fieldset>

        <fieldset className="form-group">
          <label className="edit-label" htmlFor="college">
            College
          </label>
          <input
            name="college"
            className="edit-profile-form-control"
            value={this.state.college}
            onChange={this.handleInputChange}
          />
        </fieldset>

        <fieldset className="form-group">
          <label className="edit-label" htmlFor="location">
            Location
          </label>
          <input
            name="location"
            className="edit-profile-form-control"
            value={this.state.location}
            onChange={this.handleInputChange}
          />
        </fieldset>

        <fieldset className="form-group">
          <label className="edit-label" htmlFor="bio">
            Description
          </label>
          <input
            name="bio"
            className="edit-profile-form-control"
            value={this.state.bio}
            onChange={this.handleInputChange}
          />
        </fieldset>

        {/* <Form.Group>
          <Form.File id="pic" label="Upload new profile image" />
        </Form.Group> */}

        {SaveB}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    token: state.token,
    isAuthenticated: state.isAuthenticated,
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setUser: (user) => dispatch({ type: "user", val: user }),
    setToken: (token) => dispatch({ type: "setToken", val: token }),
    login: (token) => dispatch({ type: "login" }),
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(EditProfile)
);
