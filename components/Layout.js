import TopBar from "./Nav";
import Meta from "./Meta";
import Footer from "./Footer";
import { useEffect, useState } from "react";

const Layout = ({ children }) => {
  
  useEffect(() => {
    let width = window.innerWidth;
    window.addEventListener("resize", function () {
      if (window.innerWidth !== width) {
        width = window.innerWidth;
        window.scroll({
          top: 0,
          left: 0,
          behavior: "smooth",
        });
      }
    });
  }, []);
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
