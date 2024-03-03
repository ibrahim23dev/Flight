import { useEffect, useState } from 'react';
import Header from "./Header";
import Footer from "./Footer";

import { Outlet } from "react-router-dom";
function layout() {
  const current_them = localStorage.getItem("current_them");
  const [theme, SetTheme] = useState(current_them ? current_them : "light");

  useEffect(() => {
    localStorage.setItem("current_them", theme);
  }, [theme]);
  return (
    <div>
      <div className={`container ${theme}`}>
        <Header theme={theme} SetTheme={SetTheme} />
      </div>
      <Outlet />
      <Footer />
    </div>
  );
}

export default layout;
