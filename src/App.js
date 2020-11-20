import React, { Component } from "react";
import { Route, Switch, NavLink,BrowserRouter as Router } from "react-router-dom";
import renderHTML from 'react-render-html';
import ReactMarkdown from 'react-markdown';


import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';

import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-github";

import Editor from './Component/Editor';


import ReactPlayer from "react-player"






import theme from './picture/theme.png';







import p1 from './LeetCode/1.md';
import sta1 from './problems/1.md';
import test1 from './test/test1.md';
import submit1 from './submit/submit1.md';
import input1p1 from './input/1.1.md';
import input1p2 from './input/1.2.md';
import input1p3 from './input/1.3.md';


import submit2 from './submit/submit2.md';
import input2p1 from './input/2.1.md';
import input2p2 from './input/2.2.md';
import input2p3 from './input/2.3.md';
import input2p4 from './input/2.4.md';
import input2p5 from './input/2.5.md';
import input2p6 from './input/2.6.md';
import sta2 from './problems/2.md';
import p2 from './LeetCode/2.md';
import test2 from './test/test2.md';
import Markdown from 'react-markdown';





let leetcodes=[[p1,""],[p2,""]];
let statements=[sta1,sta2];
let names=["Two Sum"];
let Test=[test1,test2];
let Submit=[submit1,submit2];
let testcases=[3,6];
let inputs=[[input1p1,input1p2,input1p3],[input2p1,input2p2,input2p3,input2p4,input2p5,input2p6]];


class App extends Component {
  render() {
    return (
      <div>
		<MySideBar/>
      </div>
    );
  }
}
//https://reactjsexample.com/react-side-nav-component/
class MySideBar extends Component{
	constructor() {
		super();
		this.state = { index: 0,code:null,isHome:true };
     } 
	render(){
		let heading=null;
		if(this.state.isHome){
			heading=<h1 style={{'margin-left':'35%'}}>My Coding Platform</h1>;
			
		}
		return(
			<div>
				<SideNav
					onSelect={(selected) => {
						// Add your code here
						let first=selected.split(' ')[0];
			
						if(first=='Leetcode'){
							let index=parseInt(selected.split(' ')[1]);
							this.setState({isHome:false, index: index,
										   code:<Code content={leetcodes[index][0]} description={statements[index]} name={names[index]} test={Test[index]} index={index} submit={Submit[index]} testcase={testcases[index]}
										   input={inputs[index]}
										  /> })
						}
						else{
							this.setState({ index: 0,code:null,isHome:true })
						}
					}}
				>
					<SideNav.Toggle />
					<SideNav.Nav defaultSelected="home">
						<NavItem eventKey="home">
							<NavIcon>
								<i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
							</NavIcon>
							<NavText>
								Home
							</NavText>
						</NavItem>

						<NavItem eventKey="Leetcode">
							<NavIcon>
								Problems
							</NavIcon>
							<NavItem eventKey="Leetcode 0">
								<NavText>
									1. Two sum
								</NavText>
							</NavItem>

							<NavItem eventKey="Leetcode 1">
								<NavText>
									2. Present To 66
								</NavText>
							</NavItem>
							
						</NavItem>

					</SideNav.Nav>
				</SideNav>
				
				{heading}
				
				

				
				{this.state.code}
				
			</div>
		);
	}
}






class Code extends Component {
  constructor() {
    super();
    this.state = { markdown: '',editor:null,name:"Two Sum",description:"",test:"",submit:"",testcases:0 };
  }
  componentDidMount() {
    fetch(this.props.content).then(res => res.text()).then(text => {
		this.setState({ markdown: text})
	});
	  
	fetch(this.props.description).then(res => res.text()).then(text => {
		this.setState({ description: text})
	});
	  
	fetch(this.props.test).then(res => res.text()).then(text => {
		this.setState({ test: text})
	});
	  fetch(this.props.submit).then(res => res.text()).then(text => {
		this.setState({ submit: text})
	});
  }
  componentDidUpdate(previousProps, previousState){
	  if(previousProps.content!=this.props.content){
		  fetch(this.props.content).then(res => res.text()).then(text => this.setState({ markdown:text }));
	  }
	  
  } 
  render() {
    const { markdown } = this.state;
    return(
		<div>
			<h2 style={{'width':'100%','margin-left':'45%'}}>{this.state.name}</h2>
			<div style={{'width':'100%','margin-left':'5%'}} className="code">
				<div style={{'margin':'3%'}}>
					<Markdown 
						escapeHtml={true}
						source={this.state.description} 
					/>
					<br/><br/>
					
				</div>

				<div  style={{'margin':'5%'}}>
					<Editor judgecase={this.props.input} testcase={this.props.testcase} code={this.state.markdown} test={this.state.test} submit={this.state.submit}/>
					<br/>
				</div>
			</div>
			
		</div>

	)
  }
}



export default App;





