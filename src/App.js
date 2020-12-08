import React, { Component } from "react";
import Problems from './Problems';
import Home from './Home';
import Team from './Component/Team';
import Video from './Component/Video';
import { Route, Switch, NavLink,BrowserRouter } from "react-router-dom";
import MyNavbar from './Component/MyNavbar';
import { connect } from 'react-redux';
import axios from 'axios';

class App extends Component {
	
  componentDidMount(){
	  let token=localStorage.getItem("token");
	  if(token!==null){
		  this.props.setToken(token);
	  }
	  
	  
	  const config = {
    	headers: { Authorization: `Bearer ${token}` }
	  }
	  axios.post(`https://frozen-atoll-01566.herokuapp.com/userInfor`, {},config)
      .then(res => {//user information will be added later,first lunch
		  if(res.status===200){
			  console.log('authenticate');
			  this.props.login();
		  }
		  
      }).catch(err=>{
		  console.log('not authenticate');
	  });
	  console.log('au ',this.props.isAuthenticated);
  }	
	
	
	
  render() {
	 
   
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
		token:state.token,
		isAuthenticated:state.isAuthenticated
		
    }
};

const mapDispatchToProps = dispatch => {
    return {
		setToken: (token) => dispatch({type: 'setToken', val: token}),
		login: (token) => dispatch({type: 'login'}),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);





