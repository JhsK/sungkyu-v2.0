import { Github, Linkedin, Send } from "lucide-react";
import Text from "../ui/text";
import { Button } from "../ui/button";
import Link from "next/link";
import { SNS } from "@/constant";

function Footer() {
  return (
    <div className="pt-10 pb-6 flex items-center justify-between">
      <Text
        className="text-zinc-950 text-xs font-light select-none"
        variant="small"
      >
        © 2024. sungkyu all rights reserved.
      </Text>
      <div className="flex items-center gap-0.5">
        <Link href={SNS.github} target="_blank">
          <Button className="w-8 h-8" size="icon" variant="ghost">
            <Github className="w-3.5 h-3.5 text-zinc-700" />
          </Button>
        </Link>
        <Link href={SNS.linedIn} target="_blank">
          <Button className="w-8 h-8" size="icon" variant="ghost">
            <Linkedin className="w-3.5 h-3.5 text-zinc-700" />
          </Button>
        </Link>
        <Link href={SNS.email}>
          <Button className="w-8 h-8" size="icon" variant="ghost">
            <Send className="w-3.5 h-3.5 text-zinc-700" />
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Footer;
