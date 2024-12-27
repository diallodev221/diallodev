import ServiceWidget from "../components/ServiceWidget";
import data from "../data.json";
import ServiceDetails from "./ServiceDetails";

const {services} = data;

const Services = () => {
  return (
    <>
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
      <ServiceDetails />
    </>
  );
};

export default Services;
