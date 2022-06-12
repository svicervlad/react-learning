import React, { useEffect } from 'react';
import { Container, Section, Tile } from 'react-bulma-components';
import './App.sass';
import { GlobalMenu } from './components/GlobalMenu';
import Markdown from './components/Markdown';
import WindowBox from './components/WindowBox';

function App(): JSX.Element {
  const [indexData, setIndexData] = React.useState('');

  const MenuItems = [
    'First Menu',
    'second menu',
  ];
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
      <Tile kind="ancestor">
        <Tile size={3} vertical>
          <Section size="small" className="global-menu">
            <GlobalMenu items={MenuItems} />
          </Section>
        </Tile>
        <Tile>
          <Section>
            <WindowBox useButton>
              <Markdown>{indexData}</Markdown>
            </WindowBox>
          </Section>
        </Tile>
      </Tile>

    </Container>
  );
}

export default App;
