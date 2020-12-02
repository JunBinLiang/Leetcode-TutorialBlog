import React, { Component,useState } from "react";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'



class MyNavbar extends Component{

	
  render(){
	 return (
		<>
		  <Navbar bg="dark" variant="dark">
			<Nav className="mr-auto">
			  <Nav.Link href={process.env.PUBLIC_URL+'/'}>Home</Nav.Link>
			  <Nav.Link href={process.env.PUBLIC_URL+'/problems'}>Problems</Nav.Link>
		 	 <Nav.Link href={process.env.PUBLIC_URL+'/about'}>About Us</Nav.Link>
			</Nav>
		  </Navbar>
		</>
	  );
	  
  }


}

export default MyNavbar;