import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import "react-accessible-accordion/dist/fancy-example.css";
import { MDBCol, MDBFormInline, MDBIcon } from "mdbreact";

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
class AllNotes extends Component {
  constructor() {
    super();
    this.state = {
      allNotes: [
        {
          title: "problem1",
          contents: "default Notes",
        },
        { title: "problem2", contents: "default Notes2" },
      ],
    };
  }

  render() {
    return (
      <div className="container">
        <h2
          className="open-sans"
          style={{ fontSize: "50px", margin: "20px", fontWeight: "300" }}
        >
          My Notes
        </h2>

        <MDBCol md="6">
          <MDBFormInline className="md-form">
            <MDBIcon icon="search" />
            <input
              className="form-control form-control-sm ml-3 w-75"
              type="text"
              placeholder="Search"
              aria-label="Search"
            />
          </MDBFormInline>
          <br />
        </MDBCol>
        <Accordion>
          {this.state.allNotes.map((notes) => (
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>{notes.title}</AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>{notes.contents}</p>
              </AccordionItemPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    );
  }
}

export default withRouter(AllNotes);
