import { cn } from "@/libs/utils";
import { cva } from "class-variance-authority";
import { HTMLAttributes } from "react";

interface ITextProps extends HTMLAttributes<HTMLElement> {
  variant: "h1" | "h2" | "h3" | "h4" | "p" | "large" | "small";
  children: React.ReactNode;
}

const variantStyle = cva("", {
  variants: {
    Element: {
      h1: "sm:text-4xl text-2xl font-extrabold tracking-tight lg:text-5xl",
      h2: "pb-2 sm:text-3xl text-xl font-semibold tracking-tight",
      h3: "sm:text-2xl text-lg font-semibold tracking-tight",
      h4: "sm:text-xl text-base font-semibold tracking-tight",
      p: "leading-7 sm:text-base text-sm",
      div: "sm:text-lg text-base font-semibold",
      small: "sm:text-sm text-xs font-medium leading-none",
    },
  },
});

function Text({ variant, children, className, ...props }: ITextProps) {
  const Element = variant === "large" ? "div" : variant;

  return (
    <Element {...props} className={cn(variantStyle({ Element }), className)}>
      {children}
    </Element>
  );
}

export default Text;
