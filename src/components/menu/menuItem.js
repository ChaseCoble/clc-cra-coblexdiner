import React from "react";
import { queryCatalogue } from "../../catalogues/selectFromCatalogue"
import { useSelector, useDispatch } from "react-redux"
import { addItem, addCost } from "../../features/cartSlice"
import { incrementMenuItemId } from "../../features/menuStatesSlice";
 

function MenuItem() {
    const menuState = useSelector((state) => state.menuState);
    const menuItemId = menuState.menuItemId;
    const menuItemContent = queryCatalogue(menuState.menustate, "subCategories", menuState.subMenuState, "content" );
    const menuItemKeyList = menuItemContent.keys();
    const dispatch = useDispatch();
    const menuItemQuery = queryCatalogue(menuState.menustate, "subCategories", menuState.subMenuState, "content", menuItemKeyList[menuItemId]);
    const menuItemName = menuItemQuery.name;
    const menuItemPrice = menuItemQuery.price.toString();
    const menuItemDesc = menuItemQuery.desc;
    const menuItemContainerSelector = Document.querySelector('.menu-item-container');
    menuItemContainerSelector.id("menu-item-container-" + menuItemId.toString());
    const menuItemContainerSelectById = Document.getElementById("menu-item-container-" + menuItemId.toString())
    menuItemContainerSelectById.setAttribute('data-name' , menuItemName );
    menuItemContainerSelectById.setAttribute('data-price' , menuItemQuery.price );
    const buyButton = menuItemContainerSelectById.querySelector('.buy-btn');
    buyButton.addEventListener("click", () => {
        const clickedItemId = buyButton.target.id;
        handleClick(  clickedItemId  );
    });
    
    function handleClick( clickedItem) {
        dispatch(addItem(clickedItem.dataset.name));
        dispatch(addCost(clickedItem.dataset.price));
    };
    dispatch(incrementMenuItemId);

    return(
        <div className = "menu-item-container">
            <div className = "menu-item-name"> {menuItemName} </div>
            <div className = "menu-item-price"> {menuItemPrice}</div>
            <div className = "menu-item-desc"> {menuItemDesc} </div>
            <button className = 'btn buy-btn'>Purchase</button>
        </div>
    )
}

export default MenuItem
