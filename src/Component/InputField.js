import React, { Component, useState } from "react";

import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-github";

import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { FormControl } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";

import "../App.css";

import axios from "axios";

class InputField extends Component {
  constructor() {
    super();
    this.state = { show: false, judge: "" }; //judge:the content of test case
  }
  componentDidMount() {
    fetch(this.props.judge)
      .then((res) => res.text())
      .then((text) => {
        this.setState({ judge: text });
      });
  }

  componentDidUpdate(previousProps, previousState) {
    if (previousProps.judge != this.props.judge) {
      fetch(this.props.judge)
        .then((res) => res.text())
        .then((text) => {
          this.setState({ judge: text });
        });
    }
  }

  render() {
    let button = (
      <Button
        onClick={() => {
          this.setState({ show: true });
        }}
      >
        this
      </Button>
    );

    if (this.props.bstate == 1) {
      button = (
        <Button
          onClick={() => {
            this.setState({ show: true });
          }}
          className=" color"
          data-toggle="modal"
          data-target="#myModal"
          style={{ marginLeft: "3%", marginBottom: "10px" }}
        >
          Test {this.props.index}
        </Button>
      );
    }
    if (this.props.bstate == 2) {
      button = (
        <Button
          onClick={() => {
            this.setState({ show: true });
          }}
          className="btn-success"
          style={{ marginLeft: "3%", marginBottom: "10px" }}
        >
          O
        </Button>
      );
    }
    if (this.props.bstate == 3) {
      button = (
        <Button
          onClick={() => {
            this.setState({ show: true });
          }}
          className="btn-danger"
          style={{ marginLeft: "3%", marginBottom: "10px" }}
        >
          X
        </Button>
      );
    }

    return (
      <>
        {button}
        {/* <div
          class="modal"
          id="modal"
          size="sm"
          show={this.state.show}
          onHide={() => {
            this.setState({ show: false });
          }}
        >
          <h2> Test {this.props.index}</h2>
          <div class="content">{this.state.judge}</div>
          <div class="actions">
            <button class="toggle-button">OK</button>
          </div>
        </div> */}

        <Modal
          size="sm"
          show={this.state.show}
          onHide={() => {
            this.setState({ show: false });
          }}
          aria-labelledby="example-modal-sizes-title-sm"
        >
          <Modal.Header>
            <Modal.Title>Test {this.props.index}</Modal.Title>
          </Modal.Header>
          <Modal.Body>{this.state.judge}</Modal.Body>
          <div className="actions">
            <button
              className="okbtn"
              onClick={() => {
                this.setState({ show: false });
              }}
            >
              OK
            </button>
          </div>
        </Modal>
      </>
    );
  }
}

export default InputField;
