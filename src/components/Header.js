import image1 from "../../assets/Food-Delivery-Scooter-PNG-Isolated-Picture.png";
import image2 from "../../assets/pngegg.png";
import { useState } from "react";
import { Link } from "react-router-dom";

const Title = () => (
  <Link to="/" className="logo-container">
    <img alt="logo" src={image1} />
    <img src={image2} />
    {/* <img src="https://www.pngmart.com/files/21/Food-Delivery-Scooter-PNG-Isolated-Picture.png" /> */}
  </Link>
);
const Header = () => {
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  console.log(userLoggedIn);
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="about">
            <li>About</li>
          </Link>
          <Link to="contact">
            <li>Contact</li>
          </Link>
          <li>Cart</li>
        </ul>
        {userLoggedIn ? (
          <button onClick={() => setUserLoggedIn(false)}>Log Out</button>
        ) : (
          <button onClick={() => setUserLoggedIn(true)}>Log In</button>
        )}
      </div>
    </div>
  );
};
export default Header;
