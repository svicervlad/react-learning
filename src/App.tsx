import React from 'react';
import './App.css';
import CodeView from './components/CodeView';

function App(): JSX.Element {
  return (
    <div className="App">
      <header className="App-header">
        <CodeView title="Big Title">
          <div>Hello</div>
        </CodeView>
      </header>
    </div>
  );
}

export default App;
