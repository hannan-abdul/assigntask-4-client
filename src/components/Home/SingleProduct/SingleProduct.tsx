import React from "react";

const SingleProduct = ({ newdata }) => {
  const { name, price, description, quantity, image, category } = newdata;
  console.log({ newdata });

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
        <div>{/* <span>{new Date(createdAt).toDateString()}</span> */}</div>
      </div>

      <p>{description}</p>
    </div>
  );
};

export default SingleProduct;
