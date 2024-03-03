import Footer from "../Footer";
import Header from "../Header";

interface ILayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: ILayoutProps) {
  return (
    <div className="lg:max-w-[1024px] md:max-w-3xl max-w-[calc(100vw-48px)] mx-auto h-screen flex flex-col">
      <Header />
      <div className="flex-1">{children}</div>
      <Footer />
    </div>
  );
}

export default Layout;
