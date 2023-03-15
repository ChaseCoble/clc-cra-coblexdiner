import React from 'react';
import MenuContainer from '../components/menu/menuContainer'
import NavBar from '../components/navBar'
import ChatBot from '../components/chatbot.js'
import  logo  from "../helpers/images/logo.jpg";
import { useDispatch } from 'react-redux';
import { updateMenuState, updateChatMenuState, updateSubMenuState, updateChatSubCategoryState } from '../redux/features/menuStatesSlice';

function DesktopApp() {
    const dispatch = useDispatch();
    function logoClick() {
        dispatch(updateChatMenuState("aboutUs"));
        dispatch(updateMenuState('aboutUs'));
        dispatch(updateChatSubCategoryState('introduction'));
        dispatch(updateSubMenuState('introduction'));
    }
    return(
        <div id = "desktopApp-container">
            <div id = 'desktopApp-header'>
                <div id = 'desktopApp-logo'> <img src = {logo} alt = 'Coble X Diner' onClick = {logoClick} className = "clickable" /> </div>
                <div id = "desktopApp-motto">
                    <p> Fed like Kings, Taught like Students, Loved like Family </p>
                </div>
            </div>
            <div id = 'desktopApp-navbar-wrapper'> < NavBar /> </div>
            <div id = "desktopApp-content">
                <ChatBot />
                <MenuContainer />
            </div>
            <div id = "desktopApp-footer">
                <div id = "desktopApp-copyright-wrapper"> Copyrighted by CobleXDevelopment </div>
            </div>
        </div>
    );
}

export default DesktopApp;