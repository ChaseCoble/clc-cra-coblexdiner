import { queryCatalogue } from "../../catalogues/selectFromCatalogue"
import { useSelector, useDispatch } from "react-redux";
import { updateSubMenuState , updateChatSubCategoryState } from "../../features/menuStatesSlice";

function MenuNav() {
    console.log("MenuNav mounted");
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
                className={`menu-tab ${menuState.subMenuState === key ? 'selected-tab' : ''}`}
                onClick={() => handleOnClick(tabData)}
                data-sub-menustate={tabData}
            >
                {tabContent}
            </div>
        );
    });

    return <div>{menuTabs}</div>;
}

export default MenuNav;