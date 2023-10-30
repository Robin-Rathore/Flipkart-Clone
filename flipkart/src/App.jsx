import React from 'react'
import Navbar from './Components/Navbar/Navbar'
// import Product from './Components/Products/Product'
import ProductsList from './Components/Products/productList'
import ProductDetailsPopup from './Components/ProductDetails/ProductDetailsPopup'

const App = () => {
  return (
    <>
      <Navbar/>
      <ProductsList/>
      {/* <ProductDetailsPopup/> */}
    </>
  )
}

export default App
