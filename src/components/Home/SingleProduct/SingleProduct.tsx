import React from "react";
import { Link } from "react-router-dom";
import { SingleProductProps } from "../../interface";

const SingleProduct: React.FC<SingleProductProps> = ({ newdata }) => {
  if (!newdata || !newdata.data) {
    return <div>No product data available</div>;
  }
  const { name, price, description, image, category } = newdata.data;
  console.log("singleProduct", newdata.data);

  return (
    <div className="single-news-fix">
      <h1>{name}</h1>
      <div className="py-4">
        <img src={image} alt="single news" />
      </div>
      <div className="d-flex justify-content-between">
        <div className="text-start">
          <h5>Author: {price}</h5>
          <h6>Category: {category}</h6>
        </div>
        {/* <div><span>{new Date(createdAt).toDateString()}</span></div> */}
      </div>

      <p>{description}</p>
      <div>
        <Link to="/cart">
          <button className="btn-primary">Buy</button>
        </Link>
      </div>
    </div>
  );
};

export default SingleProduct;
