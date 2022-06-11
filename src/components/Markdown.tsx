/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import ReactMarkdown from 'react-markdown';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

type Props = {
  children: string;
};

/**
 * Override ReactMarkdown dor use react-syntax-highlighter
 */
function Markdown({ children }: Props): JSX.Element {
  return (
    <ReactMarkdown
      components={{
        // eslint-disable-next-line react/no-unstable-nested-components
        code({
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          node, inline, className, children, ...props
        }) {
          const match = /language-(\w+)/.exec(className || '');
          return !inline && match ? (
            <SyntaxHighlighter
              // eslint-disable-next-line max-len
              // TS issue https://github.com/react-syntax-highlighter/react-syntax-highlighter/issues/439
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              style={dark as any}
              language={match[1]}
              PreTag="div"
              useInlineStyles
              {...props}
            >
              {String(children).replace(/\n$/, '')}

            </SyntaxHighlighter>
          ) : (
            <code className={className} {...props}>
              {children}
            </code>
          );
        },
      }}
    >
      {children}

    </ReactMarkdown>
  );
}

export default Markdown;
