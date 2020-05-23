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



import Twosum from './Code/twosum.md';
import NineZeroThree from './Code/903.md';
import Empty from './Code/empty.md';

let codes=[[Empty,""],[Twosum,""],[NineZeroThree,"https://www.youtube.com/watch?v=bo26ZbpYT60&feature=youtu.be"]];

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
						if(!isNaN(selected)){
							this.setState({ index: parseInt(selected),code:<Code content={codes[parseInt(selected)][0]}/> })
						}else{
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
								<i className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em' }} />
							</NavIcon>
							<NavText>
								Leetcode
							</NavText>
							<NavItem eventKey="1">
								<NavText>
									1. Two sum
								</NavText>
							</NavItem>
						   <NavItem eventKey="2">
								<NavText>
									903. Valid Permutations for DI Sequence
								</NavText>
						   </NavItem>
							
						</NavItem>
					</SideNav.Nav>
				</SideNav>
				
				<div style={{'width':'50%','margin-left':'20%'}}>
					<ReactPlayer
        				url={codes[this.state.index][1]}
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





