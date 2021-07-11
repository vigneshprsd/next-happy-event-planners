import TopBar from "./Nav";
import Meta from "./Meta";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      <TopBar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
