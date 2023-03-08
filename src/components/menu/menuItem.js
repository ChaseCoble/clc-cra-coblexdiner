import React from "react";
import { queryCatalogue } from "../../catalogues/selectFromCatalogue"
import { useSelector, useDispatch } from "react-redux"
import { addItem, addCost } from "../../features/cartSlice"
import { updateChatSubCategoryState } from "../../features/menuStatesSlice";

 

function MenuItem() {
    console.log("MenuItem mounted");
    const menuState = useSelector((state) => state.menuState);
    const menuItemContent = queryCatalogue(menuState.menuState, 'subCategories', menuState.subMenuState, 'content' );
    const menuItemKeyList = Object.keys(menuItemContent);
    const dispatch = useDispatch();
    console.log(menuItemKeyList);

    function handleClick(clickedItem) {
        const priceDataString = clickedItem.dataset.price
        const priceFloat = parseFloat(priceDataString);
        dispatch(addItem(clickedItem.dataset.name));
        dispatch(addCost(priceFloat));
        dispatch(updateChatSubCategoryState(menuState.subMenuState));
    }

    const menuItems = menuItemKeyList.map((key) => {
        const menuItemQuery = queryCatalogue(menuState.menuState, 'subCategories', menuState.subMenuState, 'content', key);
        const menuItemName = menuItemQuery.name;
        const menuItemDesc = menuItemQuery.desc;
        var menuItemPrice = 0;
        if (menuItemQuery.price !== 0) {
            menuItemPrice = '$' + menuItemQuery.price.toFixed(2);
            return (
                <div key={key} className="menu-item-container">
                    <div className="menu-item-name">{menuItemName}</div>
                    <div className="menu-item-price">{menuItemPrice}</div>
                    <div className="menu-item-desc">{menuItemDesc}</div>
                    <button className="btn buy-btn" data-name={menuItemName} data-price={menuItemQuery.price} onClick={(e) => handleClick(e.currentTarget)}>Purchase</button>
                </div>
            );
        } else {
            return (
                <div key={key} className="menu-item-container">
                    <div className="menu-item-name">{menuItemName}</div>
                    <div className="menu-item-desc">{menuItemDesc}</div>
                </div>
            );
        }
    });

    return <div>{menuItems}</div>;
}

export default MenuItem;


