import React,{ Component } from 'react';
import "./Home.css";
import {withRouter} from 'react-router-dom';



class Home extends Component {
	
	 constructor() {
    		super();
			this.handleClick = this.handleClick.bind(this);
  	 }
	
	 handleClick(){
		  this.props.history.push('/problems');
	 }
	
	
  render() {
    return (
      <div>
		<header>
			<div class="overlay">
				<h1>Welcome To 66 Code</h1>
				<h3>Prepare Your Coding Interview</h3>
				<br/>
				<button onClick={this.handleClick}>Go To Code</button>
			</div>
		</header>		  

      </div>
    );
  }
}







export default withRouter(Home);