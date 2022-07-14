import axios  from 'axios';
import React from 'react'
import { useEffect } from 'react';
import './style/cartscreen.css'
import getConfig  from '../../utils/getConfig'
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import CartInfo from '../Cart/CartInfo'
import { setCartGlobal } from "../../store/slices/cart.slice"



const CartScreen = () => {


  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart)


  const postpurchases =() =>{
    const URL = "https://ecommerce-api-react.herokuapp.com/api/v1/purchases";

const objPurchases = {
  street: "Green St. 1456",
  colony: "Southwest",
  zipCode: 12345,
  city: "USA",
  references: "Some references",
};

    axios.post(URL, objPurchases,getConfig())
      .then(res => {
        console.log(res.data)
        dispatch(setCartGlobal(null))
      })
      .catch(err => console.log(err.data))
}


const goToPurchase = () => {
  navigate('/purchases')
}


  return (
    <article onClick={goToPurchase}>
      <h3 className="title-all">My Cart</h3>
      {cart?.map((productcart) => (
        <div className="cart__container" key={productcart.id}>
          <CartInfo productcart={productcart} />
        </div>
      ))}
      <div className="btn-container">
        <button onClick={postpurchases} className="btn-buy">
          <h2>Buy All</h2>
        </button>
      </div>

    </article>
  );
}

export default CartScreen
