export interface PostList {
  id: string;
  image: string;
  category: string;
  tag: string;
  title: string;
  description: string;
  date: string;
}

export interface GetPostListsParams {
  limit: number;
  category: string | null;
  page: number;
}
