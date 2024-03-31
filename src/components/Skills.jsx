import html from "../utils/assets/html.png";
import css from "../utils/assets/css3.png";
import javascript from "../utils/assets/javascript.png";
import react from "../utils/assets/react.png";
import tailwind from "../utils/assets/tailwind.png";
import daisy from "../utils/assets/daisy.png";
import canva from "../utils/assets/canva.png";
import adobe from "../utils/assets/adobe.png";
import photoshop from "../utils/assets/photoshop.png";
import ProgressBar from "./ProgressBar"; // Assuming you have a ProgressBar component

const Skills = () => {
  const skills = [
    { name: "Html5", level: 80, image: html },
    { name: "Css3", level: 80, image: css },
    { name: "javascript", level: 70, image: javascript },
    { name: "React", level: 60, image: react },
    { name: "Tailwind Css", level: 70, image: tailwind },
    { name: "DaisyUI", level: 70, image: daisy },
    { name: "Canva", level: 70, image: canva },
    { name: "Adobe Express", level: 40, image: adobe },
    { name: "Photoshop", level: 40, image: photoshop },
    // Add more skills as needed
  ];
  

  return (
    <div className="gradient-page p-0 bg-white md:pl-16 md:mr-16">
      <h1 className="text-transparent gradient-head text-4xl font-bold text-center md:p-4 text-underline">
        スキル
      </h1>
      <div className="flex flex-column m-0">
        <div className="w-full py-8">
          {skills.map((skill, index) => (
            <div key={index} className="w-auto flex flex-row items-center">
              <img
                src={skill.image}
                alt={skill.name}
                className="h-24 w-36"
              />
              <div className="flex flex-col w-full">
                <h2 className="text-center font-bold">{skill.name}</h2>
                <ProgressBar level={skill.level} />
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
export default Skills;
