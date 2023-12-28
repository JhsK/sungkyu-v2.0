import { Github, Linkedin, Send } from "lucide-react";
import Text from "../ui/text";
import { Button } from "../ui/button";
import Link from "next/link";
import { sns } from "@/constant";

function Footer() {
  return (
    <div className="pt-10 pb-6 flex items-center justify-between">
      <Text
        className="text-zinc-950 text-xs font-light select-none"
        variant="small"
      >
        © 2023. sungkyu all rights reserved.
      </Text>
      <div className="flex items-center gap-0.5">
        <Button className="w-8 h-8" size="icon" variant="ghost">
          <Link href={sns.github} target="_blank">
            <Github className="w-3.5 h-3.5 text-zinc-700" />
          </Link>
        </Button>
        <Button className="w-8 h-8" size="icon" variant="ghost">
          <Link href={sns.linedIn} target="_blank">
            <Linkedin className="w-3.5 h-3.5 text-zinc-700" />
          </Link>
        </Button>
        <Button className="w-8 h-8" size="icon" variant="ghost">
          <Link href={sns.email}>
            <Send className="w-3.5 h-3.5 text-zinc-700" />
          </Link>
        </Button>
      </div>
    </div>
  );
}

export default Footer;
