import React, { Component } from "react";
import './Error.css';



class Error extends Component {
  constructor() {
    super();
	
  }
	

  render(){
	return(
		<div>
			<body>
			  <section id="not-found">
				<div className="circles">
				  <p>404<br/>
				   <small>PAGE NOT FOUND</small>
				  </p>
				  <span className="circle big"></span>
				  <span className="circle med"></span>
				  <span className="circle small"></span>
				</div>
			  </section>
			</body>
		</div>

	)
	  
  }
  
}

export default (Error);