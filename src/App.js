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



import Twosum from './LeetCode/twosum.md';
import NineZeroThree from './LeetCode/903.md';
import Empty from './LeetCode/empty.md';

import oneninezerofour from './LintCode/1904.md';

let leetcodes=[[Empty,""],[Twosum,""],[NineZeroThree,"https://www.youtube.com/watch?v=bo26ZbpYT60&feature=youtu.be"]];

let lintcodes=[[Empty,""],[oneninezerofour,""]];

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
		this.state = { index: 0,code:null };
     } 
	render(){
		return(
			<div>
				<SideNav
					onSelect={(selected) => {
						// Add your code here
						let first=selected.split(' ')[0];
			
						if(first=='Leetcode'){
							console.log(parseInt(selected.split(' ')[1]))
							this.setState({ index: parseInt(selected.split(' ')[1]),code:<Code content={leetcodes[parseInt(selected.split(' ')[1])][0]}/> })
						}
						else if(first=='LintCode'){
							this.setState({ index: parseInt(selected.split(' ')[1]),code:<Code content={lintcodes[parseInt(selected.split(' ')[1])][0]}/> })
						}
						else{
							this.setState({ index: 0,code:null })
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
								LeetCode
							</NavIcon>
							<NavText>
								Leetcode
							</NavText>
							<NavItem eventKey="Leetcode 1">
								<NavText>
									1. Two sum
								</NavText>
							</NavItem>
						   <NavItem eventKey="Leetcode 2">
								<NavText>
									903. Valid Permutations for DI Sequence
								</NavText>
						   </NavItem>
							
						</NavItem>
				
						<NavItem eventKey="LintCode">
							<NavIcon>
								LintCode
							</NavIcon>
							<NavText>
								LintCode
							</NavText>

							<NavItem eventKey="LintCode 1">
								<NavText>
									1904. Put small balls
								</NavText>
							</NavItem>
						</NavItem>

					</SideNav.Nav>
				</SideNav>
				
				<div style={{'width':'50%','margin-left':'20%'}}>
					<ReactPlayer
        				url={leetcodes[this.state.index][1]}
      				/> 
					{this.state.code}
				</div>
			</div>
		);
	}
}

class Code extends Component {
  constructor() {
    super();
    this.state = { markdown: '',editor:null };
  }
  componentDidMount() {
    fetch(this.props.content).then(res => res.text()).then(text => this.setState({ markdown: text,editor:<Editor code={text}/> }));
  }
  componentDidUpdate(previousProps, previousState){
	  if(previousProps.content!=this.props.content){
		  fetch(this.props.content).then(res => res.text()).then(text => this.setState({ markdown:text,editor:<Editor code={text}/> }));
	  }
	  
  } 
  render() {
    const { markdown } = this.state;
    return(
		<div>
			<br/>
			{this.state.editor}
			<br/>
		</div>

	)
  }
}



export default App;





