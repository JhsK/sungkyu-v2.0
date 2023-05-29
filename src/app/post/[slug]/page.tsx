import { getPost } from '@/lib/markdown';
import { PostDetail } from '@/types';
import React from 'react';

// const fetchPostsList = async () => {
//   const postIds = await getPostsIds();
//   return postIds;
// };

const PostDetail = async ({ params }: { params: { slug: string } }) => {
  const post: PostDetail = await getPost(params.slug);

  return (
    <div className="px-4 flex flex-col gap-4">
      <div>
        <h1 className="text-2xl mb-1">{post.title}</h1>
        <span className="text-sm text-neutral-400">{post.date}</span>
      </div>
      <div dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
    </div>
  );
};

export default PostDetail;
