import { Link } from "react-router-dom";

const Product = () => {
  return (
    <div className="products">
      <div className="linkHeader">
        <h1>Products</h1>
        <p>Some of the Products that we have worked on</p>
      </div>
      <div className="productList">
        <div className="productCard">
          <Link
            className="redirectLink"
            to={"https://www.youtube.com/watch?v=dQw4w9WgXcQ"}
          >
            <div className="productInfo">
              <h1>Therapy</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam,
                voluptatem mollitia modi impedit perspiciatis cum culpa
              </p>
            </div>
          </Link>
        </div>
        <div className="productCard">
          <Link className="redirectLink">
            <div className="productInfo">
              <h1>Therapy</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam,
                voluptatem mollitia modi impedit perspiciatis cum culpa
              </p>
            </div>
          </Link>
        </div>
        <div className="productCard">
          <Link className="redirectLink">
            <div className="productInfo">
              <h1>Therapy</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam,
                voluptatem mollitia modi impedit perspiciatis cum culpa
              </p>
            </div>
          </Link>
        </div>
        <div className="productCard">
          <Link className="redirectLink">
            <div className="productInfo">
              <h1>Therapy</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam,
                voluptatem mollitia modi impedit perspiciatis cum culpa
              </p>
            </div>
          </Link>
        </div>
        <div className="productCard">
          <Link className="redirectLink">
            <div className="productInfo">
              <h1>Therapy</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam,
                voluptatem mollitia modi impedit perspiciatis cum culpa
              </p>
            </div>
          </Link>
        </div>
        <div className="productCard">
          <Link className="redirectLink">
            <div className="productInfo">
              <h1>Therapy</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam,
                voluptatem mollitia modi impedit perspiciatis cum culpa
              </p>
            </div>
          </Link>
        </div>
        <div className="productCard">
          <Link className="redirectLink">
            <div className="productInfo">
              <h1>Therapy</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam,
                voluptatem mollitia modi impedit perspiciatis cum culpa
              </p>
            </div>
          </Link>
        </div>
        <div className="productCard">
          <Link className="redirectLink">
            <div className="productInfo">
              <h1>Therapy</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam,
                voluptatem mollitia modi impedit perspiciatis cum culpa
              </p>
            </div>
          </Link>
        </div>
        <div className="productCard">
          <Link className="redirectLink">
            <div className="productInfo">
              <h1>Therapy</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam,
                voluptatem mollitia modi impedit perspiciatis cum culpa
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Product;
