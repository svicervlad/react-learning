import React from 'react';
import { Menu, Panel } from 'react-bulma-components';

type GlobalMenuProps = {
  items: Array<string>;
};

export function GlobalMenu({
  items,
}: GlobalMenuProps): JSX.Element {
  return (
    <Panel>
      <Panel.Header>
        General
      </Panel.Header>
      <Panel.Block>
        <Menu>
          <Menu.List>
            {items.map((item: string): JSX.Element => (
              <Menu.List.Item key={item}>{ item }</Menu.List.Item>
            ))}
          </Menu.List>
        </Menu>
      </Panel.Block>
    </Panel>
  );
}
