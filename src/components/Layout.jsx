import { Outlet, } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";


const Layout = () => {
  return (
    <div className="container mx-auto">
      <Navbar />
     <div>
      <Outlet />
      </div><br></br>
      <Footer />
    </div>
  )
};

export default Layout;