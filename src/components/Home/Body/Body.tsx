import { useEffect, useState } from "react";
import "./body.css";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";
import ReactPaginate from "react-paginate";

const Body = () => {
  const path = useLocation();
  const [news, setNews] = useState([]);
  const filterPath = path.pathname.slice(10).replace("&", "");

  // console.log("filterpath",filterPath)
  useEffect(() => {
    const getAllNews = async () => {
      try {
        const res = await axios.get("http://localhost:5500/api/allproducts");
        setNews(res.data.date);
      } catch (err) {
        console.log(err);
      }
    };
    getAllNews();
  }, [filterPath]);

  const filterNews = news.filter((name) => name.category.includes(filterPath));

  // pagination
  const [pageNumber, setPageNumber] = useState(0);
  const userPerPage = 4;
  const pageVigited = pageNumber * userPerPage;

  const pageCount = Math.ceil(filterNews.length / userPerPage);
  const changePage = ({ selected }) => {
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
            <div className="col-lg-5 col-md-4 col-sm-12 card-fix">
              <div className="text-start">
                <img
                  className="all-img-fix"
                  src={newdata.image}
                  alt="new image"
                />
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
                    <p>$ {newdata.price}</p>
                  </div>
                  <div>
                    <p>Buy</p>
                  </div>
                </div>
                <h5>{newdata.category}</h5>
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

export default Body;
