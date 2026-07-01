import "./Services.css";
import { services } from "../../data/services";

const Services = () => {
  return (
    <section id="about" className="services">
      <div className="container">
        <div className="section-heading">
          <span>HOW CAN WE HELP</span>
          <h2>services</h2>
          <div className="divider"></div>
        </div>
        <div className="services-grid">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div className="service-card" key={service.id}>
                <div className="service-icon">
                  <Icon />
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
