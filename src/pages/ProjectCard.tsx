import { ExternalLink, Github } from 'lucide-react';
import { Link } from 'react-router';



type ProjectCardProps = {
    project: {
        title: string;
        type: string;
        tag: string;
        image: string;
        description: string;
        technologies: string[];
        github?: string;
        liveDemo?: string;
    };
}

const ProjectCard = ({ project }: ProjectCardProps) => (
  <article className="portfolio-item">
    <div className="portfolio-item-header">
      <div className="card-title">{project.title}</div>
      <div className="card-type">{project.type}</div>
    </div>
    <div className="portfolio-item-content">
      <img src={project.image} alt={project.title}  />
      <p className="description">{project.description}</p>
      <div className="tags">
        {project.technologies.map((tech, index) => (
          <span key={index} className="tag">
            {tech}
          </span>
        ))}
      </div>
    </div>
    <div className="portfolio-item-footer">
      {project.github && (
        <Link
          to={project.github}
          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github className="w-5 h-5" />
        </Link>
      )}
      {project.liveDemo && (
        <Link
          to={project.liveDemo}
          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ExternalLink className="w-5 h-5" />
        </Link>
      )}
    </div>
  </article>
);

export default ProjectCard
