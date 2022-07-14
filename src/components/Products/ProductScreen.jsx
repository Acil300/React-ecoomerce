import React, { useEffect, useState } from 'react'
import { Link, NavLink, useParams } from "react-router-dom";
import axios from "axios";
import '../Products/productsScreen.css'
import SimilarProducts from './SimilarProducts'
import getConfig from '../../utils/getConfig'
import { getAllProductsCart } from "../../store/slices/cart.slice";
import { useDispatch } from "react-redux"


const classImg = ['','second-img','third-img']


const ProductScreen = () => {
  const [productScreen, setProductScreen] = useState();
  const [indexClass, setIndexClass] = useState(0);
  const [counter, setCounter] = useState(1);

  const { id } = useParams()
  const dispatch = useDispatch()



  // funcion para traer todos los productos

  useEffect(() => {
    axios
      .get(`https://ecommerce-api-react.herokuapp.com/api/v1/products/${id}`)
      .then((res) => setProductScreen(res.data.data.product))
      .catch((err) => console.log(err));
  }, [id]);
  // console.log(productScreen)
  // console.log(indexClass);

  //funcion Contador

  const clickNext = () => {
    const nextClass = indexClass + 1;
    if (nextClass >= classImg.lenght) {
      setIndexClass(0);
    } else {
      setIndexClass(nextClass);
    }
  };
  const prevClick = () => {
    const prevClass = indexClass - 1;
    if (prevClass < 0) {
      setIndexClass(classImg.length - 1);
    } else {
      setIndexClass(prevClass);
    }
  };
  const click = () => {
    setCounter(counter + 1);
  };
  const clickMinus = () => {
    setCounter(counter - 1);
    if (counter <= 1) {
      setCounter(1);
    }
  };
  // funcion agregar algo al carrito


  const addToCart = () => {

    const URL = "https://ecommerce-api-react.herokuapp.com/api/v1/cart"

    const addNewProduct = {
      id: productScreen.id,
      quantity: counter,
    }
    // console.log(addProduct)
    // console.log(productScreen);

    axios
      .post(URL, addNewProduct, getConfig())
      .then((res) => {
        console.log(res.data)
        dispatch(getAllProductsCart())
      })
      .catch((err) => console.log(err.data));
  }

  return (
    <div className="product___id-product">
      <div className="slider">
        <div className="slider__prev" onClick={prevClick}>
          &#60;
        </div>
        <div className={`slider__container ${classImg[indexClass]}`}>
          {productScreen?.productImgs.map((productImg) => (
            <div key={productImg}>
              <div className="product__container-link">
                <Link to="/" className="product__link-home">
                  Home
                </Link>
                <span className="product__point-color"></span>
                <h6 className="product__title-link">{productScreen.title}</h6>
              </div>
              <img src={productImg} alt="" className="slider__imgs" />
              <div className="points__container">
                <div className="points" onClick={() => setIndexClass(0)}></div>
                <div className="points" onClick={() => setIndexClass(1)}></div>
                <div className="points" onClick={() => setIndexClass(2)}></div>
              </div>
              <div className="slider__container-info">
                <h1 className="slider__title">{productScreen.title}</h1>
                <div className="slider__container-price">
                  <h2 className="slider__title-price">Price</h2>
                  <h2 className="slider__price-number">
                    $ {productScreen.price}
                  </h2>
                </div>
                <div className="slider__container-counter">
                  <button onClick={clickMinus} className="btn-minus">
                    &#45;
                  </button>
                  <div className="slider__counter-render">
                    <h2 className="slider__number">{counter}</h2>
                  </div>
                  <button onClick={click} className="btn-plus">
                    &#43;
                  </button>
                </div>
                <h2 className="slider__description">
                  {productScreen.description}
                </h2>
                <div className="slider__container-btn">
                  <button className="slider__btn" onClick={addToCart}>
                  Add to Cart
                    <i className="fa-solid fa-cart-shopping"></i>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="slider__next" onClick={clickNext}>
          &#62;
        </div>
      </div>
      <SimilarProducts product={productScreen} />
    </div>
  );
}

export default ProductScreen
