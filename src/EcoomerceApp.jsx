import { Routes, Route } from "react-router-dom"
import HomeScreen from "./components/Home/HomeScreen"
import LoginScreen from "./components/Login/LoginScreen"
import ProtectedRoutes from "./Shared/ProtectedRoutes"
import CartScreen from "./components/Cart/CartScreen"
import PurchasesScreen from "./components/Purchases/PurchasesScreen"
import HeaderScreen from "./Shared/HeaderScreen"
import FooterScreen from "./Shared/FooterScreen"
import ProductScreen from "./components/Products/ProductScreen"
import { useEffect } from "react"
import { getAllProducts } from "./store/slices/products.slice"
import { useDispatch } from "react-redux";
import axios from "axios"


function EcoomerceApp() {

//CODIGO PARA CREAR UN NUEVO USUARIO EN LA API POSTMAN

//useEffect(() => {
//   const URL = "https://ecommerce-api-react.herokuapp.com/api/v1/users"

//   const objCreateUser = {
//     firstName: "sebastian",
//     lastName: "lopez",
//     email: "juansdev1234@gmail.com",
//     password: "pass1234",
//     phone: "1234567891",
//     role: "admin"
//   }
//   console.log(objCreateUser)

//   axios.post(URL, objCreateUser)
//     .then(res => console.log(res.data))
//     .catch(err => console.log(err.data))

// }, [])

const dispatch =useDispatch()

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);


  return (
    <div>
      <HeaderScreen />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/login" element={<LoginScreen />} />

        <Route element={<ProtectedRoutes isLogged={true} />}>
          <Route path="/cart" element={<CartScreen />} />
          <Route path="/purchases" element={<PurchasesScreen />} />
        </Route>
        <Route path="/products/:id" element={<ProductScreen/>}/>
      </Routes>
      <FooterScreen />
    </div>
  )
}

export default EcoomerceApp
