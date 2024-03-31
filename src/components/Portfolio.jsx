import ProjectItem from './ProjectItem';
import projectItem from "../utils/assets/projectItem.jpg"

const Portfolio=()=>{
    return (
      <div className="gradient-page bg-white p-1 md:pl-16  md:mr-16 md:pl-24">
        <h1 className="text-transparent gradient-head text-4xl font-bold text-center p-1">
          プロジェクト
        </h1>
        <p className="text-center font-medium p-8">
          Here are some of the projects that I have worked on.{" "}
        </p>
        <div className="grid sm:grid-cols-3 gap-12">
          <ProjectItem img={projectItem} title="EC サイト" />
          <ProjectItem img={projectItem} title="project" />
          <ProjectItem img={projectItem} title="project" />
          <ProjectItem img={projectItem} title="project" />
          <ProjectItem img={projectItem} title="project" />
          <ProjectItem img={projectItem} title="project" />
        </div>
      </div>
    );
}
export default Portfolio;