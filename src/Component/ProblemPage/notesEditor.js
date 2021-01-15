import React, { useState } from "react";
import ReactDOM from "react-dom";
import MDEditor from "@uiw/react-md-editor";
// No import is required in the WebPack.
import "@uiw/react-md-editor/dist/markdown-editor.css";

const mkdStr = `# Notes to Self

**Hello world!!!**

`;

export default function MarkdownEditor() {
  const [value, setValue] = React.useState(mkdStr);
  return (
    <div className="container">
      <MDEditor.Markdown source={value} style={{ minHeight: "500px" }} />
      <MDEditor height={300} value={value} onChange={setValue} />
      <div style={{ padding: "50px 0 0 0" }} />
    </div>
  );
}
