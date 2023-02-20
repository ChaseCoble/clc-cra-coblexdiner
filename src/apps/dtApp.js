import React from 'react';

function dtApp() {
    return(
        <div id = "dtapp-container">
            <div id = 'dtApp-header'>
                <div id = 'dtApp-logo'> "Logo" </div>
                {/* <NavBar /> */}
                Navbar Components
                <div id = "dtApp-motto">
                    <p> Fed like Kings, Taught like Students, Loved like Family </p>
                </div>
            </div>
            <div id = "dtApp-content">
                {/* <ChatBot />
                <MenuContainer /> */}
                Chatbot and MenuContainer Components
            </div>
            <div id = "dtApp-footer">
                <div id = "dtApp-contact-wrapper"> Contact Information </div>
                <div id = "dtApp-copyright-wrapper"> Copyright </div>
            </div>
        </div>
    );
}

export default dtApp;