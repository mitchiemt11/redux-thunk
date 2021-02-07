import { useEffect, useState } from 'react';
  
function Content({ text }) {
  useEffect(() => {
    console.log('Content: Mounted')
    
    return () => {
      console.log("Content: UnMount");
    }
  }, []);

  useEffect(() => {
    console.log('Content: updated')
  })

  return (
    <p>{text}</p>
  )
}

function App() {
  const [showContent, setShowContent] = useState(false);
  const [summarise, setSummarise] = useState(false);
  const summary = 'Lorem Ipsum...';
  const fullText = 'Lorem ipsum sit amet fefefe efef';

  useEffect(() => {
    console.log('App: Mounted')
    
    return () => {
      console.log("App: UnMount");
    }
  }, []);

  useEffect(() => {
    console.log('App: updated')
  })

  useEffect(() => {
    console.log('Content was toggled')
  }, [showContent]);
  
  return (
    <>
      <h1>Heading</h1>
      <button onClick={() => setShowContent(!showContent)}>{showContent ? "Hide" : "Show"} content</button>
      {showContent &&
        <>
          <button onClick={() => setSummarise(!summarise)}>Show {summarise ? 'full content' : 'summary'}</button>
          <Content text={summarise ? summary : fullText} />
        </>
      }
    </>
  )
}

export default App;
