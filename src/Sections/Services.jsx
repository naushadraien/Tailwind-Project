import ServiceCard from "../components/ServiceCard";
import { services } from "../constants";

const Services = () => {
  return (
    <section className="max-container flex justify-center flex-wrap gap-9">
      {services.map((service) => (
        <ServiceCard {...service} key={service.label} />
      ))}
    </section>
  );
};

export default Services;
