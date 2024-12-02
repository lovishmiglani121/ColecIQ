import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import TableMainPage from "./tableMainPage";

const MainPage = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.app.user);

  useEffect(() => {
    if (!user) {
      navigate("/login"); // Redirect to login if the user is not logged in
    }
  }, [user, navigate]);

  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Navbar />
        <TableMainPage />
        <Footer />
      </div>
    </>
  );
};

export default MainPage;
