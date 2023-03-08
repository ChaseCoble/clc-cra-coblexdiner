import React from "react";
import { useSelector } from "react-redux";

function CartTotal() {
  const cartState = useSelector((state) => state.cartState);

  function calculateTotal() {
    let total = 0;
    const priceList = cartState.price;
    for (let i = 0; i < priceList.length; i++) {
      total += priceList[i];
    }
    console.log("priceList:", priceList);
    console.log("total:", total);
    return total;
  }

  console.log("cartState:", cartState);

  return <div>${calculateTotal().toFixed(2)}</div>;
}

export default CartTotal;
