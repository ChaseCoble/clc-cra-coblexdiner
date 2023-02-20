import { createSlice } from "@reduxjs/toolkit";
import selectChatbotDialogue from '../catalogues/selectChatbotDialogue'; 

const menuSlice = createSlice({
    name: "menuState",
    initialState: {
        value : {
            menuState : 'specialContext',
            subMenuState : 'firstMeeting',
            chatContent : '',
            subMenuStateProps : '',
            tabId : 0,
            menuItemId : 0 
        }
    },
    reducers: {
        updateMenuState : (state, action) => {
            state.menuState = action.payload;
        },
        updateSubMenuState : (state, action) => {
            state.subMenuState = action.payload;
        },
        updateSubMenuStateProps : (state, action) => {
            state.subMenuStateProps = action.payload;
        },
        updateChatContent : ( state ) => {
            state.chatContent = selectChatbotDialogue(state.menuState, state.subMenuState);
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

export const { updateMenuState, updateChatContent, updateSubMenuState, incrementTabId, incrementMenuItemId, resetIds } = menuSlice.actions;
export default menuSlice.reducer;
