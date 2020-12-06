import React,{ Component } from 'react';
import "./Home.css";
import {withRouter} from 'react-router-dom';
import Menu from './Component/Menu';


class Home extends Component {
	
	 constructor() {
    		super();
			this.handleClick = this.handleClick.bind(this);
  	 }
	
	 handleClick(path){
		  this.props.history.push(process.env.PUBLIC_URL+'/problems');
	 }
	
	
	
	
  render() {
    return (
      <div>
		<header>
			<div class="overlay">
				<h1>Welcome To 66 Code</h1>
				<h3>Prepare Your Coding Interview</h3>
				<br/>
				<button onClick={this.handleClick}>About 66 Code</button>
			</div>
			<br/><br/>
			<Menu/>
		</header>	
		<br/><hr style={{'height':'2px','borderWidth':'0','color':'grey','background-color':'grey'}}/>
		

      </div>
    );
  }
}







export default withRouter(Home);