import myImage  from '../utils/assets/narayan.jpg';
import { TypeAnimation } from 'react-type-animation';


const Body=()=>{
    return (
      <div className="gradient-page bg-white md:pl-16  md:mr-16 md:pl-24">
        <div className="flex flex-row justify-between m-0 bg-[url(myImage)]">
          <div className=" py-56  pl-2 md:pl-24 text-black font-bold">
            <h1 className="text-transparent gradient-head text-5xl font-bold pb-4">
              I&apos;m Narayan Bhattarai
            </h1>
            <div className="text-3xl font-medium pb-4">
              <h3>Web Designer</h3>
              <h3>Web Developer</h3>
              <h3>Tech Enthusiast</h3>
            </div>

            <TypeAnimation
              sequence={["Owns Skills @", 2000]}
              className="text-5xl font-bold text-transparent gradient-header"
              repeat={Infinity}
            />
            <br />
            <br />
            <br />
            <TypeAnimation
              sequence={[
                "Html5",
                1000,
                "Css3",
                1000,
                "Javascript",
                1000,
                "React",
                1000,
                "NextJS",
                1000,
                "Tailwind Css",
                1000,
              ]}
              className="text-3xl font-bold text-black"
              repeat={Infinity}
            />
          </div>
          <div className="py-5">
            <img
              src={myImage}
              alt="Narayan Bhattarai"
              className=" w-[700px] h-[700px] border-2xl border-black cursor-pointer md:rounded-full"
            />
          </div>
        </div>
      </div>
    );
}
export default Body;