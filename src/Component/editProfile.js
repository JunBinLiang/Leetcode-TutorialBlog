import React, { Component, useState } from "react";
import { data } from "./data/userData.js";
import { withRouter } from "react-router-dom";
import axios from "axios";
import Button from "react-bootstrap/Button";


import Client from "../GraphqlClient/GraphqlClient";
import {getUserQuery,updateUser } from "../queries/queries";

import Toast from 'light-toast';
import { connect } from "react-redux";








class EditProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading:false,
      id: "",
      name: "",
      pic: "",
      bio: "",
      website:"",
      location: "",
      college: "",
      email:"",
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.submit = this.submit.bind(this);
  }
  componentDidMount() {
    console.log("mount  ",this.props);
    this.getProfile();
  }

  componentDidUpdate(previousProps, previousState) {
    if (previousProps.email != this.props.email) {
      let email = this.props.email.split("@")[0];

      Client
      .query({
        query: getUserQuery,
        variables: {email:email}
      }).then(res => {
        this.setState({
          id: res.data.user.id,
          name: res.data.user.name,
          pic: res.data.user.pic,
          bio: res.data.user.bio,
          website: res.data.user.website,
          location: res.data.user.location,
          college: res.data.user.college,
          email:res.data.user.email
        });
      })
      .catch((err)=>{
        Toast.info('Something go wrong!', 1500, () => {});
        console.log('graph err ',err);
      });
    }
  }


  handleInputChange(e) {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    this.setState({ [name]: value });
  }
  
  getProfile() {
      let email = this.props.email.split("@")[0];
      Client
      .query({
        query: getUserQuery,
        variables: {email:email}
      }).then(res => {
        this.setState({
          id: res.data.user.id,
          name: res.data.user.name,
          pic: res.data.user.pic,
          bio: res.data.user.bio,
          website: res.data.user.website,
          location: res.data.user.location,
          college: res.data.user.college,
          email:res.data.user.email
        });
        
      })
      .catch((err)=>{
        Toast.info('Something go wrong!', 1500, () => {});
        console.log('graph err ',err);
      });
    }


  


  submit() {
    console.log('state  ',this.state);
    this.setState({loading:true});

    Client
    .mutate({
      variables: {id:this.state.id,name:this.state.name,website:this.state.website,college:this.state.college,location:this.state.location,bio:this.state.bio},
      mutation: updateUser
    }).then(res => {
      console.log("update success ",res);
      Toast.info('Success!', 1000, () => {});
      this.setState({
        loading:false,
        id: res.data.updateUser.id,
        name: res.data.updateUser.name,
        pic: res.data.updateUser.pic,
        bio: res.data.updateUser.bio,
        website: res.data.updateUser.website,
        location: res.data.updateUser.location,
        college: res.data.updateUser.college,
        email:res.data.updateUser.email
      });
    })
    .catch((err)=>{
      Toast.info('Something go wrong!', 1000, () => {});
      this.setState({loading:false});
      console.log('graph err ',err);
    });
  }

  render() {

    let SaveB = (
      <Button className="outline-primary">
        <i class="fa fa-refresh fa-spin"></i>
      </Button>
    );

    if(!this.state.loading){
      SaveB=<Button className="outline-primary" onClick={this.submit}>
                Save
            </Button>
    }


    return (
      <div className="container">
        <button
          onClick={() =>
            this.props.history.push("/profile/" + this.props.email.split("@")[0])
          }
        >
          GO BACK
        </button>

       
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
            <label htmlFor="website">Website</label>
            <input
              name="website"
              className="form-control"
              value={this.state.website}
              onChange={this.handleInputChange}
            />
          </fieldset>

          <fieldset className="form-group">
            <label htmlFor="college">College</label>
            <input
              name="college"
              className="form-control"
              value={this.state.college}
              onChange={this.handleInputChange}
            />
          </fieldset>


          <fieldset className="form-group">
            <label htmlFor="location">Location</label>
            <input
              name="location"
              className="form-control"
              value={this.state.location}
              onChange={this.handleInputChange}
            />
          </fieldset>

          <fieldset className="form-group">
            <label htmlFor="bio">Description</label>
            <input
              name="bio"
              className="form-control"
              value={this.state.bio}
              onChange={this.handleInputChange}
            />
          </fieldset>

          {SaveB}
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

export default withRouter(connect(mapStateToProps)(EditProfile));
