import React, { Component } from "react";

import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-github";

import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FormControl } from 'react-bootstrap';

import '../App.css';

import axios from 'axios';

class Editor extends Component{
  constructor() {
    super();
    this.state = {mycode:'',status:0,output:'',loading:false };
	this.onchange = this.onchange.bind(this);
	this.handleCompile = this.handleCompile.bind(this);
	this.changeOutput = this.changeOutput.bind(this);
  }
	
 componentDidUpdate(previousProps, previousState){
	  if(previousProps.code!=this.props.code){
		  fetch(this.props.content).then(res => res.text()).then(text => this.setState({ mycode:this.props.code }));
	  }
	  
  }
	
	componentDidMount(){
		this.setState({mycode:this.props.code});
	} 
	onchange(newvalue){
		  this.setState({mycode:newvalue});
	}
	changeOutput(event){
		this.setState({output:event.target.value});
	}
	
	handleCompile(){
	const headers = {
        'Content-Type': 'text/plain'
    };
	 this.setState({loading:true});
	 axios.post(`https://frozen-atoll-01566.herokuapp.com/api/run`, {
		 lang:'java',
		 code:this.state.mycode
	 })
      .then(res => {
		 let data=res.data;
		 let status=parseInt(data.message.status);
		 console.log(res)
		this.setState({
			status:status,
			output:data.message,
			loading:false
		});
      });
	}
	
  render(){
	  let B=B=<Button className="outline-primary" ><i class="fa fa-refresh fa-spin"></i></Button>;
	  if(!this.state.loading)B=<Button className="outline-primary" onClick={this.handleCompile}>Compile</Button>;
	  
	  return(
		  		<div>
		  			<h3>Java support only currently</h3>
					<AceEditor
					  height={250}
					  mode="java"
					  theme="github"
					  name="blah2"
					  onChange={this.onchange}
					  fontSize={14}
					  showPrintMargin={true}
					  showGutter={true}
					  highlightActiveLine={true}
					  value={this.state.mycode}
					  setOptions={{
					  enableBasicAutocompletion: true,
					  enableLiveAutocompletion: true,
					  enableSnippets: false,
					  showLineNumbers: true,
					  tabSize: 2,
				  }}/>
		  		  <br/>
		  		  {B}
		  		<br/><br/>
				 <textarea
		  			  className="output"
					  name="code"
					  type="textarea"
					  componentClass="textarea"
					  rows="5"
		  			  cols="75"
		  			  width={250}
					  value={this.state.output}
		  			  onChange={this.changeOutput}
				 />
		  		</div>
	  );
	  
  }
}

export default Editor;