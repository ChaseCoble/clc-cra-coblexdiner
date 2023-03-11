import React , { useState } from 'react';
import MenuContainer from '../components/menu/menuContainer'
import NavBar from '../components/navBar'
import ChatBot from '../components/chatbot'
import ReactModal from 'react-modal';
import  logo  from "../helpers/images/logo.jpg";

function MobApp() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    return(
        <div id = "mobApp-container">
            <div id = "mobApp-header">
                <div id = "mobApp-logo">
                    <img src = { logo } alt = "Coble X Diner" />
                </div>
            </div>
            <div id = "mobApp-navbar">
                <NavBar />
            </div>
            <div id = "mobApp-menu-container">
                <MenuContainer/>            
            </div>
            <div id = "mobApp-bottom-row">
                <div id = "mobApp-chatbot-modal-wrapper">
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

export default MobApp;