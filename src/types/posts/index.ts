export interface IPostMetaData {
  category: string;
  title: string;
  summary: string;
  fileName: string;
  date: string;
}

export interface IPost extends IPostMetaData {
  content: string;
}
