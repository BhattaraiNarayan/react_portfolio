import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./index.css";

const App = () => {
  return (
    <div className="w-full h-screen top-0 left-0">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};
export default App;
