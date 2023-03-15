import { createSlice } from "@reduxjs/toolkit";



const initialState = {
    menuState : 'aboutUs',
    subMenuState : 'introduction',
    chatMenuState : 'specialcontext',
    chatSubCategoryState : 'firstMeeting',
    tabId : 0,
    menuItemId : 0 
}
const menuSlice = createSlice({
    name: "menuState",
    initialState
    ,
    reducers : {
        updateMenuState : (state, action) => {
            state.menuState = action.payload;
        },
        updateSubMenuState : (state, action) => {
            state.subMenuState = action.payload;
        },
        updateSubMenuStateProps : (state, action) => {
            state.subMenuStateProps = action.payload;
        },
        updateChatMenuState : ( state, action ) => {
            state.chatMenuState = action.payload;
        },
        updateChatSubCategoryState : ( state, action ) => {
            state.chatSubCategoryState = '';
            state.chatSubCategoryState = action.payload;
        },
        incrementTabId : (state) => {
            state.tabId++;
        },
        incrementMenuItemId : (state) => {
            state.menuItemId++;
        },
        resetIds : (state) => {
            state.menuItemId = 0;
            state.tabId = 0;
        }
    }
});

export const { updateMenuState, updateChatMenuState, updateChatSubCategoryState, updateSubMenuState, incrementTabId, incrementMenuItemId, resetIds } = menuSlice.actions;
export default menuSlice.reducer;
