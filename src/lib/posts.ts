import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { IPostMetaData } from "@/types/posts";

const postsDirectory = path.join(process.cwd(), "src/posts");

export function getSortedPosts() {
  const fileNames = fs.readdirSync(postsDirectory);
  const posts = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, "");
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    const matterResult = matter(fileContents).data as IPostMetaData;

    return {
      id,
      ...matterResult,
    };
  });

  return posts.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}
