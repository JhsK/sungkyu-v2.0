import { cva } from "class-variance-authority";
import Footer from "../Footer";
import Header from "../Header";
import { LayoutType } from "../types";

interface ILayoutProps {
  children: React.ReactNode;
  type: LayoutType;
}

function Layout({ children, type = "centered" }: ILayoutProps) {
  return (
    <div className={LayoutContainerVariants({ type })}>
      <Header type={type} />
      <div className={ChildrenContainerVariants({ type })}>{children}</div>
      <Footer />
    </div>
  );
}

const LayoutContainerVariants = cva("flex flex-col", {
  variants: {
    type: {
      spread: "h-screen items-cetner",
      centered:
        "lg:max-w-[1024px] md:max-w-3xl max-w-[calc(100vw-48px)] mx-auto h-screen",
    },
  },
});

const ChildrenContainerVariants = cva("flex-1", {
  variants: {
    type: {
      spread: "",
      centered:
        "lg:max-w-[1024px] md:max-w-3xl max-w-[calc(100vw-48px)] mx-auto",
    },
  },
});

export default Layout;
