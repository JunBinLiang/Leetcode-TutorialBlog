import React, { useState } from "react";
import ReactDOM from "react-dom";
import MDEditor from "@uiw/react-md-editor";
// No import is required in the WebPack.
import "@uiw/react-md-editor/dist/markdown-editor.css";
import "./notesEditor.css";
const mkdStr = `
# Notes To Self
**bold text:** 

1. [Google](https://www.google.com)
1. item
- item
- item
\`\`\`javascript
console.log("Hello World!");
\`\`\`
`;

export default function MarkdownEditor() {
  const [value, setValue] = React.useState(mkdStr);
  return (
    <div className="container">
      <MDEditor.Markdown
        source={value}
        style={{ minHeight: "500px" }}
        className="margin notes"
      />
      <MDEditor
        height={300}
        value={value}
        onChange={setValue}
        className="margin"
      />
      <div style={{ padding: "50px 0 0 0" }} />
    </div>
  );
}
