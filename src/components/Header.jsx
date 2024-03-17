import { Link } from "react-router-dom";

const Header=()=>{
return (
  <div className="flex justify-between bg-red-500 h-40">
    <li className="bg-white-500">
      <Link to="/react_portfolio/">Home</Link>
    </li>
    <li>
      <Link to="/react_portfolio/about">About</Link>
    </li>
    <li>
      <Link to="/react_portfolio/portfolio">Portfolio</Link>
    </li>
    <li>
      <Link to="/react_portfolio/contact">Contact</Link>
    </li>
  </div>
);}
export default Header;