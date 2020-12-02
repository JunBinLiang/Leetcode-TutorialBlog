import React, { Component,useState } from "react";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import {NavLink } from "react-router-dom";
import {withRouter} from 'react-router-dom';

class MyNavbar extends Component{

	
  render(){
	 return (
		<>
		  <Navbar bg="dark" variant="dark">
			<Nav className="mr-auto">
			  <Nav.Link onClick={()=>{this.props.history.push(process.env.PUBLIC_URL+'/');}}>Home</Nav.Link>
			  <Nav.Link onClick={()=>{this.props.history.push(process.env.PUBLIC_URL+'/problems');}}>Problems</Nav.Link>
		 	  <Nav.Link onClick={()=>{this.props.history.push(process.env.PUBLIC_URL+'/about');}}>About Us</Nav.Link>
			</Nav>
		  </Navbar>
		</>
	  );
	  
  }


}

export default withRouter(MyNavbar);