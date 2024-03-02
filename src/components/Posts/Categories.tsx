import { Button } from "@/components/ui/button";
import { cn } from "@/libs/utils";
import Link from "next/link";
import useCategory from "./hooks/useCategory";

interface ICategoriesProps {
  categories: string[];
}

function Categories({ categories }: ICategoriesProps) {
  const currentCategory = useCategory({ categories });

  return (
    <div className="flex items-center gap-4 mt-6 sm:mb-10 mb-6">
      {["All", ...categories].map((category) => (
        <Link href={`?category=${category}`} key={category}>
          <Button
            variant="outline"
            className={cn(
              "rounded-3xl text-gray-500",
              category === currentCategory && "text-black"
            )}
          >
            {category}
          </Button>
        </Link>
      ))}
    </div>
  );
}

export default Categories;
