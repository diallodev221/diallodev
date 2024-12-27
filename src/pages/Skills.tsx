import SkillWidget from "./SkillWidget";

interface Skill {
  imgURL: string;
  label: string;
  delay: string;
}

const skills: Skill[] = [
  {
    label: "Java",
    imgURL: "https://icon.icepanel.io/Technology/svg/Java.svg",
    delay: "0.4",
  },
  {
    label: "Spring",
    imgURL: "https://icon.icepanel.io/Technology/svg/Spring.svg",
    delay: "0.5",
  },
  {
    label: "Nest JS",
    imgURL: "https://icon.icepanel.io/Technology/svg/Nest.js.svg",
    delay: "0.6",
  },
  {
    label: "TypeScript",
    imgURL: "https://icon.icepanel.io/Technology/svg/TypeScript.svg",
    delay: "0.7",
  },
  {
    label: "JavaScript",
    imgURL: "https://icon.icepanel.io/Technology/svg/JavaScript.svg",
    delay: "0.8",
  },
  {
    label: "Angular",
    imgURL: "https://icon.icepanel.io/Technology/svg/Angular.svg",
    delay: "0.9",
  },
  {
    label: "React",
    imgURL: "https://icon.icepanel.io/Technology/svg/React.svg",
    delay: "1",
  },
  {
    label: "NextJS",
    imgURL: "https://icon.icepanel.io/Technology/svg/Next.js.svg",
    delay: "1.1",
  },
  {
    label: "TailwindCSS",
    imgURL: "https://icon.icepanel.io/Technology/svg/Tailwind-CSS.svg",
    delay: "1.2",
  },
  {
    label: "BoostStrap",
    imgURL: "https://icon.icepanel.io/Technology/svg/Bootstrap.svg",
    delay: "1.3",
  },
  {
    label: "Sass",
    imgURL: "https://icon.icepanel.io/Technology/svg/Sass.svg",
    delay: "1.4",
  },
  {
    label: "Flutter",
    imgURL: "https://icon.icepanel.io/Technology/svg/Flutter.svg",
    delay: "1.5",
  },
];

const skillsDevOpsCloud: Skill[] = [
  {
    label: "PostgresSQL",
    imgURL: "https://icon.icepanel.io/Technology/svg/PostgresSQL.svg",
    delay: "0.4",
  },
  {
    label: "MySQL",
    imgURL: "https://icon.icepanel.io/Technology/svg/MySQL.svg",
    delay: "0.4",
  },
  {
    label: "MongoDB",
    imgURL: "https://icon.icepanel.io/Technology/svg/MongoDB.svg",
    delay: "0.4",
  },
  {
    label: "Redis",
    imgURL: "https://icon.icepanel.io/Technology/svg/Redis.svg",
    delay: "0.4",
  },
  {
    label: "AWS",
    imgURL: "https://www.svgrepo.com/show/448266/aws.svg",
    delay: "0.4",
  },
  {
    label: "Docker",
    imgURL: "https://www.svgrepo.com/show/448221/docker.svg",
    delay: "0.5",
  },
  {
    label: "Kubernetes",
    imgURL: "https://www.svgrepo.com/show/376331/kubernetes.svg",
    delay: "0.6",
  },
  {
    label: "Jenkins",
    imgURL: "https://www.svgrepo.com/show/373699/jenkins.svg",
    delay: "0.7",
  },
  {
    label: "Github Actions",
    imgURL: "https://icon.icepanel.io/Technology/svg/GitHub-Actions.svg",
    delay: "0.8",
  },
  {
    label: "CI/CD",
    imgURL:
      "https://www.blackduck.com/glossary/what-is-cicd/_jcr_content/root/synopsyscontainer/column_1946395452_co/colRight/image_copy.coreimg.svg/1727199377195/cicd.svg",
    delay: "0.9",
  },
];

const Skills = () => {
  return (
    <section className="skills-section" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-header text-center">
              <h2 className="section-title wow fadeInUp" data-wow-delay=".3s">
                My Skills
              </h2>
              <p className=" wow fadeInUp" data-wow-delay=".4s">
                Skilled in designing and integrating robust APIs, developing
                custom software, and implementing modern DevOps practices.
                Passionate about writing clean, maintainable code and delivering
                seamless user experiences in agile environments.
              </p>
            </div>
          </div>
        </div>

        <div className="skills-widget-container mb-4">
          <div>
            <SkillWidget skills={skills} />
          </div>
          <div>
            <SkillWidget skills={skillsDevOpsCloud} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills
