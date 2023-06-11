export interface PostDetail {
  id: string;
  contentHtml: string;
  [key: string]: string;
}

export type CategoryType = 'all' | 'develop' | 'design';
