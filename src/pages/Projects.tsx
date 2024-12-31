import { useState } from "react";

import FilterButtons from "../components/FilterButtons";
import Project from "./Project";
import data from "../data.json";
import ProjectCard from "./ProjectCard";

const { projects } = data as { projects: ProjectData };

type Project = {
        title: string;
        type: string;
        tag: string;
        image: string;
        description: string;
        technologies: string[];
        github?: string;
        liveDemo?: string;
    };


type ProjectData = {
  [key: string]: Project[];
};

const projectsData: Project[] = Object.getOwnPropertyNames(projects)
  .map((title) => projects[title])
  .flat();

const Projects = () => {
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
 

  const handleFliterByCategory = (category: string) => {
    const filteredResult =
      category !== "all"
        ? projectsData.filter((project) => project.tag === category)
        : projectsData;
    setFilteredProjects(filteredResult);
  };

  return (
    <section className="portfolio-section" id="works">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-header text-center">
              <h2 className="section-title wow fadeInUp" data-wow-delay=".3s">
                My Recent Works
              </h2>
              <p className=" wow fadeInUp" data-wow-delay=".4s">
                We put your ideas and thus your wishes in the form of a unique
                web project that inspires you and you customers.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <FilterButtons onFilterByCategory={handleFliterByCategory} />

            <div className="portfolio-box wow fadeInUp" data-wow-delay=".6s">
              {filteredProjects.map((projet, id) => (
                <ProjectCard  key={id} project={projet} />
                // <Project
                //   key={id}
                //   image={projet.thumbnail}
                //   title={projet.organization}
                //   description={projet.role}
                // />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
