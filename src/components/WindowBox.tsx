import React from 'react';
import {
  Box, Media,
} from 'react-bulma-components';
import './sass/window_box.sass';

type WindowBoxProps = {
  title?: string;
  children: JSX.Element;
  useButton?: boolean,
};

type WindowButtonsProps = {
  title?: string;
  useButton?: boolean,
};

export function WindowButtons({
  title, useButton,
}: WindowButtonsProps): JSX.Element|null {
  if (!useButton) {
    return null;
  }
  return (
    <Media renderAs="article">
      { useButton && (
      <Media.Item align="left">
        <span className="window danger" />
        <span className="window warning" />
        <span className="window success" />
      </Media.Item>
      )}
      {title && title?.length > 0 && (
      <Media.Item align="center" textAlign="center">{title}</Media.Item>
      )}
    </Media>
  );
}

export function WindowBox({
  title, children, useButton,
}: WindowBoxProps): JSX.Element {
  return (
    <Box>
      <WindowButtons title={title} useButton={useButton} />
      <div>{ children }</div>
    </Box>
  );
}

WindowBox.defaultProps = {
  title: '',
  useButton: false,
};

WindowButtons.defaultProps = {
  title: '',
  useButton: false,
};

export default WindowBox;
