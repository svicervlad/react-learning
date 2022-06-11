import React, { useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import CodeView from './components/CodeView';
import '@picocss/pico';
import './App.scss';
import Markdown from './components/Markdown';

function App(): JSX.Element {
  const [indexData, setIndexData] = React.useState('');

  const getIndexData = ():void => {
    fetch('/data/index.md').then((res) => res.text()).then((text) => {
      setIndexData(text);
    });
  };

  useEffect(() => {
    getIndexData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <Markdown>{indexData}</Markdown>
      </header>
    </div>
  );
}

export default App;
