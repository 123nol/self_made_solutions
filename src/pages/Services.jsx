import { useState } from "react";
import { ServiceData } from "../data/ServiceData";
import ServiceExpCard from "../components/ServiceExpCard";
const Services = () => {
  return (
    <div className="services">
      <div className="linkHeader">
        <h1>Services</h1>
        <p>The Services we provide are mainly concerned with the ERP system.</p>
      </div>
      {ServiceData.map((data) => (
        <ServiceExpCard key={data.id} data={data} />
      ))}
    </div>
  );
};

export default Services;
