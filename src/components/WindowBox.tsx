import React from 'react';
import {
  Box, Media,
} from 'react-bulma-components';
import './sass/window_box.sass';

type Props = {
  title?: string;
  children: JSX.Element;
  useButton?: boolean,
};

function WindowBox({ title, children, useButton }: Props): JSX.Element {
  return (
    <Box>
      <Media renderAs="article">
        { useButton ? (
          <Media.Item align="left">
            <span className="window danger" />
            <span className="window warning" />
            <span className="window success" />
          </Media.Item>
        )
          : null}
        {title && title?.length > 0 ? (
          <Media.Item align="center" textAlign="center">{title}</Media.Item>
        )
          : null}

      </Media>

      <div>{ children }</div>
    </Box>
  );
}

WindowBox.defaultProps = {
  title: '',
  useButton: false,
};

export default WindowBox;
