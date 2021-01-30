import React, { Component, useState } from "react";
import { data } from "./data/userData.js";
import { withRouter } from "react-router-dom";
import axios from "axios";

/*

 !! STILL MISSING IMAGE UPLOAD, SKILLS(LIST)

*/
class EditProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: "",
      github: "",
      twitter: "",
      instagram: "",
      facebook: "",
      skills: [],
      title: "",
      email: "",
      img: "",
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.editProfile = this.editProfile.bind(this);
  }
  componentWillMount() {
    this.getProfile();
  }
  handleInputChange(e) {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    this.setState({ [name]: value });
  }
  getProfile() {
    let profileId = this.props.match.params.id;
    this.setState({
      id: profileId,
    });
    axios.get(`/api/profile/${profileId}`).then((response) => {
      this.setState(
        {
          name: response.data.name,
          github: response.data.github,
          twitter: response.data.twitter,
          instagram: response.data.instagram,
          facebook: response.data.facebook,
          skills: response.data.skills,
          title: response.data.title,
          email: response.data.email,
          img: response.data.img,
        },
        () => {
          console.log(this.state);
        }
      );
    });
  }
  editProfile(newProfile) {
    console.log(newProfile);
    axios
      .request({
        method: "put",
        url: `/#/profile/${this.state.id}`,
        data: newProfile,
      })
      .then((response) => {
        this.props.history.push(`/#/profile/${this.state.id}`);
      })
      .catch((err) => console.log(err));
  }
  onSubmit(e) {
    console.log(this.refs.name.value);
    const newProfile = {
      name: this.refs.name.value,
      github: this.refs.github.value,
      twitter: this.refs.twitter.value,
      instagram: this.refs.instagram.value,
      facebook: this.refs.facebook.value,
      //   skills: this.refs.skills.value,
      title: this.refs.title.value,
      email: this.refs.email.value,
      //   img:this.refs.img.value,
    };
    this.editProfile(newProfile);
    e.preventDefault();
  }

  render() {
    return (
      <div className="container">
        <button
          onClick={() =>
            this.props.history.push("/profile/" + this.props.match.params.id)
          }
        >
          GO BACK
        </button>

        <form onSubmit={this.onSubmit.bind(this)}>
          <fieldset className="form-group">
            <label htmlFor="name">Name</label>
            <input
              name="name"
              className="form-control"
              value={this.state.name}
              onChange={this.handleInputChange}
            />
          </fieldset>
          <fieldset className="form-group">
            <label htmlFor="email">Email</label>
            <input
              name="email"
              className="form-control"
              value={this.state.email}
              onChange={this.handleInputChange}
            />
          </fieldset>
          <fieldset className="form-group">
            <label htmlFor="github">GitHub</label>
            <input
              name="github"
              className="form-control"
              value={this.state.gitHub}
              onChange={this.handleInputChange}
            />
          </fieldset>
          <fieldset className="form-group">
            <label htmlFor="twitter">Twitter</label>
            <input
              name="twitter"
              className="form-control"
              value={this.state.twitter}
              onChange={this.handleInputChange}
            />
          </fieldset>
          <fieldset className="form-group">
            <label htmlFor="instagram">Instagram</label>
            <input
              name="instagram"
              className="form-control"
              value={this.state.instagram}
              onChange={this.handleInputChange}
            />
          </fieldset>
          <fieldset className="form-group">
            <label htmlFor="facebook">Facebook</label>
            <input
              name="facebook"
              className="form-control"
              value={this.state.facebook}
              onChange={this.handleInputChange}
            />
          </fieldset>
          <fieldset className="form-group">
            <label htmlFor="title">Title</label>
            <input
              name="title"
              className="form-control"
              value={this.state.title}
              onChange={this.handleInputChange}
            />
          </fieldset>

          <button type="submit" className="btn btn-default">
            Save Post
          </button>
        </form>
      </div>
    );
  }
}
export default withRouter(EditProfile);
