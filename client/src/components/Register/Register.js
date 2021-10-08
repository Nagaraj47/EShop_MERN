import "./Register.scss";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/actions/userActions";
import axios from "axios";
import Cookies from "js-cookie";

const Register = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    axios
      .post("http://localhost:5000/users/register", {
        fullName,
        email,
        password,
      })
      .then(({ data }) => {
        dispatch(setUser(data));
        Cookies.set(
          "userinfo",
          JSON.stringify({
            name: data.name,
            email: data.email,
            id: data.id,
            isAdmin: data.isAdmin,
            isLogged: true,
          })
        );

        history.push("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="container">
      <div className="form-wrapper">
        <div className="form">
          <div className="form-heading">REGISTER</div>
          <div className="form-label">
            <label>Full Name</label>
          </div>
          <div className="form-input">
            <i className="fas fa-user"></i>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>
          <div className="form-label">
            <label>Email</label>
          </div>
          <div className="form-input">
            <i className="fas fa-envelope"></i>

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-label">
            <label>Password</label>
          </div>
          <div className="form-input">
            <i className="fas fa-lock"></i>
            <input
              type="type"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="form-bottom">
            <button type="submit" className="submit-btn" onClick={handleSubmit}>
              Register
            </button>
            <div className="new-user" onClick={() => history.push("/login")}>
              Already Have Account?
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
