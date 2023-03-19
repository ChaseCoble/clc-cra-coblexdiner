import { queryCatalogue } from "../../catalogues/selectFromCatalogue"
import { useSelector, useDispatch } from "react-redux";
import { updateSubMenuState } from "../../redux/features/menuStatesSlice";

function MenuNav() {
    const menuState = useSelector((state) => state.menuState);
    const dispatch = useDispatch();
    const subCategories = queryCatalogue(menuState.menuState, "subCategories")
    const subCategoryKeyList = Object.keys(subCategories);

    const handleOnClick = (tabData) => {
        dispatch(updateSubMenuState(tabData));
    
    };

    const menuTabs = subCategoryKeyList.map((key) => {
        const tabContent = queryCatalogue(menuState.menuState, "subCategories", key, "subCategoryName")
        const tabData = key;

        return (
            <div
                key={key}
                className={`menu-tab ${menuState.subMenuState === key ? 'selected-tab' : ''} nav-tab clickable`}
                onClick={() => handleOnClick(tabData)}
                data-sub-menustate={tabData}
            >
                {tabContent}
            </div>
        );
    });

    return ( 
        <div id = "menu-tab-wrapper">
            <div id = "menu-tabs">{menuTabs}</div>
            <div id = "menu-tab-filler"></div>
        </div>
    )
}

export default MenuNav;