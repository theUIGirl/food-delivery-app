import image1 from "../../assets/Food-Delivery-Scooter-PNG-Isolated-Picture.png";
import image2 from "../../assets/pngegg.png";
import { useState } from "react";
function loggedInUser() {
  return true;
}
const Title = () => (
  <a href="/" className="logo-container">
    <img alt="logo" src={image1} />
    <img src={image2} />
    {/* <img src="https://www.pngmart.com/files/21/Food-Delivery-Scooter-PNG-Isolated-Picture.png" /> */}
  </a>
);
const Header = () => {
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  console.log(userLoggedIn);
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
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
