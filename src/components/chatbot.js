import React from "react";
import { useSelector } from "react-redux";
import selectChatbotDialogue from "../catalogues/selectChatbotDialogue";
import robotIcon from "../helpers/images/icons/roboticon.png"

function ChatBot() {
    const menuState = useSelector((state) => state.menuState);

    return (
        <div className = "chat-wrapper">
            <div id = "chat-header-wrapper">
                <div id = "chat-thumbnail-wrapper">
                    <img src = {robotIcon} alt="chatbot icon" />
                </div>
                <div id = "chat-precontent-wrapper">
                    <h1>Turing says ...</h1>
                </div>
            </div>
            <div className = "chat-content-wrapper">
                <p> {selectChatbotDialogue(menuState.chatMenuState, menuState.chatSubCategoryState)} </p>
            </div>
            <div id = 'chat-helper' />
        </div>
    )
}

export default ChatBot
