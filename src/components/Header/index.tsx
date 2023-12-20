import { Search } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";

const menus = [
  { name: "About", href: "/about" },
  { name: "Posts", href: "/posts" },
];

function Header() {
  return (
    <div className="flex items-center justify-between py-3">
      <Link href={"/"} className="text-2xl font-semibold tracking-tight">
        Sungkyu
      </Link>
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
        <Button size="icon" variant="ghost">
          <Search />
        </Button>
      </div>
    </div>
  );
}

export default Header;
