import LoginPage from "../../Pages/Login/LoginPage";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";

const AlternativeLayout = () => {
  return (

    <>
    <Outlet />
    <LoginPage />
    <Footer />
    </>
  )
};

export default AlternativeLayout;