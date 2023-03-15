import React , { useState } from 'react';
import MenuContainer from '../components/menu/menuContainer'
import NavBar from '../components/navBar'
import ChatBot from '../components/chatBot'
import ReactModal from 'react-modal';
import  logo  from "../helpers/images/logo.jpg";

function MobileApp() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    return(
        <div id = "mobileApp-container">
            <div id = "mobileApp-header">
                <div id = "mobileApp-logo">
                    <img src = { logo } alt = "Coble X Diner" className = "clickable" />
                </div>
            </div>
            <div id = "mobileApp-navbar">
                <NavBar />
            </div>
            <div id = "mobileApp-menu-container">
                <MenuContainer/>            
            </div>
            <div id = "mobileApp-bottom-row">
                <div id = "mobileApp-chatbot-modal-wrapper">
                <button onClick={() => setIsModalOpen(true)}>Chat with a seemingly real Server!</button>
            <ReactModal 
                isOpen={isModalOpen}
                shouldCloseOnOverlayClick={true}
                onRequestClose={() => setIsModalOpen(false)}>
                    <ChatBot />
            </ReactModal>
                </div>
            </div>
        </div>
    )
}

export default MobileApp;