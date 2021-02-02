import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import "./Menu.scss";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";

class Menu extends Component {
  constructor() {
    super();
    this.handleClick1 = this.handleClick1.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);
  }

  handleClick1() {
    this.props.history.push("/problems");
  }

  handleClick2() {
    this.props.history.push("/course");
  }

  render() {
    return (
      <div className="container menu">
        <div className="card-container" onClick={this.handleClick1}>
          <Card>
            <CardBody>
              <CardTitle tag="h5">Interview Coding Practice</CardTitle>

              <CardText id="mouse_over">
                Practice the top popular coding interview question.
                <br />
                <span className="view" id="mouse_over">
                  Click To View
                </span>
              </CardText>
            </CardBody>
          </Card>
        </div>
        <div className="card-container">
          <Card>
            <CardBody>
              <CardTitle tag="h5">Online Assesment</CardTitle>

              <CardText id="mouse_over">
                Mock online coding assesment.
                <br />
                <span className="view" id="mouse_over">
                  Click To View
                </span>
              </CardText>
            </CardBody>
          </Card>
        </div>
        <div className="card-container" onClick={this.handleClick2}>
          <Card>
            <CardBody>
              <CardTitle tag="h5">Algorithm Crash Course</CardTitle>

              <CardText id="mouse_over">
                Video explanation with the most frequent use data structure and
                algorithm.
                <br />
                <span className="view" id="mouse_over">
                  Click To View
                </span>
              </CardText>
            </CardBody>
          </Card>
        </div>
      </div>
    );
  }
}

export default withRouter(Menu);
