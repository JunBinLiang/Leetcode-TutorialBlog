import React, { Component } from "react";
import ReactDOM from "react-dom";
import MDEditor from "@uiw/react-md-editor";
// No import is required in the WebPack.
import "@uiw/react-md-editor/dist/markdown-editor.css";
import "./NotesEditor.css";
import SplitterLayout from "react-splitter-layout";
import Markdown from "react-markdown";
const mkdStr = `
# Notes To Self
**bold text:** 
1. item
- item
- item
\`\`\`javascript
\`\`\`
`;





class NotesEditor extends Component {
  constructor() {
    super();
	this.state = {value:mkdStr};
	this.change = this.change.bind(this);
  }
	
  change(val){
	 this.setState({ value: val });
  }

  render() {
    return (
		<div className="container">
		
		 
		
		  <MDEditor
			height={300}
			value={this.state.value}
			onChange={this.change}
			className="margin"
			preview={'edit'}
		  />
		<br/>
		
		<div className="itemconfiguration">
		 	<Markdown escapeHtml={true} source={this.state.value} className="margin notes"/>
		 </div>
		 
		</div>
    );
  }
}

export default NotesEditor;