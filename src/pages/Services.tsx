import { useState} from 'react'
import data from "../data.json";

const { services } = data;

type ServiceWidgetProps = {
  id: number;
  title: string;
  description: string;
};

const ServiceWidget = ({ id, title, description }: ServiceWidgetProps) => {
  const [currentService, setCurrentService] = useState<number | null>(1);

  const handleMouseEnter = (id: number) => {
    setCurrentService(id);
  };

  const handleMouseLeave = () => {
    setCurrentService(null);
  };
  return (
    <div
      className={`service-item ${
        id === 1 ? "current" : ""
      }   d-flex flex-wrap align-items-center wow fadeInUp`}
      data-wow-delay=".5s"
      role="button"
      tabIndex={0}
      aria-expanded={currentService === id}
      onMouseEnter={() => handleMouseEnter(id)}
      onMouseLeave={handleMouseLeave}
    >
      <div className="left-box d-flex flex-wrap align-items-center">
        <span className="number">{id}</span>
        <h3 className="service-title">{title}</h3>
      </div>
      <div className="right-box">
        <p>{description}</p>
      </div>
      <i className="flaticon-up-right-arrow"></i>
      <button
        data-mfp-src="#service-wrapper"
        className="service-link modal-popup"
      ></button>
    </div>
  );
};

const Services = () => {
  return (
    <section className="services-section" id="services">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-header text-center">
              <h2 className="section-title wow fadeInUp" data-wow-delay=".3s">
                My Quality Services
              </h2>
              <p className=" wow fadeInUp" data-wow-delay=".4s">
                Transformer votre vision en solutions web personnalisées - des
                applications web évolutives et des intégrations API
                transparentes aux logiciels sur mesure, tous conçus pour
                inspirer et engager vos clients.
              </p>
            </div>

            <div className="row">
              <div className="col-md-12">
                <div className="services-widget position-relative">
                  {services.map(({ id, title, description }) => (
                    <ServiceWidget
                      key={id}
                      id={id}
                      title={title}
                      description={description}
                    />
                  ))}
                  <div
                    className="active-bg wow fadeInUp"
                    data-wow-delay=".5s"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
