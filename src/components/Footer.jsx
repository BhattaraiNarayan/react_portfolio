import { AiOutlineLinkedin, AiOutlineGithub,AiOutlineInstagram } from "react-icons/ai";
import { CgWebsite } from "react-icons/cg";


const Footer=()=>{
    return (
      <footer className="flex bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300">
        <div className=" flex text-black text-lg justify-center items-center w-full  h-16 md:font-semibold">
          <h5>&copy; 2024 Design and Code by Bhattarai Narayan ✨ナラヤン✨</h5>
        </div>
        <div className=" flex items-center text-lg justify-end gap-1 md:gap-4 md:mr-4">
          <a
            href="https://www.bhattarainarayan.com/"
            alt="Bhattarai Narayan's website link"
            target="_blank"
            className="hover:text-white"
            >
          <CgWebsite size={36} />
          </a>
          <a
            href="https://www.instagram.com/narayan.bhattarai.50596/"
            alt="instagram link"
            target="_blank"
            className="hover:text-white"
          >
            <AiOutlineInstagram size={36} />
          </a>
          <a
            href="https://www.linkedin.com/in/narayan-bhattarai-07a5a2178/"
            alt="linkedin link"
            target="_blank"
            className="hover:text-white"
          >
            <AiOutlineLinkedin size={36} />
          </a>
          <a
            href="https://github.com/BhattaraiNarayan"
            alt="github link"
            target="_blank"
            className="hover:text-white"
          >
            <AiOutlineGithub size={36} />
          </a>
        </div>
      </footer>
    );
}
export default Footer;