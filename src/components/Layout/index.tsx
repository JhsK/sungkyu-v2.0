import { cva } from "class-variance-authority";
import Footer from "../Footer";
import Header from "../Header";

interface ILayoutProps {
  children: React.ReactNode;
  type: "spread" | "centered";
}

function Layout({ children, type = "centered" }: ILayoutProps) {
  return (
    <div className={LayoutVariants({ type })}>
      <Header />
      <div className="flex-1 lg:max-w-[1024px] md:max-w-3xl max-w-[calc(100vw-48px)] mx-auto">
        {children}
      </div>
      <Footer />
    </div>
  );
}

const LayoutVariants = cva("", {
  variants: {
    type: {
      spread: "h-screen flex flex-col items-cetner px-10",
      centered:
        "lg:max-w-[1024px] md:max-w-3xl max-w-[calc(100vw-48px)] mx-auto h-screen flex flex-col",
    },
  },
});

export default Layout;
