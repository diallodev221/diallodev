import { Building2, Calendar, GraduationCap } from "lucide-react";

import data from "../data.json";

type Experience = {
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

type ExperienceData = {
  [key: string]: Experience[];
};

const getHumanDiff = (startDate: string, endDate: string) => {
  let str = "";
  const start = new Date(startDate);
  const end = endDate ? new Date(endDate) : new Date();
  let years = end.getFullYear() - start.getFullYear();
  let months = end.getMonth() - start.getMonth();

  if (months < 0) {
    years -= 1;
    months += 12;
  }

  if (years > 0) {
    str += years + " year";
    if (years > 1) str += "s";
  }

  if (str.length > 0) str += ", ";

  if (months > 0) {
    str += months + " month";
    if (months > 1) str += "s";
  }

  return str;
};

const { experience } = data as { experience: ExperienceData };

type ExperienceWidgetProps = {
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

const ExperienceWidget = ({
  organization,
  role,
  type,
  startDate,
  endDate,
  city,
  state,
  country,
  url,
  thumbnail,
}: ExperienceWidgetProps) => {
  return (
    <article className="resume-item">
        <div className="header">
          <img
            src={thumbnail}
            alt={`${organization} logo`}
            className="w-12 h-12 rounded"
            width={48}
          />
          <div className="company">
            <h3 className="title">{organization}</h3>
            <p>{`${role} - ${type}`}</p>
          </div>
        </div>

        {/* Duration and date */}
        <div className="duration">
          <Calendar  />
          <div>
            {<div className="period">{getHumanDiff(startDate, endDate)}</div>}
            {<div className="text-sm">{`${startDate} - ${endDate}`}</div>}
          </div>
        </div>

        {/* Location */}
        <div className="location">
          <Building2  />
          <span>{`${city} ${state}, ${country}`}</span>
        </div>
    </article>
  );
};

const EducatorWidget = () => {
  const educationsData = [
    {
      period: "2020 - 2023",
      course: "Bechalor's Degree in Computer Science",
      institution: "Université Numérique Cheikh Hamidou Kane (UNCHK)",
      logo: "https://media.licdn.com/dms/image/v2/D4E0BAQFPgnXXtnQcrQ/company-logo_200_200/company-logo_200_200/0/1692698637205?e=1743033600&v=beta&t=_vnNVQPr_J8kOeY5MvqPDf9Uo9ZZ61AdF6g4xnz61Ic",
    },
    {
      period: "Nov 2024",
      course: "Software Engineering Essentials",
      institution: "Coursera",
      logo: "https://media.licdn.com/dms/image/v2/C4D0BAQGexnfBxeEG-g/company-logo_100_100/company-logo_100_100/0/1630530042036/coursera_logo?e=1743033600&v=beta&t=KW9eonmjcv6Eo2Y6hSFWSiJ8phtNl9vcKJnLDJSTcYQ",
    },
    {
      period: "Jan 2022 - Juil 2022",
      course: "Java Full-Stack Developer",
      institution: "SarayaTech Senegal",
      logo: "https://media.licdn.com/dms/image/v2/C4E0BAQHXRteH4IgSGw/company-logo_200_200/company-logo_200_200/0/1675459024192?e=1743033600&v=beta&t=CkkxGC3Kr0yVyzQ7HGoidKGU6KHKQ4hXmEKCOzVsuCc",
    },
  ];
  return (
    <div className="resume-widget educator">
      {educationsData.map(({ logo, institution, period, course }, index) => (
        <article key={index} className="resume-item">
          <div className="d-flex justify-content-between">
            {/* Period */}
            <div className="period">
              <Calendar className="w-5 h-5" />
              <span>{period}</span>
            </div>
            {/* Institute Logo */}
            <div className="institute-logo">
              <img src={logo} alt={`${institution} logo`} width={64} />
            </div>
          </div>

          {/* Course Name */}
          <div className="course">
            <GraduationCap className="w-6 h-6 text-purple-600" />
            <h3 className="title">{course}</h3>
          </div>

          {/* Institution */}
          <div className="institute">
            <Building2 className="w-5 h-5" />
            <p>{institution}</p>
          </div>
        </article>
      ))}
    </div>
  );
};

const Experiences = () => {
  return (
    <section className="resume-section" id="resume">
      <div className="container">
        <div className="resume-container">
          {Object.getOwnPropertyNames(experience).map((title, id) => (
            <div key={id}>
              <div className="section-header wow fadeInUp" data-wow-delay=".3s">
                <h2 className="section-title">
                  <i className="flaticon-recommendation"></i> {title}
                </h2>
              </div>
              <div className="resume-widget">
              {experience[title].map(
                (
                  {
                    organization,
                    role,
                    type,
                    startDate,
                    endDate,
                    city,
                    state,
                    country,
                    url,
                    thumbnail,
                  },
                  i
                ) => (
                  <ExperienceWidget
                    key={i}
                    organization={organization}
                    role={role}
                    type={type}
                    startDate={startDate}
                    endDate={endDate}
                    city={city}
                    state={state}
                    country={country}
                    url={url}
                    thumbnail={thumbnail}
                  />
                )
              )}
              </div>
            </div>
          ))}
          </div>
      </div>
    </section>
  );
};

export default Experiences;
