import { LOGO_URL } from "../utils/constants";

const Header = () => {
    return (
      <div className="head">
        <div className="logo">
          <img
            className="image"
            src={LOGO_URL}
          />
        </div>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>Contact us</li>
            <li>About us</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;