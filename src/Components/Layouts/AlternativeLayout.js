import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";

const AlternativeLayout = () => {
  return (
    <>
    <Outlet />
    <Footer />
    </>
  )
};

export default AlternativeLayout;