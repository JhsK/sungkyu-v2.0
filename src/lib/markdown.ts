import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { AllPostsData, GetPostListsParams } from './type';

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

export const getPostsList = ({ limit, category }: GetPostListsParams) => {
  // const fileNamesObj = fileNames(directory);
  const fileNames = limit
    ? fs.readdirSync(postsDirectory).slice(0, limit)
    : fs.readdirSync(postsDirectory);
  const allPostsData: AllPostsData[] = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, '');
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);

    return {
      id,
      ...matterResult.data,
    };
  });

  if (category === 'all') {
    return allPostsData.reverse();
  } else {
    return allPostsData.filter((post) => post.category === category).reverse();
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
