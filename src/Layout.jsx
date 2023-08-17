import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <main className="main">
      <Header/>
      <Outlet />
      <Footer/>
    </main>
  );
};

export default Layout;
