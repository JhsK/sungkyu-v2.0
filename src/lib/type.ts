import { CategoryType } from '@/types';

export type AllPostsData = {
  id: string;
  [key: string]: any;
};

export interface GetPostListsParams {
  limit?: number;
  category: CategoryType;
}
