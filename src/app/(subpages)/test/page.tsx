'use client';
import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import { getPostBySlug } from '@/lib/markdown';

const Test = () => {
  return (
    <MDXProvider>
      <span>test</span>
    </MDXProvider>
  );
};

const getData = async (slug: string) => {
  const mdxSource = await getPostBySlug(category.dev, slug);

  return mdxSource;
};

export default Test;
