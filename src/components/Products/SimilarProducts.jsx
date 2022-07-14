import React, { useEffect, useState } from 'react'
import { useSelector } from "react-redux";
import ProductCard from '../Home/ProductCard';

const SimilarProducts = ({product}) => {

  const allProducts = useSelector(state => state.products)
  const [filterProducts, setFilterProducts] = useState()

  useEffect(() => {
    if (allProducts.lenght !== 0) {
    const filter = allProducts?.filter(e => e.category?.name === product?.category)
    setFilterProducts(filter)
  }
  }, [product])

  // console.log(filterProducts)

  return (
    <div>
      <article className="similar-products">
        <h2 className="similar-products__title">Discover Similar Items</h2>
        <div className="products-container">
          {
            filterProducts?.map((e) =>{
              if (e.title !== product.title) {
                return (
                  <ProductCard key={e.id} product={e} />
                )
              }
            })
          }
        </div>
      </article>
    </div>
  );
}

export default SimilarProducts
