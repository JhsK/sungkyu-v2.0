interface ILayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: ILayoutProps) {
  return <div className="max-w-3xl mx-auto">{children}</div>;
}

export default Layout;
