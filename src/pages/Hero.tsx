import { Link } from "react-router";
import data from "../data.json";
import Counter from "../components/Counter";

const { professionalDetails, title, subtitles, professonalSummary } =
  data.landing;
const { description, cv_en, picture } = data.about;

const Hero = () => {
  return (
    <section className="hero-section d-flex align-items-center" id="intro">
      <div className="intro_text">
        <svg viewBox="0 0 1320 300" width="100%" height="auto">
          <text x="50%" y="50%" textAnchor="middle">
            HI
          </text>
        </svg>
      </div>
      <div className="container">
        <div className="hero-container">
            <div className="hero-content-box">
              <span className="hero-sub-title" aria-label="Hero Subtitle">
                {title}
              </span>
              <h1 className="hero-title">
                {subtitles[0]} +<br /> Java Consultant
              </h1>
              <div className="hero-image-box d-md-none text-center">
                <img
                  src={picture}
                  alt="diallodev-profile"
                  loading="lazy"
                  width={475}
                  height={510}
                />
              </div>

              <p className="lead">{description}</p>
              <div className="button-box d-flex flex-wrap align-items-center">
                <Link
                  to={cv_en}
                  download="Saifoulaye_Diallo_CV.pdf"
                  className="tj-btn-secondary"
                  aria-label="Download CV"
                >
                  Download CV{" "}
                  <i className="flaticon-download" aria-hidden="true"></i>
                </Link>
                <ul
                  className="ul-reset social-icons"
                  aria-label="Social Media Links"
                >
                  {professionalDetails.map((detail) => (
                    <li key={detail.alt}>
                      <Link
                        to={detail.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Visit ${detail.alt}`}
                      >
                        <i className={detail.icon} aria-hidden="true"></i>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="hero-image-box text-center">
              <img src={picture} alt="diallodev-profile" loading="lazy" />
            </div>
        </div>

        {/* informations details */}
        <div className="funfact-area">
          <div className="row">
            {professonalSummary.map((summary) => (
              <Counter
                key={summary.label}
                count={summary.number}
                label={summary.label}
                suffix={summary.suffix}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
