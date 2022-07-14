import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import EcoomerceApp from './EcoomerceApp'
import './index.css'
// redux
import { Provider } from "react-redux"
import store from "./store"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter>
        <EcoomerceApp />
      </HashRouter>
    </Provider>
  </React.StrictMode>
);
