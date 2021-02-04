import React, { Component } from "react";
import Problems from "./Problems";
import Home from "./Home";
import Team from "./Component/Team";
import Video from "./Component/Video";
import Compile from "./Component/Compile";
import Profile from "./Component/Profile.js";
import Error from "./Component/Error";
import EditProfile from "./Component/EditProfile";

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

import Client from "./GraphqlClient/GraphqlClient";
import { getBooksQuery, addAuthor,getUserQuery } from "./queries/queries";

//https://rubygarage.org/blog/graphql-in-react-with-apollo-client    graphql usage

let local = "http://localhost:8080/";
let heroku = "https://frozen-atoll-01566.herokuapp.com/";

class App extends Component {
  componentDidMount() {
     //query example
   

     /*Client
    .query({
      query: getUserQuery,
      variables: {email:"junbinliang66"}
    }).then(result => {
      console.log("graphql ",result);
    })
    .catch((err)=>{
      console.log('graph err ',err);
    });*/
    

    /* mutation example
    Client
    .mutate({
      variables: {},
      mutation: addAuthor
    }).then(result => {
      console.log("graphql ",result);
    })
    .catch((err)=>{
      console.log('graph err ',err);
    });
    */

    let token = localStorage.getItem("token");
    if (token !== null) {
      this.props.setToken(token);
    }

    const config = {
      headers: { Authorization: `${token}` },
    };
    axios
      .post(heroku + `autologin`, {}, config)
      .then((res) => {
        //user information will be added later,first lunch
        if (res.status === 200) {
          console.log("authenticate ",res);
          this.props.setUser(res.data.user);
          this.props.login();
        }
      })
      .catch((err) => {
        console.log("not authenticate");
      });
  }

  render() {
    console.log('user',this.props.user);
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
            <Route exact path="/setting/edit" render={() =>(this.props.isAuthenticated ? ( <Route  component={EditProfile} />): (<Route component={Error} />))} />
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
    email: state.email,
    solved: state.solved,
    user:state.user
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setUser: (user) => dispatch({ type: "user", val: user }),
    setToken: (token) => dispatch({ type: "setToken", val: token }),
    setEmail: (email) => dispatch({ type: "setEmail", val: email }),
    setSolved: (solved) => dispatch({ type: "setSolved", val: solved }),
    login: (token) => dispatch({ type: "login" }),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);









//issue need to solve: 
//1. auto logout bug
//2.lotout in profile page => login imediate