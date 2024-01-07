import { Button } from "@/components/ui/button";

interface ICategoriesProps {
  categories: string[];
}

function Categories({ categories }: ICategoriesProps) {
  return (
    <div className="flex items-center gap-4 sm:mb-10 mb-6">
      {categories.map((category) => (
        <Button key={category} variant="outline" className="rounded-3xl">
          {category}
        </Button>
      ))}
    </div>
  );
}

export default Categories;
