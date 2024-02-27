import { Button } from "@/components/ui/button";

interface ICategoriesProps {
  categories: string[];
}

function Categories({ categories }: ICategoriesProps) {
  return (
    <div className="flex items-center gap-4 mt-6 sm:mb-10 mb-6">
      <Button variant="outline" className="rounded-3xl text-gray-500">
        All
      </Button>
      {categories.map((category) => (
        <Button
          key={category}
          variant="outline"
          className="rounded-3xl text-gray-500"
        >
          {category}
        </Button>
      ))}
    </div>
  );
}

export default Categories;
