import React from 'react';
import MenuContainer from '../components/menu/menuContainer'
import NavBar from '../components/navBar'
import ChatBot from '../components/chatbot'
import { queryCatalogue } from '../catalogues/selectFromCatalogue';

function DtApp() {
    const contactInformation = queryCatalogue('aboutUs', 'subCategories', 'contactHours', 'content', 'contactContent')
    return(
        <div id = "dtapp-container">
            <div id = 'dtApp-header'>
                <div id = 'dtApp-logo'> "Logo" </div>
                < NavBar />
                <div id = "dtApp-motto">
                    <p> Fed like Kings, Taught like Students, Loved like Family </p>
                </div>
            </div>
            <div id = "dtApp-content">
                <ChatBot />
                <MenuContainer />
            </div>
            <div id = "dtApp-footer">
                <div id = "dtApp-contact-wrapper"> 
                    <p>Contact Information</p>
                    {contactInformation.desc}
                </div>
                <div id = "dtApp-copyright-wrapper"> Copyright </div>
            </div>
        </div>
    );
}

export default DtApp;