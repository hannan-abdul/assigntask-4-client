import React, { useEffect, useState } from "react";
import DashboardMenu from "../../Dashboard/DashboardMenu";
import axios from "axios";
import ProductEdit from "../ProductEdit/ProductEdit";

const ProductList = () => {
  const [managenews, setManagenews] = useState([]);

  useEffect(() => {
    const getAllNews = async () => {
      try {
        const res = await axios.get("http://localhost:5500/api/allproducts");
        setManagenews(res.data.date);
      } catch (err) {
        console.log(err);
      }
    };
    getAllNews();
  }, []);
  return (
    <section>
      <div>
        <DashboardMenu />
      </div>
      <div
        className="container text-center mt-5 col-md-10 p-4 pr-5"
        style={{
          position: "absolute",
          right: "-5%",
          top: "10%",
          backgroundColor: "#F4FDFB",
        }}
      >
        <h3>Manage Products</h3>
        {managenews.map((newdata) => (
          <ProductEdit newdata={newdata} />
        ))}
      </div>
    </section>
  );
};

export default ProductList;
