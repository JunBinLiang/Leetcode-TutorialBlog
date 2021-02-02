import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Route,
  Switch,
  NavLink,
  BrowserRouter as Router,
} from "react-router-dom";
import renderHTML from "react-render-html";
import ReactMarkdown from "react-markdown";
import { withRouter } from "react-router-dom";

import SideNav, {
  Toggle,
  Nav,
  NavItem,
  NavIcon,
  NavText,
} from "@trendmicro/react-sidenav";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-github";

import Editor from "./Component/Editor";

import ReactPlayer from "react-player";
import FadeIn from "react-fade-in";

import theme from "./picture/theme.png";
import Home from "./Home";

import Markdown from "react-markdown";
import SplitterLayout from "react-splitter-layout";
import "react-splitter-layout/lib/index.css";
import ListGroup from "react-bootstrap/ListGroup";

import * as ProblemSet from "./ProblemSet.js";

class Problems extends Component {
  constructor() {
    super();
    this.handleClick1 = this.handleClick1.bind(this);
    this.solve = this.solve.bind(this);
    this.state = {
      main: true,
      categoryIndex: 0,
      practiceMode: false,
      index: 0,
    };
  }

  componentDidMount() {
    this.props.mode2(); //reset the state to the beginning
  }

  handleClick1(i) {
    this.props.mode1();
    this.setState({
      categoryIndex: i - 1,
    });
  }

  solve(i) {
    this.props.mode2();
    this.setState({ index: i });
    this.props.history.push("/problems/" + i);
  }

  render() {
    let problemlist;
    let problemcategory = (
      <div className="wrapper">
        <h1 className="open-sans">Our Topics :</h1>

        <div class="container problemMenu">
          <div
            class="card1"
            onClick={() => {
              this.handleClick1(1);
            }}
          >
            <h3 class="title">Array</h3>
            <div class="bar">
              <div class="emptybar"></div>
              <div class="filledbar"></div>
            </div>
            <div class="circle">
              <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
                <circle class="stroke" cx="60" cy="60" r="50" />
              </svg>
            </div>
          </div>
          <div
            class="card1"
            onClick={() => {
              this.handleClick1(2);
            }}
          >
            <h3 class="title">List</h3>
            <div class="bar">
              <div class="emptybar"></div>
              <div class="filledbar"></div>
            </div>
            <div class="circle">
              <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
                <circle class="stroke" cx="60" cy="60" r="50" />
              </svg>
            </div>
          </div>
          <div
            class="card1"
            onClick={() => {
              this.handleClick1(3);
            }}
          >
            <h3 class="title">Tree</h3>
            <div class="bar">
              <div class="emptybar"></div>
              <div class="filledbar"></div>
            </div>
            <div class="circle">
              <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
                <circle class="stroke" cx="60" cy="60" r="50" />
              </svg>
            </div>
          </div>
          <div
            class="card1"
            onClick={() => {
              this.handleClick1(4);
            }}
          >
            <h3 class="title">Graph</h3>
            <div class="bar">
              <div class="emptybar"></div>
              <div class="filledbar"></div>
            </div>
            <div class="circle">
              <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
                <circle class="stroke" cx="60" cy="60" r="50" />
              </svg>
            </div>
          </div>
          <div
            class="card1"
            onClick={() => {
              this.handleClick1(5);
            }}
          >
            <h3 class="title">DP</h3>
            <div class="bar">
              <div class="emptybar"></div>
              <div class="filledbar"></div>
            </div>
            <div class="circle">
              <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
                <circle class="stroke" cx="60" cy="60" r="50" />
              </svg>
            </div>
          </div>
          <div
            class="card1"
            onClick={() => {
              this.handleClick1(6);
            }}
          >
            <h3 class="title">Math</h3>
            <div class="bar">
              <div class="emptybar"></div>
              <div class="filledbar"></div>
            </div>
            <div class="circle">
              <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
                <circle class="stroke" cx="60" cy="60" r="50" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    );

    if (this.props.mode == 1) {
      problemcategory = "";
      let plist = ProblemSet.category[this.state.categoryIndex];
      console.log(this.props.solved);

      problemlist = (
        <div className="container" style={{ width: "75%" }}>
          <h1 className="problemTitle"> Problems</h1>
          <FadeIn>
            {plist.map((i) => (
              <ListGroup.Item
                action
                variant="primary"
                key={i}
                style={{ margin: "2%" }}
                onClick={() => {
                  this.solve(i);
                }}
              >
                {i + 1}.{" "}
                {this.props.solved[i] ? (
                  <strike> {ProblemSet.names[i]}</strike>
                ) : (
                  ProblemSet.names[i]
                )}
                {" " + ProblemSet.stars[ProblemSet.difficulty[i]]}
              </ListGroup.Item>
            ))}
          </FadeIn>
        </div>
      );
    }
    let index = this.state.index;

    return (
      <div className="div">
        {problemcategory}
        {problemlist}
      </div>
    );
  }
}

