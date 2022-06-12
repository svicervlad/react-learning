import React from 'react';
import { Box, Menu } from 'react-bulma-components';

export type MenuItem = {
  id: number;
  label: string;
  path: string,
  action: (
    id:number,
    path: string,
    windowTitle: string
  ) => void;
}

type ParrentMenu = {
  id: number;
  label: string;
  menuItems: Array<MenuItem>;
}

export type GlobalMenuType = Array<ParrentMenu>;

type GlobalMenuProps = {
  items: GlobalMenuType;
  current: number,
};

export function GlobalMenu({
  items,
  current,
}: GlobalMenuProps): JSX.Element {
  return (
    <Box>
      {items.map((item: ParrentMenu) => (
        <Menu key={item.label}>
          <Menu.List title={item.label}>
            {item.menuItems.map((menuItem: MenuItem): JSX.Element => (
              <Menu.List.Item
                active={current === menuItem.id}
                onClick={() => menuItem.action(
                  menuItem.id,
                  menuItem.path,
                  menuItem.label,
                )}
                key={menuItem.label}
              >
                { menuItem.label }
              </Menu.List.Item>
            ))}
          </Menu.List>
        </Menu>
      ))}
    </Box>
  );
}
