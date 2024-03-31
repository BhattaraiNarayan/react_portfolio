import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose, AiOutlineHome, AiOutlineProject , AiOutlineMail } from "react-icons/ai";
import { BsPerson } from 'react-icons/bs'
import { GiSkills } from "react-icons/gi";
import { Link } from "react-router-dom";


const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-purple-400 text-black flex items-center justify-between text-center h-16 pb-2">
      {/* Logo */}
      <p className="gradient-text text-xl font-serif font-bold tracking-wider pl-2 text-transparent animate-gradient items-center md:text-5xl md:font-bold md:pl-24">
        <Link to="/react_portfolio/">ナラヤン</Link>
      </p>

      {/* Mobile Menu Toggle */}
      <button onClick={() => setNavOpen(!navOpen)} className="mr-2 md:hidden">
        {navOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
      </button>

      {/* Navigation Links (Desktop) */}
      <ul className="hidden md:flex gap-16 text-xl font-semibold mr-16">
        <li className="flex flex-row gap-1 hover:text-white">
          <AiOutlineHome size={24} />
          <Link
            to="/react_portfolio/home"
            onClick={() => window.scrollTo(0, 0)}
          >
            ホーム
          </Link>
        </li>
        <li className="flex flex-row gap-1 hover:text-white">
          <BsPerson size={24} />
          <Link
            to="/react_portfolio/about"
            onClick={() => window.scrollTo(0, 0)}
          >
            プロフィール
          </Link>
        </li>
        <li className="flex flex-row gap-1 hover:text-white">
          <GiSkills size={24} />
          <Link
            to="/react_portfolio/skills"
            onClick={() => window.scrollTo(0, 0)}
          >
            スキル
          </Link>
        </li>
        <li className="flex flex-row gap-1 hover:text-white">
          <AiOutlineProject size={24} />
          <Link
            to="/react_portfolio/portfolio"
            onClick={() => window.scrollTo(0, 0)}
          >
            プロジェクト
          </Link>
        </li>
        <li className="flex flex-row gap-1  hover:text-white">
          <AiOutlineMail size={22} className="mt-1" />
          <Link
            to="/react_portfolio/contact"
            onClick={() => window.scrollTo(0, 0)}
          >
            お問合せ先
          </Link>
        </li>
      </ul>

      {/* Navigation Links (Mobile) */}
      <div
        className={`absolute top-16 right-0 w-half text-white bg-purple-400  border-4 shadow-2xl font-bold px-2 py-4 text-center transition-all duration-300 ${
          navOpen ? "block" : "hidden"
        }`}
      >
        <ul className="space-y-4">
          <li>
            {/* <a href="#">Home</a> */}
            <Link to="/home" onClick={navOpen} className="hover:text-pink-500">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={navOpen} className="hover:text-pink-500">
              About
            </Link>
          </li>
          <li>
            <Link
              to="/skills"
              onClick={navOpen}
              className="hover:text-pink-500"
            >
              Skills
            </Link>
          </li>
          <li>
            {/* <a href="#">projects</a> */}
            <Link
              to="/portfolio"
              onClick={navOpen}
              className="hover:text-pink-500"
            >
              Projects
            </Link>
          </li>
          <li>
            {/* <a href="#">Contact</a> */}
            <Link
              to="/contact"
              onClick={navOpen}
              className="hover:text-pink-500"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
