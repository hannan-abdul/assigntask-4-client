import React, { useState } from "react";
import Modal from "react-modal";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import "./editProduct.css";
import { useSelector } from "react-redux";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");
const ModalForm = ({ modalIsOpen, closeModal, newdata }) => {
  const { name, description, category, image, price, quantity, _id } = newdata;

  const { register, handleSubmit } = useForm();
  const [photo, setPhoto] = useState(null);
  const navigate = useNavigate();

  type dataType = {
    name: string;
    price: string;
    quantity: string;
    description: string;
    image: string;
    category: string;
  };

  const onSubmit = async (data: dataType) => {
    const serviceUpdateData = {
      name: data.name,
      price: data.price,
      quantity: data.description,
      description: data.description,
      image: photo,
      category: data.category,
    };

    try {
      const res = await axios({
        method: "put",
        url: `http://localhost:5500/api/updateProduct/${_id}`,
        data: serviceUpdateData,
      });
      console.log("server side response", res);
      swal(
        "Successfully updated",
        "Your Product has been successfully updated!",
        "success"
      );
      res && navigate("/dashboard");
      window.location.reload();
    } catch (err) {
      swal("Failed!", "You can update only your added Product!", "error", {
        dangerMode: true,
      });
      console.log(err);
    }
  };

  // photo upload
  const handleImageUpload = (event) => {
    console.log(event.target.files[0]);
    const imageData = new FormData();
    imageData.set("key", "85444d10cf609e017623ead34516426d");
    imageData.append("image", event.target.files[0]);

    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then(function (response) {
        setPhoto(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="modal-form">
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        {/* <h2 className="text-primary text-center">{title}</h2> */}
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          <div className="d-flex">
            <div>
              {photo ? (
                <img
                  style={{ width: "60px", marginRight: "10px" }}
                  src={photo}
                  alt="Banner img"
                />
              ) : (
                <img
                  style={{ width: "60px", marginRight: "10px" }}
                  src="https://i.ibb.co/Cm61Z60/instagram.png"
                  alt="Banner img"
                />
              )}
            </div>
            <div>
              <input
                className="image-input"
                type="file"
                onChange={handleImageUpload}
              />
            </div>
          </div>
          <br />
          <input
            type="text"
            defaultValue={name}
            placeholder="Name"
            {...register("name")}
          />
          <br />
          <input
            type="text"
            defaultValue={price}
            placeholder="price"
            {...register("price")}
          />
          <br />
          <input
            type="text"
            defaultValue={quantity}
            placeholder="quantity"
            {...register("quantity")}
          />
          <br />
          <input
            type="text"
            defaultValue={category}
            placeholder="category"
            {...register("category")}
          />
          <br />
          <textarea
            type="text"
            defaultValue={description}
            placeholder="Description"
            {...register("description")}
          />
          <br />
          <input className="custom-btn" type="submit" />
        </form>
      </Modal>
    </div>
  );
};

export default ModalForm;
