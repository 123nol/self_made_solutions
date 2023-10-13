import { Link } from "react-router-dom";

const ProductCards = ({ data }) => {
  return (
    <div className="productCard">
      <Link className="redirectLink" to={data.link}>
        <div className="productInfo">
          <h1>{data.title}</h1>
          <p>{data.details}</p>
        </div>
      </Link>
    </div>
  );
};

export default ProductCards;
