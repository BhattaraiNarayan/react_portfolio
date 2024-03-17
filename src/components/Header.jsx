import { Link } from "react-router-dom";

const Header=()=>{
return (
  <div className="flex justify-between bg-red-500 h-40">
    <li className="bg-white-500">
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/about">About</Link>
    </li>
    <li>
      <Link to="/portfolio">Portfolio</Link>
    </li>
    <li>
      <Link to="/contact">Contact</Link>
    </li>
  </div>
)}
export default Header;