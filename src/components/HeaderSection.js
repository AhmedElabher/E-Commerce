import "../CSS/HeaderSection.css";
import { Link } from "react-router-dom";
function HeaderSection() {
  return (
    <div class="header-section">
      <div className="head-bar">
        <div className="left-side">
          <div className="usd">
            <select>
              <option>USD</option>
            </select>
          </div>
          <div className="language">
            <select>
              <option>English</option>
            </select>
          </div>
        </div>

        <div className="text">
          <h3>WorldWide Express Shopping</h3>
        </div>
        <div class="links">
          <ul>
            <li>
              <Link to="/login">LOGIN</Link>
            </li>
            <li>
              <Link to="/create account">Create Account</Link>
            </li>
            <li>
              <a
                onClick={() => {
                  window.alert(
                    "We are sorry but this section not available right now"
                  );
                }}
                href="#Wish List"
              >
                Wish List
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="header-container">
        <div class="logo">
          <Link className="home" to="/">
            E-Shop
          </Link>
          <a></a>
        </div>
        <div class="links-two">
          <span class="icon" id="span">
            <span></span>
            <span></span>
            <span></span>
          </span>
          <ul className="nav-links">
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/gallery">Gallery</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default HeaderSection;
