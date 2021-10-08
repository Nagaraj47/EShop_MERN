import "./ProductDetails.scss";
import axios from "axios";
import Popup from "../Popup/Popup";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/actions/cartActions";
import { useHistory } from "react-router-dom";

const ProductDetails = (props) => {
  const id = props.match.params.id;
  const [product, setproduct] = useState({});
  const [loading, setLoading] = useState(true);
  const [qty, setQty] = useState(1);
  const [showPopup, setShowPopup] = useState(false);

  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const history = useHistory();

  const add = (qty) => {
    if (user.isLogged) {
      let item = { ...product, qty };
      dispatch(addToCart(item));
      history.push("/cart");
    } else {
      setShowPopup(true);
    }
  };

  useEffect(() => {
    axios
      .get(`http://localhost:5000/products/${id}`)
      .then((res) => {
        setproduct(res.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div className="product-details-wrapper">
      <div className="container">
        {showPopup && <Popup setShowPopup={setShowPopup} />}
        {loading ? (
          <div className="product-loading">Loading....</div>
        ) : (
          <div className="product-details">
            <div className="product-image">
              <img src={product.image} alt={product.name}></img>
            </div>
            <div className="details">
              <div className="product-name">{product.name}</div>
              <div className="product-category">
                <span>{product.category}</span>
              </div>
              <div className="product-description">{product.description}</div>
              <div className="product-price">$ {product.price}</div>
              <div className="product-qty">
                Qty :
                <select onChange={(e) => setQty(e.target.value)}>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                </select>
              </div>
              <div className="add-to-cart">
                <button className="addToCart-btn" onClick={() => add(qty)}>
                  Add To Cart<i className="fas fa-cart-plus"></i>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
