import React from "react";
import { queryCatalogue } from "../../catalogues/selectFromCatalogue"
import { useSelector, useDispatch } from "react-redux";
import { updateSubMenuState, incrementTabId, resetIds } from "../../features/menuStatesSlice";

function MenuNav() {
    const menuState = useSelector((state) => state.menuState);
    const tabId = menuState.tabId;
    const dispatch = useDispatch();
    const subCategories = queryCatalogue( menuState.menuState, "subCategories" )
    const subCategoryKeyList = subCategories.keys();
    function createMenuTab() {
        console.log(subCategoryKeyList);
        const tabContent = queryCatalogue( menuState.menuState, "subCategories", subCategoryKeyList[tabId], "subCategoryName" )
        const tabData = subCategoryKeyList[tabId];
        console.log(tabContent, tabData);
        const newTab = document.createElement('div')
        newTab.innerHTML = tabContent;
        newTab.id = "menu-tab-" + tabId.toString();
        newTab.setAttribute('data-sub-menu-state', tabData );
        newTab.classList.add('menu-tab');
        newTab.addEventListener("click", () => {
            const clickedTabId = newTab.target.id;
            handleOnClick(  clickedTabId  );
        });
        dispatch(incrementTabId)
    };
    function createMenuTabs() {
        while (tabId <= subCategoryKeyList.length) {
            createMenuTab();
        };
    };
    
    function handleOnClick( tabIdentifier ) {
        const allTabs = document.getElementsByClassName('menu-tab');
        allTabs.classList.remove('selected-tab');
        dispatch(updateSubMenuState(tabIdentifier.dataset.subMenuState));
        tabIdentifier.classList.add("selected-tab");
        dispatch(resetIds);
    };

    return (
        <div id = "menu-tab-wrapper"> {createMenuTabs} </div>
    )
}

export default MenuNav;