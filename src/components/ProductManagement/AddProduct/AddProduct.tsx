import React, { useState } from "react";
import DashboardMenu from "../../Dashboard/DashboardMenu";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import "./addProduct.css";

const AddProduct = () => {
  //   const email = useSelector((state) => state.auth.userdetails.email);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [photo, setPhoto] = useState(null);
  const navigate = useNavigate();
  //   const categories = useSelector((state) => state.categories.item);

  type dataType = {
    name: string;
    price: string;
    quantity: string;
    description: string;
    image: string;
    category: string;
  };

  const onSubmit = async (data: dataType) => {
    const productData = {
      name: data.name,
      price: data.price,
      quantity: data.quantity,
      description: data.description,
      image: photo,
      category: data.category,
    };
    try {
      const res = await axios({
        method: "post",
        url: `http://localhost:5500/api/products`,
        data: productData,
      });
      swal(
        "Successfully Added",
        "Your news has been successfully added!",
        "success"
      );
      console.log("server side response", res);
      res && navigate("/dashboard");
    } catch (err) {
      console.log(err);
    }
  };

  const handleImageUpload = (event) => {
    console.log(event.target.files[0]);
    const imageData = new FormData();
    imageData.set("key", "eeb4fdf4446cbfff89dd86eccb1a15f9");
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
    <section>
      <div>
        <DashboardMenu />
      </div>
      <div>
        <h2 className="my-4">Add Product</h2>
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
          <input type="text" placeholder="Name" {...register("name")} />
          <br />
          <input type="text" placeholder="price" {...register("price")} />
          <br />
          <input type="text" placeholder="quantity" {...register("quantity")} />
          <br />
          <input type="text" placeholder="category" {...register("category")} />
          <br />
          <textarea
            type="text"
            placeholder="Description"
            {...register("description")}
          />
          <br />
          {/* <select
            placeholder="Category"
            className="box form-control responsive-input"
            {...register("category")}
            required
          >
            <option value="" disabled selected>
              Select Category
            </option>
            {categories.map((cat) => (
              <option value={cat.name}>{cat.name}</option>
            ))}
          </select> */}
          <br />
          <input className="custom-btn" type="submit" />
        </form>
      </div>
    </section>
  );
};

export default AddProduct;
