import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { GetPostListsParams, PostList } from './type';

const postsDirectory = path.join(process.cwd(), '/src/posts');

const fileNames = (file: string) => {
  const route = path.join(process.cwd(), `/src/posts/${file}`);
  return {
    route,
    fileNames: fs.readdirSync(route),
  };
};

export const getPostsIds = () => {
  const fileNames = fs.readdirSync(postsDirectory);

  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ''),
      },
    };
  });
};

export const getPostsList = ({ limit, category, page }: GetPostListsParams) => {
  const fileNames = fs.readdirSync(postsDirectory);
  const totalCount = fileNames.length;
  const offset = (page - 1) * limit;
  const arrange = limit * page;

  const postList = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, '');
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);
    const list = { id, ...matterResult.data } as PostList;

    return list;
  });

  if (category && category !== 'all') {
    return {
      posts: postList
        .filter((post) => post.category === category)
        .reverse()
        .slice(offset, arrange),
      totalCount,
    };
  } else {
    return {
      posts: postList.reverse().slice(offset, arrange),
      totalCount,
    };
  }
};

export const getCategoryPostList = (directory: string) => {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames;
};

export const getPost = async (id: string) => {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);
  const contentHtml = matterResult.content.toString();

  return {
    id,
    contentHtml,
    ...matterResult.data,
  };
};

export const getCategory = () => {
  const fileNames = fs.readdirSync(postsDirectory);
  const categoryArray = ['all'];

  fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, '');
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const parseCategory = matter(fileContents)?.data?.category;

    if (parseCategory && !categoryArray.includes(parseCategory)) {
      categoryArray.push(parseCategory);
    }
  });

  return categoryArray;
};
