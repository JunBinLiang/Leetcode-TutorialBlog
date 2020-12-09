import React, { Component,useState } from "react";
import './Footer.css'
import Nav from 'react-bootstrap/Nav'
import {withRouter} from 'react-router-dom';

class Footer extends Component{

	constructor() {
    		super();
			this.handleClick1 = this.handleClick1.bind(this);
			this.handleClick2 = this.handleClick2.bind(this);
			this.handleClick3 = this.handleClick3.bind(this);
  	 }
	 handleClick1(){
		  this.props.history.push('/about');
	 }
	handleClick2(){
		  this.props.history.push('/problems');
	 }
	handleClick3(){
		  this.props.history.push('/course');
	 }
	
	
  render(){
	 return (
		<>
			<footer className="site-footer" >
			  <div className="container">
				<div className="row">
				  <div className="col-sm-12 col-md-6">
					<h6>About</h6>
					<p className="text-justify">66 Code is the platform for helping software engineer to prepare for their coding interview. Currently, it supports 
		 				3 services. More services will be added in the upcoming future
		 			</p>
				  </div>

				  <div className="col-xs-6 col-md-3">
					<h6>Categories</h6>
					<ul className="footer-links">
					  <Nav.Link onClick={this.handleClick2}>Coding Practice</Nav.Link>
					  <Nav.Link onClick={this.handleClick3}>Video Explanation</Nav.Link>

					</ul>
				  </div>

				  <div className="col-xs-6 col-md-3">
					<h6>Quick Links</h6>
					<ul className="footer-links">
					  <Nav.Link onClick={this.handleClick1}>About</Nav.Link>
					</ul>
				  </div>
				</div>
				<hr/>
			  </div>
			  <div className="container">
				<div className="row">
				  <div className="col-md-8 col-sm-6 col-xs-12">
					<p className="copyright-text">Copyright &copy; 2020 All Rights Reserved by 
				 <a href="#"> 66 Brother</a>.
					</p>
				  </div>

				  <div className="col-md-4 col-sm-6 col-xs-12">
					<ul class="social-icons">
					  <li><a className="facebook" href="#"><i class="fa fa-facebook"></i></a></li>
					  <li><a className="twitter" href="#"><i class="fa fa-twitter"></i></a></li>
					  <li><a className="dribbble" href="#"><i class="fa fa-dribbble"></i></a></li>
					  <li><a className="linkedin" href="#"><i class="fa fa-linkedin"></i></a></li>   
					</ul>
				  </div>
				</div>
			  </div>
			</footer>
		</>
	  );
	  
  }


}

export default withRouter(Footer);