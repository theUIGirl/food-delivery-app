import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
/**
 * Header
 *  -logo
 *  -nav items
 *  -cart
 * Body
 *  -Search bar
 *  -Restaurant List
 *   -Restaurant Card
 *    -Restaurant name
 *    -image
 *    -rating
 *    -cuisines
 * Footer
 *  -Footer links
 *  -copyright
 */

const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
