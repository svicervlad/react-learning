import React from 'react';
import {
  Columns, Container, Section,
} from 'react-bulma-components';
import './App.sass';
import { GlobalMenu, GlobalMenuType } from './components/GlobalMenu';
import Markdown from './components/Markdown';
import WindowBox from './components/WindowBox';

function App(): JSX.Element {
  const [current, setCurrent] = React.useState(0);
  const [content, setContent] = React.useState('');
  const [title, setTitle] = React.useState('');

  const getContentData = React.useCallback((
    id:number,
    path: string,
    windowTitle: string,
  ):void => {
    setCurrent(id);
    setTitle(windowTitle);
    fetch(path).then((res) => res.text()).then((text) => {
      setContent(text);
    });
  }, []);

  const MenuItems: GlobalMenuType = React.useMemo(() => [
    {
      id: 0,
      label: 'General',
      menuItems: [
        {
          id: 0,
          label: 'React',
          path: 'https://raw.githubusercontent.com/facebook/react/main/README.md',
          action: getContentData,
        },
        {
          id: 1,
          label: 'Bulma',
          path: 'https://raw.githubusercontent.com/jgthms/bulma/master/README.md',
          action: getContentData,
        },
        {
          id: 2,
          label: 'Drupal',
          path: 'https://raw.githubusercontent.com/drupal/drupal/9.5.x/README.md',
          action: getContentData,
        },
      ],
    },
  ], [getContentData]);

  React.useEffect(() => {
    const firstMenu = MenuItems[0].menuItems[0];
    getContentData(firstMenu.id, firstMenu.path, firstMenu.label);
  }, [getContentData, MenuItems]);

  return (
    <Container>
      <Section size="small">
        <Columns>
          <Columns.Column size={3}>
            <GlobalMenu
              items={MenuItems}
              current={current}
            />
          </Columns.Column>
          <Columns.Column size={9}>
            <WindowBox useButton title={title}>
              <Markdown>{content}</Markdown>
            </WindowBox>
          </Columns.Column>
        </Columns>
      </Section>
    </Container>
  );
}

export default App;
