import { useEffect } from "react";
import { useLocation, Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./index.css";

const App = () => {

  // for smart scroll behavior to top while navigating the page
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  // for loading the page while refreshing
 useEffect(() => {
   window.onbeforeunload = function () {
     window.scrollTo(0, 0);
   };
 }, []);

  return (
    <div className="top-0 left-0 bg-pink-200 border-none">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};
export default App;
