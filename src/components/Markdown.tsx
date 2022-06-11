/* eslint-disable max-len */
/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/prism';

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
      rehypePlugins={[rehypeRaw]}
      className="content"
      components={{
        h1: ({ node, ...props }) => <h1 className="title is-1 is-spaced mt-5" {...props} />,
        h2: ({ node, ...props }) => <h2 className="title is-2 is-spaced mt-5" {...props} />,
        h3: ({ node, ...props }) => <h3 className="title is-3 is-spaced" {...props} />,
        h4: ({ node, ...props }) => <h4 className="title is-4 is-spaced" {...props} />,
        h5: ({ node, ...props }) => <h5 className="title is-5 is-spaced" {...props} />,
        h6: ({ node, ...props }) => <h6 className="title is-6 is-spaced" {...props} />,
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
              style={dracula as any}
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
