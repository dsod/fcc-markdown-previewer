import React from "react";

const Editor = (props) => {
  return (
    <div className="card">
      <div className="card-header h4">Editor</div>
      <div className="card-body p-0">
        <div className="form-group col-12 p-0 m-0">
          <textarea
            name="editor"
            id="editor"
            rows="33"
            className="form-control border-0"
            placeholder="Input markdown here..."
            onChange={props.handleInput}
            value={props.textInput}
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default Editor;
