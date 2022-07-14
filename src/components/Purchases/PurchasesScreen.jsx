import axios from 'axios'
import React, { useEffect, useState } from 'react'
import getConfig from '../../utils/getConfig'
import PurchaseCard from './PurchaseCard'
import {Link} from 'react-router-dom'
import './stylePurchases.css'


const PurchasesScreen = () => {

  const [purchases, setPurchases] = useState()

  useEffect(() => {
    const URL = "https://ecommerce-api-react.herokuapp.com/api/v1/purchases"
    axios
      .get(URL, getConfig())
      .then(res => setPurchases(res.data.data.purchases))
      .catch(err => console.log(err.data))
  }, [])

// codigo para post
  // useEffect(() => {

  //   const URL = "https://ecommerce-api-react.herokuapp.com/api/v1/purchases";
  //   const obj = {
  //     street: "Green St. 1456",
  //     colony: "Southwest",
  //     zipCode: 12345,
  //     city: "USA",
  //     references: "Some references",
  //   }

  //   axios.post(URL, obj, getConfig())
  //     .then((res) => console.log(res.data))
  //     .catch(err => console.log(err))

  // }, []);

  // console.log(purchases)
  return (
    <div className="purchases__container-general">
      <h1 id="my-purchases">My Purchases</h1>
      <div className="purchase-card__container-link">
        <Link to="/">Home</Link>

      </div>
      <div className="purchase-card__container-grid">
        {purchases?.map((purchaseInfo) => (
          <PurchaseCard
          key={purchaseInfo.id}
          purchaseInfo={purchaseInfo} />
        ))}
      </div>
    </div>
  );
}

export default PurchasesScreen
