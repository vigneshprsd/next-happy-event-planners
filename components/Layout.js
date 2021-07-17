import TopBar from "./Nav";
import Meta from "./Meta";
import Footer from "./Footer";
import { useEffect, useState } from "react";

const Layout = ({ children }) => {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  const [padding, setPadding] = useState(0);
  useEffect(() => {
    
    let height = document.getElementById("topNavBar").clientHeight;
    if (window.innerWidth > 1400) {
      setPadding(0);
    } else {
      setPadding(height);
    }

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
  },[]);
  return (
    <>
      <Meta />
      <TopBar />
      <div style={{ paddingTop: padding }}>{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
