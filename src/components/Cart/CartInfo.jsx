import React from 'react'

const CartInfo = ({productcart}) => {

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
      <div className="container-trash">
        <i className="fa-solid fa-trash-can"></i>
      </div>
    </article>
  );
}

export default CartInfo
