import { useState } from "react";

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

export default ServiceWidget;
