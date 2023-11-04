import { Link } from "react-router-dom";
import Popup from "./Popup";
import { useState } from "react";
const ProductCards = ({ data }) => {
  const [trigger, setTrigger] = useState(false);
  return (
    <div
      className="productCard"
      style={{ backgroundImage: `url(${data.backgroundImage})` }}
    >
      <Popup trigger={trigger} setTrigger={setTrigger}>
        <h3>{data.title}</h3>
        <p>{data.details}</p>
      </Popup>
      <Link className="redirectLink" onClick={() => setTrigger(true)}>
        <div className="productInfo">
          <h1>{data.title}</h1>
          <p>{data.details}</p>
        </div>
      </Link>
    </div>
  );
};

export default ProductCards;
