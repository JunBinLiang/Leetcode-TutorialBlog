import React, { Component, useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";

import { NavLink } from "react-router-dom";
import { withRouter } from "react-router-dom";

import axios from "axios";
import { connect } from "react-redux";
import { GoogleLogin } from "react-google-login";
import config from "../config.json";

import "antd/dist/antd.css";
import "./MyNavBar.css";

import { Menu } from "antd";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
const { SubMenu } = Menu;

let local = "http://localhost:8080/";
let heroku = "https://frozen-atoll-01566.herokuapp.com/";

class MyNavbar extends Component {
  constructor() {
    super();
    this.handleClick1 = this.handleClick1.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);
    this.handleClick3 = this.handleClick3.bind(this);
    this.googleResponse = this.googleResponse.bind(this);
    this.onFailure = this.onFailure.bind(this);
    this.logout = this.logout.bind(this);
    this.myProfile = this.myProfile.bind(this);
    this.myNotes = this.myNotes.bind(this);
  }
  myNotes() {
    let email = this.props.user.email;
    let url = email.split("@")[0];
    this.props.history.push("/notes/" + url);
  }
  myProfile() {
    let email = this.props.user.email;
    let url = email.split("@")[0];
    this.props.history.push("/profile/" + url);
  }

  onFailure() {}

  logout() {
    //empty the token
    var emptySolve = new Array(100);
    emptySolve.fill(false);
    let vistor = {
      solved: emptySolve,
    };

    localStorage.setItem("token", "");
    this.props.setUser(vistor);
    console.log("logout");
    this.props.logout();
  }

  componentDidUpdate() {}

  googleResponse(response) {
    axios
      .post(`https://frozen-atoll-01566.herokuapp.com/login`, {
        //.post("http://localhost:8080/login", {

        code: response.tokenId,
      })
      .then((res) => {
        //console.log('login',res);
        let token = res.data.token;
        localStorage.setItem("token", token);

        this.props.setToken(token);
        this.props.setUser(res.data.user);
        this.props.loginSuccess();
      });
  }

  handleClick1() {
    this.props.history.push("/");
  }
  handleClick2() {
    this.props.resetMode();
    this.props.history.push("/problems");
  }
  handleClick3() {
    this.props.history.push("/about");
  }

  render() {
    let loginB = null;
    let logoutB = null;
    if (!this.props.isAuthenticated) {
      loginB = (
        <GoogleLogin
          render={(renderProps) => (
            <Nav.Link
              onClick={renderProps.onClick}
              style={{ color: "white", marginRight: "50px" }}
            >
              Login
            </Nav.Link>
          )}
          clientId={config.GOOGLE_CLIENT_ID}
          buttonText="Login"
          onSuccess={this.googleResponse}
          onFailure={this.onFailure}
          style={{
            padding: 0,
            margin: 0,
          }}
        />
      );
    } else {
      logoutB = (
        <Menu defaultSelectedKeys={["1"]} defaultOpenKeys={["sub1"]}>
          <SubMenu key="sub4" icon={<SettingOutlined />} title="66Bro">
            <Menu.Item onClick={this.myProfile}>Profile</Menu.Item>
            <Menu.Item onClick={this.myNotes}>Notes</Menu.Item>
            <Menu.Item onClick={this.logout}>Logout</Menu.Item>
          </SubMenu>
        </Menu>
      );
    }

    return (
      <>
        <Navbar bg="dark" variant="dark">
          <Nav className="mr-auto">
            <Nav.Link onClick={this.handleClick1}>Home</Nav.Link>
            <Nav.Link onClick={this.handleClick2}>Problems</Nav.Link>
            <Nav.Link onClick={this.handleClick3}>About Us</Nav.Link>
            <div id="indicator"></div>
          </Nav>

          {loginB}
          {logoutB}
        </Navbar>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.isAuthenticated,
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setUser: (user) => dispatch({ type: "user", val: user }),
    resetMode: () => dispatch({ type: "reset" }),
    loginSuccess: () => dispatch({ type: "login" }),
    setToken: (token) => dispatch({ type: "setToken", val: token }),
    logout: () => dispatch({ type: "logout" }),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(MyNavbar));
