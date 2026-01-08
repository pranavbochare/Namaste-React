import { LOGO_URL } from "../public/constants";

const Header = () => {
  return (
    <div className="header">
      <div className="img-container">
        <img className="logo" src={LOGO_URL} alt="logo" />
      </div>
      <div className="menu-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
          <li>Login</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
