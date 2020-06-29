import React from 'react';
import marked from 'marked';
import './App.css';

marked.setOptions({
  breaks: true,
  gfm: true
})

function convertMarkdown(markdown) {
  return { __html: marked(markdown) };
}

function Editor({ text, handleChange }) {
  console.log(text);
  return (
    <div onChange={handleChange} className="Editor Column">
      <textarea defaultValue={text} placeholder="Enter text here" id="editor"></textarea>
    </div>
  )
}

function Preview({ text }) {
  return (
    <div className="Preview Column">
      <div id="preview" dangerouslySetInnerHTML={convertMarkdown(text)}>
      </div>
    </div>
  )
}

function App() {
  let defaultState = `
# h1
## h2
[google](www.google.com)
\`const b = 20;\`
\`\`\`
const a = 10;
\`\`\`
- hello
- world
> quote
![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 1")

**bold**
`
  const [text, setText] = React.useState(defaultState);
  React.useEffect(() => {
    console.log(text);
  }, [text]);
  return (
    <div className="App">
      <header className="App_Header">
        <h1>Markdown Previewer</h1>
      </header>
      <div className="App_Main">
        <div onChange={e => setText(e.target.value)} className="Editor Column">
          <textarea defaultValue={text} placeholder="Enter text here" id="editor"></textarea>
        </div>
        <Preview text={text} />
      </div>
    </div>
  );
}

export default App;
