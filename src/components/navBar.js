import { queryCatalogue } from "../catalogues/selectFromCatalogue"
import { useSelector, useDispatch } from "react-redux";
import { updateMenuState , updateChatMenuState, updateChatSubCategoryState, updateSubMenuState } from "../features/menuStatesSlice";

function NavBar() {
    console.log("navBar mounted");
    const menuState = useSelector((state) => state.menuState);
    const dispatch = useDispatch();
    const categories = queryCatalogue();
    const categoryKeyList = Object.keys(categories);

    const handleOnClick = (navEntryData) => {
        dispatch(updateMenuState(navEntryData));
        dispatch(updateChatMenuState(navEntryData));
        console.log(menuState.chatMenuState + "is the updated Chat Menu State");
        dispatch(updateChatSubCategoryState('introduction'));
        dispatch(updateSubMenuState("introduction"))
    };

    const navEntries = categoryKeyList.map((key) => {
        const navContent = queryCatalogue(key, "categoryName")
        const navData = key;

        return (
            <div
                key={key}
                className={`menu-tab ${menuState.menuState === key ? 'selected-tab' : ''}`}
                onClick={() => handleOnClick(navData)}
                data-sub-menu-state={navData}
            >
                {navContent}
            </div>
        );
    });

    return <div>{navEntries}</div>;
}

export default NavBar;