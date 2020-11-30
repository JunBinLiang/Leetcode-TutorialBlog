import React, { Component,useState } from "react";

import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/ace";
import "ace-builds/src-noconflict/mode-json";

import "ace-builds/src-noconflict/theme-tomorrow";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/theme-kuroir";
import "ace-builds/src-noconflict/theme-twilight";
import "ace-builds/src-noconflict/theme-xcode";
import "ace-builds/src-noconflict/theme-textmate";
import "ace-builds/src-noconflict/theme-solarized_light";
import "ace-builds/src-noconflict/theme-solarized_dark";
import "ace-builds/src-noconflict/theme-terminal";




import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FormControl,Dropdown,InputGroup,DropdownButton } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal'

import '../App.css';

import swal from 'sweetalert'
import axios from 'axios';
import InputField from './InputField';
import Congratulation from './Congratulation';



//https://frozen-atoll-01566.herokuapp.com/api/run`


let hash=new Map();
hash["java"]=0;

class Editor extends Component{
  constructor() {
    super();
    this.state = {mycode:'',
				  status:0,
				  output:'',//output in the text area
				  loading:false,
				  summiting:false,
				  A:[],//content of the result
				  inputstate:false,
				  myinput:"",
				  correct:false,//if your answer are correct after submit
				  done:false,//at the beginning,input is default state (not O||X)
				  theme:"solarized_light",
				  mode:"java"
				 };
	this.onchange = this.onchange.bind(this);
	this.handleCompile = this.handleCompile.bind(this);
	this.changeOutput = this.changeOutput.bind(this);
	this.changeInput = this.changeInput.bind(this);
	this.handleSubmit = this.handleSubmit.bind(this);
	this.inputstateChange=this.inputstateChange.bind(this);
	this.select = this.select.bind(this);
	this.selectLan = this.selectLan.bind(this);
  }
	
 componentDidUpdate(previousProps, previousState){
	  if(previousProps.code!=this.props.code){
		  fetch(this.props.content).then(res => res.text()).then(text => this.setState({ mycode:this.props.code,A:[],done:false,output:"" }));
	  }
	  
  }
	
	selectLan(value){
		this.setState({mode:value});
	}
	
	
	select(value){
		this.setState({theme:value});
	}
	
	
	
	inputstateChange(){
		let newstate=!this.state.inputstate;
		this.setState({inputstate:newstate});
	}
	
	componentDidMount(){
		this.setState({mycode:this.props.code});
	} 
	onchange(newvalue){
		  localStorage.setItem(this.props.name, newvalue);
		  this.setState({mycode:newvalue});
	}
	changeOutput(event){
		this.setState({output:event.target.value});
	}
	
	changeInput(event){
		this.setState({myinput:event.target.value});
	}
	
	handleCompile(){
	const headers = {
        'Content-Type': 'text/plain'
    };
	 this.setState({loading:true});
		
	 axios.post(`https://frozen-atoll-01566.herokuapp.com/api/run`, {
		 lang:this.state.mode,
		 code:this.state.mycode+this.props.test,
		 input:this.state.myinput
	 })
      .then(res => {
		let data=res.data;
		let status=parseInt(data.message.status);
		console.log(res)
		this.setState({
			status:status,
			output:data.message,
			loading:false,
			inputstate:false
		});
      });
	}
	
