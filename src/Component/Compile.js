import React, { Component } from "react";
import * as ProblemSet from "../ProblemSet.js";

import Editor from "./Editor";
import Markdown from "react-markdown";
import SplitterLayout from "react-splitter-layout";
import Error from "./Error";

//css
import "../problems.css";

//<Code content={leetcodes[index][0]} description={statements[index]} name={names[index]}
//test={Test[index]} index={index} submit={Submit[index]} testcase={testcases[index]}input={inputs[index]}/>

class Compile extends Component {
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
    };
  }

  componentDidMount() {
    let id = this.props.match.params.id;
    if (id >= ProblemSet.names.length) {
      return;
    }

    const oldcode = localStorage.getItem(ProblemSet.names[id]);
    if (oldcode == null) {
      fetch(ProblemSet.leetcodes[id][0])
        .then((res) => res.text())
        .then((text) => {
          this.setState({ markdown: text });
        });
    } else {
      this.setState({ markdown: oldcode });
    }

    fetch(ProblemSet.statements[id])
      .then((res) => res.text())
      .then((text) => {
        this.setState({ description: text });
      });

    fetch(ProblemSet.Test[id])
      .then((res) => res.text())
      .then((text) => {
        this.setState({ test: text });
      });
    fetch(ProblemSet.Submit[id])
      .then((res) => res.text())
      .then((text) => {
        this.setState({ submit: text });
      });
  }

  componentDidUpdate(previousProps, previousState) {
    if (previousProps.match.params.id != this.props.match.params.id) {
      let id = this.props.match.params.id;
      if (id >= ProblemSet.names.length) {
        return;
      }

      const oldcode = localStorage.getItem(ProblemSet.names[id]);
      if (oldcode == null) {
        fetch(ProblemSet.leetcodes[id][0])
          .then((res) => res.text())
          .then((text) => {
            this.setState({ markdown: text });
          });
      } else {
        this.setState({ markdown: oldcode });
      }

      fetch(ProblemSet.statements[id])
        .then((res) => res.text())
        .then((text) => {
          this.setState({ description: text });
        });

      fetch(ProblemSet.Test[id])
        .then((res) => res.text())
        .then((text) => {
          this.setState({ test: text });
        });
      fetch(ProblemSet.Submit[id])
        .then((res) => res.text())
        .then((text) => {
          this.setState({ submit: text });
        });
    }
  }

  render() {
    let id = this.props.match.params.id;
    if (id >= ProblemSet.names.length) {
      return (
        <div>
          <Error />
        </div>
      );
    }

    return (
      <div>
        <div style={{ width: "95%", "margin-left": "5%" }}>
          <div style={{ margin: "3%", width: "45%" }}>
            <SplitterLayout primaryMinSize={35} percentage={true}>
              <div>
                <h2
                  className="problemTitle"
                  style={{ width: "45%", "margin-left": "30%" }}
                >
                  {" "}
                  {ProblemSet.names[id]}
                </h2>
                <Markdown
                  className="testing"
                  escapeHtml={true}
                  source={this.state.description}
                />
              </div>
              <div style={{ width: "100%" }}>
                <Editor
                  judgecase={ProblemSet.inputs[id]}
                  testcase={ProblemSet.testcases[id]}
                  code={this.state.markdown}
                  test={this.state.test}
                  submit={this.state.submit}
                  name={ProblemSet.names[id]}
                  index={id}
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

export default Compile;
