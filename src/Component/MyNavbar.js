import React, { Component,useState } from "react";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import {NavLink } from "react-router-dom";
import {withRouter} from 'react-router-dom';

import { connect } from 'react-redux';

class MyNavbar extends Component{
	constructor() {
    		super();
			this.handleClick1 = this.handleClick1.bind(this);
			this.handleClick2 = this.handleClick2.bind(this);
			this.handleClick3 = this.handleClick3.bind(this);
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
        resetMode: () => dispatch({type: 'reset'})
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(MyNavbar));