import ServiceCard from "./ServiceCard";
import { ServiceData } from "../data/ServiceData";

const MiniService = () => {
  return (
    <div className="services" id="service">
      <div className="linkHeader">
        <h1>Services</h1>
        <p>The Services we provide are mainly concerned with the ERP system.</p>
      </div>

      <div className="productList serviceLists" style={{ gap: "50px" }}>
        {ServiceData.map((data) => (
          <ServiceCard key={data.id} data={data} />
        ))}
      </div>
    </div>
  );
};

export default MiniService;
