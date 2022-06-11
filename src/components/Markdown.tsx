/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { solarizedDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

type Props = {
  children: string;
};

/**
 * Override ReactMarkdown dor use react-syntax-highlighter
 */
function Markdown({ children }: Props): JSX.Element {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        h1: ({ node, ...props }) => <h1 className="title is-1" {...props} />,
        h2: ({ node, ...props }) => <h2 className="title is-2" {...props} />,
        h3: ({ node, ...props }) => <h3 className="title is-3" {...props} />,
        h4: ({ node, ...props }) => <h4 className="title is-4" {...props} />,
        h5: ({ node, ...props }) => <h5 className="title is-5" {...props} />,
        h6: ({ node, ...props }) => <h6 className="title is-6" {...props} />,
        table: ({ node, ...props }) => <table className="table" {...props} />,
        // eslint-disable-next-line react/no-unstable-nested-components
        code({
          node, inline, className, children, ...props
        }) {
          const match = /language-(\w+)/.exec(className || '');
          return !inline && match ? (
            <SyntaxHighlighter
              // eslint-disable-next-line max-len
              // TS issue https://github.com/react-syntax-highlighter/react-syntax-highlighter/issues/439
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              style={solarizedDark as any}
              language={match[1]}
              showLineNumbers
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
