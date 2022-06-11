import React from 'react';

type Props = {
  title: string;
  children: JSX.Element;
};

function CodeView({ title, children }: Props): JSX.Element {
  return (
    <>
      <h3>{ title }</h3>
      <div>{ children }</div>
    </>
  );
}

export default CodeView;
