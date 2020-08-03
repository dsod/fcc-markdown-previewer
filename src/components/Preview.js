import React from "react";
import Marked from "marked";

const Preview = (props) => {
  return (
    <div className="card">
      <div className="card-header h4 bg-dark text-white">Preview</div>
      <div
        className="card-body"
        id="preview"
        dangerouslySetInnerHTML={{
          __html: Marked(props.textInput, { breaks: true }),
        }}
      />
    </div>
  );
};

export default Preview;
