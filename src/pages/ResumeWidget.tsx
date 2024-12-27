
type ResumeItemProps = {
    time: string;
    title: string;
    institute: string;
    delay: number;
}

type ResumeData = {
  time: string;
  title: string;
  institute: string;
  delay: number;
  animationDirection: string;
};
type ResumeWidgetProps = {
  resumeData: ResumeData[];
};



const ResumeItem = ({ time, title, institute, delay }: ResumeItemProps) => {
  return (
    <article
      className="resume-item  wow fadeInRight"
      data-wow-delay={`${delay}s`}
    >
      <div className="time" aria-label="Course duration">
        {time}
      </div>
      <h3 className="resume-title">{title}</h3>
      <div className="institute" aria-label="Institution name">
        {institute}
      </div>
    </article>
  );
};



const ResumeWidget = ({resumeData}: ResumeWidgetProps) => {
  return (
    <div className="resume-widget">
      {resumeData.map((item, index) => (
        <ResumeItem
          key={index}
          time={item.time}
          title={item.title}
          institute={item.institute}
          delay={item.delay}
        />
      ))}
    </div>
  );
};

export default ResumeWidget;
