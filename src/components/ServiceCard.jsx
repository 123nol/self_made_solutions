import { bottom } from "@popperjs/core";
import { Link } from "react-router-dom";

const ServiceCard = ({ data }) => {
  return (
    <div
      className="productCard serviceCard"
      style={{ backgroundImage: `url(${data.backgroundImage})` }}
    >
      <Link
        className="redirectLink"
        to={`/${data.id}`}
        onClick={() => {
          window.scrollTo(0, 0);
        }}
      >
        <div
          className="productInfo serviceInfo"
          style={{ marginbottom: "100px" }}
        >
          <h1>{data.header}</h1>
          <p>{data.information}</p>
        </div>
      </Link>
    </div>
  );
};

export default ServiceCard;
