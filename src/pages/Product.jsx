import ProductCards from "../components/productCards";
import { ProductData } from "../data/ProductData";
const Product = () => {
  return (
    <div className="products">
      <div className="linkHeader">
        <h1>Products</h1>
        <p>Some of the Products that we have worked on</p>
      </div>
      <div className="productList">
        {ProductData.map((data) => (
          <ProductCards key={data.id} data={data} />
        ))}
      </div>
    </div>
  );
};

export default Product;
