
type SkillItemProps = {
  imgURL: string;
  label: string;
  delay: string;
};

type SkillWidgetProps = {
  skills: SkillItemProps[];
};

const SkillItem = ({ imgURL, label, delay }: SkillItemProps) => {
  return (
    <div className="skill-item wow fadeInUp" data-wow-delay={`${delay}s`}>
      <div className="skill-inner">
        <div className="icon-box">
          <img src={imgURL} alt={label} loading="lazy" />
        </div>
      </div>
      <p>{label}</p>
    </div>
  );
};

const SkillWidget = ({ skills }: SkillWidgetProps) => {
  return (
    <div className="skills-widget">
      {skills.map(({ label, imgURL, delay }, index) => (
        <SkillItem key={index} label={label} imgURL={imgURL} delay={delay} />
      ))}
    </div>
  );
};

export default SkillWidget;
