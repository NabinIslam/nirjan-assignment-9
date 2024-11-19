import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import FooterComponent from "../components/Footer";

const Root = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Outlet />
      <FooterComponent />
    </div>
  );
};

export default Root;
