import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { getSortedPosts } from "../posts";

jest.mock("fs");
jest.mock("path");
jest.mock("gray-matter", () => ({
  __esModule: true,
  default: jest.fn().mockImplementation(() => ({
    content:
      "\n" +
      "Next.js has two forms of pre-rendering: **Static Generation** and **Server-side Rendering**. The difference is in **when** it generates the HTML for a page.\n" +
      "\n" +
      "- **Static Generation** is the pre-rendering method that generates the HTML at **build time**. The pre-rendered HTML is then _reused_ on each request.\n" +
      "- **Server-side Rendering** is the pre-rendering method that generates the HTML on **each request**.\n" +
      "\n" +
      'Importantly, Next.js lets you **choose** which pre-rendering form to use for each page. You can create a "hybrid" Next.js app by using Static Generation for most pages and using Server-side Rendering for others.\n',
    data: {
      category: "React",
      title: "Two Forms of Pre-rendering",
      fileName: "first",
      date: "2020.01.01",
    },
    isEmpty: false,
    excerpt: "",
  })),
}));

describe("getSortedPosts 함수 테스트", () => {
  beforeAll(() => {
    (path.join as jest.Mock).mockImplementation((...args) =>
      args.join("/src/posts")
    );
    (fs.readdirSync as jest.Mock).mockReturnValue(["first.md", "second.md"]);
    (fs.readFileSync as jest.Mock).mockReturnValue(`---
    category: "React"
    title: "Two Forms of Pre-rendering"
    fileName: "first"
    date: "2020.01.01"
    ---
    
    Next.js has two forms of pre-rendering: **Static Generation** and **Server-side Rendering**. The difference is in **when** it generates the HTML for a page.
    
    - **Static Generation** is the pre-rendering method that generates the HTML at **build time**. The pre-rendered HTML is then _reused_ on each request.
    - **Server-side Rendering** is the pre-rendering method that generates the HTML on **each request**.
    
    Importantly, Next.js lets you **choose** which pre-rendering form to use for each page. You can create a "hybrid" Next.js app by using Static Generation for most pages and using Server-side Rendering for others.`);
  });

  it("src/posts에 담긴 md 파일의 정보와 총 개수를 반환한다.", () => {
    expect(getSortedPosts(2, 1)).toEqual({
      posts: [
        {
          id: "second",
          category: "React",
          title: "Two Forms of Pre-rendering",
          fileName: "first",
          date: "2020.01.01",
        },
        {
          id: "first",
          category: "React",
          title: "Two Forms of Pre-rendering",
          fileName: "first",
          date: "2020.01.01",
        },
      ],
      totalCount: 2,
    });
  });

  it("src/posts에 담긴 md 파일을 원하는 개수만큼만 최근 날짜 기준으로 정보를 반환한다", () => {
    expect(getSortedPosts(1, 1)).toEqual({
      posts: [
        {
          id: "second",
          category: "React",
          title: "Two Forms of Pre-rendering",
          fileName: "first",
          date: "2020.01.01",
        },
      ],
      totalCount: 2,
    });
  });

  it("src/posts에 담긴 md 파일을 원하는 페이지에 따라 정보를 반환한다", () => {
    expect(getSortedPosts(1, 2)).toEqual({
      posts: [
        {
          id: "first",
          category: "React",
          title: "Two Forms of Pre-rendering",
          fileName: "first",
          date: "2020.01.01",
        },
      ],
      totalCount: 2,
    });
  });
});
