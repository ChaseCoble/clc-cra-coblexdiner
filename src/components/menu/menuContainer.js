import React  from "react";
import  MenuNav from "./menuNav"
import MenuItem from "./menuItem";
import { queryCatalogue } from "../../catalogues/selectFromCatalogue";
import { useSelector } from "react-redux";


function MenuContainer() {
    const cartState = useSelector((state) => state.cartState);
    const menuState = useSelector((state) => state.menuState);
    const subCategories = "subCategories";
    const content = "content";
    console.log(menuState.menuState);
    console.log(menuState.subMenuState);
    const menuItemId = menuState.menuItemId;
    console.log(menuItemId);
    const menuItemContent = queryCatalogue(menuState.menustate, subCategories, menuState.subMenuState, content );
    const menuItemKeyList = menuItemContent.keys();
    const menuTitle = queryCatalogue( menuState.menuState, subCategories, menuState.subMenuState, "subCategoryName" );
    const menuStateTitle = queryCatalogue( menuState.menuState, "CategoryName");
    function menuItems () {
        while (menuItemId <= menuItemKeyList.length()) {
            MenuItem();
        } 
    }
    return(
        <div className = "menu-container">
            <div className = "menu-header">
                <div id = 'menu-state-title'> { menuStateTitle } </div>
                <div className = 'menu-nav-container'>
                    { MenuNav }
                </div>
                <div className = "menu-container-title">
                    <h1> { menuTitle } </h1>
                </div>
            </div>
            <div className = "menu-content">
                <div className = "menu-item-container">
                    { menuItems }
                </div>
                <div className = "featured-image-wrapper">
                    <img src="context sensitive images"></img>
                </div>
            </div>
            <div className = 'menu-footer'>
                <div id = 'greeting'>
                <p>Thank you so much for visiting us!</p>
                </div>
                <div id = "cart=modal-wrapper"></div>
                <div id = 'total-price-container'>{cartState.total}</div>
            </div>
        </div>
    
        )
    }

    export default MenuContainer;
