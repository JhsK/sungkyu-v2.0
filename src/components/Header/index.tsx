import Link from "next/link";
import { Button } from "../ui/button";
import Search from "../ui/search";
import Text from "../ui/text";
import { useState } from "react";
import { useRouter } from "next/router";
import { cn } from "@/libs/utils";
import { cva } from "class-variance-authority";
import { LayoutType } from "../types";

const menus = [
  { name: "Portfolio", href: "/#" },
  { name: "Posts", href: "/posts" },
];

function Header({ type }: { type: LayoutType }) {
  const [searchMode, setSearchMode] = useState(false);
  const { asPath } = useRouter();

  return (
    <div className={HeaderContainerVariants({ type })}>
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
                  asPath === menu.href && "text-black",
                  menu.name === "Portfolio" && "line-through"
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

const HeaderContainerVariants = cva("flex items-center justify-between py-3", {
  variants: {
    type: {
      spread: "px-10",
      centered: "",
    },
  },
});

export default Header;
