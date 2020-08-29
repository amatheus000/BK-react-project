import React from "react";

const Header = ({siteSettings}) => {
return(
    <header>
    <nav>
      <div className="leftNavWrapper">
        <a href="#">Order</a>
        <a href="#">Restaurants</a>
        <a href="#">Offers</a>
        <a href="#">Trending</a>
        <a href="#">More</a>
      </div>
      <div className="logo">
        <img id="logo" 
          alt="logo" 
          className={!siteSettings.logo.asset.url ? "hidden" : ""}
          src={siteSettings.logo.asset.url} />
      </div>
      <div className="rightNavWrapper">
        <button className="signup">sign up</button>

        <aside id="cart">
          <button id="cart-button">
            $0.00
            <img id="bag-icon" 
            alt="bag-icon" 
            className={!siteSettings.bagIcon.asset.url ? "hidden" : ""}
            src={siteSettings.bagIcon.asset.url} />
          </button>

          <dialog id="dialog">
            <ul id="line-items">
              <li>Your Cart is Empty!</li>
            </ul>
            <button id="checkout-button" disabled>Checkout</button>
          </dialog>
        </aside>
      </div>
    </nav>
  </header>
)}

export default Header;