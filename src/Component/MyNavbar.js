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
  	 }
	
	onFailure(){
		
	}
	
	googleResponse(response){	
		 console.log(response)//id_token
		
		 axios.post(`http://localhost:8080/login`, {
			 code:response.tokenId,	 
		 })
		 .then(res => {
			 console.log(res);
			 let token=res.data.token;
			 let profile=res.data.user;
			 localStorage.setItem("token", token);
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
	 return (
		<>
		  <Navbar bg="dark" variant="dark">
			<Nav className="mr-auto">
			  <Nav.Link onClick={this.handleClick1}>Home</Nav.Link>
			  <Nav.Link onClick={this.handleClick2}>Problems</Nav.Link>
		 	  <Nav.Link onClick={this.handleClick3}>About Us</Nav.Link>
			</Nav>
		 	 <GoogleLogin
		 		  render={renderProps => (
		 			<Nav.Link onClick={renderProps.onClick} style={{'color':'white'}}>Login</Nav.Link>
				  	
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
		  </Navbar>
		</>
	  );
	  
  }


}

const mapStateToProps = state => {
    return {
       
    };
};

const mapDispatchToProps = dispatch => {
    return {
        resetMode: () => dispatch({type: 'reset'}),
		loginSuccess: () => dispatch({type: 'login'})
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(MyNavbar));