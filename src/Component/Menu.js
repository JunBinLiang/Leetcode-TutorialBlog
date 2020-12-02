import React, { Component } from "react";
import {withRouter} from 'react-router-dom';

import './Menu.css';


class Menu extends Component{


  	 constructor() {
    		super();
			this.handleClick1 = this.handleClick1.bind(this);
  	 }
	
	 handleClick1(){
		  this.props.history.push(process.env.PUBLIC_URL+'/problems');
	 }
	
  render(){
	 return (
		<div className="wrapper">
		  <h1>Our Service : </h1>
		  
		  <div className="cols">
		 
			  <div className="col" onClick={this.handleClick1} >
				<div className="container">
				  <div className="front" >
					<div className="inner">
					  <p>Interview Coding Practice</p>
					</div>
				  </div>
				  <div className="back">
					<div className="inner">
					  <p>Practice the top popular coding interview question</p>
					</div>
				  </div>
				</div>
			  </div>
			  <div className="col">
				<div className="container">
				  <div className="front">
					<div className="inner">
					  <p>Online Assesment</p>
					</div>
				  </div>
				  <div className="back">
					<div className="inner">
					  <p>Mock online coding assesment</p>
					</div>
				  </div>
				</div>
			  </div>
			  <div className="col">
				<div className="container">
				  <div className="front" >
					<div className="inner">
					  <p>Algorithm Crash Course</p>
					</div>
				  </div>
				  <div className="back">
					<div className="inner">
					  <p>Video explanation with the most frequent use data structure and algorithm</p>
					</div>
				  </div>
				</div>
			  </div>
			</div>
		 </div>
	 );
	  
  }


}

export default withRouter(Menu);