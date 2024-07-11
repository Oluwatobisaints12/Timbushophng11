import React from 'react'
import Header from './Header'
import GetOffer from './GetOffer'
import GownProductList from './GownProductList'
import Footer from './Footer'
import ProductList from './ProductList'

const ShoppingPage = () => {
  return (
    <div>
      <GetOffer />
      <ProductList />
      <Footer />
    </div>
  )
}

export default ShoppingPage
