import React from "react";
import "./App.scss";
import Editor from "./components/Editor";
import Preview from "./components/Preview";

const defaultTextInput = `# Header 1
## Header 2

This is a Link: [link](https://www.google.com)

Code: \`<div></div>\`

Code block: 
\`\`\`
<div>
    <h1>Header</h1>
</div>
\`\`\`

Numbered list:
1. First...
2. Second...

Block quote:
> Heeeey!!

Bold text:
**Heeeey!!**

Image:




![Random image API](https://picsum.photos/200)

`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textInput: defaultTextInput,
    };
  }

  handleInput = (event) => {
    this.setState({
      textInput: event.target.value,
    });
  };

  render() {
    return (
      <main>
        <div className="container-fluid px-2 py-5">
          <div className="row">
            <div className="col-lg-12 mb-lg-3 col-xl-5 mx-xl-auto mw-800">
              <Editor
                textInput={this.state.textInput}
                handleInput={this.handleInput}
              />
            </div>
            <div className="col-lg-12 col-xl-6 mx-xl-auto mw-800">
              <Preview textInput={this.state.textInput} />
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default App;
