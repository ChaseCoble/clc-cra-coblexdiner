import React, {useState} from 'react';
import { useSelector, useDispatch } from "react-redux";
import { v4 as uuidv4 } from 'uuid';
import { clearCart } from '../../features/cartSlice';
import { updateChatMenuState, updateChatSubCategoryState, updateMenuState, updateSubMenuState } from '../../features/menuStatesSlice';
import ReactModal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
function Cart() {
    const cartIcon = <FontAwesomeIcon onClick={() => setIsModalOpen(true)} icon = { faShoppingCart } />
    const cartState = useSelector((state) => state.cartState);
    const menuState = useSelector((state) => state.menuState);
    const dispatch = useDispatch();
    const [isModalOpen, setIsModalOpen] = useState(false);
    function cartItemObject(array1, array2) {
        const cartItemArray = [];
      
        for (let i = 0; i < array1.length; i++) {
          cartItemArray.push({
            name: array1[i],
            price: array2[i]
          });
        }
      
        return cartItemArray;
    }
      
    function handlePurchaseClick() {
        dispatch(updateChatMenuState('specialcontext'))
        dispatch(updateChatSubCategoryState('checkout'))
        if (window.confirm('Do you want to purchase this order?')) {
            dispatch(clearCart());
            dispatch(updateChatSubCategoryState('checkoutComplete'));
            setIsModalOpen(false);
            dispatch(updateMenuState('aboutUs'));
            dispatch(updateSubMenuState('introduction'));
        } else {
            dispatch(updateChatMenuState(menuState.menuState))
            dispatch(updateChatSubCategoryState('introduction'))
        }
    }
    function handleClearClick() {
        if (window.confirm('Do you want to clear the cart?')) {
            dispatch(clearCart());
            dispatch(updateChatMenuState('specialcontext'))
            dispatch(updateChatSubCategoryState('clearOrder'))
            setIsModalOpen(false);
        }      
    }
    function cartSum() {
        let total = 0;
        const priceList = cartState.price;
        for (let i = 0; i < priceList.length; i++) {
            total += priceList[i];
        }
        return total;
    }
    function cartList() {
        const items = cartItemObject(cartState.cartItems, cartState.price).map((item) => 
          <li key={uuidv4()} className='cart-list-item'>
            <div className='cart-item-name'>{item.name}</div>
            <div className='cart-item-price'>${item.price}</div>
          </li>
        );
        if (cartState.cartItems.length === 0) {
          return (
            <p>You haven't selected any menu items! Feel free to peruse the menu.</p>
          ); 
        } else {
          return (
            <ul>
              {items}
            </ul>
          ); 
        }
    }
      
    return (
        <div className = 'cart-modal-wrapper'>
            {cartIcon}
            <ReactModal 
                isOpen={isModalOpen}
                shouldCloseOnOverlayClick={true}
                onRequestClose={() => setIsModalOpen(false)}>
                <div className= 'cart-wrapper'>
                    <h1>Cart</h1>
                    <div id='cart-list'>{cartList()}</div>
                    <div id='cart-total'>Total = ${cartSum().toFixed(2)}</div>
                    <div id='cart-btn-wrapper'> 
                        <button type='button' id='cart-purchase' className='btn' onClick={() => handlePurchaseClick()}>Purchase Order</button>
                        <button type='button' id='cart-cancel' className='btn' onClick={() => handleClearClick()}>Clear Cart</button>
                    </div>
                </div>
            </ReactModal>
        </div>
        );
    }

    export default Cart