import { getPost, getPostsIds } from '@/lib/markdown';
import React from 'react';

// const fetchPostsList = async () => {
//   const postIds = await getPostsIds();
//   return postIds;
// };

const PostDetail = async ({ params }: { params: { slug: string } }) => {
  const post = await getPost(params.slug);
  console.log(post);
  return <div>test</div>;
};

export default PostDetail;
