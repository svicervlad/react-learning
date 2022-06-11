import React, { useEffect } from 'react';
import { Container, Section } from 'react-bulma-components';
import './App.sass';
import Markdown from './components/Markdown';
import WindowBox from './components/WindowBox';

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
    <Container>
      <Section>
        <WindowBox useButton>
          <Markdown>{indexData}</Markdown>
        </WindowBox>
      </Section>
    </Container>
  );
}

export default App;
