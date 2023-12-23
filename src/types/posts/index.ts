export interface IPostMetaData {
  category: string;
  title: string;
  fileName: string;
  date: string;
}

export interface IPost extends IPostMetaData {
  content: string;
}
