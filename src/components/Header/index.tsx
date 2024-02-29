import Link from "next/link";
import { Button } from "../ui/button";
import Search from "../ui/search";
import Text from "../ui/text";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { cn } from "@/libs/utils";

const menus = [
  { name: "Portfolio", href: "/portfolio" },
  { name: "Posts", href: "/posts" },
];

function Header() {
  const [searchMode, setSearchMode] = useState(false);
  const [titleList, setTitleList] = useState<string[]>([]);
  const { asPath } = useRouter();

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
      <Link
        href={"/"}
        className="sm:text-2xl text-lg font-semibold tracking-tight"
      >
        Sungkyu
      </Link>
      {searchMode && <Search />}
      <div className="flex items-center gap-2">
        {menus.map((menu) => (
          <Link key={menu.name} href={menu.href}>
            <Button size="icon" variant="ghost" className="w-fit px-2.5 py-2">
              <Text
                variant="p"
                className={cn(
                  "text-gray-500 font-normal",
                  asPath === menu.href && "text-black"
                )}
              >
                {menu.name}
              </Text>
            </Button>
          </Link>
        ))}
        {/* 추후 게시글이 많아지면 검색 기능 주석 제거
        <Button size="icon" variant="ghost" onClick={() => setSearchMode(true)}>
          <SearchIcon />
        </Button> */}
      </div>
    </div>
  );
}

export default Header;
