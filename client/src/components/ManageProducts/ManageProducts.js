import "./ManageProducts.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

const ManageProducts = () => {
  const [products, setProducts] = useState([]);

  const history = useHistory();

  useEffect(() => {
    axios
      .get("http://localhost:5000/products")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const removeProduct = (id) => {
    axios
      .delete(`http://localhost:5000/products/${id}`)
      .then((res) => {
        alert("Product Removed Successfully");
        console.log(res.data);
        window.location.reload(false);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="container">
      <div className="manage-products">
        <div>
          <button
            className="add-new-product-btn"
            onClick={() => history.push("/addproduct")}
          >
            <i className="fas fa-plus"></i>
            <span>Add New Product</span>
          </button>
        </div>
        <div className="products">
          {products.map((product) => (
            <div className="product-box" key={product._id}>
              <div className="pro-image">
                <img src={product.image} alt={product.name}></img>
              </div>
              <div className="pro-details">
                <div className="pro-name">{product.name}</div>
                <div className="pro-category">{product.category}</div>
                <div className="pro-price">${product.price}</div>
              </div>
              <div className="pro-actions">
                <div>
                  <button
                    className="edit-btn"
                    onClick={() =>
                      history.push({
                        pathname: "/editproduct",
                        state: { product: product },
                      })
                    }
                  >
                    Edit
                  </button>
                </div>
                <div>
                  <button
                    className="remove-btn"
                    type="button"
                    onClick={() => removeProduct(product._id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ManageProducts;
