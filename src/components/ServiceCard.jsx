import { Link } from "react-router-dom";
import { useLayoutEffect } from "react";
const ServiceCard = ({ data }) => {
  return (
    <div
      className="productCard"
      style={{ backgroundImage: `url(${data.backgroundImage})` }}
    >
      <Link className="redirectLink" to={"/services"}>
        <div className="productInfo">
          <h1>{data.header}</h1>
          <p>{data.information}</p>
        </div>
      </Link>
    </div>
  );
};

export default ServiceCard;
