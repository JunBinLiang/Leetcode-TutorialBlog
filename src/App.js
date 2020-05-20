import React, { Component } from "react";
import { Route, Switch, NavLink,BrowserRouter as Router } from "react-router-dom";
import renderHTML from 'react-render-html';
import ReactMarkdown from 'react-markdown';
import Markdown1 from 'markdown-to-jsx';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

import "video-react/dist/video-react.css"; // import css
import ReactPlayer from "react-player"
import Twosum from './Code/twosum.md';
import Empty from './Code/empty.md';

let codes=[[Empty,""],[Twosum,"https://www.youtube.com/watch?v=R6RAumiDmKQ"]];


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
		this.state = { index: 0 };
     } 
	render(){
		return(
			<div>
				<SideNav
					onSelect={(selected) => {
						// Add your code here
						if(!isNaN(selected)){
							this.setState({ index: parseInt(selected) })
						}else{
							this.setState({ index: 0 })
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
									2 sum
								</NavText>
							</NavItem>
						</NavItem>
					</SideNav.Nav>
				</SideNav>
				
				<div style={{'width':'50%','margin-left':'20%'}}>
					<ReactPlayer
        				url={codes[this.state.index][1]}
      				/> 
					<Code content={codes[this.state.index][0]}/>					
				</div>
			</div>
		);
	}
}

class Code extends Component {
  constructor() {
    super();
    this.state = { markdown: '' };
  }
  componentWillMount() {
    fetch(this.props.content).then(res => res.text()).then(text => this.setState({ markdown: text }));
  }
  componentDidUpdate(){
	  fetch(this.props.content).then(res => res.text()).then(text => this.setState({ markdown: text }));
  } 
	
  render() {
    const { markdown } = this.state;
    return(
		<div  style={{'background-color':'#FFEBCD'}}> 
			<ReactMarkdown source={markdown} />
		</div>
	)
  }
}

export default App;





