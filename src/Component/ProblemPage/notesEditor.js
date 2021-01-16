import React, { Component } from "react";
import ReactDOM from "react-dom";
import MDEditor from "@uiw/react-md-editor";
import "@uiw/react-md-editor/dist/markdown-editor.css";
import "./NotesEditor.css";

const mkdStr = `
# Notes To Self
**bold text:** 
1. item
- item
- item
\`\`\`javascript
console.log("Hello World);
\`\`\`
`;

class NotesEditor extends Component {
  constructor() {
    super();
    this.state = { value: mkdStr };
    this.change = this.change.bind(this);
  }

  change(val) {
    this.setState({ value: val });
  }

  render() {
    return (
      <div className="container">
        <div className="itemconfiguration margin">
          <MDEditor.Markdown
            source={this.state.value}
            style={{ minHeight: "500px" }}
            className="notes"
          />
        </div>

        <MDEditor
          height={300}
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
