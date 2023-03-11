import React from "react";
import MenuNav from "./menuNav";
import MenuItem from "./menuItem";
import Cart from "./cart";
import CartTotal from "./cartTotal";
import FeaturedImage from "./featuredImage";
import { queryCatalogue } from "../../catalogues/selectFromCatalogue";
import { useSelector } from "react-redux";

function MenuContainer() {
  const menuState = useSelector((state) => state.menuState);
  const menuTitle = queryCatalogue(
    menuState.menuState,
    "subCategories",
    menuState.subMenuState,
    "subCategoryName"
  );
  return (
    <div className="menu-container">
      <div className="menu-header">
        <div className="menu-nav-container">
          <MenuNav />
        </div>
      </div>
      <div id = "menu-box-wrapper">
        <div id = 'menu-left-column'>
          <div className="menu-container-title">
            <h1> {menuTitle} </h1>
          </div>
          <div className="menu-content">
            <div className="menu-item-wrapper">
              <MenuItem />
            </div>
          </div>
        </div>
        <div id = "menu-right-column">
          <div className="featured-image-wrapper">
            < FeaturedImage />
          </div>
        </div>
      </div>
      <div className="menu-footer">
        <div id="greeting">
          <p>Thank you so much for visiting us!</p>
        </div>
        <div id = 'cart-wrapper'>
            <Cart/>
            <CartTotal />
        </div>
      </div>
    </div>
  );
}

export default MenuContainer;
