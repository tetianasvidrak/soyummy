import { Outlet } from "react-router-dom";

import Header from "../Header";
import Footer from "../Footer";

const SharedLayout = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen dark:bg-darkMode transition-all duration-500 delay-75">
        <Header />
        <main className="relative flex-grow">
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default SharedLayout;
