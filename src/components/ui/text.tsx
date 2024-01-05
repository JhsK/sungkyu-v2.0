import { HTMLAttributes } from "react";

interface ITextProps extends HTMLAttributes<HTMLElement> {
  variant: "h1" | "h2" | "h3" | "h4" | "p" | "large" | "small";
  children: React.ReactNode;
}

const variantStyle = {
  h1: "text-4xl font-extrabold tracking-tight lg:text-5xl",
  h2: "pb-2 text-3xl font-semibold tracking-tight",
  h3: "text-2xl font-semibold tracking-tight",
  h4: "text-xl font-semibold tracking-tight",
  p: "leading-7",
  div: "text-lg font-semibold",
  small: "text-sm font-medium leading-none",
};

function Text({ variant, children, className, ...props }: ITextProps) {
  const Element = variant === "large" ? "div" : variant;

  return (
    <Element
      {...props}
      className={`${variantStyle[Element]} ${className || ""}`}
    >
      {children}
    </Element>
  );
}

export default Text;
