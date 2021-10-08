import { useState } from "react";
import { useHistory } from "react-router";
import { emptyCart } from "../../redux/actions/cartActions";
import { useDispatch } from "react-redux";
import "./Checkout.scss";

const Checkout = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phno, setPhno] = useState("");
  const [err, setErr] = useState("");

  const history = useHistory();
  const dispatch = useDispatch();

  const placeOrder = () => {
    if (address !== "") {
      alert(`Order Placed Successfully...`);
      dispatch(emptyCart());
      history.push("/");
    } else {
      setErr("All Fields are requird!");
    }
  };

  return (
    <div className="container">
      <div className="form-wrapper">
        <div className="form add-new-sec">
          <div className="form-heading">Delivery Details</div>
          {err && <div className="err">{err} !</div>}
          <div className="form-label">
            <label>Customer Name</label>
          </div>
          <div className="form-input">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-label">
            <label>Address</label>
          </div>
          <div className="form-input">
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div className="form-label">
            <label>Mobile No</label>
          </div>
          <div className="form-input">
            <input
              type="type"
              value={phno}
              onChange={(e) => setPhno(e.target.value)}
            />
          </div>

          <div className="form-bottom">
            <button type="submit" className="submit-btn" onClick={placeOrder}>
              Checkout
            </button>
            <button
              type="submit"
              className="submit-btn"
              onClick={() => history.push("/cart")}
            >
              Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
