import "../Register/Register.scss";
import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const EditProduct = (props) => {
  const product = props.history.location.state.product;
  const id = product._id;
  const [name, setName] = useState(product.name);
  const [img, setImg] = useState(product.image);
  const [category, setCategory] = useState(product.category);
  const [price, setPrice] = useState(product.price);
  const [des, setDes] = useState(product.description);
  const [err, setErr] = useState("");

  const history = useHistory();

  const editProduct = () => {
    if (
      (name !== "") &
      (img !== "") &
      (category !== "") &
      (price !== "") &
      (des !== "")
    ) {
      axios
        .patch(`http://localhost:5000/products/${id}`, {
          name,
          img,
          category,
          price,
          des,
        })
        .then((res) => console.log(res.data))
        .catch((err) => console.log(err));
      alert("Product Details Updated.");
      history.push("/manageproducts");
    } else {
      setErr("*All fields are required");
    }
  };

  return (
    <div className="container">
      <div className="form-wrapper">
        <div className="form add-new-sec">
          <div className="form-heading">Edit Product</div>
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
            <button type="submit" className="submit-btn" onClick={editProduct}>
              Update
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

export default EditProduct;
