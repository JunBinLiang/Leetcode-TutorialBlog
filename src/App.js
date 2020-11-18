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

import Markdown from 'react-markdown';





let leetcodes=[[p1,""]];
let statements=[sta1];
let names=["Two Sum"];
let Test=[test1];


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
										   code:<Code content={leetcodes[index][0]} description={statements[index]} name={names[index]} test={Test[index]}/> })
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
    this.state = { markdown: '',editor:null,name:"Two Sum",description:"",test:"" };
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
			<div style={{'width':'100%','margin-left':'5%'}} class="code">
				<div style={{'margin':'5%'}}>
					<Markdown 
						escapeHtml={true}
						source={this.state.description} 
					/>
				</div>

				<div  style={{'margin':'5%'}}>
					<Editor code={this.state.markdown} test={this.state.test}/>
					<br/>
				</div>
			</div>
			
		</div>

	)
  }
}



export default App;





