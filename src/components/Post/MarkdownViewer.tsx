'use client';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import slug from 'remark-slug';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

interface MarkdownViewerProps {
  post: string;
}

const MarkdownViewer = ({ post }: MarkdownViewerProps) => {
  return (
    <>
      <ReactMarkdown
        children={post}
        remarkPlugins={[remarkGfm, slug]}
        components={{
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || '');
            return !inline && match ? (
              <SyntaxHighlighter
                {...props}
                children={String(children).replace(/\n$/, '')}
                style={undefined}
                language={match[1]}
                PreTag="div"
              />
            ) : (
              <code {...props} className={className}>
                {children}
              </code>
            );
          },
        }}
      />
    </>
  );
};

export default MarkdownViewer;
