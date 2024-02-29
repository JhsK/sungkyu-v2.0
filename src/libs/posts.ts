import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { IPostMetaData } from "@/types/posts";

const postsDirectory = path.join(process.cwd(), "src/posts");

export function getSortedPosts(size: number, page: number) {
  const fileNames = fs.readdirSync(postsDirectory);
  const posts = fileNames
    .map((fileName) => {
      const id = fileName.replace(/\.md$/, "");
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const matterResult = matter(fileContents).data as IPostMetaData;

      return {
        id,
        ...matterResult,
      };
    })
    .sort((a, b) => {
      if (a.date < b.date) {
        return 1;
      } else {
        return -1;
      }
    });

  const startIndex = (page - 1) * size;
  const endIndex = startIndex + size;

  return {
    posts: posts.slice(startIndex, endIndex),
    totalCount: posts.length,
  };
}

export function getPostsFileName() {
  const fileNames = fs.readdirSync(postsDirectory);

  return fileNames.map((fileName) => {
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const matterResult = matter(fileContents).data as IPostMetaData;

    return {
      params: {
        fileName: matterResult.fileName,
      },
    };
  });
}

export async function getPost(fileName: string) {
  const fullPath = path.join(postsDirectory, `${fileName}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  const matterResult = matter(fileContents);
  const metaData = matterResult.data as IPostMetaData;
  const content = matterResult.content;

  return {
    content,
    ...metaData,
  };
}

export function getPostsTitle() {
  const fileNames = fs.readdirSync(postsDirectory);
  const titles = fileNames.map((fileName) => {
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const matterResult = matter(fileContents).data as IPostMetaData;

    return matterResult.title;
  });

  return titles;
}

export function getAllCategories() {
  const fileNames = fs.readdirSync(postsDirectory);
  const allCategories = fileNames.map((fileName) => {
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    const matterResult = matter(fileContents).data as IPostMetaData;

    return matterResult.category;
  });

  return [...new Set(allCategories)];
}
