import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

type AllPostsData = {
  id: string;
  [key: string]: any;
};

interface GetPostListsParams {
  limit: number;
}

const postsDirectory = path.join(process.cwd(), '/src/posts');

// const findCategoryPost = (category: string) => {
//   const route = category === 'all' ? '/src/posts' : `/src/posts/${category}`;
//   return path.join(process.cwd(), route);
// };

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

export const getPostsList = ({ limit }: GetPostListsParams) => {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData: AllPostsData[] = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '');

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    return {
      id,
      ...matterResult.data,
    };
  });
  // Sort posts by date
  return allPostsData
    .sort((a, b) => {
      if (a.date < b.date) {
        return 1;
      } else {
        return -1;
      }
    })
    .slice(0, limit);
};

export const getPost = async (id: string) => {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);
  // const processedContent = process(matterResult.content);
  // const processedContent = await unified()
  //   .use(remarkParse)
  //   .use(remarkGfm)
  //   .use(remarkRehype)
  //   .use(rehypeStringify)
  //   .use(rehypeHighlight)
  //   // .use(html)
  //   .process(matterResult.content);
  const contentHtml = matterResult.content.toString();

  // Combine the data with the id and contentHtml
  return {
    id,
    contentHtml,
    ...matterResult.data,
  };
};
