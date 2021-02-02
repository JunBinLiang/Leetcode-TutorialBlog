import React, { Component, useState } from "react";
import * as ProblemSet from "../ProblemSet.js";

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

import Toast from "light-toast";
import { connect } from "react-redux";
import FadeIn from "react-fade-in";
import SplitterLayout from "react-splitter-layout";
import "react-splitter-layout/lib/index.css";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ModalBody from "react-bootstrap/ModalBody";
import ModalFooter from "react-bootstrap/ModalFooter";
import "bootstrap/dist/css/bootstrap.min.css";
import { Progress } from "react-sweet-progress";
import "react-sweet-progress/lib/style.css";

//import DarkModeToggle from "react-dark-mode-toggle";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

import "../App.css";
import "./Editor.scss";
import swal from "sweetalert";
import axios from "axios";
import InputField from "./InputField";
import Congratulation from "./Congratulation";

import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import { Parser, Converter } from "../Parser/Parser";

let url1 = "https://frozen-atoll-01566.herokuapp.com/api/";
let url2 = "http://localhost:8080/api/";

let hash = new Map();
hash["java"] = 0;

const options1 = [
  "tomorrow",
  "github",
  "monokai",
  "kuroir",
  "twilight",
  "xcode",
  "textmate",
  "solarized_light",
  "solarized_dark",
  "terminal",
];

const options2 = ["java"];

class Editor extends Component {
  constructor() {
    super();
    this.state = {
      mycode: "",
      status: 0,
      output: "", //output in the text area
      loading: false,
      summiting: false,
      show_result: false,
      A: [], //content of the result
      textareaState: 1,
      myinput: "",
      correct: false, //if your answer are correct after submit
      done: false, //at the beginning,input is default state (not O||X)
      theme: "terminal",
      mode: "java",
      resetPopup: false,
      total_test_case: 0,
      wrongAnswer: false,
      number_of_correct: 0,
      tabSelectedIndex: 0,
    };
    this.onchange = this.onchange.bind(this);
    this.handleCompile = this.handleCompile.bind(this);
    this.changeOutput = this.changeOutput.bind(this);
    this.changeInput = this.changeInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.inputstateChange = this.inputstateChange.bind(this);
    this.select = this.select.bind(this);
    this.selectLan = this.selectLan.bind(this);
    this.toDeault = this.toDeault.bind(this);
    this.changeTest = this.changeTest.bind(this);
  }

  toDeault() {
    let index = this.props.index;
    fetch(ProblemSet.leetcodes[index][0])
      .then((res) => res.text())
      .then((text) => {
        //also clean and reset the local storage
        localStorage.setItem(ProblemSet.names[index], text);
        this.setState({ resetPopup: false, mycode: text });
      });
  }

  componentDidUpdate(previousProps, previousState) {
    if (previousProps.code != this.props.code) {
      fetch(this.props.judgecase[0]) //reset the state to initial,but not all, for example,"terminal"
        .then((res) => res.text())
        .then((text) => {
          this.setState({
            mycode: this.props.code,
            A: [],
            done: false,
            output: "",
            myinput: text,
            tabSelectedIndex: 0,
          });
        });
    }
  }

  changeTest(event) {
    fetch(this.props.judgecase[event.target.value])
      .then((res) => res.text())
      .then((text) => {
        this.setState({ myinput: text, tabSelectedIndex: 0, textareaState: 1 });
      });
  }

  selectLan(obj) {
    this.setState({ mode: obj.value });
  }

  select(obj) {
    this.setState({ theme: obj.value });
  }

  tabSelect = (index) => {
    if (index == 2) {
      return;
    }
    this.setState({ tabSelectedIndex: index });
  };

  inputstateChange() {
    let newstate = !this.state.inputstate;
    this.setState({ inputstate: newstate });
  }

  componentDidMount() {
    fetch(this.props.judgecase[0])
      .then((res) => res.text())
      .then((text) => {
        this.setState({ mycode: this.props.code, myinput: text });
      });
  }
  onchange(newvalue) {
    localStorage.setItem(this.props.name, newvalue);
    this.setState({ mycode: newvalue });
  }
  changeOutput(event) {
    this.setState({ output: event.target.value });
  }

  changeInput(event) {
    this.setState({ myinput: event.target.value });
  }

