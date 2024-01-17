import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

const ScrollToTopCmp = () => {
  // Extracts pathname property(key) from an object
  const { pathname } = useLocation();

  // Automatically scrolls to top whenever pathname changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return <Outlet />;
};

export default ScrollToTopCmp;
