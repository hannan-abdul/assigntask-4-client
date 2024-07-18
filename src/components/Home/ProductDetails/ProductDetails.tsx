import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SingleProduct from "../SingleProduct/SingleProduct";
import { Product, ProductData } from "../../interface";

const ProductDetails = () => {
  const { productKey } = useParams<{ productKey: string }>();
  const [newdata, setNewdata] = useState<ProductData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  console.log("productDetails", newdata);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get<Product>(
          `https://fitness-equp-server.vercel.app/api/product/${productKey}`
        );
        const productData: ProductData = {
          data: {
            _id: res.data.data._id,
            name: res.data.data.name,
            price: res.data.data.price,
            quantity: res.data.data.quantity,
            description: res.data.data.description,
            image: res.data.data.image,
            category: res.data.data.category,
            data: undefined,
          },
        };
        setNewdata(productData);
        // console.log("product data", productData);

        setLoading(false);
      } catch (error) {
        console.error("Error fetching product:", error);
        setError("Failed to fetch product data");
        setLoading(false);
      }
    };

    if (productKey) {
      fetchProduct();
    }
  }, [productKey]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="container d-flex">
      <div className="col-md-9">
        {newdata ? (
          <SingleProduct newdata={newdata} />
        ) : (
          <div>No product data available</div>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
