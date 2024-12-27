import { useState} from 'react'

import FilterButtons from "../components/FilterButtons";
import Project from "./Project";
import data from "../data.json";

const { realisations } = data as { realisations: ProjectData };

type Project = {
  organization: string;
  role: string;
  type: string;
  startDate: string;
  endDate: string;
  city: string;
  state: string;
  country: string;
  url: string;
  thumbnail: string;
};


type ProjectData = {
  [key: string]: Project[];
};

const projects: Project[] = Object.getOwnPropertyNames(realisations).map((title) => realisations[title]).flat();
// {
//   id: 1,
//   category: "branding",
//   image:
//     "data:image/jpeg;base64,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",
//   title: "Deloitte",
//   description: "Project was about precision and information.",
// },

const Projects = () => {
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
  const handleOpenModal = () => {
    // Logic to open modal (could use state to track open item)
    console.log(`Opening modal for item`);
  };

  const handleFliterByCategory = (category: string) => {
    console.log(projects);
    const filteredResult = category !== 'all' ? projects.filter(project => project.type === category.toLowerCase()): projects;
    setFilteredProjects(filteredResult);
  }

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

            <div
              className="portfolio-box wow fadeInUp"
              data-wow-delay=".6s"
            >
              {filteredProjects.map(({organization, role, type, startDate, endDate, city, state, country, url, thumbnail}, id) => (
                <Project
                  key={id}
                  // category={item.category}
                  image={thumbnail}
                  title={organization}
                  description={role}
                  onOpenModal={() => handleOpenModal()}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
