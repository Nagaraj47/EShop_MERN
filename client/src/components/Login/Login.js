import "../Register/Register.scss";
import { setUser } from "../../redux/actions/userActions";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");

  const history = useHistory();
  const dispatch = useDispatch();

  const handleSubmit = () => {
    axios
      .post("http://localhost:5000/users/login", {
        email,
        password,
      })
      .then(({ data }) => {
        if (data.msg) {
          setErr(data.msg);
        } else {
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
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="container">
      <div className="form-wrapper">
        <div className="form">
          <div className="form-heading">LOGIN</div>
          {err && <div className="err">{err} !</div>}
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
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="form-bottom">
            <button type="submit" className="submit-btn" onClick={handleSubmit}>
              Login
            </button>
            <div className="new-user" onClick={() => history.push("/register")}>
              New User?
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
