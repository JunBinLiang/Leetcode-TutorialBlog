import React,{ Component } from 'react';
import "./Home.css";
import "./Home.scss";
import {withRouter} from 'react-router-dom';
import Menu from './Component/Menu';
import Footer from './Component/Footer';
import ModalVideo from 'react-modal-video'

class Home extends Component {
	
	 constructor() {
    		super();
		 	this.state ={open:false};
			this.handleClick = this.handleClick.bind(this);
		 	this.open = this.open.bind(this);
		 	this.close = this.close.bind(this);
  	 }
	
	 handleClick(path){
		  this.props.history.push('/problems');
	 }
	
	 open(){
		 this.setState({open:true});
	 }
	
	 close(){
		 this.setState({open:false});
	 }
	
	
  render() {
    return (
      <div>
		<header>
			<div class="overlay">
				<h1>Welcome To 66 Code</h1>
				<h3>Prepare Your Coding Interview</h3>
				<br/>
			</div>
			<br/><br/>
			
			 <React.Fragment>
				<ModalVideo channel='youtube' isOpen={this.state.open} videoId='B7xai5u_tnk' onClose={() => this.setState({open: false})} />
				<button className="homeButton" onClick={this.open}>About 66 Code</button>
			  </React.Fragment>
		
			<Menu/>
		</header>	
		<br/>
		<Footer/>
		

      </div>
    );
  }
}







export default withRouter(Home);