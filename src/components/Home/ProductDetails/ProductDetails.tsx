import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SingleProduct from "../SingleProduct/SingleProduct";

const ProductDetails = () => {
  const { productKey } = useParams();
  const [newdata, setNewsdata] = useState([]);
  console.log("productDetail", newdata);

  useEffect(() => {
    const getSingleNews = async () => {
      try {
        const res = await axios.get(
          "http://localhost:5500/api/product/" + productKey
        );
        setNewsdata(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getSingleNews();
  }, [productKey]);

  return (
    <div className="container d-flex">
      <div className="col-md-9">
        <SingleProduct newdata={newdata}></SingleProduct>
      </div>
      {/* <div className="col-md-3 post-sidebar-fix">
                <SideBar />
            </div> */}
    </div>
  );
};

export default ProductDetails;
