import Footer from "../Footer";
import Header from "../Header";

interface ILayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: ILayoutProps) {
  return (
    <div className="md:max-w-[1024px] max-w-xl sm:mx-auto sm:px-0 px-4">
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