/*

//https://reactjsexample.com/react-side-nav-component/
class MySideBar extends Component{
	constructor() {
		super();
		this.state = { index: 0,code:null,isHome:true };
     } 
	render(){
		

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
									2. Present From 66
								</NavText>
							</NavItem>
							
							<NavItem eventKey="Leetcode 2">
								<NavText>
									3. Eating Chocolate
								</NavText>
							</NavItem>

							
						</NavItem>

					</SideNav.Nav>
				</SideNav>
				

				{this.state.code}
				
			</div>
		);
	}
}
*/

class Code extends Component {
  constructor() {
    super();
    this.state = {
      markdown: "",
      editor: null,
      name: "Two Sum",
      description: "",
      test: "",
      submit: "",
      testcases: 0,
      darktheme: false,
    };
    this.darkmode = this.darkmode.bind(this);
  }

  darkmode() {
    let old = this.state.darktheme;
    console.log(old);
    this.setState({ darktheme: !old });
  }

  componentDidMount() {
    const oldcode = localStorage.getItem(this.props.name);
    if (oldcode == null) {
      fetch(this.props.content)
        .then((res) => res.text())
        .then((text) => {
          this.setState({ markdown: text });
        });
    } else {
      this.setState({ markdown: oldcode });
    }

    fetch(this.props.description)
      .then((res) => res.text())
      .then((text) => {
        this.setState({ description: text });
      });

    fetch(this.props.test)
      .then((res) => res.text())
      .then((text) => {
        this.setState({ test: text });
      });
    fetch(this.props.submit)
      .then((res) => res.text())
      .then((text) => {
        this.setState({ submit: text });
      });
  }

  componentDidUpdate(previousProps, previousState) {
    if (previousProps.content != this.props.content) {
      const oldcode = localStorage.getItem(this.props.name);
      if (oldcode == null) {
        fetch(this.props.content)
          .then((res) => res.text())
          .then((text) => {
            this.setState({ markdown: text });
          });
      } else {
        this.setState({ markdown: oldcode });
      }

      fetch(this.props.description)
        .then((res) => res.text())
        .then((text) => {
          this.setState({ description: text });
        });

      fetch(this.props.test)
        .then((res) => res.text())
        .then((text) => {
          this.setState({ test: text });
        });
      fetch(this.props.submit)
        .then((res) => res.text())
        .then((text) => {
          this.setState({ submit: text });
        });
    }
  }
  render() {
    const { markdown } = this.state;
    return (
      <div>
        <div style={{ width: "95%", "margin-left": "5%" }}>
          <div style={{ margin: "3%", width: "45%" }}>
            <SplitterLayout primaryMinSize={35} percentage={true}>
              <div>
                <h2 style={{ width: "45%", "margin-left": "45%" }}>
                  {" "}
                  {this.props.name}
                </h2>
                <Markdown escapeHtml={true} source={this.state.description} />
              </div>
              <div style={{ width: "100%" }}>
                <Editor
                  judgecase={this.props.input}
                  testcase={this.props.testcase}
                  code={this.state.markdown}
                  test={this.state.test}
                  submit={this.state.submit}
                  name={this.props.name}
                />
                <br />
              </div>
            </SplitterLayout>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    mode: state.mode,
    solved: state.solved,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    mode1: () => dispatch({ type: "mode1" }),
    mode2: () => dispatch({ type: "mode2" }),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Problems));
