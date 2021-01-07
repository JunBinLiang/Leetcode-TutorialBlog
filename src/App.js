import React, { Component } from "react";
import Problems from "./Problems";
import Home from "./Home";
import Team from "./Component/Team";
import Video from "./Component/Video";
import Compile from "./Component/Compile";
import Profile from "./Component/Profile.js";
import Error from "./Component/Error";
import Calendar from "./Component/Calendar";
import {
  Route,
  Switch,
  NavLink,
  BrowserRouter,
  HashRouter,
} from "react-router-dom";
import MyNavbar from "./Component/MyNavbar";
import { connect } from "react-redux";
import axios from "axios";

class App extends Component {
  componentDidMount() {
    let token = localStorage.getItem("token");
    if (token !== null) {
      this.props.setToken(token);
    }

    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    axios
      .post(`https://frozen-atoll-01566.herokuapp.com/userInfor`, {}, config)
      .then((res) => {
        //user information will be added later,first lunch
        if (res.status === 200) {
          console.log("authenticate");
          this.props.login();
        }
      })
      .catch((err) => {
        console.log("not authenticate");
      });
    console.log("au ", this.props.isAuthenticated);
  }

  render() {
    return (
      <div>
        <HashRouter>
          <MyNavbar />
        </HashRouter>

        <HashRouter>
          <Switch>
            <Route exact path={"/"} component={Home} />
            <Route exact path={"/course"} component={Video} />
            <Route exact path={"/problems"} component={Problems} />
            <Route exact path="/problems/:id" component={Compile} />
            <Route exact path={"/about"} component={Team} />
            <Route exact path="/profile/:id" component={Profile} />
            <Route exact path={"/calendar"} component={Calendar} />
            <Route component={Error} />;
          </Switch>
        </HashRouter>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    token: state.token,
    isAuthenticated: state.isAuthenticated,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setToken: (token) => dispatch({ type: "setToken", val: token }),
    login: (token) => dispatch({ type: "login" }),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
