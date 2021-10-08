import "./Cart.scss";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { removeFromCart } from "../../redux/actions/cartActions";

const Cart = () => {
  const cartList = useSelector((state) => state.cart.cartItems);

  const dispatch = useDispatch();

  const history = useHistory();

  const remove = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <div className="container">
      <div className="cart">
        <div className="cart-heading">Cart</div>
        <div className="cart-details">
          <div className="cart-list">
            <div className="no-of-items">
              <span>{cartList.length}</span> Items
            </div>
            <div className="cart-items">
              {cartList.length !== 0 ? (
                cartList.map((item) => (
                  <div className="cart-item" key={item._id}>
                    <div className="cart-product-img">
                      <img src={item.image} alt=""></img>
                    </div>
                    <div className="cart-product-details">
                      <div className="cart-product-name">{item.name}</div>
                      <div className="cart-product-price">${item.price}</div>
                      <div className="cart-product-qty">
                        <span>Qty :</span> {item.qty}
                      </div>
                      <div className="cart-product-remove ">
                        <button onClick={() => remove(item._id)}>Remove</button>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="empty-cart">Cart is Empty</div>
              )}
            </div>
          </div>
          <div className="cart-summary">
            <div className="summary-heading">
              <span>Order Summary</span>
            </div>
            <div className="cart-summary-details">
              <div className="row">
                <div className="text">No Of Items</div>
                <div className="value">{cartList.length}</div>
              </div>
              <div className="row">
                <div className="text">Sub-Total</div>
                <div className="value">
                  $
                  {cartList
                    .reduce((total, { price, qty }) => price * qty + total, 0)
                    .toFixed(2)}
                </div>
              </div>
              <div className="row">
                <div className="text">Delivery Charge</div>
                <div className="value">${cartList.length === 0 ? 0 : 10}</div>
              </div>
              <div className="row  cart-summary-total">
                <div className="text">Total</div>
                <div className="value">
                  $
                  {cartList
                    .reduce(
                      (total, { price, qty }) => price * qty + total,
                      cartList.length === 0 ? 0 : 10
                    )
                    .toFixed(2)}
                </div>
              </div>
              <div className="proceed">
                <button type="button" onClick={() => history.push("/checkout")}>
                  Proceed To Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
