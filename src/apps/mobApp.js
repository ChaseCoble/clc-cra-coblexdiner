import React from 'react';

function mobApp() {
    return(
        <div id = "mobApp-container">
            <div id = "mobApp-header">
                <div id = "mobApp-logo">
                    Logo
                </div>
            </div>
            <div id = "mobApp-navbar">
                'Navbar(Shared)''
            </div>
            <div id = "mobApp-menu-container">
                MenuContainer
            </div>
            <div id = "mobApp-bottom-row">
                <div id = "cart-modal-wrapper">
                    CartModal
                </div>
                <div id = "mobApp-price-wrapper">
                    State Managed Price Total
                </div>
                <div id = "mobApp-chatbot-modal-wrapper">
                    ChatBotModal
                </div>
            </div>
        </div>
    )
}

export default mobApp;