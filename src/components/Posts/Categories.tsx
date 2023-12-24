import { Button } from "@/components/ui/button";

interface ICategoriesProps {
  categories: string[];
}

function Categories({ categories }: ICategoriesProps) {
  return (
    <div className="flex items-center gap-4 mb-10">
      {categories.map((category) => (
        <Button key={category} variant="outline" className="rounded-3xl">
          {category}
        </Button>
      ))}
    </div>
  );
}

export default Categories;
