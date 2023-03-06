import React  from "react";
import  MenuNav from "./menuNav"
import MenuItem from "./menuItem";
import { queryCatalogue } from "../../catalogues/selectFromCatalogue";
import { useSelector } from "react-redux";


function MenuContainer() {
    const cartState = useSelector((state) => state.cartState);
    const menuState = useSelector((state) => state.menuState);
    console.log(menuState.menuState);
    console.log(cartState.total);
    console.log(menuState.subMenuState);
    console.log(queryCatalogue(menuState.menuState, 'subCategories', menuState.subMenuState, 'content' ))
    const menuItemContent = queryCatalogue(menuState.menuState, 'subCategories', menuState.subMenuState, 'content' );
    const menuItemKeyList = Object.keys(menuItemContent);
    console.log(menuItemKeyList);
    const menuTitle = queryCatalogue( menuState.menuState, 'subCategories', menuState.subMenuState, "subCategoryName" );
    const menuStateTitle = queryCatalogue( menuState.menuState, "CategoryName");
    const cartTotal = cartState.total;
    return(
        <div className = "menu-container">
            <div className = "menu-header">
                <div id = 'menu-state-title'> { menuStateTitle } </div>
                <div className = 'menu-nav-container'>
                    < MenuNav />
                </div>
                <div className = "menu-container-title">
                    <h1> { menuTitle } </h1>
                </div>
            </div>
            <div className = "menu-content">
                <div className = "menu-item-container">
                    < MenuItem />
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
                <div id = 'total-price-container'>{cartTotal}</div>
            </div>
        </div>
    
        )
    }

    export default MenuContainer;
