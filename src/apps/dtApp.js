import React from 'react';
import MenuContainer from '../components/menu/menuContainer'
import NavBar from '../components/navBar'
import ChatBot from '../components/chatbot'
import { queryCatalogue } from '../catalogues/selectFromCatalogue';
import  logo  from "../helpers/images/logo.jpg";

function DtApp() {
    const contactInformation = queryCatalogue('aboutUs', 'subCategories', 'contactHours', 'content', 'contactContent')
    const contactDesc = contactInformation.desc;
    return(
        <div id = "dtapp-container">
            <div id = 'dtApp-header'>
                <div id = 'dtApp-logo'> <img src = {logo} alt = 'Coble X Diner' /> </div>
                <div id = "dtApp-motto">
                    <p> Fed like Kings, Taught like Students, Loved like Family </p>
                </div>
            </div>
            <div id = 'dtApp-navbar-wrapper'> < NavBar /> </div>
            <div id = "dtApp-content">
                <ChatBot />
                <MenuContainer />
            </div>
            <div id = "dtApp-footer">
                <div id = "dtApp-contact-wrapper"> 
                    <p>Contact Information</p>
                    <ul style={{ listStyleType: 'none'}}>
                        {contactDesc.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
                <div id = "dtApp-copyright-wrapper"> Copyright </div>
            </div>
        </div>
    );
}

export default DtApp;