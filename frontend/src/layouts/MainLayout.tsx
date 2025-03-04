import Navbar from "@/components/features/marginals/Navbar";
import Footer from "@/components/features/marginals/Footer";
import { Outlet } from "react-router-dom";

const MainLayout = () => (
  <>
    <Navbar />
    <Outlet />
    <Footer />
  </>
);

export default MainLayout;
