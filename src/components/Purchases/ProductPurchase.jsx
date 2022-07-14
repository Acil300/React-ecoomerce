import React from 'react'


const ProductPurchase = ({product}) => {
  //  console.log(product)
  return (
    <section className="product-purchases__container-general">
      <ul className="product-purchases__container-info">
        <li>
          <h2 className="product-purchase__title">
            {product.title}
          </h2>
        </li>
        <li className="product-purchase__container-quantity">
          <h3 className="product-purchase__quantity">
            {product.productsInCart.quantity}
          </h3>
        </li>
        <li>
          <h3 className="product-purchase__price-product">
            $ {product.price}
          </h3>
        </li>
      </ul>


    </section>
  );
}

export default ProductPurchase