  handleCompile() {
    if (!this.props.isAuthenticated) {
      Toast.info("Please Login First", 1000, () => {});
      return;
    }

    let lines = this.state.myinput.match(/[^\r\n]+/g);
    if (!Parser(lines, ProblemSet.inputTypes[this.props.index])) {
      //parse check
      this.setState({
        textareaState: 2,
      });
      return;
    }
    let parseInput = Converter(lines, ProblemSet.inputTypes[this.props.index]);
    //console.log(parseInput);

    this.setState({ loading: true });

    const config = {
      headers: { Authorization: `${this.props.token}` },
    };

    axios
      .post(
        url1 + `run`,
        {
          lang: this.state.mode,
          code: this.state.mycode + this.props.test,
          input: parseInput,
        },
        config
      )
      .then((res) => {
        let data = res.data;
        let status = parseInt(data.message.status);
        console.log(res);
        this.setState({
          status: status,
          output: data.message,
          loading: false,
          textareaState: 1,
          tabSelectedIndex: 1,
        });
      });
  }

  handleSubmit() {
    this.setState({ show_result: false });
    if (!this.props.isAuthenticated) {
      Toast.info("Please Login First", 2000, () => {});
      return;
    }

    let lines = this.state.myinput.match(/[^\r\n]+/g);
    if (!Parser(lines, ProblemSet.inputTypes[this.props.index])) {
      //parse check
      this.setState({
        textareaState: 2,
      });
      return;
    }
    let parseInput = Converter(lines, ProblemSet.inputTypes[this.props.index]);
    //console.log(parseInput);

    const headers = {
      "Content-Type": "text/plain",
    };

    const config = {
      headers: { Authorization: `${this.props.token}` },
    };

    this.setState({ summiting: true });
    axios
      .post(
        `https://frozen-atoll-01566.herokuapp.com/api/submit`,
        {
          lang: this.state.mode,
          code: this.state.mycode + this.props.submit,
        },
        config
      )
      .then((res) => {
        let rightAns = 0;
        let data = res.data;
        let status = parseInt(data.message.status);
        let B = data.message.split("\n");
        let allRight = false;
        let result = [];
        let message = [];
        this.setState({ total_test_case: this.props.testcase });

        let t = this.props.testcase;
        if (B.length < t) {
          t = 0;
        }

        for (let i = B.length - 1; i >= 0; i--) {
          if (B[i].length == 0) continue;
          if (t > 0) {
            if (B[i].charAt(0) == "t") rightAns++;
            result.push(B[i]);
            t--;
          } else {
            message.push(B[i]);
          }
        }
        this.setState({ number_of_correct: rightAns });

        if (rightAns == this.props.testcase) {
          allRight = true;
          this.setState({ wrongAnswer: false });
          swal("Congratulation!").then((willDelete) => {
            if (willDelete) {
              this.setState({ correct: false });
            }
          });
        } else {
          this.setState({ wrongAnswer: true });

          swal({
            text: "You are not YOUXIU enough!",
            icon: "warning",
            dangerMode: true,
          });
        }
        this.setState({
          status: status,
          output: message.reverse().join("\n"),
          summiting: false,
          textareaState: 1,
          done: true,
          A: result.reverse(),
          correct: allRight,
          tabSelectedIndex: 1,
          show_result: true,
        });
      });
  }

