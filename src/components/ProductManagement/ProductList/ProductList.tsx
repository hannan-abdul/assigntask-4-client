import { useGetAllProductsQuery } from "../../../redux/features/products/products";
import DashboardMenu from "../../Dashboard/DashboardMenu";
import { Product } from "../../interface";
import ProductEdit from "../ProductEdit/ProductEdit";

const ProductList = () => {
  const { data, error, isLoading } = useGetAllProductsQuery({});

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!data || !data.date) {
    return <div>No data available</div>;
  }

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
        {data.date.map((newdata: Product) => (
          <ProductEdit newdata={newdata} />
        ))}
      </div>
    </section>
  );
};

export default ProductList;
