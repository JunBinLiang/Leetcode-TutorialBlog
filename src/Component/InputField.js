import React, { Component,useState } from "react";

import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-github";

import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FormControl } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal'

import '../App.css';

import axios from 'axios';

class InputField extends Component{

  constructor() {
    super();
    this.state = {show:false,judge:""};//judge:the content of test case

  }
  componentDidMount(){
	   fetch(this.props.judge).then(res => res.text()).then(text => {
		this.setState({ judge: text})
	});
  }
	
  render(){
	 let button=<Button onClick={() => {this.setState({show:true})}}>this</Button>
	 
	 if(this.props.bstate==1){
		 button=<Button  onClick={() => {this.setState({show:true})}} className="btn-secondary" style={{'margin-left':'3%'}}>Test{this.props.index}</Button>
	 }
	 if(this.props.bstate==2){
		 button=<Button onClick={() => {this.setState({show:true})}} className="btn-success" style={{'margin-left':'3%'}}>O</Button>
	 }
	 if(this.props.bstate==3){
		 button=<Button onClick={() => {this.setState({show:true})}} className="btn-danger" style={{'margin-left':'3%'}}>X</Button>
	 }

	 return (
		<>
		  {button}
		  <Modal
			size="sm"
			show={this.state.show}
			onHide={() => {this.setState({show:false})}}
			aria-labelledby="example-modal-sizes-title-sm"
		  >
			<Modal.Header closeButton>
			  <Modal.Title id="example-modal-sizes-title-sm">
				Test {this.props.index}
			  </Modal.Title>
			</Modal.Header>
			<Modal.Body>{this.state.judge}</Modal.Body>
		  </Modal>
		</>
	  );
	  
  }


}

export default InputField;