  render() {
    let resetB = (
      <Button
        className="outline-primary"
        style={{ marginLeft: "10px", marginBottom: "0px" }}
        onClick={() => {
          this.setState({ resetPopup: true });
        }}
      >
        <i class="fa fa-refresh"></i>
      </Button>
    );

    let B = (
      <Button className="outline-primary">
        <i class="fa fa-refresh fa-spin"></i>
      </Button>
    );
    let S = (
      <Button className="btn-info" style={{ marginLeft: "5%" }}>
        <i class="fa fa-refresh fa-spin"></i>
      </Button>
    );

    let outputTextarea = (
      <FadeIn>
        <textarea
          id="textarea"
          className="output-textarea"
          name="code"
          type="textarea"
          componentClass="textarea"
          value={this.state.output}
          onChange={this.changeOutput}
        />
      </FadeIn>
    );

    let inputTextarea;

    if (this.state.textareaState == 2) {
      inputTextarea = (
        <FadeIn>
          <textarea
            id="textarea"
            className="input-textarea wrong-output"
            name="code"
            type="textarea"
            componentClass="textarea"
            value={"Invalid Input"}
          />
        </FadeIn>
      );
    } else {
      inputTextarea = (
        <textarea
          id="textarea"
          className="input-textarea"
          name="code"
          type="textarea"
          componentClass="textarea"
          value={this.state.myinput}
          onChange={this.changeInput}
        />
      );
    }

    let testCaseOption = [];
    let inputChoices = [];
    let inputs = [];

    for (let i = 0; i < this.props.testcase; i++) {
      testCaseOption.push(<option value={i}>Test {i + 1}</option>);

      if (!this.state.done) {
        inputs.push(
          <InputField bstate={1} index={i} judge={this.props.judgecase[i]} />
        );

        inputChoices.push(
          <li
            onClick={() => {
              fetch(this.props.judgecase[i])
                .then((res) => res.text())
                .then((text) => {
                  this.setState({ output: text });
                });
            }}
          >
            Testcase: {i}
          </li>
        );

        if (i % 6 == 0 && i != 0) {
          inputs.push(<br />);
          inputs.push(<br />);
        }
      } else {
        if (
          this.state.A[i] != null &&
          this.state.A[i].length >= 1 &&
          this.state.A[i].charAt(0) == "t"
        ) {
          inputs.push(
            <InputField bstate={2} index={i} judge={this.props.judgecase[i]} />
          );
        } else {
          inputs.push(
            <InputField bstate={3} index={i} judge={this.props.judgecase[i]} />
          );
        }

        if (i % 6 == 0 && i != 0) {
          inputs.push(<br />);
          inputs.push(<br />);
        }
      }
    }

    //////////////////////////////////////////////
    if (!this.state.loading) {
      if (this.state.summiting) {
        B = <Button className="outline-primary">Compile</Button>;
      } else {
        B = (
          <Button
            className="outline-primary compile"
            onClick={this.handleCompile}
          >
            Compile
          </Button>
        );
      }
    }

    if (!this.state.summiting) {
      if (this.state.loading) {
        S = (
          <Button className="btn-info" style={{ marginLeft: "5%" }}>
            Submit
          </Button>
        );
      } else {
        S = (
          <Button
            className="btn-info"
            style={{ marginLeft: "5%" }}
            onClick={this.handleSubmit}
          >
            Submit
          </Button>
        );
      }
    }

    //////////////////////////////////////////////////////////////////

    let congra;
    if (this.state.correct) {
      congra = <Congratulation />;
    }

    let result_bar;
    if (this.state.show_result) {
      let percentage = Math.round(
        (this.state.number_of_correct / this.state.total_test_case) * 100
      );

      if (!this.state.wrongAnswer) {
        result_bar = <Progress percent={percentage} status="success" />;
      } else {
        result_bar = <Progress percent={percentage} status="error" />;
      }
    }
    return (
      <div>
        {congra}
        <div style={{ width: "80%", margin: "10px" }}>{result_bar}</div>

        {/* {inputs} */}

        <SplitterLayout
          vertical={true}
          primaryMinSize={75}
          percentage={true}
          primaryMinSize={60}
        >
          <div>
            <div style={{ display: "flex" }}>
              <Dropdown
                className="theme"
                options={options1}
                onChange={this.select}
                value={this.state.theme}
              />
              <Dropdown
                className="theme"
                options={options2}
                onChange={this.selectLan}
                value={this.state.mode}
              />
              {resetB}
            </div>

            <AceEditor
              height={1000}
              width={1200}
              mode={this.state.mode}
              theme={this.state.theme}
              name="blah2"
              onChange={this.onchange}
              fontSize={16}
              showPrintMargin={true}
              showGutter={true}
              highlightActiveLine={true}
              value={this.state.mycode}
              setOptions={{
                enableBasicAutocompletion: true,
                enableLiveAutocompletion: true,
                enableSnippets: false,
                showLineNumbers: true,
                tabSize: 4,
              }}
            />
          </div>

          <div>
            <Tabs
              selectedIndex={this.state.tabSelectedIndex}
              onSelect={this.tabSelect}
            >
              <TabList>
                <Tab
                  onClick={() => {
                    this.setState({ textareaState: 1 });
                  }}
                >
                  Input
                </Tab>
                <Tab>Output</Tab>
                <Tab>
                  <div>
                    <select
                      class="select-css select-btn"
                      onChange={this.changeTest}
                    >
                      {testCaseOption}
                    </select>
                  </div>
                </Tab>
              </TabList>

              <TabPanel>
                {inputTextarea}
                {B}
                {S}
              </TabPanel>

              <TabPanel>
                {outputTextarea}
                {B}
                {S}
              </TabPanel>

              <TabPanel></TabPanel>
            </Tabs>
          </div>
        </SplitterLayout>

        <Modal show={this.state.resetPopup}>
          <Modal.Body>Do you want to reset the code to default?</Modal.Body>
          <Modal.Footer>
            <Button
              variant="secondary"
              onClick={() => {
                this.setState({ resetPopup: false });
              }}
            >
              No
            </Button>
            <Button variant="primary" onClick={this.toDeault}>
              Yes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    token: state.token,
    isAuthenticated: state.isAuthenticated,
    email: state.email,
    solved: state.solved,
  };
};

export default connect(mapStateToProps)(Editor);
