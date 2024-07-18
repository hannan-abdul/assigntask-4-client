import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import ReactPaginate from "react-paginate";
import { useGetAllProductsQuery } from "../../../redux/features/products/products";
import "./product.css";

const Product = () => {
  const path = useLocation();
  const [pageNumber, setPageNumber] = useState(0);
  const { data, error, isLoading } = useGetAllProductsQuery();
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    let errorMessage = "An unknown error occurred";
    if ("status" in error) {
      errorMessage = `Error: ${error.status}`;
    } else if ("message" in error) {
      errorMessage = `Error: ${error.message}`;
    }
    return <div>{errorMessage}</div>;
  }

  if (!data || !data.date) {
    return <div>No data available</div>;
  }

  const filterPath = path.pathname.slice(10).replace("&", "");
  const filterNews = data.date.filter((name) =>
    name.category.includes(filterPath)
  );

  // pagination
  const userPerPage = 4;
  const pageVigited = pageNumber * userPerPage;

  const pageCount = Math.ceil(filterNews.length / userPerPage);
  const changePage = ({ selected }: { selected: number }) => {
    setPageNumber(selected);
  };
  return (
    <div className="container text-center mt-3">
      <div className="row justify-content-between text-center mt-5 mb-5 pb-3 pt-3 main-body-fix">
        {filterNews.length === 0 && (
          <div className="spinner-border m-auto text-primary" role="status">
            <span className="visually-hidden"></span>
          </div>
        )}
        {filterNews
          .slice(pageVigited, pageVigited + userPerPage)
          .map((newdata) => (
            <div className="col-md-4 mt-5">
              <div className="card-fix">
                <Link to={`/product/${newdata._id}`} key={newdata._id}>
                  <img
                    style={{ width: "100px" }}
                    className="all-img-fix"
                    src={newdata.image}
                    alt="new image"
                  />
                </Link>
                <div className="text-decoration-none text-black all-img-title">
                  <p>$ {newdata.price}</p>
                </div>
                <h4>
                  <Link
                    className="text-decoration-none text-black all-img-title"
                    to={`/product/${newdata._id}`}
                    key={newdata._id}
                  >
                    {newdata.name}
                  </Link>
                </h4>
                <div className="d-flex justify-content-between">
                  <div>
                    <Link to="/cart">
                      <button className="btn-primary">Buy</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
      <ReactPaginate
        previousLabel={"Prev"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationBttns"}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName={"nextBttn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />
    </div>
  );
};

export default Product;
