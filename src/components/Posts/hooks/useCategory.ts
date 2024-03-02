import { useRouter } from "next/router";

interface IUseCategoryProps {
  categories: string[];
}

function useCategory({ categories }: IUseCategoryProps) {
  const { query } = useRouter();
  const category = query.category as string;
  const currentCategory =
    categories.indexOf(category) === -1
      ? "All"
      : categories[categories.indexOf(category)];

  return currentCategory;
}

export default useCategory;
