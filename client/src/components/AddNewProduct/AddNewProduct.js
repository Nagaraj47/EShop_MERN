import "../Register/Register.scss";
import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const AddNewProduct = () => {
  const [name, setName] = useState("");
  const [img, setImg] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [des, setDes] = useState("");
  const [err, setErr] = useState("");

  const history = useHistory();

  const addProduct = () => {
    if (
      (name !== "") &
      (img !== "") &
      (category !== "") &
      (price !== "") &
      (des !== "")
    ) {
      axios
        .post("http://localhost:5000/products/product/addproduct", {
          name,
          img,
          category,
          price,
          des,
        })
        .then((res) => console.log(res.data))
        .catch((err) => console.log(err));
      history.push("/manageproducts");
    } else {
      setErr("*All fields are required");
    }
  };

  return (
    <div className="container">
      <div className="form-wrapper">
        <div className="form add-new-sec">
          <div className="form-heading">New Product</div>
          {err && <div className="err">{err} !</div>}
          <div className="form-label">
            <label>Product Name</label>
          </div>
          <div className="form-input">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-label">
            <label>Image</label>
          </div>
          <div className="form-input">
            <input
              type="text"
              value={img}
              onChange={(e) => setImg(e.target.value)}
            />
          </div>
          <div className="form-label">
            <label>Category</label>
          </div>
          <div className="form-input">
            <input
              type="type"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>
          <div className="form-label">
            <label>Price</label>
          </div>
          <div className="form-input">
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className="form-label">
            <label>Description</label>
          </div>
          <div className="form-input">
            <input
              type="type"
              value={des}
              onChange={(e) => setDes(e.target.value)}
            />
          </div>
          <div className="form-bottom">
            <button type="submit" className="submit-btn" onClick={addProduct}>
              Save
            </button>
            <button
              type="submit"
              className="submit-btn"
              onClick={() => history.push("/manageproducts")}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNewProduct;
