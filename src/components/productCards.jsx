import { Link } from "react-router-dom";

const ProductCards = ({ data }) => {
  return (
    <div className="productCard">
      <Link
        className="redirectLink"
        to={"https://www.youtube.com/watch?v=dQw4w9WgXcQ"}
      >
        <div className="productInfo">
          <h1>{data.title}</h1>
          <p>{data.details}</p>
        </div>
      </Link>
    </div>
  );
};

export default ProductCards;
