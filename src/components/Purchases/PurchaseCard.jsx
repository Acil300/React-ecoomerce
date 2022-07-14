import React from 'react'
import { Link } from 'react-router-dom';
import ProductPurchase from './ProductPurchase';

const PurchaseCard = ({purchaseInfo}) => {
  // console.log(purchaseInfo)

  return (
    <div className="purchase-card">
      <article>
        <h2 className="purchase-card__date">{purchaseInfo?.updatedAt}</h2>

        {purchaseInfo.cart.products.map((product) => (
          <div key={product.id}>
            <ProductPurchase product={product} />
          </div>
        ))}
      </article>
    </div>
  );
}

export default PurchaseCard
