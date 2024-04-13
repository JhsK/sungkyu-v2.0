export interface IPostMetaData {
  thumbnail: string;
  category: string;
  title: string;
  summary: string;
  url: string;
  fileName: string;
  date: string;
}

export interface IPost extends IPostMetaData {
  content: string;
}
