import React, { useEffect } from 'react'
import axios from "axios";
import { Link, NavLink, useNavigate } from 'react-router-dom';
import getConfig from "../../utils/getConfig";
import { useDispatch } from "react-redux";
import { getAllProductsCart } from "../../store/slices/cart.slice"


const ProductCard = ({product}) => {
  // console.log(product)
  const navigate = useNavigate()
  const goToProductId = () => {
    navigate(`/products/${product.id}`)
  }

  const dispatch = useDispatch();

  const addCartProduct = (e) => {
    e.stopPropagation()

    const URL = "https://ecommerce-api-react.herokuapp.com/api/v1/cart"

    const listProduct = {
      id: product.id,
      quantity: 1,
    };
    // console.log(listProduct)

    axios.post( URL,
        listProduct,
        getConfig()
      )
      .then(res => {
        dispatch(getAllProductsCart())
        console.log(res.data)})
      .catch(err => console.log(err.data))
  }

  return (
    <article onClick={goToProductId} className="card-product">
      <div className="card-product__header">
        <img
          className="card-product__img-back"
          src={product.productImgs[1]}
          alt="imagenes-productos-tecnologicos"
        />
        <img
          className="card-product__img"
          src={product.productImgs[0]}
          alt="imagenes-productos-tecnologicos"
        />
      </div>
      <div className="card-product__container-info">
        <h2 className="card-product__title">{product.title}</h2>
        <h3 id="card-product__subtitle">
          <b>Description:</b>
        </h3>
        <h2 className="card-product__description">{product.description}</h2>
        <div className="card-product__price-container">
          <h3 className="card-product__price-label">
            <b>Price:</b>
          </h3>
          <h4 className="card-product__price-number">$ {product?.price}</h4>
        </div>
        <button className="card-product__btn" onClick={addCartProduct}>
          <i className="fa-solid fa-cart-shopping"></i>
        </button>
      </div>
    </article>
  );
}

export default ProductCard
