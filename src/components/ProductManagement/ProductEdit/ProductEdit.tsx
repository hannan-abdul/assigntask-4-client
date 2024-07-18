import { useState } from "react";
import "./productEdit.css";
import swal from "sweetalert";
import axios from "axios";
import EditProduct from "../EditProduct/EditProduct";
import { Product } from "../../interface";

interface ProductEditProps {
  newdata: Product;
}

const ProductEdit: React.FC<ProductEditProps> = ({ newdata }) => {
  const { name, description, category, _id } = newdata;
  const [modalIsOpen, setIsOpen] = useState(false);
  // modal function
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  const deleteNews = async (_id: string) => {
    try {
      await axios.delete(
        `https://fitness-equp-server.vercel.app/api/product/${_id}`
      );
      swal(
        "Successfully Deleted",
        "Your News has been successfully Deleted!",
        "success"
      );
      window.location.replace("/dashboard");
    } catch (err) {
      swal("Failed!", "You can delete only your added News!", "error", {
        dangerMode: true,
      });
      console.log(err);
    }
  };

  return (
    <div>
      <div className="row row-fix justify-content-center align-items-center">
        <div className="col-md-2 text-start">
          <p> {name}</p>
        </div>
        <div className="col-md-3">
          <h6> {description}</h6>
        </div>
        <div className="col-md-3">
          <h6>{category}</h6>
        </div>
        <div className="col-md-4">
          <button className="button-fix" onClick={() => deleteNews(_id)}>
            Delete
          </button>
          <button className="button-fix" onClick={openModal}>
            Edit
          </button>
        </div>
        <EditProduct
          modalIsOpen={modalIsOpen}
          closeModal={closeModal}
          newdata={newdata}
        />
      </div>
    </div>
  );
};

export default ProductEdit;
