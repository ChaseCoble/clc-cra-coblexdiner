import React from "react";
import { useSelector } from "react-redux";
import selectChatbotDialogue from "../catalogues/selectChatbotDialogue";

function ChatBot() {
    console.log("Chat Bot mounted");
    const menuState = useSelector((state) => state.menuState);
    console.log(menuState.chatMenuState);
    console.log(menuState.chatSubCategoryState);
    const chatContent = selectChatbotDialogue(menuState.chatMenuState, menuState.chatSubCategoryState)
    console.log(chatContent);

    return (
        <div className = "chat-wrapper">
            <div className = "chat-header-wrapper">
                <div className = "chat-thumbnail-wrapper">
                    <img src = "holder" />
                </div>
                <div className = "chat-precontent-wrapper">
                    <h1>"Turing says ..."</h1>
                </div>
            </div>
            <div className = "chat-content-wrapper">
                <p> {selectChatbotDialogue(menuState.chatMenuState, menuState.chatSubCategoryState)} </p>
            </div>
        </div>
    )
}

export default ChatBot
