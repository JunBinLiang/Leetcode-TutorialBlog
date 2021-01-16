import React, { Component } from "react";
import ReactDOM from "react-dom";
import MDEditor from "@uiw/react-md-editor";
import "@uiw/react-md-editor/dist/markdown-editor.css";
import "./NotesEditor.css";

const mkdStr = ``;

class NotesEditor extends Component {
  constructor() {
    super();
    this.state = { value: mkdStr };
    this.change = this.change.bind(this);
    this.scrollToBottom=this.scrollToBottom.bind(this);
  }
 


  change(val) {
    this.setState({ value: val });
  }

  componentDidUpdate(prevProps, prevState){
    //this.scrollToBottom();
  }

  scrollToBottom() {
    const {thing} = this.refs;
    thing.scrollTop = thing.scrollHeight - thing.clientHeight;
  }
  


  render() {
    return (
      <div className="container">
        <div className="itemconfiguration margin" ref={`thing`} > 
          <MDEditor.Markdown
            source={this.state.value}
            style={{ minHeight: "500px" }}
            className="notes"
          />
        </div>

        <br/>
        <MDEditor
          height={250}
          value={this.state.value}
          onChange={this.change}
          className="margin"
          preview={"edit"}
        />
      </div>
    );
  }
}

export default NotesEditor;
