import React, { Component,useState } from "react";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import {NavLink } from "react-router-dom";
import {withRouter} from 'react-router-dom';

import axios from 'axios';
import { connect } from 'react-redux';
import { GoogleLogin } from 'react-google-login';
import config from '../config.json';

class MyNavbar extends Component{
	constructor() {
    		super();
			this.handleClick1 = this.handleClick1.bind(this);
			this.handleClick2 = this.handleClick2.bind(this);
			this.handleClick3 = this.handleClick3.bind(this);
			this.googleResponse=this.googleResponse.bind(this);
			this.onFailure=this.onFailure.bind(this);
			this.logout=this.logout.bind(this);
  	 }
	
	onFailure(){
		
	}
	
	logout(){//empty the token
		localStorage.setItem("token", "");
		console.log("logout")
		this.props.logout();
		
	}
	
	googleResponse(response){	
		 console.log(response)//id_token
		
		 axios.post(`https://frozen-atoll-01566.herokuapp.com/login`, {
			 code:response.tokenId,	 
		 })
		 .then(res => {
			 console.log(res);
			 let token=res.data.token;
			 let profile=res.data.user;
			 localStorage.setItem("token", token);
			 this.props.setToken(token);
			 this.props.loginSuccess();
			 console.log(token);
			 console.log(profile);
		 });
	}
	
	 handleClick1(){
		  this.props.history.push(process.env.PUBLIC_URL+'/');
	 }
	handleClick2(){
		  this.props.resetMode();
		  this.props.history.push(process.env.PUBLIC_URL+'/problems');
	 }
	handleClick3(){
		  this.props.history.push(process.env.PUBLIC_URL+'/about');
	 }
	
  render(){
	  let loginB=null;
	  let logoutB=null;
	  if(!this.props.isAuthenticated){
		  loginB=<GoogleLogin
		 		  render={renderProps => (
		 			<Nav.Link onClick={renderProps.onClick} style={{'color':'white','marginRight':'50px'}}>Login</Nav.Link>
				  	
				  )}
                  clientId={config.GOOGLE_CLIENT_ID}
                  buttonText="Login"
                  onSuccess={this.googleResponse}
                  onFailure={this.onFailure}
		 		  style={{
					padding: 0,
					margin: 0 
              	 }}
		 		  
             />
	  }
	  else{
		  logoutB=<Nav.Link onClick={this.logout} style={{'color':'white','marginRight':'50px'}}>Logout</Nav.Link>
	  }
	  
	  
	 return (
		<>
		  <Navbar bg="dark" variant="dark">
			<Nav className="mr-auto">
			  <Nav.Link onClick={this.handleClick1}>Home</Nav.Link>
			  <Nav.Link onClick={this.handleClick2}>Problems</Nav.Link>
		 	  <Nav.Link onClick={this.handleClick3}>About Us</Nav.Link>
			</Nav>
		 	 {loginB}
		 	 {logoutB}
		  </Navbar>
		</>
	  );
	  
  }


}

const mapStateToProps = state => {
    return {
       isAuthenticated:state.isAuthenticated
    };
};

const mapDispatchToProps = dispatch => {
    return {
        resetMode: () => dispatch({type: 'reset'}),
		loginSuccess: () => dispatch({type: 'login'}),
		setToken: (token) => dispatch({type: 'setToken',val:token}),
		logout: () => dispatch({type: 'logout'})
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(MyNavbar));