	handleSubmit(){
	const headers = {
        'Content-Type': 'text/plain'
    };
	 this.setState({summiting:true});
	 axios.post(`https://frozen-atoll-01566.herokuapp.com/api/submit`, {
		 lang:this.state.mode,
		 code:this.state.mycode+this.props.submit
	 })
      .then(res => {
		let rightAns=0;
		let data=res.data;
		let status=parseInt(data.message.status);
		let B=data.message.split("\n");
		let allRight=false;
		let result=[];
		let message=[];
		
		let t=this.props.testcase;
		if(B.length<t){
			t=0;
		}
		for(let i=B.length-1;i>=0;i--){
			if(B[i].length==0)continue;
			if(t>0){
				if(B[i].charAt(0)=='t')rightAns++;
				result.push(B[i]);
				t--;
			}
			else{
				message.push(B[i]);
			}
			
		}

		if(rightAns==this.props.testcase){
			allRight=true;
			swal(
			  "Congratulation!"

			)
			.then(willDelete => {
			  if (willDelete) {
				this.setState({correct:false});
			  }
			});
		}
		else{
			swal({
			  text: "You are not YOUXIU enough!",
			  icon: "warning",
			  dangerMode: true,
			})
		}
		 
		this.setState({
			status:status,
			output:message.reverse().join("\n"),
			summiting:false,
			inputstate:false,
			done:true,
			A:result.reverse(),
			correct:allRight
		});
      });
	}
	
	
	
	
  render(){
	  
	  
	  let B=<Button className="outline-primary" ><i class="fa fa-refresh fa-spin"></i></Button>;
	  let S=<Button className="btn-info" style={{'margin':'5%'}} ><i class="fa fa-refresh fa-spin"></i></Button>;
	  let stateButon="";
      let smalltext="";
	  
	 if(this.state.inputstate){
		 stateButon=<Button className="btn-success " style={{'margin':'5%'}} onClick={this.inputstateChange}>My output</Button>;
		 smalltext="Input Your Data please!"
	 }
	 else{
		 stateButon=<Button className="btn-success" style={{'margin':'5%'}} onClick={this.inputstateChange} >Input</Button>;
	     smalltext="Here is Your Output!"
	 }

	  let textarea=	<textarea
	    			  id="textarea"
		  			  className="output"
					  name="code"
					  type="textarea"
					  componentClass="textarea"
					  rows="5"
		  			  cols="85"
		  			  width="30%"
					  value={this.state.output}
		  			  onChange={this.changeOutput}
				 />;
	  
	  if(this.state.inputstate){
		  textarea=	<textarea
		  			  id="textarea"
		  			  className="output"
					  name="code"
					  type="textarea"
					  componentClass="textarea"
					  rows="5"
		  			  cols="85"
		  			  width="30%"
					  value={this.state.myinput}
		  			  onChange={this.changeInput}
				 />;
	  }	
					  
	  let inputs=[];

		
	  for(let i=0;i<this.props.testcase;i++){
		  if(!this.state.done){
			 inputs.push(<InputField bstate={1} index={i} judge={this.props.judgecase[i]}/>)
						  
			 if(i%6==0&&i!=0){
				inputs.push(<br/>); inputs.push(<br/>); 
			 }
		  }
			
		  else{
			  console.log((this.state.A));			  
			 if(this.state.A[i]!=null&&this.state.A[i].length>=1&&this.state.A[i].charAt(0)=='t'){
				 inputs.push(<InputField bstate={2} index={i} judge={this.props.judgecase[i]}/>)
			 }
			 else{
							 	
				 inputs.push(<InputField bstate={3} index={i} judge={this.props.judgecase[i]}/>)
			 }
			
			 if(i%6==0&&i!=0){
				inputs.push(<br/>); inputs.push(<br/>); 
			 }
		  }
		 
	  }
		  
		
							 
	  
	  if(!this.state.loading){
		  if(this.state.summiting){
			  B=<Button className="outline-primary">Compile</Button>;
		  }
		  else{
			 B=<Button className="outline-primary" onClick={this.handleCompile}>Compile</Button>; 
		  }
		  
	  }

	  if(!this.state.summiting){
		  if(this.state.loading){
			  S=<Button className="btn-info" style={{'marginLeft':'5%'}}>Submit</Button>;
		  }
		  else{
			  S=<Button className="btn-info" style={{'marginLeft':'5%'}} onClick={this.handleSubmit}>Submit</Button>;
		  }
		  
	  }
		  
	  let congra;
	  if(this.state.correct){
		  congra=<Congratulation/>;
	  }
	  
		 
			  
		  
	  return(
		  		<div>
		 
		  			
		  			{congra}
		  			{inputs}
		  			<br/><br/>
		  
		  			<div style={{'display':'flex'}}>
					<DropdownButton
		  			  onSelect={this.select}
					  as={InputGroup.Prepend}
					  variant="light"
					  title={this.state.theme}
					  id="input-group-dropdown-1"
					>
					  <Dropdown.Item eventKey="tomorrow">tomorrow</Dropdown.Item>
					  <Dropdown.Item eventKey="github">github</Dropdown.Item>
					  <Dropdown.Item eventKey="monokai">monokai</Dropdown.Item>
					  <Dropdown.Item eventKey="kuroir">kuroir</Dropdown.Item>
		  			  <Dropdown.Item eventKey="twilight">twilight</Dropdown.Item>
					  <Dropdown.Item eventKey="xcode">xcode</Dropdown.Item>
		  			  <Dropdown.Item eventKey="textmate">textmate</Dropdown.Item>
					  <Dropdown.Item eventKey="solarized_dark">solarized_dark</Dropdown.Item>
		  			  <Dropdown.Item eventKey="solarized_light">solarized_light</Dropdown.Item>
					  <Dropdown.Item eventKey="terminal">terminal</Dropdown.Item>
					</DropdownButton>
		  
		  
		  			<DropdownButton style={{'marginLeft':'5%'}}
		  			  onSelect={this.selectLan}
					  as={InputGroup.Prepend}
					  variant="light"
					  title={this.state.mode}
					  id="input-group-dropdown-2"
					>
					  <Dropdown.Item eventKey="java">Java</Dropdown.Item>
					</DropdownButton>
		  			</div>
		  
		  
					<AceEditor
					  height={500}
		  			  width="75%"
					  mode={this.state.mode}
					  theme={this.state.theme}
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
		  		  {stateButon}
		  		<br/>
		  		{smalltext}
		  		<br/>
		  		{textarea}
		  		<br/>
		  		{B}{S}
		  		</div>
	  );
	  
  }
}




export default Editor;