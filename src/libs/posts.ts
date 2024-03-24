import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { IPostMetaData } from "@/types/posts";

const postsDirectory = path.join(process.cwd(), "src/posts");

export const getPostsIndexJson: () => Record<string, string> = () => {
  const indexFilePath = path.join(process.cwd(), "src/libs/index.json");
  const index = JSON.parse(fs.readFileSync(indexFilePath, "utf8"));

  return index;
};

export function getSortedPosts({
  size,
  page,
  category,
}: {
  size: number;
  page: number;
  category?: string;
}) {
  const fileNames = fs.readdirSync(postsDirectory);
  let posts = fileNames
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

  if (category && category !== "All") {
    posts = posts.filter((post) => post.category === category);
  }

  const startIndex = (page - 1) * size;
  const endIndex = startIndex + size;

  return {
    posts: posts.slice(startIndex, endIndex),
    totalCount: posts.length,
  };
}

export function getPostsTitles() {
  const fileNames = fs.readdirSync(postsDirectory);

  return fileNames.map((fileName) => {
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const matterResult = matter(fileContents).data as IPostMetaData;

    return {
      params: {
        title: matterResult.title,
      },
    };
  });
}

export async function getPost(title: string) {
  const index = getPostsIndexJson();
  const fullPath = path.join(postsDirectory, `${index[title]}.md`);
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
