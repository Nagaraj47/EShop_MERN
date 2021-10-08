import { useHistory } from "react-router";
import "./Popup.scss";

const Popup = ({ setShowPopup }) => {
  const history = useHistory();

  return (
    <div className="popup">
      <div className="text">Login To Continue</div>
      <div className="buttons">
        <button
          type="button"
          className="login-btn btn"
          onClick={() => history.push("/login")}
        >
          Login
        </button>
        <button
          type="button"
          className="cancel-btn btn"
          onClick={() => setShowPopup(false)}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default Popup;
