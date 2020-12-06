import React, { Component } from "react";
import Problems from './Problems';
import Home from './Home';
import Team from './Component/Team';
import Video from './Component/Video';
import { Route, Switch, NavLink,BrowserRouter } from "react-router-dom";
import MyNavbar from './Component/MyNavbar';
import { connect } from 'react-redux';

class App extends Component {
	
  componentDidMount(){
	  let token=localStorage.getItem("token");
	  if(token!==null){
		  this.props.setToken(token);
	  }
  }	
	
  render() {
	console.log("reducer token",this.props.token)  
   
	  return (
      <div>
		<MyNavbar/>
		<Switch>
		  <Route exact path={process.env.PUBLIC_URL+'/'} component={Home} />
		  <Route exact path={process.env.PUBLIC_URL+'/course'} component={Video} />
		  <Route exact path={process.env.PUBLIC_URL+'/problems'} component={Problems} />
		  <Route exact path={process.env.PUBLIC_URL+'/about'} component={Team} />
		</Switch>
      </div>
    );
  }
}

const mapStateToProps = state => {
    return {
		token:state.token
    }
};

const mapDispatchToProps = dispatch => {
    return {
		setToken: (token) => dispatch({type: 'setToken', val: token}),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);





