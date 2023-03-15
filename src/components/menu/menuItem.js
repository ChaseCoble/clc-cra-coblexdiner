import React from "react";
import { queryCatalogue } from "../../catalogues/selectFromCatalogue"
import { useSelector, useDispatch } from "react-redux"
import { addItem, addCost } from "../../redux/features/cartSlice"
import { updateChatSubCategoryState } from "../../redux/features/menuStatesSlice";

 

function MenuItem() {
    const menuState = useSelector((state) => state.menuState);
    const menuItemContent = queryCatalogue(menuState.menuState, 'subCategories', menuState.subMenuState, 'content' );
    const menuItemKeyList = Object.keys(menuItemContent);
    const dispatch = useDispatch();

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
            if ( Array.isArray(menuItemDesc) !== true ) {
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
                        <div className="menu-item-price">{menuItemPrice}</div>
                        <div className="menu-item-desc">
                            <ul style={{ listStyleType: 'none'}}>
                                {menuItemDesc.map((item, index) => (
                                <li key={index}>{item}</li>
                                ))}
                            </ul>
                        </div>
                        <button className="btn buy-btn" data-name={menuItemName} data-price={menuItemQuery.price} onClick={(e) => handleClick(e.currentTarget)}>Purchase</button>
                    </div>
                );  
            }
        } else {
            if ( Array.isArray(menuItemDesc) !== true ) {
                return (
                    <div key={key} className="menu-item-container">
                        <div className="menu-item-name">{menuItemName}</div>
                        <div className="menu-item-desc">{menuItemDesc}</div>
                    </div>
                );
            } else {
                return (
                    <div key={key} className="menu-item-container">
                        <div className="menu-item-name">{menuItemName}</div>
                        <div className="menu-item-desc">
                            <ul style={{ listStyleType: 'none'}}>
                                {menuItemDesc.map((item, index) => (
                                <li key={index}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                )
            }
        };
    });
    return <div id= 'menu-item-content-wrapper'>{menuItems}</div>;
}

export default MenuItem;


