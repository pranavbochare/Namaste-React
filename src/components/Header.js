import { useState } from "react";
import { LOGO_URL } from "../public/constants";

const Header = () => {
  const [login, setlogin] = useState("Login");

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
          <button
            onClick={() => {
              login === "Login" ? setlogin("Logout") : setlogin("Login");
            }}>
            {login}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
