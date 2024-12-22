import { Link } from "react-router-dom";
import "../CSS/Login.css";
function Login() {
  return (
    <div className="login-area">
      <div className="login-container">
        <div className="Login-text">
          <h3>LOGIN</h3>
        </div>
        <p>Username</p>
        <input type="text" />
        <p>Password</p>
        <input type="password" />
        <div className="keys">
          <button
            className="log"
            onClick={() => {
              return window.alert(
                "we are sorry but you can't login to your account at this time"
              );
            }}
          >
            sign-in
          </button>
          <Link to="/create account" className="signup">
            Sign-up
          </Link>
        </div>
        <a
          onClick={() => {
            return window.alert("Service not available");
          }}
          href="#forget password"
        >
          forget password
        </a>
      </div>
    </div>
  );
}
export default Login;
