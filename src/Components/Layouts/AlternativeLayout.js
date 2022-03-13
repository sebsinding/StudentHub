import Login from "../../Pages/Login";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";

const AlternativeLayout = () => {
  return (

    <>
    <Outlet />
    <Login />
    <Footer />
    </>
  )
};

export default AlternativeLayout;