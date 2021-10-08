import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { removeUser } from "../../redux/actions/userActions";
import { emptyCart } from "../../redux/actions/cartActions";
import "./NavBar.scss";

const NavBar = () => {
  const [showNavLinks, setshowNavLinks] = useState(false);

  const user = useSelector((state) => state.user);
  const cartItems = useSelector((state) => state.cart.cartItems);

  const dispatch = useDispatch();
  const history = useHistory();

  const handleNavLinks = () => {
    setshowNavLinks(!showNavLinks);
  };

  const handleLogout = () => {
    dispatch(removeUser());
    dispatch(emptyCart());
    history.push("/login");
  };

  return (
    <div className="navbar">
      <div className="container">
        <div className="content">
          <div className="nav-logo">
            <Link to="/" className="logo">
              E<span>Shop</span>
            </Link>
          </div>
          <div
            className={showNavLinks ? "nav-links show-nav-links" : "nav-links"}
          >
            <ul>
              <li>
                <Link to="/" className="nav-link" onClick={handleNavLinks}>
                  <i className="fas fa-home"></i>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/cart" className="nav-link" onClick={handleNavLinks}>
                  <i className="fas fa-shopping-cart"></i>
                  Cart {cartItems.length === 0 ? "" : `[${cartItems.length}]`}
                </Link>
              </li>
              <li>
                {user.isLogged ? (
                  <div className="nav-link user">
                    <i className="fas fa-user"></i>
                    {user.name}
                    <div className="user-actions">
                      {user.isAdmin && (
                        <div
                          className="user-action"
                          onClick={() => history.push("/manageproducts")}
                        >
                          <i className="fas fa-book"></i>
                          <div className="manage-products">Manage Products</div>
                        </div>
                      )}
                      <div className="user-action" onClick={handleLogout}>
                        <i className="fas fa-sign-out-alt"></i>
                        <div className="logout">LogOut</div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    to="/login"
                    className="nav-link"
                    onClick={handleNavLinks}
                  >
                    <i className="fas fa-user"></i>
                    Login
                  </Link>
                )}
              </li>
            </ul>
          </div>
          <div className="menu-icon">
            <i
              className={showNavLinks ? "fas fa-times" : "fas fa-bars"}
              onClick={handleNavLinks}
            ></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
