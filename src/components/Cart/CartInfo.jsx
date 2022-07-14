import React from 'react'
import axios from "axios"
import getConfig from '../../utils/getConfig'
import { getAllProductsCart } from '../../store/slices/cart.slice'
import {useDispatch} from "react-redux"

const CartInfo = ({productcart}) => {

const dispatch = useDispatch()

  const deleteProductFromCart = (e) => {
    e.stopPropagation()

    const URL = `https://ecommerce-api-react.herokuapp.com/api/v1/cart/${productcart.id}`



    axios.delete(URL, getConfig())
      .then(res => {
        console.log(res.data)
        dispatch(getAllProductsCart())
      })
      .catch(err => console.log(err.data))
  }

  return (
    <article>
      <div className="cart__container-info">
        <h4 className="cart__brand">{productcart.brand}</h4>
        <h3 className="cart__title">{productcart.title}</h3>
        <h4 className="cart__quantity">
          {productcart.productsInCart.quantity}
        </h4>
      </div>
      <h4 className="cart__price"> $ {productcart.price}</h4>
      <button className="container-trash" onClick={deleteProductFromCart}>
        <i className="fa-solid fa-trash-can"></i>
      </button>
    </article>
  );
}

export default CartInfo
