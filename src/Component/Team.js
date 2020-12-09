import React, { Component,useState } from "react";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';
import junbin from "../picture/founder.jpg"
import Footer from "./Footer"

class Team extends Component{

	
  render(){
	 return (
		<>
			<section class="team-section text-center my-5">

			  <h2 class="h1-responsive font-weight-bold my-5">Our amazing team</h2>



			  <div class="row text-center">
				<div class="col-md-4 mb-md-0 mb-5">
				  <div class="avatar mx-auto">
		 			<div >
		 				<img src={junbin} style={{'height':'25%','width':'25%','borderRadius':'40%'}} />
		 			</div>
				  </div>
				  <h4 class="font-weight-bold dark-grey-text my-4">JunBin Liang</h4>
				  <h6 class="text-uppercase grey-text mb-3"><strong>Founder and Software Engineer</strong></h6>
				</div>
			  </div>

			</section>
		 	<Footer/>
		</>
	  );
	  
  }


}

export default Team;