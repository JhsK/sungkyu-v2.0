import { Search as SearchIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import Search from "../ui/search";
import { useEffect, useState } from "react";

const menus = [
  { name: "About", href: "/about" },
  { name: "Posts", href: "/posts" },
];

function Header() {
  const [searchMode, setSearchMode] = useState(false);
  const [titleList, setTitleList] = useState<string[]>([]);

  const fetchPostsTitle = async () => {
    const response = await fetch("/api/posts");
    const { titles } = await response.json();

    if (titles) {
      setTitleList([...titleList]);
    }
  };

  useEffect(() => {
    fetchPostsTitle();
  }, []);

  return (
    <div className="flex items-center justify-between py-3">
      <Link href={"/"} className="text-2xl font-semibold tracking-tight">
        Sungkyu
      </Link>
      {searchMode && <Search />}
      <div className="flex items-center gap-4">
        {menus.map((menu) => (
          <Link
            key={menu.name}
            href={menu.href}
            className="text-xl font-semibold tracking-tight"
          >
            {menu.name}
          </Link>
        ))}
        <Button size="icon" variant="ghost" onClick={() => setSearchMode(true)}>
          <SearchIcon />
        </Button>
      </div>
    </div>
  );
}

export default Header;
