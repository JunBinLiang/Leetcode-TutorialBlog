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

import FadeIn from "react-fade-in";
import SplitterLayout from "react-splitter-layout";
import "react-splitter-layout/lib/index.css";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ModalBody from "react-bootstrap/ModalBody";
import ModalFooter from "react-bootstrap/ModalFooter";
import "bootstrap/dist/css/bootstrap.min.css";

//import DarkModeToggle from "react-dark-mode-toggle";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

import "../App.css";
import "./Editor.css";
import swal from "sweetalert";
import axios from "axios";
import InputField from "./InputField";
import Congratulation from "./Congratulation";

let url1 = "https://frozen-atoll-01566.herokuapp.com/api/`";
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
      A: [], //content of the result
      inputstate: true,
      myinput: "",
      correct: false, //if your answer are correct after submit
      done: false, //at the beginning,input is default state (not O||X)
      theme: "solarized_light",
      mode: "java",
      resetPopup: false,
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
      fetch(this.props.content)
        .then((res) => res.text())
        .then((text) =>
          this.setState({
            mycode: this.props.code,
            A: [],
            done: false,
            output: "",
          })
        );
    }
  }

  selectLan(obj) {
    this.setState({ mode: obj.value });
  }

  select(obj) {
    this.setState({ theme: obj.value });
  }

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
    const headers = {
      "Content-Type": "text/plain",
    };
    this.setState({ loading: true });

    axios
      .post(`https://frozen-atoll-01566.herokuapp.com/api/run`, {
        lang: this.state.mode,
        code: this.state.mycode + this.props.test,
        input: this.state.myinput,
      })
      .then((res) => {
        let data = res.data;
        let status = parseInt(data.message.status);
        console.log(res);
        this.setState({
          status: status,
          output: data.message,
          loading: false,
          inputstate: false,
        });
      });
  }

  handleSubmit() {
    const headers = {
      "Content-Type": "text/plain",
    };
    this.setState({ summiting: true });
    axios
      .post(`https://frozen-atoll-01566.herokuapp.com/api/submit`, {
        lang: this.state.mode,
        code: this.state.mycode + this.props.submit,
      })
      .then((res) => {
        let rightAns = 0;
        let data = res.data;
        let status = parseInt(data.message.status);
        let B = data.message.split("\n");
        let allRight = false;
        let result = [];
        let message = [];

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

        if (rightAns == this.props.testcase) {
          allRight = true;
          swal("Congratulation!").then((willDelete) => {
            if (willDelete) {
              this.setState({ correct: false });
            }
          });
        } else {
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
          inputstate: false,
          done: true,
          A: result.reverse(),
          correct: allRight,
        });
      });
  }

  render() {
    let resetB = (
      <Button
        className="outline-primary"
        style={{ marginLeft: "10px" }}
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
    let stateButon = "";
    let smalltext = "";

    if (this.state.inputstate) {
      stateButon = (
        <Button className="btn-success " onClick={this.inputstateChange}>
          My output
        </Button>
      );
    } else {
      stateButon = (
        <Button className="btn-success" onClick={this.inputstateChange}>
          Input
        </Button>
      );
    }

    let textarea = (
      <FadeIn>
        <textarea
          id="textarea"
          className="output"
          name="code"
          type="textarea"
          componentClass="textarea"
          rows="10"
          cols="150"
          width="30%"
          value={this.state.output}
          onChange={this.changeOutput}
          style={{ backgroundColor: "#e6ffff" }}
        />
      </FadeIn>
    );

    if (this.state.inputstate) {
      textarea = (
        <FadeIn>
          <textarea
            id="textarea"
            className="output"
            name="code"
            type="textarea"
            componentClass="textarea"
            rows="10"
            cols="150"
            width="30%"
            style={{ backgroundColor: "black", color: "white" }}
            value={this.state.myinput}
            onChange={this.changeInput}
          />
        </FadeIn>
      );
    }

    let inputs = [];

    for (let i = 0; i < this.props.testcase; i++) {
      if (!this.state.done) {
        inputs.push(
          <InputField bstate={1} index={i} judge={this.props.judgecase[i]} />
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

    if (!this.state.loading) {
      if (this.state.summiting) {
        B = <Button className="outline-primary">Compile</Button>;
      } else {
        B = (
          <Button className="outline-primary" onClick={this.handleCompile}>
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

    let congra;
    if (this.state.correct) {
      congra = <Congratulation />;
    }

    return (
      <div>
        <SplitterLayout
          vertical={true}
          primaryMinSize={75}
          percentage={true}
          primaryMinSize={60}
        >
          <div>
            {congra}
            {inputs}

            <br />

            <div style={{ display: "flex" }}>
              <Dropdown
                options={options1}
                onChange={this.select}
                value={this.state.theme}
              />
              <Dropdown
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
            <button
              className={this.state.inputstate ? "depressed" : ""}
              style={{ margin: "5px", backgroundColor: "pink" }}
              onClick={() => {
                this.setState({ inputstate: true });
              }}
            >
              Test
            </button>
            <button
              className={!this.state.inputstate ? "depressed" : ""}
              style={{ margin: "5px", backgroundColor: "pink" }}
              onClick={() => {
                this.setState({ inputstate: false });
              }}
            >
              Output
            </button>
            <hr
              style={{
                height: "2px",
                borderWidth: "0",
                color: "grey",
                "background-color": "grey",
              }}
            />
            {textarea}
            <br />
            {B}
            {S}
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

export default Editor;
