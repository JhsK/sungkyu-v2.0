import Footer from "../Footer";
import Header from "../Header";

interface ILayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: ILayoutProps) {
  return (
    <div className="max-w-3xl mx-auto">
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
